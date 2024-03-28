import React from 'react';

const Recommendation = ({ title, date, author, content }) => {
    return (
        <div className='col-md-4 mb-3'> {/* Added Bootstrap grid classes */}
            <div className='card h-100'>
                <div className='card-body d-flex flex-column justify-content-between'> {/* Added Flexbox classes */}
                    <div>
                        <h5 className='card-title'>{title}</h5>
                        <h6 className='card-subtitle mb-2 text-muted'>{date} - {author}</h6>
                        <p className='card-text' style={{ fontStyle: 'italic' }}>"{content}"</p>
                    </div>
                    <div>
                        <button type="button" className="btn btn-primary" style={{ paddingLeft: '20px', paddingRight: '20px' }}>See More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recommendation;
