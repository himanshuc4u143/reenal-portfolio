import React, { useState } from "react";
import girlImg from "../images/beautiful-european-woman-portrait-worth-office-background-smiling-beauty-fashion-style-curly-hair-white-strands-view-134460672.webp";
import "./EnquiryForm.css";

function EnquiryForm() {
  const mailSVGString = `
    <svg viewBox="-127.71 -127.71 1532.57 1532.57" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="none" d="M1138.734 931.095h.283M1139.017 931.095h-.283"></path><path d="M1179.439 7.087c57.543 0 104.627 47.083 104.627 104.626v30.331l-145.36 103.833-494.873 340.894L148.96 242.419v688.676h-37.247c-57.543 0-104.627-47.082-104.627-104.625V111.742C7.086 54.198 54.17 7.115 111.713 7.115l532.12 394.525L1179.41 7.115l.029-.028z" fill="#e75a4d"></path><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="1959.712" y1="737.107" x2="26066.213" y2="737.107" gradientTransform="matrix(.0283 0 0 -.0283 248.36 225.244)"><stop offset="0" stop-color="#f8f6ef"></stop><stop offset="1" stop-color="#e7e4d6"></stop></linearGradient><path fill="url(#a)" d="M111.713 7.087l532.12 394.525L1179.439 7.087z"></path><path fill="#e7e4d7" d="M148.96 242.419v688.676h989.774V245.877L643.833 586.771z"></path><path fill="#b8b7ae" d="M148.96 931.095l494.873-344.324-2.24-1.586L148.96 923.527z"></path><path fill="#b7b6ad" d="M1138.734 245.877l.283 685.218-495.184-344.324z"></path><path d="M1284.066 142.044l.17 684.51c-2.494 76.082-35.461 103.238-145.219 104.514l-.283-685.219 145.36-103.833-.028.028z" fill="#b2392f"></path><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="1959.712" y1="737.107" x2="26066.213" y2="737.107" gradientTransform="matrix(.0283 0 0 -.0283 248.36 225.244)"><stop offset="0" stop-color="#f8f6ef"></stop><stop offset="1" stop-color="#e7e4d6"></stop></linearGradient><path fill="url(#b)" d="M111.713 7.087l532.12 394.525L1179.439 7.087z"></path><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="1959.712" y1="737.107" x2="26066.213" y2="737.107" gradientTransform="matrix(.0283 0 0 -.0283 248.36 225.244)"><stop offset="0" stop-color="#f8f6ef"></stop><stop offset="1" stop-color="#e7e4d6"></stop></linearGradient><path fill="url(#c)" d="M111.713 7.087l532.12 394.525L1179.439 7.087z"></path><linearGradient id="d" gradientUnits="userSpaceOnUse" x1="1959.712" y1="737.107" x2="26066.213" y2="737.107" gradientTransform="matrix(.0283 0 0 -.0283 248.36 225.244)"><stop offset="0" stop-color="#f8f6ef"></stop><stop offset="1" stop-color="#e7e4d6"></stop></linearGradient><path fill="url(#d)" d="M111.713 7.087l532.12 394.525L1179.439 7.087z"></path><linearGradient id="e" gradientUnits="userSpaceOnUse" x1="1959.712" y1="737.107" x2="26066.213" y2="737.107" gradientTransform="matrix(.0283 0 0 -.0283 248.36 225.244)"><stop offset="0" stop-color="#f8f6ef"></stop><stop offset="1" stop-color="#e7e4d6"></stop></linearGradient><path fill="url(#e)" d="M111.713 7.087l532.12 394.525L1179.439 7.087z"></path><linearGradient id="f" gradientUnits="userSpaceOnUse" x1="1959.712" y1="737.107" x2="26066.213" y2="737.107" gradientTransform="matrix(.0283 0 0 -.0283 248.36 225.244)"><stop offset="0" stop-color="#f8f6ef"></stop><stop offset="1" stop-color="#e7e4d6"></stop></linearGradient><path fill="url(#f)" d="M111.713 7.087l532.12 394.525L1179.439 7.087z"></path><linearGradient id="g" gradientUnits="userSpaceOnUse" x1="1959.712" y1="737.107" x2="26066.213" y2="737.107" gradientTransform="matrix(.0283 0 0 -.0283 248.36 225.244)"><stop offset="0" stop-color="#f8f6ef"></stop><stop offset="1" stop-color="#e7e4d6"></stop></linearGradient><path fill="url(#g)" d="M111.713 7.087l532.12 394.525L1179.439 7.087z"></path><linearGradient id="h" gradientUnits="userSpaceOnUse" x1="1959.712" y1="737.107" x2="26066.213" y2="737.107" gradientTransform="matrix(.0283 0 0 -.0283 248.36 225.244)"><stop offset="0" stop-color="#f8f6ef"></stop><stop offset="1" stop-color="#e7e4d6"></stop></linearGradient><path fill="url(#h)" d="M111.713 7.087l532.12 394.525L1179.439 7.087z"></path><path fill="#f7f5ed" d="M111.713 7.087l532.12 394.525L1179.439 7.087z"></path></g></svg>
  `;

  const whatsappSVGString = `
  <?xml version="1.0" encoding="utf-8"?>

  <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
  <svg height="40px" width="40px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  
  <defs>
  
  <path id="a" d="M1023.941 765.153c0 5.606-.171 17.766-.508 27.159-.824 22.982-2.646 52.639-5.401 66.151-4.141 20.306-10.392 39.472-18.542 55.425-9.643 18.871-21.943 35.775-36.559 50.364-14.584 14.56-31.472 26.812-50.315 36.416-16.036 8.172-35.322 14.426-55.744 18.549-13.378 2.701-42.812 4.488-65.648 5.3-9.402.336-21.564.505-27.15.505l-504.226-.081c-5.607 0-17.765-.172-27.158-.509-22.983-.824-52.639-2.646-66.152-5.4-20.306-4.142-39.473-10.392-55.425-18.542-18.872-9.644-35.775-21.944-50.364-36.56-14.56-14.584-26.812-31.471-36.415-50.314-8.174-16.037-14.428-35.323-18.551-55.744-2.7-13.378-4.487-42.812-5.3-65.649-.334-9.401-.503-21.563-.503-27.148l.08-504.228c0-5.607.171-17.766.508-27.159.825-22.983 2.646-52.639 5.401-66.151 4.141-20.306 10.391-39.473 18.542-55.426C34.154 93.24 46.455 76.336 61.07 61.747c14.584-14.559 31.472-26.812 50.315-36.416 16.037-8.172 35.324-14.426 55.745-18.549 13.377-2.701 42.812-4.488 65.648-5.3 9.402-.335 21.565-.504 27.149-.504l504.227.081c5.608 0 17.766.171 27.159.508 22.983.825 52.638 2.646 66.152 5.401 20.305 4.141 39.472 10.391 55.425 18.542 18.871 9.643 35.774 21.944 50.363 36.559 14.559 14.584 26.812 31.471 36.415 50.315 8.174 16.037 14.428 35.323 18.551 55.744 2.7 13.378 4.486 42.812 5.3 65.649.335 9.402.504 21.564.504 27.15l-.082 504.226z"/>
  
  </defs>
  
  <linearGradient id="b" gradientUnits="userSpaceOnUse" x1="512.001" y1=".978" x2="512.001" y2="1025.023">
  
  <stop offset="0" stop-color="#61fd7d"/>
  
  <stop offset="1" stop-color="#2bb826"/>
  
  </linearGradient>
  
  <use xlink:href="#a" overflow="visible" fill="url(#b)"/>
  
  <g>
  
  <path fill="#FFF" d="M783.302 243.246c-69.329-69.387-161.529-107.619-259.763-107.658-202.402 0-367.133 164.668-367.214 367.072-.026 64.699 16.883 127.854 49.017 183.522l-52.096 190.229 194.665-51.047c53.636 29.244 114.022 44.656 175.482 44.682h.151c202.382 0 367.128-164.688 367.21-367.094.039-98.087-38.121-190.319-107.452-259.706zM523.544 808.047h-.125c-54.767-.021-108.483-14.729-155.344-42.529l-11.146-6.612-115.517 30.293 30.834-112.592-7.259-11.544c-30.552-48.579-46.688-104.729-46.664-162.379.066-168.229 136.985-305.096 305.339-305.096 81.521.031 158.154 31.811 215.779 89.482s89.342 134.332 89.312 215.859c-.066 168.243-136.984 305.118-305.209 305.118zm167.415-228.515c-9.177-4.591-54.286-26.782-62.697-29.843-8.41-3.062-14.526-4.592-20.645 4.592-6.115 9.182-23.699 29.843-29.053 35.964-5.352 6.122-10.704 6.888-19.879 2.296-9.176-4.591-38.74-14.277-73.786-45.526-27.275-24.319-45.691-54.359-51.043-63.543-5.352-9.183-.569-14.146 4.024-18.72 4.127-4.109 9.175-10.713 13.763-16.069 4.587-5.355 6.117-9.183 9.175-15.304 3.059-6.122 1.529-11.479-.765-16.07-2.293-4.591-20.644-49.739-28.29-68.104-7.447-17.886-15.013-15.466-20.645-15.747-5.346-.266-11.469-.322-17.585-.322s-16.057 2.295-24.467 11.478-32.113 31.374-32.113 76.521c0 45.147 32.877 88.764 37.465 94.885 4.588 6.122 64.699 98.771 156.741 138.502 21.892 9.45 38.982 15.094 52.308 19.322 21.98 6.979 41.982 5.995 57.793 3.634 17.628-2.633 54.284-22.189 61.932-43.615 7.646-21.427 7.646-39.791 5.352-43.617-2.294-3.826-8.41-6.122-17.585-10.714z"/>
  
  </g>
  
  </svg>
  `;

  const redirectToWhatsapp = () => {
    
    const whatsappNumber = "46738719117";

    const whatsappUrl = `https://wa.me/${whatsappNumber}`;

    window.open(whatsappUrl, "_blank");
  }

  return (
    <section className="w-100 bg-transparent background-div">
      <div
        className="container text-center"
        id="contact"
        style={{ padding: "100px" }}
      >
        <div>
          <div className="empty-div" style={{ paddingBottom: "0px", paddingTop: '0px', margin: '0px' }}>
            <h1
              className="gradient-text header-container"
              style={{ fontSize: "80px" }}
            >
              Contact Me
            </h1>
          </div>
          <div
            className="row justify-content-center"
            style={{
              //backgroundColor: "whitesmoke",
              backgroundColor: "#ffefc3",
              padding: "0px",
              borderRadius: "10px",
              margin: "0px",
              boxShadow: '4px 4px 14px 4px rgba(4, 5, 4, 0.66)'
            }}
          >
            <div
              className="col-md-6 img-div"
              // style={{ border: "2px solid black" }}
            >
              <div
                className="imgCol bg-transparent"
                style={{
                  // height: "600px", width: "500px",
                  // border: '2px solid red',
                  //backgroundColor: "whitesmoke",
                  backgroundColor: "#ffefc3",
                }}
              >
                {/* <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                    alt="Sample photo"
                    className="img-fluid"
                    style={{
                      borderTopLeftRadius: '.15rem',
                      borderBottomLeftRadius: '.15rem',
                    }}
                  /> */}
              </div>
            </div>

            <div
              className="col-md-6 mb-5"
              style={{
                backgroundColor: '#ffefc3',
                borderTopRightRadius: "10px",
                borderBottomRightRadius: "10px",
              }}
            >
              <div
                className="formCol"
                style={{
                  // background: 'violet',
                  paddingTop: "10px",
                  // borderRadius: '11% 89% 95% 5% / 13% 100% 0% 87%'
                }}
              >
                {/* <h6 className="gradient-text bold">Lets Say Hii!!!</h6>
            <h2>Connect Me.</h2> */}
                <div className="row g-0" >
                  <div className="col-1">
                    <div
                      style={{ padding: "5px", cursor: 'pointer' }}
                      dangerouslySetInnerHTML={{ __html: whatsappSVGString }}
                      onClick={redirectToWhatsapp}
                    >
                    </div>
                  </div>
                  <div className="col-4" style={{ padding: "10px", paddingLeft: '20px' }}>
                    <h5>(+46)-0738719117</h5>
                  </div>
                </div>
                <div className="row g-0" >
                  <div className="col-1" >
                    <div style={{ display: 'cover'}}
                      dangerouslySetInnerHTML={{ __html: mailSVGString }}
                    ></div>
                  </div>
                  <div
                    className="col-5"
                    style={{ padding: "5px", paddingLeft: "20px" }}
                  >
                    <h5>
                      {" "}
                      <a href="mailto:reenalboddul@gmail.com">
                        reenalboddul@gmail.com
                      </a>
                    </h5>
                  </div>
                </div>
                <div className="mb-3" style={{paddingTop: '10px'}}>
                  <label htmlFor="nameInput" className="form-label">
                    Name
                  </label>
                  <input
                    // style={{ width: "350px" }}
                    type="text"
                    className="form-control"
                    id="nameInput"
                    placeholder="Please Enter your name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="emailInput" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="emailInput"
                    placeholder="Please Enter your email"
                    // style={{ width: "450px" }}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="subjectInput" className="form-label">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="subjectInput"
                    placeholder="Subject"
                    // style={{ width: "500px" }}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="messageTextarea" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="messageTextarea"
                    rows="5"
                    placeholder="Message"
                    // style={{ width: "700px" }}
                  ></textarea>
                </div>
                <center>
                  <div
                    className=""
                    // style={{paddingLeft: '50px'}}
                  >
                    <button className="btn btn-primary btn-lg button" type="submit">
                      Submit
                    </button>
                  </div>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EnquiryForm;

