// import { render } from "@testing-library/react";
import React from "react";
import "./aboutMe.css";
import reenalCV from "../PDF/Reenal Boddul.pdf";
import "../App.css";
import aiImg from "../images/DeWatermark.ai_1713524697848.png";

export default function AboutMe() {
  return (
    <div className="main-container myCol" style={{ height: "1000px" }}>
      <div class=" text-center">
        <div class="row g-0">
          <div class="col-6 col-md-7 myCol">
            <div
              className=""
              style={{
                marginTop: "25%",
                display: "flexbox",
                textAlign: "left",
                paddingLeft: "200px",
                alignItems: "center",
              }}
            >
              <h2 className="gradient-text header-container">
                Data Scientist | Mentor | Speaker | Content Creation
              </h2>
              <header className="header-container">
                <h1 className="black-bold">
                  Hello, I’m <span className="red-text">Reenal.</span>
                </h1>
              </header>
              <p className="par-content">
                Experienced technologist with a strong background in software
                development and data science, adept at crafting 
                chatbots and virtual assistants, with a proven track record of
                quickly adapting to emerging technologies and 
                translating business requirements into technical solutions.
                Motivated team player with excellent interpersonal skills,
                dedicated to 
                collaborating effectively to achieve optimal outcomes while
                applying advanced data science  techniques to address
                complex business and engineering challenges.
              </p>
              <a
                href={reenalCV}
                download="Reenal_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-danger btn-lg"
                style={{ borderRadius: "50px" }}
              >
                Download CV
              </a>
            </div>
          </div>
          <div class="col-6 col-md-5 wrap" style={{ height: "1000px", top: '50%' }}>
            <div className="circle">
              <img src={aiImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
