import { useState, useRef, useEffect } from 'react';

const Navbar = () => {
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

  return (
    <nav ref={ref}>
      <ul className={`menu-nav${navbarOpen ? ' show-menu' : ''}`}>
        <li>Home</li>
        <li>About</li>
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
  );
};
export default Navbar;
