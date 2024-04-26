import React from 'react';

const Blog = ({ title, date, author, content }) => {
  return (
    <div className="card card1 w-100 h-100 shadow p-2 mb-5 bg-body rounded" style={{height: ''}}>
      <div className="card-body" >
        <h5 className="card-title card1-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{date} Author - {author}</h6>
        <p className="card-text par-content">{content}</p>
      </div>
      {/* <div style={{position: 'sticky-bottom', paddingLeft: '30px', paddingBottom: '20px', paddingTop: '30px'}}>
        <button type="button" className="btn btn-primary" style={{paddingLeft: '20px', paddingRight: '20px'}}>See More</button>
      </div> */}
    </div>
  );
};

export default Blog;
