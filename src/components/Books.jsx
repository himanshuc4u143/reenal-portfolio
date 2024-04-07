// Projects.jsx

import React from "react";
import "./projects.css";
import assert from "../images/assert.jpg";
import "./books.css";
import DefaultLayout from "../Layout/DefaultLayout";

function Books() {
  return (
    <DefaultLayout>
      <div id="projects" className="books-container">
        <div className="empty-div">
          {/* <img src={assert} alt="Assert" className='img-fluid'/> */}
          <h1 className="gradient-text header-container">Books</h1>
          <header className="header-container">
            <h3 className="black-bold">Some of My Recent readings</h3>
          </header>
          <p className="par-content">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>

          <div className="row" style={{paddingTop: '80px'}}>
            {/* <h5 style={{backgroundColor: 'pink', borderRadius: '10px', textAlign: 'center', maxWidth: '100px', maxHeight: '40px', paddingTop: '10px', paddingBottom: '20px'}}>To Read</h5> */}
            <div className="col">
              <h5 className="category1">To Read</h5>
              <div className="card" style={{ maxHeight: "250px" }}>
                {/* <img src={assert} className="card-img-top" alt="Assert" /> */}
                <div className="card-body">
                  <h5 className="card-title">Book Name</h5>
                  <p className="card-text">
                    To find if child will develop Type 1 diabetes or not and
                    when.
                  </p>
                  <h6 className="category">Category</h6>
                  {/* <a href="#" className="btn btn-primary">See More</a> */}
                </div>
              </div>
            </div>
            <div className="col">
              <h5 className="category1">Reading</h5>
              <div className="card" style={{ maxHeight: "250px" }}>
                <div className="card-body">
                  <h5 className="card-title">Book Name</h5>
                  <p className="card-text">
                    To find if child will develop Type 1 diabetes or not and
                    when.
                  </p>
                  {/* <img src={assert} className="card-img" alt="Assert" style={{maxHeight: '40px', maxWidth: '10px', paddingLeft: '10px'}}/> */}
                  <h6 className="category">Category</h6>
                  {/* <a href="#" className="btn btn-primary">See More</a> */}
                </div>
              </div>
            </div>
            <div className="col">
              <h5 className="category1">Already Read</h5>
              <div className="card" style={{ maxHeight: "250px" }}>
                {/* <img src={assert} className="card-img-top" alt="Assert" /> */}
                <div className="card-body">
                  <h5 className="card-title">Book Name</h5>
                  <p className="card-text">
                    To find if child will develop Type 1 diabetes or not and
                    when.
                  </p>
                  <h6 className="category">Category</h6>
                  {/* <a href="#" className="btn btn-primary">See More</a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              {/* <h5 style={{backgroundColor: 'pink', borderRadius: '10px', textAlign: 'center', maxWidth: '100px', maxHeight: '40px', paddingTop: '10px', paddingBottom: '20px'}}>To Read</h5> */}
              <div className="card" style={{ maxHeight: "250px" }}>
                {/* <img src={assert} className="card-img-top" alt="Assert" /> */}
                <div className="card-body">
                  <h5 className="card-title">Book Name</h5>
                  <p className="card-text">
                    To find if child will develop Type 1 diabetes or not and
                    when.
                  </p>
                  <h6 className="category">Category</h6>
                  {/* <a href="#" className="btn btn-primary">See More</a> */}
                </div>
              </div>
            </div>
            <div className="col">
              {/* <h5 style={{backgroundColor: 'pink', borderRadius: '10px', textAlign: 'center', maxWidth: '100px', maxHeight: '40px', paddingTop: '10px', paddingBottom: '20px'}}>To Read</h5> */}
              <div className="card" style={{ maxHeight: "250px" }}>
                {/* <img src={assert} className="card-img-top" alt="Assert" /> */}
                <div className="card-body">
                  <h5 className="card-title">Book Name</h5>
                  <p className="card-text">
                    To find if child will develop Type 1 diabetes or not and
                    when.
                  </p>
                  <h6 className="category">Category</h6>
                  {/* <a href="#" className="btn btn-primary">See More</a> */}
                </div>
              </div>
            </div>
            <div className="col">
              {/* <h5 style={{backgroundColor: 'pink', borderRadius: '10px', textAlign: 'center', maxWidth: '100px', maxHeight: '40px', paddingTop: '10px', paddingBottom: '20px'}}>To Read</h5> */}
              <div className="card" style={{ maxHeight: "250px" }}>
                {/* <img src={assert} className="card-img-top" alt="Assert" /> */}
                <div className="card-body">
                  <h5 className="card-title">Book Name</h5>
                  <p className="card-text">
                    To find if child will develop Type 1 diabetes or not and
                    when.
                  </p>
                  <h6 className="category">Category</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default Books;
