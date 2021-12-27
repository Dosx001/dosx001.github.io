import './Navbar.css';

const Navbar = () => {
  return (
    <>
      <div id='nav-background'></div>
      <nav>
        <a href='/' id='main'>Andres Rodriguez Michel</a>
        <a href="/Projects">Projects</a>
        <a href="/Education">Education</a>
        <a href="/Interests">Interests</a>
        <a href="/Workflow">Workflow</a>
      </nav>
    </>
  );
}

export default Navbar;
