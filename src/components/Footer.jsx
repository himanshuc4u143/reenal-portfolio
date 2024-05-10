import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';
import './footer.css'

export default function Footer() {
  return (
    <MDBFooter className='text-center text-white' >
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4 d-flex justify-content-center'> {/* Added d-flex justify-content-center */}
          <MDBBtn
            floating 
            className='m-1 d-flex justify-content-center align-items-center icons'
            style={{ backgroundColor: '#3b5998' }}
            href='https://www.facebook.com/reenal.zampal'
            role='button'
          >
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1 d-flex justify-content-center align-items-center icons'
            style={{ backgroundColor: '#55acee' }}
            href='https://twitter.com/ReenalZampal'
            role='button'
          >
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          
          <MDBBtn
            floating
            className='m-1 d-flex justify-content-center align-items-center icons'
            style={{ backgroundColor: '#ac2bac' }}
            href='https://www.instagram.com/reenalzampal/'
            role='button'
          >
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1 d-flex justify-content-center align-items-center icons'
            style={{ backgroundColor: '#0082ca' }}
            href='https://www.linkedin.com/in/reenal-zampal-boddul'
            role='button'
          >
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1 d-flex justify-content-center align-items-center icons'
            style={{ backgroundColor: '#333333' }}
            href='https://github.com/reenal'
            role='button'
          >
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'black', color: 'rgba(253, 237, 142, 1)' }}>
        Copyright © 2024 by Reenal || all rights reserved
        {/* Made with Love in India */}
      </div>
    </MDBFooter>
  );
}
