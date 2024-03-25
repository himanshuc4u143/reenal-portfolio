// Projects.jsx

import React from 'react';
import './projects.css';

function Projects() {
  return (
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
        <div className="col">
          <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Asset <a href="https://www.asset.healthcare/">https://www.asset.healthcare/</a></h5>
              <p className="card-text">To find if child will develop Type 1
diabetes or not and when.</p>
              <a href="#" className="btn btn-primary">See More</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">See More</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">See More</a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">See More</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">See More</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">See More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;