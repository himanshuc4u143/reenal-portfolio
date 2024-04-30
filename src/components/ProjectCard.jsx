import React from "react";

function ProjectCard({ id, img, title, link, oneLinerDescription, redirectLink }) {
  return (
    <div className="col-4">
      <div className="card card1" id={id}>
        <img src={img} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            <a href={link}>{link}</a>
            <br />
            {oneLinerDescription}
          </p>
          <a href={redirectLink} className="btn btn-primary">
            See More
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
