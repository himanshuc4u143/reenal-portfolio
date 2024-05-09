import React from "react";

function BookCard({ id, title, author, description, category, img }) {
  const getCategoryColor = (category) => {
    switch (category) {
      case "Biography":
        return "#FFCC00"; // Yellow
      case "Philosophy":
        return "#FF6666"; // Red
      case "Sport/Biography":
        return "#66CCCC"; // Blue
      case "IT/AI":
        return "#66FF66"; // Green

      default:
        return "#CCCCCC"; // Grey
    }
  };
  return (
    <div className="col">
      <div className="card card1" style={{height: '300px'}}>
        <div className="row g-0" >
          <div className="col"style={{maxWidth: 'fit-content'}}>
            <img
              src={img}
              className="rounded-3 shadow-4 float-start img-thumbnail"
              alt=""
              style={{ width: "110px", height: "150px" }}
            />
          </div>
          <div className="col" style={{padding: '10px', alignContent: 'center', paddingBottom: '0px'}}>
          <h5
            className="card-title"
            style={{
              textAlign: "left",
              paddingBottom: "0px",
              marginBottom: "0px",
            }}
          >
            {title}
          </h5>
          <p
            className="card-subtitle mb-2 text-muted"
            style={{
              textAlign: "left",
              marginTop: "0",
              paddingTop: "0",
              marginLeft: "10px",
            }}
          >
            {" "}
            -{author}
          </p>
          </div>
        </div>

        <div className="card-body">
          
          <p className="card-description" style={{ textAlign: "left" }}>
            {description}
          </p>
          <div style={{ position: 'absolute', bottom: '0', right: '0', paddingRight: '20px', paddingBottom: '13px'}}>
          <h6
            className="category"
            style={{
              backgroundColor: getCategoryColor(category),
              
            }}
          >
            {category}
          </h6></div>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
