import React from "react";
import { MDBContainer, MDBProgress, MDBProgressBar } from "mdb-react-ui-kit";
import { CircularProgress } from "@mui/material";
import {
  Gauge,
  GaugeContainer,
  GaugeValueArc,
  GaugeReferenceArc,
  useGaugeState,
} from "@mui/x-charts/Gauge";
import "./progressBar.css";

function GaugePointer({ skillName }) {
  const { valueAngle, outerRadius, cx, cy } = useGaugeState();

  if (valueAngle === null) {
    // No value to display
    return null;
  }

  const target = {
    x: cx + outerRadius * Math.sin(valueAngle),
    y: cy - outerRadius * Math.cos(valueAngle),
  };
  return (
    <g>
      <circle cx={cx} cy={cy} r={5} fill="red" />
      <path
        d={`M ${cx} ${cy} L ${target.x} ${target.y}`}
        stroke="red"
        strokeWidth={3}
      />
      <text x={cx} y={cy + outerRadius + 20} textAnchor="middle" fill="black">
        {skillName}
      </text>
      <text>{skillName}</text>
    </g>
  );
}

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
        stroke="blue"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        style={{
          strokeDashoffset: offset,
          transition: "stroke-dashoffset 0.5s ease-in-out",
        }}
      />
      <text x={size / 2} y={size / 2} textAnchor="middle" fill="black">
        {skillName}
      </text>
    </svg>
  );
}

const skills = [
  "JavaScript",
  "HTML",
  "CSS",
  "React",
  "Redux",
  "Node.js",
  "Express.js",
  "MongoDB",
  "SQL",
  "Python",
  "Django",
  "Flask",
  "Java",
  "C#",
  ".NET",
  "Swift",
  "iOS Development",
  "Android Development",
  // "Kotlin",
  // "JavaFX",
  // "Git",
  // "GitHub",
  // "Bitbucket",
  // "Docker",
  // " AWS",
  // "Azure",
  // "CI/CD",
  // "Agile",
  // "Scrum",
  // "TDD",
];

