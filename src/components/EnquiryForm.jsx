import React from "react";
import girlImg from '../images/beautiful-european-woman-portrait-worth-office-background-smiling-beauty-fashion-style-curly-hair-white-strands-view-134460672.webp';
import './EnquiryForm.css'
function EnquiryForm() {
  return (
    <div className="container text-center" id="contact" style={{padding: '100px'}}>
      {/* <div className="row justify-content-center">
        <div className="col-md-5 mb-3">
          <div className="imgCol bg-transparent" style={{height: '600px', width: '500px'}}>
            <img src={girlImg} alt="Girl" className="img-fluid" style={{height: '600px', width: '500px'}}/>
          </div>
        </div>

        <div className="col-md-6 mb-3">
         */}
            <div className="formCol" style={{background: 'white', padding: '50px', borderRadius: '10px'}}>
                <h6 className="gradient-text">Lets Say Hii!!!</h6>
                <h2>Hire Me.</h2>
                <h5>
                    Call us directly: +46-734945657
                    <br />
                    Contact Email: <a href="mailto:reenalboddul@gmail.com">reenalboddul@gmail.com</a>
                </h5>

                <div className="mb-3">
                    <label htmlFor="nameInput" className="form-label">Name</label>
                    <input type="text" className="form-control" id="nameInput" placeholder="Please Enter your name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="emailInput" className="form-label">Email</label>
                    <input type="email" className="form-control" id="emailInput" placeholder="Please Enter your email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="subjectInput" className="form-label">Subject</label>
                    <input type="text" className="form-control" id="subjectInput" placeholder="Subject" />
                </div>
                <div className="mb-3">
                    <label htmlFor="messageTextarea" className="form-label">Message</label>
                    <textarea className="form-control" id="messageTextarea" rows="5" placeholder="Message"></textarea>
                </div>
                <center><button className="btn btn-primary btn-lg" type="submit">Submit</button></center>
            </div>
        {/* </div>
      </div> */}
    </div>
  );
}

export default EnquiryForm;
 