import React from "react";
import Recommendation from "./Recommendation";

const RecommendationsPage = () => {
    const recommendations = [
        {
            id: 1,
            // className: ''
            title: 'Mikael Nordenstjerna',
            date: 'January 19, 2024',
           // author: 'Your Name',
            content: 'I had the pleasure of working with Reenal, who consistently demonstrated a strong dedication to her work. Reenal is eager to learn and improve and is always giving her best to complete any task she is given. She was an integral part of some of our biggest projects, her contribution has been very appreciated and we continue to build upon Reenal work . As a person she is a very positive and energetic person that spreads energy and happiness. I wish her all the best in her future endeavours!I had the pleasure of working with Reenal, who consistently demonstrated a strong dedication to her work. Reenal is eager to learn and improve and is always giving her best to complete any task she is given. She was an integral part of some of our biggest projects, her contribution has been very appreciated and we continue to build upon Reenal work . As a person she is a very positive and energetic person that spreads energy and happiness. I wish her all the best in her future endeavours!'
        },
        {
            id: 2,
            title: 'Dr. Nisarg Gandhewar',
            date: 'September 14, 2023',
            //author: 'Your Name',
            content: 'Since day we connected on linkedin and collaborated highly recommend reenal for their exceptional research skills , strategic thinking and ability to see the bigger picture .She approached challenges with a solution-oriented mindset, finding innovative and practical resolutions.Since day we connected on linkedin and collaborated highly recommend reenal for their exceptional research skills , strategic thinking and ability to see the bigger picture .She approached challenges with a solution-oriented mindset, finding innovative and practical resolutions.'
        },
        {
            id: 3,
            title: 'Oscar-Francisco Andreasson Padilla',
            date: 'July 3, 2018',
            //author: 'Your Name',
            content: 'Reenal was one of our developers in the Fall batch. During this time she worked with basic Machine Learning environments, Social API´s (Facebook, Instagram, slack, google ads etc.) and document databases in the Java language. She has a will to learn and develop within code. I can recommend her as a developer.'
        },
        {
            id: 4,
            // className: ''
            title: 'Niteen Yemul',
            date: 'April 13, 2016',
            //author: 'Your Name',
            content: 'I know Reenal and she had prepared a Doctors directory. She has a good understanding of the subject matter. She is sincere and hard working.'
        },
        {
            id: 5,
            title: 'Umesh Potbhare',
            date: 'January 21, 2016',
            //author: 'Your Name',
            content: 'I know Reenal for more than year and half when I started working with TwinPrimeLabs. Initially, I found her struggling to become a good programmer. However, after couple of months, she was completely changed. She was very detailed in following programming concepts and mainly she gained lot of confidence. Her attitude changed and became more studious. Improved herself very much with PHP language and couple of PHP frameworks like yii.Now she moved over to new world and I wish her best for future.'
        },
       
       /* {
            id: 6,
            title: 'Second Blog Post',
            date: 'March 15, 2024',
            author: 'Your Name',
            content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },*/
    ];

    return(
        <div className="recommendations-page">
            <h1 className="gradient-text header-container bold" style={{paddingTop: '25px', paddingBottom: '25px'}}>Testimonials & Recommendations</h1>
            <div className="recommendations-list" style={{display: 'flex', flexWrap: 'wrap', justifyItems: 'center'}}>  
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