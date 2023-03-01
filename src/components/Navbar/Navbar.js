import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuthContext();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const [navbarOpen, setNavbarOpen] = useState(false);
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
        <ul>
          {links.map((link) => (
            <React.Fragment key={link.text}>
              {link.path === 'login' ? (
                !user && (
                <li>
                  <NavLink to={link.path}>{link.text}</NavLink>
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
