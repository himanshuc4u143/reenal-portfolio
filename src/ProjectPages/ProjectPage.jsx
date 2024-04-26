import React from 'react';
import ProjectPageLayout from './ProjectPageLayout';
import DefaultLayout from '../Layout/DefaultLayout';
import assert from "../images/assert.jpg";

const ProjectPage = () => {
  return (
    <DefaultLayout>
    <div className="app">
      <ProjectPageLayout
        id="1"
        title="Asset"
        oneLinerDescription="The objective is to predict person child T1D or not"
        liveDemo="sdnfsmbg"
        imageUrl={assert}
        githubLink="https://www.asset.healthcare/"
        description="The objective is to predict person child T1D or not. We have used temporal predictive approach to leverage our longitudinal data. Temporal predictive approach address some of the challenges faced in using EHR data these challenges include irregularly sampled data and varying lengths of patient history. 
        Data points unevenly distributed over 0-15 years, we have computed 6 sub-intervals (0-2,2-4,4-6,6-8,8-11,11-15). We have used some of as genetic ,antibodies , bloodbiomarker demographics, family history data. 
        In multitask temporal approach we consider the task of predicting the T1D in each subinterval while creating data for subinterval features are aggregated within time window. We used this subinterval model result to create a meta-Training dataset on this meta-Training dataset we create a Meta-Model to learn weights for each task simultaneously (Multi-Task learning). For subinterval model M1 to M6 we have tried different ML model, but we come up with Logistic Regression performing good as well as for final MTTM Model ( x )= w1M1( x ) + … + w6M6( x ) .
        This method can be can be adopted to be used over different sub timelines, MTTM can be used as an assistance-tool within a screening program"
        otherInfo="Python, NumPy, Pandas, Scikit-Learn, Keras, Machine learning algorithm, Stats models, lifelines, Rest API using Flask, Matplotlib and Seaborn."
      />
      <ProjectPageLayout
        id="2"
        title="Weather App"
        oneLinerDescription="githubLink"
        liveDemo="sdnfsmbg"
        imageUrl="https://example.com/weather-app.jpg"
        githubLink="https://github.com/username/weather-app"
        description="A simple weather application that provides current weather information based on user location or search. Features include temperature, humidity, and weather conditions."
        otherInfo="React, OpenWeather API, Geolocation API"
      />
      <ProjectPageLayout
        id="3"
        title="Task Management System"
        oneLinerDescription="githubLink"
        liveDemo="sdnfsmbg"
        imageUrl="https://example.com/task-management.jpg"
        githubLink="https://github.com/username/task-management"
        description="A web-based task management system allowing users to create, assign, and track tasks. Features include task status, priority levels, and user authentication."
        otherInfo="React, Node.js, Express, MongoDB, JWT Authentication"
      />
    </div>
    </DefaultLayout>
  );
};

export default ProjectPage;
