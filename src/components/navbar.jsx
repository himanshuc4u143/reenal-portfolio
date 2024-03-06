import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './navbar.css'
import logo from '../hlogo.png'
import '../App.css'

function Navbar(){
  const [showSidebar, setShowSidebar] = useState(false);
  
  function toggleSidebar() {
    setShowSidebar(!setShowSidebar);
  }

  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent nav">
      <div className="container">
        {/* <a className='navbar-brand fs-4' href="#home"> Himanshu Portfolio</a> */}
        <img src={logo} className="App-logo" alt="logo" />
      {/*toggle button*/}
      <button className='navbar-toggler shadow-none border-0' type="button" onClick={toggleSidebar} >
      <span className="navbar-toggler-icon"></span></button>

      {/*sidebar*/}
      <div className={`sidebar offcanvas offcanvas-start ${showSidebar ? 'show' : ''}`} tapIndex='-1' id="offcavasNavbar" aria-labelledby="offanvasNavbarLabel"></div>

      {/*sidebar header */}
      <div className="offcanvas-header text-white border-bottom">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Himanshu Portfolio</h5>
        {/* <button className="btn-close btn-close-white shadow-none" onClick={toggleSidebar} aria-label="Close"></button> */}
      
      {/*sidebar body*/}
      <div className="offcanvas-body d-flex flex-column flex-lg-row p-4"></div>

      {/*navbar links*/}
      <ul className="navbar-nav pe-3 nav_menu">
        <li className="nav-item mx-2">
          <a className="nav-link active" aria-current="page" href="#home">Home</a>
        </li>

        <li className="nav-item mx-2">
          <a className="nav-link active" aria-current="page" href="#Skills">Skills </a>
        </li>

        <li className="nav-item mx-2">
          <a className="nav-link active" aria-current="page" href="#Projects">Projects</a>
        </li>

        <li className="nav-item mx-2">
          <a className="nav-link active" aria-current="page" href="#Contact">Contact</a>
        </li>
      </ul>

      {/*login/signup*/}
      <div className="d-flex flex-column justify-content-center align-items-center gap-3 flex-lg">
        <a href="#login" className="text-white">Login</a>
        <a href="#signup" className="text-white decoration-none px-r py-1 hover-btn" style={{backgroundColor: 'powderblue'}}>Signup</a>
      </div>
      
      </div>
      </div>
    </nav>      
    )
}

export default Navbar;