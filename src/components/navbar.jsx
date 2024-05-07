import React from "react";
// import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import logo from '../images/Logo/output-onlinepngtools.png';
import logo1 from '../images/Logo/logo_cropped.png'

function Navbar() {
  
  return (
    // <nav className="navbar navbar-expand-lg navbar-dark bg-transparent nav">
    <nav className="navbar navbar-expand-lg navbar-light nav" 
    // style={{paddingTop: '0'}}
    >
      <div className="container-fluid" 
      // style={{ padding: '0'}}
      >
        <a className="navbar-brand nav-link" href="#home" 
        // style={{padding: '0', margin: '0'}}
        >
          <img src={logo1} alt="Logo" className="logo App-logo" />
          {/* My Portfolio */}
        </a>
        <button className="navbar-toggler hover-btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav_menu">

            {/* <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="#about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/hobbies">Hobbies</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/projects">Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="#contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/books">Books</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/blogs">Blogs</Link>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="/projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/certificates">Certificates</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/blogs">Blogs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/books">Books</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/hobbies">Hobbies</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;