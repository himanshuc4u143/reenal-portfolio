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
                  <h5 className="card-title">Becoming</h5>
                  <p className="card-text">
                   By Michelle Obama , This book talks about her roots and how she found her voice.
                  </p>
                  <h6 className="category">Biography</h6>
                  {/* <a href="#" className="btn btn-primary">See More</a> */}
                </div>
              </div>
            </div>
            <div className="col">
              <h5 className="category1">Reading</h5>
              <div className="card" style={{ maxHeight: "250px" }}>
                <div className="card-body">
                  <h5 className="card-title">Unfinished</h5>
                  <p className="card-text">
                   Priyanka Chopra Jonas .The book is all about philosophical, sassy, inspiring, bold, and rebellious.
                  </p>
                  {/* <img src={assert} className="card-img" alt="Assert" style={{maxHeight: '40px', maxWidth: '10px', paddingLeft: '10px'}}/> */}
                  <h6 className="category">Biography</h6>
                  {/* <a href="#" className="btn btn-primary">See More</a> */}
                </div>
              </div>
            </div>
            <div className="col">
              <h5 className="category1">Already Read</h5>
              <div className="card" style={{ maxHeight: "250px" }}>
                {/* <img src={assert} className="card-img-top" alt="Assert" /> */}
                <div className="card-body">
                  <h5 className="card-title">Bhagavad Gita</h5>
                  <p className="card-text">
                   700-verse Hindu scripture, which is part of the epic Mahabharata.
                  </p>
                  <h6 className="category">Philosophy</h6>
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
                  <h5 className="card-title">Test 1</h5>
                  <p className="card-text">
                   Test1
                  </p>
                  <h6 className="category">IT/AI</h6>
                  {/* <a href="#" className="btn btn-primary">See More</a> */}
                </div>
              </div>
            </div>
            
            <div className="col">
              {/* <h5 style={{backgroundColor: 'pink', borderRadius: '10px', textAlign: 'center', maxWidth: '100px', maxHeight: '40px', paddingTop: '10px', paddingBottom: '20px'}}>To Read</h5> */}
              <div className="card" style={{ maxHeight: "250px" }}>
                {/* <img src={assert} className="card-img-top" alt="Assert" /> */}
                <div className="card-body">
                  <h5 className="card-title">Playing It My Way</h5>
                  <p className="card-text">
                   The autobiography Sachin Tendulkar. God of cricket
                  </p>
                  <h6 className="category">Sport/Biography</h6>
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
                  <h5 className="card-title">Test 2</h5>
                  <p className="card-text">
                   Test1
                  </p>
                  <h6 className="category">IT/AI</h6>
                  {/* <a href="#" className="btn btn-primary">See More</a> */}
                </div>
              </div>
            </div>
            
            <div className="col">
              {/* <h5 style={{backgroundColor: 'pink', borderRadius: '10px', textAlign: 'center', maxWidth: '100px', maxHeight: '40px', paddingTop: '10px', paddingBottom: '20px'}}>To Read</h5> */}
              <div className="card" style={{ maxHeight: "250px" }}>
                {/* <img src={assert} className="card-img-top" alt="Assert" /> */}
                <div className="card-body">
                  <h5 className="card-title">Confessions of an AI Brain</h5>
                  <p className="card-text">
                  By Elena Fersman Paul Pettersson Have you considered how it feels to be an AI brain in the world of humans?
                  </p>
                  <h6 className="category">IT/AI</h6>
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
                  <h5 className="card-title">Test 3</h5>
                  <p className="card-text">
                   Test1
                  </p>
                  <h6 className="category">IT/AI</h6>
                  {/* <a href="#" className="btn btn-primary">See More</a> */}
                </div>
              </div>
            </div>
            
            <div className="col">
              {/* <h5 style={{backgroundColor: 'pink', borderRadius: '10px', textAlign: 'center', maxWidth: '100px', maxHeight: '40px', paddingTop: '10px', paddingBottom: '20px'}}>To Read</h5> */}
              <div className="card" style={{ maxHeight: "250px" }}>
                {/* <img src={assert} className="card-img-top" alt="Assert" /> */}
                <div className="card-body">
                  <h5 className="card-title">A Century is not Enough: My Roller-coaster</h5>
                  <p className="card-text">
                  By by Sourav Ganguly this book discussed his cricketing career including several foreign tours, World Cups, and IPL.
                  </p>
                  <h6 className="category">Sport/Biography</h6>
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
                  <h5 className="card-title">Test 4</h5>
                  <p className="card-text">
                   Test1
                  </p>
                  <h6 className="category">IT/AI</h6>
                  {/* <a href="#" className="btn btn-primary">See More</a> */}
                </div>
              </div>
            </div>
            
            <div className="col">
              {/* <h5 style={{backgroundColor: 'pink', borderRadius: '10px', textAlign: 'center', maxWidth: '100px', maxHeight: '40px', paddingTop: '10px', paddingBottom: '20px'}}>To Read</h5> */}
              <div className="card" style={{ maxHeight: "250px" }}>
                {/* <img src={assert} className="card-img-top" alt="Assert" /> */}
                <div className="card-body">
                  <h5 className="card-title">Approaching (Almost) Any Machine Learning Problem</h5>
                  <p className="card-text">
                   By Abhishek Thakur It actually teaches you how to “approach” an ML problem
                  </p>
                  <h6 className="category">IT/AI</h6>
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
