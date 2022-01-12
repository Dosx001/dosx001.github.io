import 'App.scss';
import Navbar from 'components/Navbar';
import SideBar from 'components/SideBar';
import GitHubFeed from 'components/GitHubFeed';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Projects from 'pages/Projects';
import Education from 'pages/Education';
import Interests from 'pages/Interests';
import Workflow from 'pages/Workflow';
import NotFound from 'pages/NotFound';

function App() {
  return (
    <Router>
      <Navbar/>
      <SideBar/>
      <GitHubFeed/>
      <div id="content">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/education' element={<Education/>}/>
          <Route path='/interests' element={<Interests/>}/>
          <Route path='/workflow' element={<Workflow/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
