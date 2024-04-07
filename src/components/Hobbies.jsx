import React from 'react';
import hobbieImg from '../images/hobbies.jpg'
import DefaultLayout from '../Layout/DefaultLayout';
//import hobbieImg from '../images/background.jpg'
function Hobbies() {
  return (
    <DefaultLayout>
      <div id='hobbies' className='hobbies-container'>
        <div className='empty-div'>
          <h1 className='gradient-text header-cntainer'>Hobbies</h1>
          <p className='par-content'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam autem dolorum ipsa 
            quam voluptate doloribus id totam. Nam, ab odio.
          </p>
        </div>
        <div className='img-div'>
        <img src={hobbieImg} className='w-100' alt="" />
        {/* <h4>Lorem, ipsum dolor.</h4> */}
        </div>
      </div>
    </DefaultLayout>
  );
}

export default Hobbies;
