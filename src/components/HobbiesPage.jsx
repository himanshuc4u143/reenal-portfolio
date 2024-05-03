import React from 'react';
import hobbieImg from '../images/hobbies.jpg'
import DefaultLayout from '../Layout/DefaultLayout';
//import hobbieImg from '../images/background.jpg'
import Carousel from './Carousel';
import HobbiesPageLayout from './HobbiesPageLayout';


// function Hobbies() {

//   const hobbies = [
//     "Reading",
//     "Writing",
//     "Painting",
//     "Cooking",
//     "Hiking"
//   ];

//   return (
//     <DefaultLayout>
//     <div className='bg-image' style={{ height: '30vh'}}>
//       <img src={hobbieImg} className='img-fluid' alt='Sample' />
//       <div className='mask' >
//         <div className='d-flex justify-content-center align-items-center h-100'>
//           {/* <p className='text-white mb-0'>Can you see me?</p> */}
//           <header>
//             <h1 className="gradient-text">Hobbies & Interests</h1>
//           </header>
//         </div>
//       </div>
//     </div>
//     <div style={{padding: '20px'}}></div>
//     <Carousel/>

//     <div style={{marginTop: '5rem', marginLeft: '20rem'}}>
//       <h3 className="gradient-text">Hobbies & Interests</h3>
//       <ul>
//         {hobbies.map((hobby, index) => (
//           <li style={{textIndent: '1rem',}} key={index}>
//             <h4 style={{textIndent: '1rem'}}>{hobby}</h4>
//           </li>
//         ))}
//       </ul>
//     </div>
//     </DefaultLayout>
//   );
// }

// export default Hobbies;

const Hobbies = [
  {
    id: "1",
    title: "Asset",
    oneLinerDescription: "The objective is to predict person child T1D or not",
    liveDemo: "sdnfsmbg",
    imageUrl: "",
    githubLink: "https://www.asset.healthcare/",
    description: "The objective is to predict person child T1D or not. We have used temporal predictive approach to leverage our longitudinal data. Temporal predictive approach address some of the challenges faced in using EHR data these challenges include irregularly sampled data and varying lengths of patient history. Data points unevenly distributed over 0-15 years, we have computed 6 sub-intervals (0-2,2-4,4-6,6-8,8-11,11-15). We have used some of as genetic ,antibodies , bloodbiomarker demographics, family history data. In multitask temporal approach we consider the task of predicting the T1D in each subinterval while creating data for subinterval features are aggregated within time window. We used this subinterval model result to create a meta-Training dataset on this meta-Training dataset we create a Meta-Model to learn weights for each task simultaneously (Multi-Task learning). For subinterval model M1 to M6 we have tried different ML model, but we come up with Logistic Regression performing good as well as for final MTTM Model ( x )= w1M1( x ) + … + w6M6( x ) . This method can be can be adopted to be used over different sub timelines, MTTM can be used as an assistance-tool within a screening program",
    otherInfo: "Python, NumPy, Pandas, Scikit-Learn, Keras, Machine learning algorithm, Stats models, lifelines, Rest API using Flask, Matplotlib and Seaborn."
  },
  {
    id: "2",
    title: "Weather App",
    oneLinerDescription: "githubLink",
    liveDemo: "sdnfsmbg",
    imageUrl: "https://example.com/weather-app.jpg",
    githubLink: "https://github.com/username/weather-app",
    description: "A simple weather application that provides current weather information based on user location or search. Features include temperature, humidity, and weather conditions.",
    otherInfo: "React, OpenWeather API, Geolocation API"
  },
  {
    id: "3",
    title: "Task Management System",
    oneLinerDescription: "githubLink",
    liveDemo: "sdnfsmbg",
    imageUrl: "https://example.com/task-management.jpg",
    githubLink: "https://github.com/username/task-management",
    description: "A web-based task management system allowing users to create, assign, and track tasks. Features include task status, priority levels, and user authentication.",
    otherInfo: "React, Node.js, Express, MongoDB, JWT Authentication"
  }
];

const HobbiesPage = () => {
  return(
    <DefaultLayout>
      {/* <h4>dfl;k</h4> */}
      <div className='bg-image' style={{ height: '30vh', padding: '0px'}}>
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
     <Carousel/>
      <div className='app'>
        {Hobbies.map(hobby => (
          <HobbiesPageLayout
          key={hobby.id}
          id={hobby.id}
          title={hobby.title}
          oneLinerDescription={hobby.oneLinerDescription}
          liveDemo={hobby.liveDemo}
          imageUrl={hobby.imageUrl}
          githubLink={hobby.githubLink}
          description={hobby.description.split('<br /><br />').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          otherInfo={hobby.otherInfo}
          />
        ))}
      </div>
    </DefaultLayout>
  )
}

export default HobbiesPage;