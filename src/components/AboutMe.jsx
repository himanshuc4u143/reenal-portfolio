// import { render } from "@testing-library/react";
import React from "react";
import "./aboutMe.css";
import reenalCV from "../PDF/ReenalBoddulResume.pdf";
import "../App.css";
import aiImg from "../images/DeWatermark.ai_1713524697848.png";


export default function AboutMe() {
  return (
    <div className="myCol" >
      <div className=" text-center">
        <div className="row g-0">
          <div className="col-6 col-md-7 myCol">
            <div
              className=""
              style={{
                marginTop: "20%",
                display: "flexbox",
                textAlign: "left",
                paddingLeft: "250px",
                alignItems: "center",
                // border: '2px solid black'
              }}
            >
              <h2 className="gradient-text header-container">
                Data Scientist | Mentor | Speaker | Blogger
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
              <div style={{paddingLeft: '10%', paddingTop: '1px'}}>
              <a
                href={reenalCV}
                download="Reenal_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-danger btn-lg"
                style={{ borderRadius: "50px", boxShadow: "0 8px 16px rgba(255, 0, 0, 0.4)"}}
              >
                Download CV
              </a></div>
            </div>
          </div>
          <div class="col-6 col-md-5 wrap" style={{ height: "870px", top: '50%', paddingLeft: '2%'}}>
            <div className="circle">
              <img src={aiImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
