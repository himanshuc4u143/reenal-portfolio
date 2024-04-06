// Projects.jsx

import React from 'react';
import './projects.css';
import assert from '../images/assert.jpg'
import DefaultLayout from '../Layout/DefaultLayout';

function Projects() {
  return (
    <DefaultLayout>
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
            <div className="col">
              <div className="card" id='1'>
                <img src={assert} className="card-img-top" alt="Assert" />
                <div className="card-body">
                  <h5 className="card-title">Asset <a href="https://www.asset.healthcare/">https://www.asset.healthcare/</a></h5>
                  <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                      Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                  <a href="#" className="btn btn-primary">See More</a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" id='2'>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">See More</a>
                </div>
              </div>
            </div>
            <div className="col">
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
          <div className="row">
            <div className="col">
              <div className="card" id='4'>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">See More</a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" id='5'>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">See More</a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" id='6'>
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
      </div>
    </DefaultLayout>
  );
}

export default Projects;