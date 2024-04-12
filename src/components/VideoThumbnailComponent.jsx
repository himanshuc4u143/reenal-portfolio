import React, { useRef } from "react";
import vid from "../SampleVideo_1280x720_1mb.mp4";
import "./videoThumbnailComponent.css";
import "./projects.css";
import vidThumbnail1 from "../vidthumbnail1.png";
import vidThumbnail2 from "../vidThumbnail2.jpeg";

const VideoThumbnailComponent = () => {
  // const videoRef = useRef(null);

  // const handleMouseEnter = () => {
  //   videoRef.current.play();
  // };

  // const handleMouseLeave = () => {
  //   videoRef.current.pause();
  // };

  // return (
  // <div>
  //   <div
  //     className="video-container"
  //     onMouseEnter={handleMouseEnter}
  //     onMouseLeave={handleMouseLeave}
  //   >
  //     <video ref={videoRef} className="video" loop muted>
  //       <source src={vid} type="video/mp4" />
  //     </video>
  //     <div className="video-overlay">
  //       <i className="play-icon fas fa-play-circle"></i>
  //     </div>

  //   </div>
  //   <h4 style={{textAlign: 'start', paddingTop: '30px', paddingLeft: '20px'}}>Video Title</h4>
  //   <p style={{textAlign: 'start', color: 'grey', paddingLeft: '20px'}}>Video Description</p>
  // </div>
  // );

  return (
    <div className="projects-container" style={{paddingBottom: '80px'}}>
      <div className="empty-div">
        <h2 className="gradient-text header-container">Title</h2>
        <header className="header-container">
          <h3 className="black-bold">Some of My Recent Works</h3>
        </header>
        <p className="par-content">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.
        </p>
      </div>
      <div className="row">
        <div
          className="col"
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            padding: "80px",
          }}
          >
          <div className="empty-div">
            <h2 className="gradient-text header-container">Webinar</h2>
          </div>
          <div
            className="video-container"
            // onMouseEnter={handleMouseEnter}
            // onMouseLeave={handleMouseLeave}
            >
            <img src={vidThumbnail1} alt="vidThumbnail1" className="img-fluid"/>
            {/* <video ref={videoRef} className="video" loop muted>
              <source src={vid} type="video/mp4" />
            </video> */}
            <div className="video-overlay">
              {/* <i className="play-icon fas fa-play-circle"></i> */}
              <a href="https://www.youtube.com/watch?v=X63Y3quS3YI&ab_channel=AnalyticsVidhya">
                <i className="play-icon fas fa-play-circle"></i>
              </a>
            </div>
          </div>
          <h4
            style={{
              textAlign: "start",
              paddingTop: "30px",
              paddingLeft: "20px",
            }}
          >
            Diabetes Prediction Using Survival Analysis | DataHour by Reenal
            Boddul
          </h4>
          {/* <p style={{ textAlign: "start", color: "grey", paddingLeft: "20px" }}>
            Video Description
          </p> */}
        </div>
      </div>
      <div className="row">
      <div className="empty-div">
                <h2 className="gradient-text header-container">Podcast</h2>
            </div>
        <div className="col">
          <div
            className="col"
            style={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              // padding: "40px",
            }}
          >
            {/* <div className="empty-div">
                <h2 className="gradient-text header-container">Podcast</h2>
            </div> */}
            <div
              className="video-container"
              // onMouseEnter={handleMouseEnter}
              // onMouseLeave={handleMouseLeave}
              >
              {/* <video ref={videoRef} className="video" loop muted>
              <source src={vid} type="video/mp4" />
              </video> */}
              <img
                src={vidThumbnail2}
                alt="Podcast"
                // style={{ paddingTop: "100px" }}
                className="img-fluid"
              />
              <div className="video-overlay">
                <a href="https://www.youtube.com/watch?v=-s5jpzwZEB0&ab_channel=PriyaBhatia">
                  <i className="play-icon fas fa-play-circle"></i>
                </a>
              </div>
              {/* <p style={{ textAlign: "start", color: "grey", paddingLeft: "20px" }}>
              Video Description
              </p> */}
            </div>
            <h4
                style={{
                  textAlign: "start",
                  paddingTop: "30px",
                  paddingLeft: "20px",
                }}
              >
                Exploring the Bhagavad Gita Chatbot Powered by Llama2 AI
              </h4>
          </div>
        </div>
        <div className="col">
          <div
            className="col"
            style={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              // paddingBottom: "80px",
            }}
          >
            <div
              className="video-container"
              // onMouseEnter={handleMouseEnter}
              // onMouseLeave={handleMouseLeave}
              >
              
              {/* <video ref={videoRef} className="video" loop muted>
              <source src={vid} type="video/mp4" />
              </video> */}

              <img
                src={vidThumbnail2}
                alt="Podcast"
                // style={{ paddingTop: "100px" }}
                className="img-fluid"
              />
              <div className="video-overlay">
                <a href="https://www.youtube.com/watch?v=-s5jpzwZEB0&ab_channel=PriyaBhatia">
                  <i className="play-icon fas fa-play-circle"></i>
                </a>
              </div>
              {/* <p style={{ textAlign: "start", color: "grey", paddingLeft: "20px" }}>
              Video Description
              </p> */}
            </div>
            <h4
                style={{
                  textAlign: "start",
                  paddingTop: "30px",
                  paddingLeft: "20px",
                }}
              >
                Exploring the Bhagavad Gita Chatbot Powered by Llama2 AI
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoThumbnailComponent;
