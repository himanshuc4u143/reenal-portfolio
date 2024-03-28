import React from 'react';

const Blog = ({ title, date, author, content }) => {
  return (
    <div className="card w-100 h-100 shadow p-3 mb-5 bg-body rounded">
      <div className="card-body" style={{ maxHeight: '100px' }}>
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{date} - {author}</h6>
        <p className="card-text">{content}</p>
      </div>
      <div style={{position: 'sticky-bottom', paddingLeft: '30px', paddingBottom: '20px', paddingTop: '30px'}}>
        <button type="button" className="btn btn-primary" style={{paddingLeft: '20px', paddingRight: '20px'}}>See More</button>
      </div>
    </div>
  );
};

export default Blog;
