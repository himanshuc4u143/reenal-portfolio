// Projects.jsx

import React from "react";
import "./projects.css";
import assert from "../images/assert.jpg";
import gita from "../images/geeta.jpg";
//import gita from '../images/gita.png'
//import skin from '../images/skin.png'
import skin from "../images/skin.webp";
import alistair from "../images/alistair_project.png";
import cotton from "../images/cotton.jpg";
import cotton1 from '../images/cotton1.png'
import './projects.css'
//import DefaultLayout from '../Layout/DefaultLayout';
import { Link } from "react-router-dom";

function ProjectsHomepage() {
  return (
    <div>
      <div id="projects" className="projects-container">
        <div className="empty-div">
          <h2 className="gradient-text header-container">Projects</h2>
          <header className="header-container">
            <h1 className="black-bold">My Recent Works</h1>
          </header>
          <p className="par-content">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
        </div>
        <div className="row">
          <div className="col-4">
            <div className="card card1" id="1">
              <img src={assert} className="card-img-top" alt="Assert" />
              <div className="card-body">
                <h5 className="card-title">
                  Asset{" "}
                  <a href="https://www.asset.healthcare/">
                    https://www.asset.healthcare/
                  </a>
                </h5>
                <p className="card-text">
                The objective is to get the probability of a child developing Type 1 diabetes within specific age intervals
                </p>
                {/* <a href="/projects/1" className="btn btn-primary">See More</a> */}
                {/*<Link className="nav-link" aria-current="page" to="/projects/1">About</Link>*/}
                <div className="btn-bottom" style={{padding: '20px'}}>
                <button
                  className="btn btn-primary button "
                  onClick={() => (window.location.href = "/projects/1")}
                  style={{marginTop: 'auto', marginLeft: 'auto'}}
                >
                  See More
                </button>
                </div>
              </div>
            </div>
            {/* <Link className="nav-link" aria-current="page" to="/projects/1">About</Link> */}
          </div>
          <div className="col-4">
            <div className="card card1" id="2">
              {/* <center> */}
              <img
                src="data:image/jpeg;base64,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"
                className="card-img-top"
                style={{
                  verticalAlign: "top",
                  display: "inline-block",
                  height: "240px",
                  width: "100%",
                }}
                alt="..."
              />
              {/* </center> */}
              <div className="card-body">
                <h5 className="card-title">Bhagavad Gita Chatbot</h5>
                <p className="card-text">
                  Created chat bot (LLM /Langchain / LLAMA 2) to provide
                  relevant responses to commonly asked questions about the
                  Bhagavad Gita.
                </p>
                {/* <a href="/projects/2" className="btn btn-primary">See More</a> */}
                <div className="btn-bottom" style={{padding: '20px'}}>
                <button
                  className="button btn btn-primary"
                  onClick={() => (window.location.href = "/projects/2")}
                >
                  See More
                </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card card1" id="3">
              <img src={skin} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Melanoma Skin Cancer</h5>
                <p className="card-text">
                  Detect melanoma skin using image (Image segmentation) using
                  Unet model
                </p>
                <div className="btn-bottom " style={{padding: '20px'}}>
                <a href="/projects/3" className="btn btn-primary button">
                  See More
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row" style={{ justifyContent: "center" }}>
          <div className="col-4">
            <div className="card card1" id="4">
              <img src={alistair} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Alistair</h5>
                <p className="card-text">
                  Predict future humidity using LSTM seq-to-seq{" "}
                </p>
                <div className="btn-bottom" style={{padding: '20px'}}>
                
                <a href="/projects/4" className="btn btn-primary button">
                  See More
                </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card card1" id="5">
              <img src={cotton1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Cotton Plant Disease Prediction</h5>
                <p className="card-text">
                  Main object of this project to help farmer to solve their
                  problem of plant disease detection.
                  </p>
                  <div className="btn-bottom" style={{padding: '20px'}}>
                
                <a href="/projects/5" className="btn btn-primary button">
                  See More
                </a>
                </div>
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