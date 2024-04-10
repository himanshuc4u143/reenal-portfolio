import React from "react";
import Recommendation from "./Recommendation";

const RecommendationsPage = () => {
    const recommendations = [
        {
            id: 1,
            // className: ''
            title: 'My First Blog Post',
            date: 'March 1, 2024',
            author: 'Your Name',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id: 2,
            title: 'My First Blog Post',
            date: 'March 1, 2024',
            author: 'Your Name',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id: 3,
            title: 'Second Blog Post',
            date: 'March 15, 2024',
            author: 'Your Name',
            content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
    ];

    return(
        <div className="recommendations-page">
            <h1 className="gradient-text header-container bold" style={{paddingTop: '25px', paddingBottom: '25px'}}>Testimonials & Recommendations</h1>
            <div className="recommendations-list">  
                {recommendations.map(recommendation => (
                    <Recommendation 
                        key={recommendation.id}
                        title={recommendation.title}
                        date={recommendation.date}
                        author={recommendation.author}
                        content={recommendation.content}
                    />
                ))}
            </div>
        </div>
    );
    
};

export default RecommendationsPage;