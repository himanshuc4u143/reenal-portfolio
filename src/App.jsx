import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/navbar';
//import reenalBgImg1 from './images/IMG-20240324-WA0106.jpg';
import Home from './components/Home';
import Projects from './components/Projects';
import About1 from './components/About1';
import EnquiryForm from './components/EnquiryForm';
import HorizontalChart from './components/BarChart';

function App() {
  return (
    <div>
      <div className='nav'><Navbar /></div>
      <div >
        <Home />
        <About1/>
        <HorizontalChart/>
        <div className="content"> {/* Add a container for the Projects section */}
        <Projects />
        </div>
        <EnquiryForm/>
      </div>
    </div>
  );
}

export default App;