import './Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div id='nav-background'/>
      <nav>
        <Link to='/' id='main'>Andres Rodriguez Michel</Link>
        <Link to="/Projects">Projects</Link>
        <Link to="/Education">Education</Link>
        <Link to="/Interests">Interests</Link>
        <Link to="/Workflow">Workflow</Link>
      </nav>
    </>
  );
}

export default Navbar;
