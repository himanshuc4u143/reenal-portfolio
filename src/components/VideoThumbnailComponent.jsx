import React, { useRef } from 'react';
import vid from '../SampleVideo_1280x720_1mb.mp4';
import './videoThumbnailComponent.css';
import './projects.css'

const VideoThumbnailComponent = () => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    videoRef.current.play();
  };

  const handleMouseLeave = () => {
    videoRef.current.pause();
  };

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

  return(
    <div className="projects-container">
      <div className="empty-div">
        <h2 className="gradient-text header-container">Title</h2>
        <header className="header-container">
          <h3 className="black-bold">Some of My Recent Works</h3>
        </header>
        <p className="par-content">
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
        </p>
      </div>
      
      <div style={{alignItems: 'center', display: 'flex', flexDirection: 'column', padding: '80px'}}>
        <div
          className="video-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          >
          <video ref={videoRef} className="video" loop muted>
            <source src={vid} type="video/mp4" />
          </video>
          <div className="video-overlay">
            <i className="play-icon fas fa-play-circle"></i>
          </div>
          
        </div>
        <h4 style={{textAlign: 'start', paddingTop: '30px', paddingLeft: '20px'}}>Video Title</h4>
        <p style={{textAlign: 'start', color: 'grey', paddingLeft: '20px'}}>Video Description</p>
      </div>

    </div>
  );
};

export default VideoThumbnailComponent;
