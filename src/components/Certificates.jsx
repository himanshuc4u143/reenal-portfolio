import React from "react";
import DefaultLayout from "../Layout/DefaultLayout";
import "./certificates.css";
import sampleImg1 from "../images/reenal_bgImg.png";
import { useState } from "react";
import cdac from '../images/Certificates/cdac.png'
import big_data from '../images/Certificates/big_data.jpg'
import deep_learning from '../images/Certificates/deep_learning.jpg'
import ds_arch from '../images/Certificates/ds_arch.jpg'
import hackerrank from '../images/Certificates/hackerrank.png'
import persistent from '../images/Certificates/persistent.jpg'
import power_bi from '../images/Certificates/power_bi.jpg'
import python from '../images/Certificates/python.jpg'
import stats from '../images/Certificates/stats.jpg'
import tableau from '../images/Certificates/tableau.jpg'
import intro_genai from '../images/Certificates/intro_genai.png'

export default function Certificates() {
  return (
    <div>
      <DefaultLayout>
        <div className="empty-div">
          <header className="header-container">
            <h1 className="gradient-text bold header-container">
              My Certificates
            </h1>
          </header>
        </div>
        <div
          className=""
          style={{ padding: "50px" }}
        >
          <div
            class="row gy-2"
            style={{ padding: "50px" }}
            >
            
            <div
              class="col-6"
              style={{ padding: "30px" }}
              >
              <div
                class="p-3 fancy-border-shadow fancy-border-radius hover-zoom"
                style={{
                  border: "10px solid black", // Green border with 3px width
                  borderRadius: "10px", // Rounded corners
                  padding: "10px", // Some padding inside the border
                  // boxShadow: "0 0 30px rgba(0, 0, 0, 0.5)", // Adding a subtle shadow
                }}
              >
                <img
                  src={deep_learning}
                  alt=""
                  className=".img-fluid img-thumbnail"
                  style={{width: '100%', height: 'auto'}}
                />
                <h3 className="bold"> Deep Learning Master</h3>
              </div>
            </div>
            
            <div
              class="col-6"
              style={{ padding: "30px" }}
              >
              <div
                class="p-3 fancy-border-shadow fancy-border-radius hover-zoom"
                style={{
                  border: "10px solid black", // Green border with 3px width
                  borderRadius: "10px", // Rounded corners
                  padding: "10px", // Some padding inside the border
                  // boxShadow: "0 0 30px rgba(0, 0, 0, 0.5)", // Adding a subtle shadow
                }}
              >
                <img
                  src={big_data}
                  alt=""
                  className=".img-fluid img-thumbnail"
                  style={{width: '100%', height: 'auto'}}
                />
                <h3 className="bold">Big Data Master</h3>
              </div>
            </div>
            
            
            <div
              class="col-6"
              style={{ padding: "30px" }}
              >
              <div
                class="p-3 fancy-border-shadow fancy-border-radius hover-zoom"
                style={{
                  border: "10px solid black", // Green border with 3px width
                  borderRadius: "10px", // Rounded corners
                  padding: "10px", // Some padding inside the border
                  // boxShadow: "0 0 30px rgba(0, 0, 0, 0.5)", // Adding a subtle shadow
                }}
              >
                <img
                  src={ds_arch}
                  alt=""
                  className=".img-fluid img-thumbnail"
                  style={{width: '100%', height: 'auto'}}
                />
                <h3 className="bold">Data Science Architecture</h3>
              </div>
            </div>
            
            <div
              class="col-6"
              style={{ padding: "30px" }}
              >
              <div
                class="p-3 fancy-border-shadow fancy-border-radius hover-zoom"
                style={{
                  border: "10px solid black", // Green border with 3px width
                  borderRadius: "10px", // Rounded corners
                  padding: "10px", // Some padding inside the border
                  // boxShadow: "0 0 30px rgba(0, 0, 0, 0.5)", // Adding a subtle shadow
                }}
              >
                <img
                  src={stats}
                  alt=""
                  className=".img-fluid img-thumbnail"
                  style={{width: '100%', height: 'auto'}}
                />
                <h3 className="bold">Stats For Data Science </h3>
              </div>
            </div>
            <div
              class="col-6"
              style={{ padding: "30px" }}
              >
              <div
                class="p-3 fancy-border-shadow fancy-border-radius hover-zoom"
                style={{
                  border: "10px solid black", // Green border with 3px width
                  borderRadius: "10px", // Rounded corners
                  padding: "10px", // Some padding inside the border
                  // boxShadow: "0 0 30px rgba(0, 0, 0, 0.5)", // Adding a subtle shadow
                }}
              >
                <img
                  src={python}
                  alt=""
                  className=".img-fluid img-thumbnail"
                  style={{width: '100%', height: 'auto'}}
                />
                <h3 className="bold">Python For Data Science</h3>
              </div>
            </div>
            <div
              class="col-6"
              style={{ padding: "30px" }}
              >
              <div
                class="p-3 fancy-border-shadow fancy-border-radius hover-zoom"
                style={{
                  border: "10px solid black", // Green border with 3px width
                  borderRadius: "10px", // Rounded corners
                  padding: "10px", // Some padding inside the border
                  // boxShadow: "0 0 30px rgba(0, 0, 0, 0.5)", // Adding a subtle shadow
                }}
              >
                <img
                  src={power_bi}
                  alt=""
                  className=".img-fluid img-thumbnail"
                  style={{width: '100%', height: 'auto'}}
                />
                <h3 className="bold">Power BI Master</h3>
              </div>
            </div>
            
            
            <div
              class="col-6"
              style={{ padding: "30px" }}
            >
              <div
                class="p-3"
                style={{
                  border: "10px solid black", // Green border with 3px width
                  borderRadius: "10px", // Rounded corners
                  padding: "10px", // Some padding inside the border
                  boxShadow: "0 0 30px rgba(0, 0, 0, 0.5)", // Adding a subtle shadow
                }}
              >
                <img
                  src={persistent}
                  alt=""
                  className=".img-fluid img-thumbnail myImg"
                />
                <h3 className="bold">Responsible Artificial Intelligence</h3>
              </div>
            </div>
            <div
              class="col-6 hover zoom"
              style={{ padding: "30px" }}
            >
              <div
                class="p-3 hover-zoom hover-shadow"
                style={{
                  border: "10px solid black", // Green border with 3px width
                  borderRadius: "10px", // Rounded corners
                  padding: "10px", // Some padding inside the border
                  boxShadow: "0 0 30px rgba(0, 0, 0, 0.5)", // Adding a subtle shadow
                }}
              >
                <img
                  src={persistent}
                  alt=""
                  className=".img-fluid img-thumbnail myImg"
                />
                <h3 className="bold"> My Certificate 1</h3>
              </div>
            </div>
            <div
              class="col-6"
              style={{ padding: "30px" }}
              >
              <div
                class="p-3 fancy-border-shadow fancy-border-radius hover-zoom"
                style={{
                  border: "10px solid black", // Green border with 3px width
                  borderRadius: "10px", // Rounded corners
                  padding: "10px", // Some padding inside the border
                  // boxShadow: "0 0 30px rgba(0, 0, 0, 0.5)", // Adding a subtle shadow
                }}
              >
                <img
                  src={tableau}
                  alt=""
                  className=".img-fluid img-thumbnail"
                  style={{width: '100%', height: 'auto'}}
                />
                <h3 className="bold">Tableau Master</h3>
              </div>
            </div>
            <div
              class="col-6"
              style={{ padding: "30px" }}
              >
              <div
                class="p-3 fancy-border-shadow fancy-border-radius hover-zoom"
                style={{
                  border: "10px solid black", // Green border with 3px width
                  borderRadius: "10px", // Rounded corners
                  padding: "10px", // Some padding inside the border
                  // boxShadow: "0 0 30px rgba(0, 0, 0, 0.5)", // Adding a subtle shadow
                }}
              >
                <img
                  src={hackerrank}
                  alt=""
                  className=".img-fluid img-thumbnail"
                  style={{width: '100%', height: 'auto'}}
                />
                <h3 className="bold">Hackerrank</h3>
              </div>
            </div>
            <div
              class="col-6"
              style={{ padding: "30px" }}
              >
              <div
                class="p-3 fancy-border-shadow fancy-border-radius hover-zoom"
                style={{
                  border: "10px solid black", // Green border with 3px width
                  borderRadius: "10px", // Rounded corners
                  padding: "10px", // Some padding inside the border
                  // boxShadow: "0 0 30px rgba(0, 0, 0, 0.5)", // Adding a subtle shadow
                }}
              >
                <img
                  src={intro_genai}
                  alt=""
                  className=".img-fluid img-thumbnail"
                  style={{width: '100%', height: 'auto'}}
                />
                <h3 className="bold">Introduction To Generative AI</h3>
              </div>
            </div>
            <div
              class="col-6"
              style={{ padding: "30px" }}
              >
              <div
                class="p-3 fancy-border-shadow fancy-border-radius hover-zoom"
                style={{
                  border: "10px solid black", // Green border with 3px width
                  borderRadius: "10px", // Rounded corners
                  padding: "10px", // Some padding inside the border
                  // boxShadow: "0 0 30px rgba(0, 0, 0, 0.5)", // Adding a subtle shadow
                }}
              >
                <img
                  src={cdac}
                  alt=""
                  className=".img-fluid img-thumbnail"
                  style={{width: '100%', height: 'auto'}}
                />
                <h3 className="bold">CDAC</h3>
              </div>
            </div>
            
            {/* <div
              class="col-6 fancy-border-radius fancy-border-shadow"
              style={{ padding: "30px" }}
            >
              <div
                class="p-3 hover-zoom "
                style={{
                  //   border: "10px solid black", // Green border with 3px width
                  //   borderRadius: "10px", // Rounded corners
                  //   padding: "10px", // Some padding inside the border
                  //   boxShadow: "0 0 30px rgba(0, 0, 0, 0.5)", // Adding a subtle shadow
                  cursor: "pointer", // Change cursor to indicate clickable element
                }}
                onClick={() => {
                  // Create an anchor element
                  const link = document.createElement("a");
                  // Set the href attribute to the image URL
                  link.href = sampleImg1;
                  // Set the download attribute to force download
                  link.download = "image.jpg";
                  // Programmatically trigger the click event to start the download
                  link.click();
                  // Clean up the anchor element
                  link.remove();
                }}
              >
                <img
                  src={sampleImg1}
                  alt=""
                  className=".img-fluid fancy-border-radius"
                />
                <h3 className="bold"> My Certificate 1</h3>
              </div>
            </div> */}
          </div>
        </div>
      </DefaultLayout>
    </div>
  );
}
