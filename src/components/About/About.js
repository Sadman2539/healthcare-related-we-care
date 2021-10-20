import React from 'react';

const About = () => {
    return (
        <div className="text-center p-3">
            <h1>About Us</h1>
            <h3>We Provide An Ideal Home Environment</h3>
            <p>We provide home for the elderly people.We have dedicated volunteers will help to look after them</p>
            <div className="w-100">
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/igKdgta23gg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <br />
            <button className="regular-btn mt-3">Read More
                <span><i class="fas fa-arrow-right ms-2"></i></span>
            </button>
        </div>
    );
};

export default About;