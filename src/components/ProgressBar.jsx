import React from 'react';
import { MDBContainer ,MDBProgress, MDBProgressBar } from 'mdb-react-ui-kit';

export default function ProgressBar() {
  return (
    <MDBContainer fluid style={{border: '2px solid red'}}>
    <div className='empty-div'>
        <div className="empty-div">
            <h2 className="gradient-text header-container">Our projects</h2>
            <header className="header-container">
              <h1 className="black-bold">Some of My Recent Works</h1>
            </header>
            <p className="par-content">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
            </p>
        </div>
        <div style={{width: '80%', height: 'auto'}}>
            
    <MDBProgress height='20' style={{border: '2px solid brown'}}>
      <MDBProgressBar striped animated width='25' valuemin={0} valuemax={100}>
        25%
      </MDBProgressBar>
    </MDBProgress>
    </div>
    </div>
    </MDBContainer>
  );
}