// Projects.jsx

import React from 'react';
import './projects.css';
import assert from '../images/assert.jpg'
//import DefaultLayout from '../Layout/DefaultLayout';
import { Link } from 'react-router-dom';

function ProjectsHomepage() {
  return (
    
      <div>
        <div id='projects' className="projects-container">
          <div className="empty-div">
            <h2 className="gradient-text header-container">Our projects</h2>
            <header className="header-container">
              <h1 className="black-bold">Some of My Recent Works</h1>
            </header>
            <p className="par-content">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
            </p>
          </div>
          <div className="row">
            <div className="col-4">
              <div className="card" id='1'>
                <img src={assert} className="card-img-top" alt="Assert" />
                <div className="card-body">
                  <h5 className="card-title">Asset <a href="https://www.asset.healthcare/">https://www.asset.healthcare/</a></h5>
                  <p className="card-text">The objective is to predict person child T1D or not.</p>
                  {/* <a href="/projects/1" className="btn btn-primary">See More</a> */}
                  <Link className="nav-link" aria-current="page" to="/projects/1">About</Link>
                  <button className="btn btn-primary" onClick={() => window.location.href = '/projects/1'}>See More</button>

                </div>
              </div>
              <Link className="nav-link" aria-current="page" to="/projects/1">About</Link>
            </div>
            <div className="col-4">
              <div className="card" id='2'>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">See More</a>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card" id='3'>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">See More</a>
                </div>
              </div>
            </div>
          </div>
          <div className="row" style={{justifyContent: 'center'}}>
            <div className="col-4">
              <div className="card" id='4'>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">See More</a>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card" id='5'>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">See More</a>
                </div>
              </div>
            </div>
            {/* <div className="col-4">
              <div className="card" id='6'>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">See More</a>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    
  );
}

export default ProjectsHomepage;