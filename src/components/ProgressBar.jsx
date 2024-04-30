import React from "react";
import {
  MDBContainer,
  MDBProgress,
  MDBProgressBar,
  //MDBChart,
} from "mdb-react-ui-kit";
import {
  Gauge,
  GaugeContainer,
  GaugeValueArc,
  GaugeReferenceArc,
  useGaugeState,
} from "@mui/x-charts/Gauge";

function GaugePointer() {
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
    </g>
  );
}

export default function ProgressBar() {
  return (
    <MDBContainer fluid style={{ border: "2px solid red" }}>
      <div className="">
        <div className="empty-div">
          <h2 className="gradient-text header-container">My Tech-Stack</h2>
          {/* <header className="header-container">
            <h1 className="black-bold">Some of My Recent Works</h1>
          </header> */}
        </div>
        <div className="row g-0" style={{width: '100%', textAlign: 'left', border: '2px solid purple'}}>
          <div className="col-1" style={{ border: "2px solid blue" }}>
            <h6>Java</h6>
          </div>
          <div className="col-4">
            <div style={{ width: "80%", height: "auto" }}>
              <MDBProgress height="20" style={{ border: "2px solid brown" }}>
                <MDBProgressBar
                  striped
                  animated
                  width="25"
                  valuemin={0}
                  valuemax={100}
                >
                  25%
                </MDBProgressBar>
              </MDBProgress>
            </div>
          </div>
        </div>

        <div>
          <GaugeContainer
            className="animated"
            width={200}
            height={200}
            startAngle={-110}
            endAngle={110}
            value={80}
          >
            <GaugeReferenceArc />
            <GaugeValueArc />
            <GaugePointer />
          </GaugeContainer>
          <h2>Java</h2>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column", // for xs breakpoint
            margin: "1px", // for xs spacing
            "@media (min-width: 768px)": {
              // for md breakpoint
              flexDirection: "row",
              margin: "3px", // for md spacing
            },
          }}
        >
          <Gauge width={100} height={100} value={50} />
        </div>
      </div>
    </MDBContainer>
  );
}
