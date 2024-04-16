import React from "react";
import "./projectPage.css";
import assert from "../images/assert.jpg";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";

const ProjectPageLayout = ({
  id,
  title,
  oneLinerDescription,
  githubLink,
  liveDemo,
  imageUrl,
  description,
  otherInfo,
}) => {
  return (
    <div>
      <div className="project-container">
        <div className="empty-div">
          <div style={{ textAlign: "left" }}>
            <h1
              className="gradient-text header-container"
              style={{ paddingTop: "100px", paddingBottom: "10px" }}
            >
              {title}
            </h1>
            <p>One liner description{oneLinerDescription}</p>
            <div
              style={{
                padding: "10px",
                paddingLeft: "30px",
                display: "flex",
                justifyContent: "space-around",
                maxWidth: "290px",
              }}
            >
              <MDBBtn
                className="d-flex"
                style={{ backgroundColor: "#333333", width: "110px" }}
                href={githubLink}
              >
                <MDBIcon className="me-2" fab icon="github" /> Github
              </MDBBtn>
              <MDBBtn
                className=""
                style={{ backgroundColor: "#333333", width: "110px" }}
                href={liveDemo}
              >
                Live Demo
              </MDBBtn>
            </div>
            <img
              style={{ width: "900px", height: "600px", paddingBottom: '30px' }}
              src={assert}
              alt="assert"
            />
            <p><h4>Description: </h4>{description}</p><hr />
            
            <p><h4>Technologies Used: </h4>{otherInfo}</p><hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPageLayout;
