import React from "react";

function BookCard({ id, title, author, description, category }) {
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
      <div className="card card1">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-author"> -{author}</p>
          <p className="card-description">{description}</p>
          <h6
            className="card-category"
            style={{ backgroundColor: getCategoryColor(category) }}
          >
            {category}
          </h6>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
