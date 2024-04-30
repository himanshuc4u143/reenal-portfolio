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
    </g>
  );
}

function CustomCircularProgress({ value, skillName }) {
  const size = 100;
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

function ProgressBar() {
  return (
    <MDBContainer fluid style={{ border: "2px solid red" }}>
      <div className="">
        <div className="empty-div">
          <h2 className="gradient-text header-container">My Tech-Stack</h2>
        </div>
        <div
          className="row g-0"
          style={{
            width: "100%",
            textAlign: "left",
            border: "2px solid purple",
          }}
        >
          {/* Linear Progress Bars */}
          <div
            className="col-4"
            style={{
              border: "2px solid blue",
              padding: "10px",
              // display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
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
            <div>
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
            <div>
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
            <div>
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
          </div>

          {/* Gauges */}
          <div
            className="col-4"
            style={{ border: "2px solid blue", padding: "10px" }}
          >
            <div>
              <h6>Keras</h6>
              <GaugeContainer
                className="animated"
                width={100}
                height={100}
                startAngle={-110}
                endAngle={110}
                value={50}
              >
                <GaugeReferenceArc />
                <GaugeValueArc />
                <GaugePointer skillName="Keras" />
              </GaugeContainer>
            </div>
            <div>
              <h6>Flask</h6>
              <GaugeContainer
                className="animated"
                width={100}
                height={100}
                startAngle={-110}
                endAngle={110}
                value={70}
              >
                <GaugeReferenceArc />
                <GaugeValueArc />
                <GaugePointer skillName="Flask" />
              </GaugeContainer>
            </div>
            <div>
              <h6>Streamlit</h6>
              <GaugeContainer
                className="animated"
                width={100}
                height={100}
                startAngle={-110}
                endAngle={110}
                value={90}
              >
                <GaugeReferenceArc />
                <GaugeValueArc />
                <GaugePointer skillName="Streamlit" />
              </GaugeContainer>
            </div>
          </div>
          {/* Circular Progress Bars */}
          <div
            className="col-4"
            style={{ border: "2px solid blue", padding: "10px" }}
          >
            <div>
              <h6>TensorFlow</h6>
              <CustomCircularProgress value={80} skillName="TensorFlow" />
            </div>
            <div>
              <h6>PyTest</h6>
              <CustomCircularProgress value={50} skillName="PyTest" />
            </div>
            <div>
              <h6>Transformers</h6>
              <CustomCircularProgress value={30} skillName="Transformers" />
            </div>
          </div>
        </div>
      </div>
    </MDBContainer>
  );
}

export default ProgressBar;
