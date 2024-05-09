import React from "react";
import "./recommendation.css";

const Recommendation = ({ title, date, author, content }) => {
  return (
    <div className="card-group m-3">
      {" "}
      {/* Added Bootstrap grid classes */}
      <div className="card testimonialCard card1">
        <div className="card-body d-flex flex-column justify-content-space-around">
          {" "}
          {/* Added Flexbox classes */}
          <div>
            <h5 className="card-title">{title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              {date} - {author}
            </h6>
            <p className="card-text" style={{ fontStyle: "italic" }}>
              <h2>
                <span style={{ color: "black" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-quote"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
                  </svg>
                </span>
              </h2>
              {content}
              <h2>
                <span style={{ color: "blue" }}>
                <svg xmlns="http://www.w3.org/2000/svg" height="12" width="12" color="blue" viewBox="0 0 512 512"><path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"/></svg>
                </span>
              </h2>
            </p>
          </div>
          {/* <div>
                        <button type="button" className="btn btn-primary" style={{ paddingLeft: '20px', paddingRight: '20px' }}>See More</button>
                    </div> */}
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
