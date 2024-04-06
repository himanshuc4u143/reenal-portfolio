import React from 'react'
import Navbar from '../components/navbar';
import Footer from '../components/Footer';

function DefaultLayout({children}) {
  return (
    <div>
        <Navbar/>
        <div style={{paddingTop: '100px', paddingBottom: '50px'}}>
            {children}
        </div>
        <Footer/>
    </div>
  )
}

export default DefaultLayout