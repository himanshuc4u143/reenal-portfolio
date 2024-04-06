import React from 'react';
import ProjectPageLayout from './ProjectPageLayout';
import DefaultLayout from '../Layout/DefaultLayout';

const ProjectPage = () => {
  return (
    <DefaultLayout>
    <div className="app">
      <ProjectPageLayout
        id="1"
        title="E-commerce Website Redesign"
        oneLinerDescription="githubLink"
        liveDemo="sdnfsmbg"
        imageUrl="https://example.com/ecommerce-redesign.jpg"
        githubLink="https://github.com/username/ecommerce-redesign"
        description="A complete redesign of an existing e-commerce website focusing on improving user experience, performance, and modernizing the design."
        otherInfo="React, Redux, Node.js, MongoDB, Bootstrap"
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
