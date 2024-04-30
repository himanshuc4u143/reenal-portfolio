import React from "react";
import "./projects.css";
import DefaultLayout from "../Layout/DefaultLayout";
// Import project data from JSON file
import projectData from "./projectsData.json";

// import React from 'react'

function Projects1() {
  const ProjectCard = ({
    id,
    img,
    title,
    link,
    oneLinerDescription,
    redirectedLink,
  }) => (
    <div className="col-4">
      <div className="card card1" id={id}>
        <img src={{img}} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            <a href={link}>{link}</a>
            <br />
            {oneLinerDescription}
          </p>
          <a href={redirectedLink} className="btn btn-primary">
            See More
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <DefaultLayout>
      <div>
        <div id="projects" className="projects-container">
          <div className="empty-div">
            <h2 className="gradient-text header-container">Our projects</h2>
            <header className="header-container">
              <h1 className="black-bold">Some of My Recent Works</h1>
            </header>
            <p className="par-content">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration.
            </p>
          </div>
          <div className="content">
            <div className="row">
              {/* Map over projectData and render ProjectCard for each project */}
              {projectData.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default Projects1;
