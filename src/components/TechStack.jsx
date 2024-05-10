import React from "react";
import { MDBContainer, MDBProgress, MDBProgressBar } from "mdb-react-ui-kit";
import "./techStack.css";

function CustomCircularProgress({ value, skillName }) {
  const size = 150;
  const strokeWidth = 10;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const progress = value / 100;
  const offset = circumference * (1 - progress);

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="grey"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        style={{
          strokeDashoffset: 0,
          transition: "stroke-dashoffset 0.5s ease-in-out",
        }}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="#D8BC70"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        style={{
          strokeDashoffset: offset,
          transition: "stroke-dashoffset 1s ease-in-out",
        }}
      />
      <text x={size / 2} y={size / 2} textAnchor="middle" fill="black">
        {skillName}
      </text>
    </svg>
  );
}

const skills = [
  "MongoDB",
  "SQL",
  "Django",
  "Flask",
  "GitHub",
  // "Bitbucket",
  // "Docker",
  // " AWS",
  "Azure",
  // "CI/CD",
  "Agile",
  "Neural Networks",
  "Deep Learning",
  "CNN",
  "Project Scoping",
  "Team Management",
  "MLflow",
  "Rest API",
  // "Scrum",
  // "TDD",
];
function TechStack() {
  return (
    <MDBContainer fluid>
      <div className="">
        <div className="empty-div">
          <h2 className="gradient-text header-container">My Tech-Stack</h2>
        </div>
        <div
          className="row g-0"
          style={{
            width: "100%",
            textAlign: "left",
            // border: "2px solid purple",
          }}
        >
          {/* Skills List */}
          <div
            className="col-2"
            style={{
              // border: "2px solid blue",
              padding: "10px",
              paddingLeft: "50px",
              // display: "flex",
              flexDirection: "column",
              // textAlign: 'center',
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/*<h6>Skills</h6>*/}
            <ul style={{ listStyleType: "square", paddingLeft: "20px" }}>
              {skills.map((skill, index) => (
                <li key={index}>
                  <h4>{skill}</h4>
                </li>
              ))}
            </ul>
          </div>
          {/* Linear Progress Bars */}
          <div
            className="col-6"
            style={{
              // border: "2px solid blue",
              padding: "10px",
              // display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div className="linearDiv hover-shadow rounded-2 hover-overlay hover-zoom">
              <h6>Python</h6>
              <MDBProgress className="MDBProgress">
                <MDBProgressBar
                  className="MDBProgressBar"
                  striped
                  animated
                  width="80" // Increased width to occupy the whole column
                  valuemin={0}
                  valuemax={100}
                  // style={{ backgroundColor: "#D8BC70" }} // Change the color to green
                >
                  80%
                </MDBProgressBar>
              </MDBProgress>
            </div>
            <div className="linearDiv hover-shadow rounded-2">
              <h6>Pandas</h6>
              <MDBProgress className="MDBProgress">
                <MDBProgressBar
                  className="MDBProgressBar"
                  striped
                  animated
                  width="70" // Increased width to occupy the whole column
                  valuemin={0}
                  valuemax={100}
                >
                  70%
                </MDBProgressBar>
              </MDBProgress>
            </div>
            <div className="linearDiv hover-shadow rounded-2">
              <h6>Open CV</h6>
              <MDBProgress className="MDBProgress">
                <MDBProgressBar
                  className="MDBProgressBar"
                  striped
                  animated
                  width="50" // Increased width to occupy the whole column
                  valuemin={0}
                  valuemax={100}
                >
                  50%
                </MDBProgressBar>
              </MDBProgress>
            </div>
            <div className="linearDiv hover-shadow rounded-2">
              <h6>MLOps</h6>
              <MDBProgress className="MDBProgress">
                <MDBProgressBar
                  className="MDBProgressBar"
                  striped
                  animated
                  width="70" // Increased width to occupy the whole column
                  valuemin={0}
                  valuemax={100}
                >
                  70%
                </MDBProgressBar>
              </MDBProgress>
            </div>
            <div className="linearDiv hover-shadow rounded-2">
              <h6>Sklearn</h6>
              <MDBProgress className="MDBProgress">
                <MDBProgressBar
                  className="MDBProgressBar"
                  striped
                  animated
                  width="80" // Increased width to occupy the whole column
                  valuemin={0}
                  valuemax={100}
                >
                  80%
                </MDBProgressBar>
              </MDBProgress>
            </div>
            <div
              className="linearDiv hover-shadow rounded-2"
              style={{ paddingBottom: "50px" }}
              // ref={targetRef}
            >
              <h6>NumPy</h6>
              <MDBProgress className="MDBProgress">
                <MDBProgressBar
                  className="MDBProgressBar"
                  striped
                  animated
                  width="70" // Increased width to occupy the whole column
                  valuemin={0}
                  valuemax={100}
                >
                  70%
                </MDBProgressBar>
              </MDBProgress>
            </div>
          </div>

          {/* Circular Progress Bars */}
          <div
            className="col-2"
            style={{ padding: "0.5vw", paddingLeft: "3.5vw" }}
          >
            <div className="circleDiv hover-shadow rounded-4">
              <CustomCircularProgress
                value={80}
                skillName="TensorFlow"
                // width={150}
                // height={150}
                // style={{ border: '2px solid black'}}
              />
              <h6>TensorFlow</h6>
            </div>
            <div className="circleDiv hover-shadow rounded-4">
              <CustomCircularProgress value={70} skillName="AWS" />
              <h6>AWS</h6>
            </div>
            <div className="circleDiv hover-shadow rounded-4">
              <CustomCircularProgress value={80} skillName="ML Algorithms" />
              <h6>ML Algorithms</h6>
            </div>
          </div>

          <div className="col-2" style={{ padding: "10px" }}>
            <div className="circleDiv hover-shadow rounded-4">
              <CustomCircularProgress value={80} skillName="Docker" />
              <h6>Docker</h6>
            </div>
            <div className="circleDiv hover-shadow rounded-4">
              <CustomCircularProgress value={70} skillName="Keras" />
              <h6>Keras</h6>
            </div>
            <div className="circleDiv hover-shadow rounded-4">
              <CustomCircularProgress value={80} skillName="Flask" />
              <h6>Flask</h6>
            </div>
          </div>
        </div>
      </div>
    </MDBContainer>
  );
}

export default TechStack;
