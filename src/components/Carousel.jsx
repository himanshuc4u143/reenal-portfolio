import React from 'react';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
import img1 from '../images/carousel_images/unnamed.jpg'
import img2 from '../images/carousel_images/wids.jpg'
import img3 from '../images/carousel_images/img3.png'
import img4 from '../images/carousel_images/img4.png'
import img5 from '../images/carousel_images/img5.jpeg'


export default function Carousel() {
  return (
    <MDBCarousel vertical showIndicators showControls fade>
      <MDBCarouselItem itemId={1}>
        <img src={img1} className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
          <h5>Volunteer at Tech-Arena</h5>
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={2}>
        <img src={img2} className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
          <h5>Volunteer at WIDS Pune</h5>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={3}>
        <img src={img3} className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
          <h5>WIDS Stockholm</h5>
          {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={4}>
        <img src={img4} className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
          <h5>My Masterclass</h5>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={5}>
        <img src={img5} className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
          <h5>Winning Moments</h5>
          {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
        </MDBCarouselCaption>
      </MDBCarouselItem>
    </MDBCarousel>
  );
}