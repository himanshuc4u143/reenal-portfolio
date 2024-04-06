import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='text-center text-white' style={{backgroundColor: 'blanchedalmond, o.2'}}>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4 d-flex justify-content-center'> {/* Added d-flex justify-content-center */}
          <MDBBtn
            floating 
            className='m-1 d-flex justify-content-center align-items-center'
            style={{ backgroundColor: '#3b5998' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1 d-flex justify-content-center align-items-center'
            style={{ backgroundColor: '#55acee' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1 d-flex justify-content-center align-items-center'
            style={{ backgroundColor: '#dd4b39' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='google' />
          </MDBBtn>
          <MDBBtn
            floating
            className='m-1 d-flex justify-content-center align-items-center'
            style={{ backgroundColor: '#ac2bac' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1 d-flex justify-content-center align-items-center'
            style={{ backgroundColor: '#0082ca' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1 d-flex justify-content-center align-items-center'
            style={{ backgroundColor: '#333333' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 1)' }}>
        Copyright © 2024 by Reenal || all rights reserved
      </div>
    </MDBFooter>
  );
}
