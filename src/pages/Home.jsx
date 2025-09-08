import React from "react";
import './Home.scss';
import meImage from './me.png'; 
import box2 from './CityGuessr.png';
import box1 from './Blueprint.jpg';
import box3 from './PopulationVI.png';

export const Home = () => {
    return (
    <div className="Home">
            <h1 className="Home_title">
                Hello, I am Mehul and <br /> Welcome to my Portfolio!
            </h1>


        {/* About Me Section */}
        <div className="about-me-section">
            <div className="about-me">
                <h2>About Me</h2>
                <div className="my-picture">
                <img src={meImage} />
                </div>
                <div className="about-me-text">
                <p>Hi, I’m Mehul! I’m studying Computer Science at Waterloo and Business Administration at Laurier, and I love building projects that are cool but can also help people. I’ve worked with UW Blueprint to improve a volunteer platform for 500+ users, supported DBM Systems by streamlining global operations, and developed websites and tools for the Lazaridis Society and international case competitions. I also enjoy creating personal projects like a city guessing game powered by AI and a world population visualizer. What excites me most is collaborating with great teams, solving problems, and turning ideas into products people actually use.
                </p>
                </div>
            </div>
        </div>


        <div className="highlight-container"> {/*this is part of home page, the personal highlight section*/}
            <h1 className="personal-highlights">
                    Personal Highlights
            </h1>

            <div className="higlights-content">
                {/*This is the big image that's clickable*/}
                <div className="big-box" onClick={() => window.location.href="/Project"}>
                    <img src={box1} alt="featured project 1"/>
                    <div className="overlay"> {/* the overlay */}
                        <p>Project One</p>
                    </div>
                </div>

                <div className="two-buttons">
                    <div className="small-box"  onClick={() => window.location.href="/Project"} >
                        <img src={box2} alt="featured project 2"/>
                        <div className="overlay"> {/* the overlay */}
                            <p>Project Two</p>
                        </div>
                    </div>

                    <div className="small-box"  onClick={() => window.location.href="/Project"} >
                        <img src={box3} alt="featured project 3"/>
                        <div className="overlay"> {/* the overlay */}
                            <p>Project three</p>
                        </div>
                    </div>
                </div>
            </div> 
            <button className="contact-button" onClick={()=> window.location.href="./contact"}>
                Contact me
            </button>

        </div>
    </div>
    );
};