function ProgressBar() {
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
              // display: "flex",
              flexDirection: "column",
              // textAlign: 'center',
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h6>Skills</h6>
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
              <h6>Sklearn</h6>
              <MDBProgress height="20" style={{ border: "2px solid brown" }} className="">
                <MDBProgressBar
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
            <div className="linearDiv hover-shadow rounded-2">
              <h6>NumPy</h6>
              <MDBProgress height="20" style={{ border: "2px solid brown" }}>
                <MDBProgressBar
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
              <MDBProgress height="20" style={{ border: "2px solid brown" }}>
                <MDBProgressBar
                  striped
                  animated
                  width="90" // Increased width to occupy the whole column
                  valuemin={0}
                  valuemax={100}
                >
                  90%
                </MDBProgressBar>
              </MDBProgress>
            </div>
            <div className="linearDiv hover-shadow rounded-2">
              <h6>PyTest</h6>
              <MDBProgress height="20" style={{ border: "2px solid brown" }}>
                <MDBProgressBar
                  striped
                  animated
                  width="60" // Increased width to occupy the whole column
                  valuemin={0}
                  valuemax={100}
                >
                  60%
                </MDBProgressBar>
              </MDBProgress>
            </div>
            <div className="linearDiv hover-shadow rounded-2">
              <h6>Sklearn</h6>
              <MDBProgress height="20" style={{ border: "2px solid brown" }}>
                <MDBProgressBar
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
            <div className="linearDiv hover-shadow rounded-2" style={{paddingBottom: '50px'}}>
              <h6>NumPy</h6>
              <MDBProgress height="20" style={{ border: "2px solid brown" }}>
                <MDBProgressBar
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
            {/* <div className="linearDiv hover-shadow rounded-2">
              <h6>Open CV</h6>
              <MDBProgress height="20" style={{ border: "2px solid brown" }}>
                <MDBProgressBar
                  striped
                  animated
                  width="90" // Increased width to occupy the whole column
                  valuemin={0}
                  valuemax={100}
                >
                  90%
                </MDBProgressBar>
              </MDBProgress>
            </div>
            <div className="linearDiv hover-shadow rounded-2">
              <h6>PyTest</h6>
              <MDBProgress height="20" style={{ border: "2px solid brown" }}>
                <MDBProgressBar
                  striped
                  animated
                  width="60" // Increased width to occupy the whole column
                  valuemin={0}
                  valuemax={100}
                >
                  60%
                </MDBProgressBar>
              </MDBProgress>
            </div> */}
            <div style={{width: 'fit-content'}}>
            <ul className="hover-shadow rounded-2" style={{ listStyleType: "square", paddingLeft: "20px" }}>
              
                <li>
                  <h4>Java</h4>
                </li>
                <li>
                  <h4>Java</h4>
                </li>
                <li>
                  <h4>Java</h4>
                </li>
                <li>
                  <h4>Java</h4>
                </li>
              
            </ul>
            </div>
          </div>

          
          {/* Circular Progress Bars */}
          <div
            className="col-2"
            style={{ padding: "10px"}}
          >
            <div className="circleDiv hover-shadow rounded-4">
              <CustomCircularProgress
                value={80}
                skillName="TensorFlow"
                // width={150}
                // height={150}
              />
              <h6>TensorFlow</h6>
            </div>
            <div className="circleDiv hover-shadow rounded-4">
              <CustomCircularProgress value={50} skillName="PyTest" />
              <h6>PyTest</h6>
            </div>
            <div className="circleDiv hover-shadow rounded-4">
              <CustomCircularProgress value={30} skillName="Transformers" />
              <h6>Transformers</h6>
            </div>
            <div className="" style={{width: 'fit-content'}}>
            <ul className="hover-shadow rounded-4" style={{ listStyleType: "square", paddingLeft: "20px" }}>
              
                <li>
                  <h4>Java</h4>
                </li>
                <li>
                  <h4>Java</h4>
                </li>
                <li>
                  <h4>Java</h4>
                </li>
                {/* <li>
                  <h4>Java</h4>
                </li> */}
              
            </ul>
            </div>
          </div>
          {/* Gauges */}
          <div
            className="col-2"
            style={{ padding: "10px" }}
          >
            <div className="gaugeDiv hover-shadow rounded-3">
              <GaugeContainer
                style={{ padding: "0px" }}
                className="animated"
                width={150}
                height={150}
                startAngle={-110}
                endAngle={110}
                value={50}
              >
                <GaugeReferenceArc />
                <GaugeValueArc />
                <GaugePointer skillName="Keras" />
              </GaugeContainer>
              <h6>Keras</h6>
            </div>
            <div className="gaugeDiv hover-shadow rounded-3">
              <GaugeContainer
                className="animated"
                width={150}
                height={150}
                startAngle={-110}
                endAngle={110}
                value={70}
              >
                <GaugeReferenceArc />
                <GaugeValueArc />
                <GaugePointer skillName="Flask" />
              </GaugeContainer>
              <h6>Flask</h6>
            </div>
            <div className="gaugeDiv hover-shadow rounded-3" style={{paddingBottom: '30px'}}>
              <GaugeContainer
                className="animated"
                width={150}
                height={150}
                startAngle={-110}
                endAngle={110}
                value={90}
              >
                <GaugeReferenceArc />
                <GaugeValueArc />
                <GaugePointer skillName="Streamlit" />
              </GaugeContainer>
              <h6>Streamlit</h6>
            </div>
            <div className="hover-shadow rounded-3" style={{width: 'fit-content'}}>
            <ul style={{ listStyleType: "square", paddingLeft: "20px" }}>
              
                <li>
                  <h4>Java</h4>
                </li>
                <li>
                  <h4>Java</h4>
                </li>
                <li>
                  <h4>Java</h4>
                </li>
                <li>
                  <h4>Java</h4>
                </li>
              
            </ul>
            </div>
          </div>
        </div>
      </div>
    </MDBContainer>
  );
}

export default ProgressBar;
