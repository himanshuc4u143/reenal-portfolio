// import { render } from "@testing-library/react";
import React from "react";
import "./aboutMe.css";
import girlImg from "../images/home_backgroundlessGirl.png";
import robo from '../images/no-background-img/robo.jpeg'
import sunset from '../images/no-background-img/sunset.gif'

export default function AboutMe() {
  return (
    <div className="main-container myCol" style={{height: '1000px'}}>
        <img src={sunset} alt="" style={{position: 'absolute', paddingRight: '00px'}}/>
        <img src={robo} alt="" style={{background: 'transparent', position: 'relative', paddingLeft: '200px', backgroundColor: 'ThreeDFace'}}/>
        
      <div class=" text-center">
        {/* <div class="row g-0 text-center">
          <div class="col-6 col-md-6 myCol">.col-sm-6 .col-md-8</div>
          <div class="col-6 col-md-6 " style={{height: '1000px'}}>
            <img src={girlImg} alt="" className="img-fluid backgroundImg" style={{backgroundColor: 'cyan'}}/>
            <div className="foregroundImg">skldv</div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
