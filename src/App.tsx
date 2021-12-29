import './App.scss';
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Interests from './pages/Interests';
import Workflow from './pages/Workflow';

function App() {
  return (
    <Router>
      <Navbar/>
      <SideBar/>
      <div id="content">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Projects' element={<Projects/>}/>
          <Route path='/Education' element={<Education/>}/>
          <Route path='/Interests' element={<Interests/>}/>
          <Route path='/Workflow' element={<Workflow/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
