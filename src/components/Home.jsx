import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import bgImg from '../images/background.jpg';
import reenalBgImg from '../images/reenal_bgImg.png'
import reenalCV from '../PDF/Reenal Boddul.pdf'
import reenalBgImg1 from '../images/IMG-20240324-WA0106_resize.png'


function Home() {

  const handleDownload = () => {

  }
  return (
    <div id='home' className="App" style={{backgroundImage: `url(${reenalBgImg})`}}>
      <div className="content">
        <h2 className="gradient-text header-container">Data Scientists </h2>
        <header className="header-container">
          <h1 className="black-bold">Hello, I’m <span className="red-text">Reenal.</span></h1>
        </header>
        <p className="par-content">
        Experienced technologist with a strong background in software development and data science, adept at crafting chatbots and virtual assistants, with a proven track record of quickly adapting to emerging technologies and translating business requirements into technical solutions.
        </p>
        <a href={reenalCV} download="Reenal_CV.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-danger btn-lg" style={{borderRadius:'50px'}}>Download CV</a>
 
      </div>
    </div>
  
  )
}

export default Home