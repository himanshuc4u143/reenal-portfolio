// Projects.jsx

import React from 'react';
import './projects.css';
import assert from '../images/assert.jpg'

function Books() {
  return (
    <div id='projects' className="projects-container">
      <div className="empty-div">
        <img src={assert} alt="Assert" className='img-fluid'/>
        <h1 className="gradient-text header-container">Books</h1>
        <header className="header-container">
          <h3 className="black-bold">Some of My Recent readings</h3>
        </header>
        <p className="par-content">
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
        </p>
        </div>
      <div className="row">
        {/* <h5 style={{backgroundColor: 'pink', borderRadius: '10px', textAlign: 'center', maxWidth: '100px', maxHeight: '40px', paddingTop: '10px', paddingBottom: '20px'}}>To Read</h5> */}
        <div className="col">
          <h5 style={{backgroundColor: 'pink', borderRadius: '10px', textAlign: 'center', maxWidth: '100px', maxHeight: '40px', paddingTop: '10px', paddingBottom: '20px'}}>To Read</h5>
          <div className="card" style={{maxHeight: '250px'}}>
            {/* <img src={assert} className="card-img-top" alt="Assert" /> */}
            <div className="card-body">
              <h5 className="card-title">Book Name</h5>
              <p className="card-text">To find if child will develop Type 1
diabetes or not and when.</p>
              <h6 style={{backgroundColor: 'purple', borderRadius: '5px', maxWidth: '90px', maxHeight: '20px', paddingLeft: '10px', paddingRight: '10px'}}>Category</h6>
              {/* <a href="#" className="btn btn-primary">See More</a> */}
            </div>
          </div>
        </div>
        <div className="col">
        <h5 style={{backgroundColor: 'pink', borderRadius: '10px', textAlign: 'center', maxWidth: '100px', maxHeight: '40px', paddingTop: '10px', paddingBottom: '20px'}}>Reading</h5>
          <div className="card" style={{maxHeight: '250px'}}>
            <div className="card-body">
              <h5 className="card-title">Book Name</h5>
              <p className="card-text">To find if child will develop Type 1
diabetes or not and when.</p>
              {/* <img src={assert} className="card-img" alt="Assert" style={{maxHeight: '40px', maxWidth: '10px', paddingLeft: '10px'}}/> */}
              <h6 style={{backgroundColor: 'purple', borderRadius: '5px', maxWidth: '90px', maxHeight: '20px', paddingLeft: '10px', paddingRight: '10px'}}>Category</h6>
              {/* <a href="#" className="btn btn-primary">See More</a> */}
            </div>
          </div>
        </div>
        <div className="col">
        <h5 style={{backgroundColor: 'pink', borderRadius: '10px', textAlign: 'center', maxWidth: '200px', maxHeight: '40px', paddingTop: '10px', paddingBottom: '20px'}}>Already Read</h5>
          <div className="card" style={{maxHeight: '250px'}}>
            {/* <img src={assert} className="card-img-top" alt="Assert" /> */}
            <div className="card-body">
              <h5 className="card-title">Book Name</h5>
              <p className="card-text">To find if child will develop Type 1
diabetes or not and when.</p>
              <h6 style={{backgroundColor: 'purple', borderRadius: '5px', maxWidth: '90px', maxHeight: '20px', paddingLeft: '10px', paddingRight: '10px'}}>Category</h6>
              {/* <a href="#" className="btn btn-primary">See More</a> */}
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
        {/* <h5 style={{backgroundColor: 'pink', borderRadius: '10px', textAlign: 'center', maxWidth: '100px', maxHeight: '40px', paddingTop: '10px', paddingBottom: '20px'}}>To Read</h5> */}
          <div className="card" style={{maxHeight: '250px'}}>
            {/* <img src={assert} className="card-img-top" alt="Assert" /> */}
            <div className="card-body">
              <h5 className="card-title">Book Name</h5>
              <p className="card-text">To find if child will develop Type 1
diabetes or not and when.</p>
              <h6 style={{backgroundColor: 'purple', borderRadius: '5px', maxWidth: '90px', maxHeight: '20px', paddingLeft: '10px', paddingRight: '10px'}}>Category</h6>

              {/* <a href="#" className="btn btn-primary">See More</a> */}
            </div>
          </div>
        </div>
        <div className="col">
        {/* <h5 style={{backgroundColor: 'pink', borderRadius: '10px', textAlign: 'center', maxWidth: '100px', maxHeight: '40px', paddingTop: '10px', paddingBottom: '20px'}}>To Read</h5> */}
          <div className="card" style={{maxHeight: '250px'}}>
            {/* <img src={assert} className="card-img-top" alt="Assert" /> */}
            <div className="card-body">
              <h5 className="card-title">Book Name</h5>
              <p className="card-text">To find if child will develop Type 1
diabetes or not and when.</p>
              <h6 style={{backgroundColor: 'purple', borderRadius: '5px', maxWidth: '90px', maxHeight: '20px', paddingLeft: '10px', paddingRight: '10px'}}>Category</h6>

              {/* <a href="#" className="btn btn-primary">See More</a> */}
            </div>
          </div>
        </div>
        <div className="col">
        {/* <h5 style={{backgroundColor: 'pink', borderRadius: '10px', textAlign: 'center', maxWidth: '100px', maxHeight: '40px', paddingTop: '10px', paddingBottom: '20px'}}>To Read</h5> */}
          <div className="card" style={{maxHeight: '250px'}}>
            {/* <img src={assert} className="card-img-top" alt="Assert" /> */}
            <div className="card-body">
              <h5 className="card-title">Book Name</h5>
              <p className="card-text">To find if child will develop Type 1
diabetes or not and when.</p>
              <h6 style={{backgroundColor: 'purple', borderRadius: '5px', maxWidth: '90px', maxHeight: '20px', paddingLeft: '10px', paddingRight: '10px'}}>Category</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Books;