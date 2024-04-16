import React from 'react';
import hobbieImg from '../images/hobbies.jpg'
import DefaultLayout from '../Layout/DefaultLayout';
//import hobbieImg from '../images/background.jpg'


function Hobbies() {

  const hobbies = [
    "Reading",
    "Writing",
    "Painting",
    "Cooking",
    "Hiking"
  ];

  return (
    <DefaultLayout>
    <div className='bg-image' style={{ height: '30vh'}}>
      <img src={hobbieImg} className='img-fluid' alt='Sample' />
      <div className='mask' >
        <div className='d-flex justify-content-center align-items-center h-100'>
          {/* <p className='text-white mb-0'>Can you see me?</p> */}
          <header>
            <h1 className="gradient-text">Hobbies & Interests</h1>
          </header>
        </div>
      </div>
    </div>

    <div style={{marginTop: '5rem', marginLeft: '20rem'}}>
      <h3 className="gradient-text">Hobbies & Interests</h3>
      <ul>
        {hobbies.map((hobby, index) => (
          <li style={{textIndent: '1rem',}} key={index}>
            <h4 style={{textIndent: '1rem'}}>{hobby}</h4>
          </li>
        ))}
      </ul>
    </div>
    </DefaultLayout>
  );
}

export default Hobbies;

