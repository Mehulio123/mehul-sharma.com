import React from "react";
import './Home.scss';
import meImage from './me.png'; 

export const Home = () => {
    return (
    <div className="Home">
            <h1 className="Home_title">
                Hello, I am Mehul and <br /> Welcome to my Portfolio!
            </h1>
        {/* About Me Section */}
        <div className="about-me">
            <h2>About Me</h2>
            <div className="my-picture">
            <img src={meImage} />
            </div>
            <div className="about-me-text">
            <p>
                I am a passionate developer and designer with experience in React, SCSS, and UI/UX.
                I love creating beautiful and functional web applications.
                I am a passionate developer and designer with experience in React, SCSS, and UI/UX.
                I love creating beautiful and functional web applications.
                I am a passionate developer and designer with experience in React, SCSS, and UI/UX.
                I love creating beautiful and functional web applications.
                I am a passionate developer and designer with experience in React, SCSS, and UI/UX.
                I love creating beautiful and functional web applications.
                I am a passionate developer and designer with experience in React, SCSS, and UI/UX.
            </p>
            </div>
        </div>
    </div>
    );
};
