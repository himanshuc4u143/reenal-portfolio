import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import logo from '../hlogo.png';

function Navbar() {
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent nav">
      <div className="container-fluid">
        <a className="navbar-brand nav-link" href="#home">
          <img src={logo} alt="Logo" className="logo App-logo" />
          Himanshu Portfolio
        </a>
        <button className="navbar-toggler hover-btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav_menu">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pages</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Blogs</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
