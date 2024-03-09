import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import bgImg from '../images/background.jpg';


function Home() {
  return (
    <div id='home' className="App" style={{backgroundImage: `url(${bgImg})`}}>
      <div className="content">
        <h2 className="gradient-text header-container">Data Scientists </h2>
        <header className="header-container">
          <h1 className="black-bold">Hello, I’m <span className="red-text">Fatima.</span></h1>
        </header>
        <p className="par-content">
          I’m working on a professional,<br/> visually sophisticated and technologically proficient, <br/>responsive and multi-functional React Template Imroz.
        </p>
        <button type="button" class="btn btn-danger btn-lg" style={{borderRadius:'50px'}}>Download CV</button> 
      </div>
    </div>
  
  )
}

export default Home