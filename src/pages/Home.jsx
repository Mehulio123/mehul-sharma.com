import React from "react";
import './Home.scss';
import meImage from './me.png'; 
import box1 from './WLU-Hero.png';
import box2 from './WLU-Hero.png';
import box3 from './WLU-Hero.png';

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
                <p>
                Skibidi, skibidi bop—
                [Pre-Drop]
Skibidi bop—

[Drop]
Bop, bop, bop, bop
Yes, yes, yes, yes
Skibidi, skibidi bop—
Bop, bop, bop, bop
Yes, yes, yes, yes
Skibidi, skibidi bop—
Bop, bop, bop, bop
Bop, bop, bop, bop
How I go
How I go
Bop, bop, bop, bop
Yes, yes, yes, yes
Bop, bop, bop, bop
Bop, bop, bop, bop
(—PS Time)
Bop, bop, bop, bop
Bop, bop, bop, bop
Bop, bop, bop, bop
How I go
How I go
Bop, bop, bop, bop
Yes, yes, yes, yes
Bop, bop, bop, bop
Bop, bop, bop, bop
How I go

[Bridge]
Yes, yes, yes, yes, yes, yes, yes, yes
Yes, yes, yes, yes, yes, yes, yes, yes
Yes, yes, yes, yes, yes, yes, yes, yes

[Pre-Drop]
Skibidi bop—
Bop, bop, bop, bop
Yes, yes, yes, yes

[Drop]
Skibidi, skibidi bop—
Bop, bop, bop, bop
Yes, yes, yes, yes
Skibidi, skibidi bop—
Bop, bop, bop, bop
Bop, bop, bop, bop
How I go
How I go
Bop, bop, bop, bop
Yes, yes, yes, yes
Bop, bop, bop, bop
Bop, bop, bop, bop
(—PS Time)
Bop, bop, bop, bop
Bop, bop, bop, bop
Bop, bop, bop, bop
How I go
How I go
Bop, bop, bop, bop
Yes, yes, yes, yes
Bop, bop, bop, bop
Bop, bop, bop, bop
How I go
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
