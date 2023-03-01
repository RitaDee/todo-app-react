import { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuthContext();

  const handleLogout = () => {
    logout();
  };

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
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
            <li key={link.text}>
              <NavLink to={link.path}>{link.text}</NavLink>
            </li>
          ))}
          <li>
            <button type="button" onClick={() => setDropdown(!dropdown)}>
              Services
              {' '}
              <span>&#8595;</span>
            </button>
            {dropdown && (
            <ul>
              <li>Design</li>
              <li>Development</li>
            </ul>
            )}
          </li>
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
