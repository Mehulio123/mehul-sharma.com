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
                <p>I’m a Computer Science and Business student at the University of Waterloo and Wilfrid Laurier University who loves building things that make people’s lives easier. Over the past few years, I’ve worked on everything from interactive data visualizations to volunteer management systems, and I’ve had the chance to help lead tech efforts for student clubs like LazSoc and LazSICC. Whether it’s automating a tedious process or designing something new from scratch, I get excited about solving problems and seeing ideas come to life. Outside of school and work, I enjoy connecting with people, learning new skills, and finding creative ways to make an impact in my community.
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
