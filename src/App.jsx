import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/navbar';
import bgImg from './images/background.jpg';
import Home from './components/Home';
import Projects from './components/Projects';

function App() {
  return (
    <div  >
      <div className='nav'><Navbar /></div>
      <div >
        <Home />
        <div className="content"> {/* Add a container for the Projects section */}
        <Projects />
        </div>
      </div>
    </div>
  );
}

export default App;
