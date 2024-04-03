import React from 'react';
import hobbieImg from '../images/hobbies.jpg'
function Hobbies() {
  return (
    <div className="card text-bg-light" style={{backgroundImage: {hobbieImg}, minWidth: '100%'}}>
      <img src={hobbieImg} className="card-img" alt="..." />
      <div className="card-img-overlay">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small>Last updated 3 mins ago</small></p>
      </div>
    </div>
  );
}

export default Hobbies;
