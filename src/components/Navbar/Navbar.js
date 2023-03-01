import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';
import { useAuthContext } from '../../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuthContext() ?? {};

  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const [navbarOpen, setNavbarOpen] = useState(false);
    <button
      type="button"
      className="toggle"
      onClick={() => setNavbarOpen((prev) => !prev)}
    >
      {navbarOpen ? (
        <MdClose style={{ width: '32px', height: '32px' }} />
      ) : (
        <FiMenu
          style={{
            width: '32px',
            height: '32px',
          }}
        />
      )}
    </button>;
    const [dropdown] = useState(false);
    document.title = `Current state value: ${dropdown}`;

    const ref = useRef();

    useEffect(() => {
      const handler = (event) => {
        if (
          navbarOpen
        && ref.current
        && !ref.current.contains(event.target)
        ) {
          setNavbarOpen(false);
        }
      };
      document.addEventListener('mousedown', handler);
      return () => {
      // Cleanup the event listener
        document.removeEventListener('mousedown', handler);
      };
    }, [navbarOpen]);

    const links = [
      { path: '/', text: 'Home' },
      { path: '/about', text: 'About' },
      { path: '/profile', text: 'Profile' },
      { path: '/login', text: 'Login' },
    ];

    return (
      <>
        <nav ref={ref} className="navbar">
          <ul className={`menu-nav${navbarOpen ? ' show-menu' : ''}`}>
            {links.map((link) => (
              <React.Fragment key={link.text}>
                {link.path === 'login' ? (
                  !user && (
                  <li>
                    <NavLink
                      to={link.path}
                      onClick={() => setNavbarOpen(false)}
                    >
                      {link.text}
                    </NavLink>
                  </li>
                  )
                ) : (
                  <li>
                    <NavLink to={link.path}>{link.text}</NavLink>
                  </li>
                )}
              </React.Fragment>
            ))}
          </ul>
        </nav>
        {user && (
        <div className="logout">
          <p>{user}</p>
          <button type="button" onClick={handleLogout}>Logout</button>
        </div>
        )}
      </>
    );
};

export default Navbar;
