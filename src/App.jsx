import './App.css';
import Navbar from './Navbar';
import SideBar from './SideBar';

function App() {
  return (
    <>
      <Navbar/>
      <SideBar/>
      <div id="content">
        <p>
          Welcome to my website! This site is designed to introduce myself by showcasing my
          background and interests. So have look around and get to know me.
        </p>
      </div>
    </>
  );
}

export default App;
