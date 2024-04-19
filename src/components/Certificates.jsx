import React from "react";
import DefaultLayout from "../Layout/DefaultLayout";
import "./certificates.css";
import sampleImg1 from "../images/reenal_bgImg.png";
import { useState } from "react";
import cdac from '../images/Certificates/cdac.png'

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
                  src={cdac}
                  alt=""
                  className=".img-fluid img-thumbnail"
                  style={{width: '100%', height: 'auto'}}
                />
                <h3 className="bold"> My Certificate 1</h3>
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
                  src={sampleImg1}
                  alt=""
                  className=".img-fluid img-thumbnail myImg"
                />
                <h3 className="bold"> My Certificate 1</h3>
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
                  src={sampleImg1}
                  alt=""
                  className=".img-fluid img-thumbnail myImg"
                />
                <h3 className="bold"> My Certificate 1</h3>
              </div>
            </div>
            <div
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
            </div>
          </div>
        </div>
      </DefaultLayout>
    </div>
  );
}
