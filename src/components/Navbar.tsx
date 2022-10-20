import './Navbar.scss';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Navbar = () => {
  useEffect(() => {
    window.matchMedia('(min-width: 800px)').onchange = () => {
      document.getElementById('nav')!.style.display = '';
    };
  }, []);

  const menu = () => {
    const nav = document.getElementById('nav')!;
    nav.style.display = nav.style.display === '' ? 'grid' : '';
  };

  const clear = () => {
    document.getElementById('nav')!.style.display = '';
  };

  return (
    <>
      <div id="nav-background" />
      <nav>
        <Link onClick={clear} to="/" id="main">
          Andres Rodriguez Michel
        </Link>
        <div id="nav">
          <Link onClick={clear} to="/education">
            Education
          </Link>
          <Link onClick={clear} to="/interests">
            Interests
          </Link>
          <Link onClick={clear} to="/workflow">
            Workflow
          </Link>
        </div>
        <svg id="menu" viewBox="0 0 50 30" onClick={menu}>
          <path d="M4 5h42M4 15h42M4 25h42" />
        </svg>
      </nav>
    </>
  );
};

export default Navbar;
// <Link onClick={clear} to="/projects/1">
//   Projects
// </Link>
