
import React, { useState } from "react";
import "./Internship.scss"
import { useNavigate } from "react-router-dom";
import image from './WLU-Hero.png';

const InternshipData = [
    { id: 1, name: "Business Analyst", description: "I did ................", skills: [" Consutlancy ", " excel "], image: image, link: "/internships/DBM-Systems"},
    { id: 2, name: "Data Analyst", description: "I did ................", skills: [" Consutlancy ", " excel "], image: image, link: "/internships/Arya-solutions"},
]


export const Internship = () => {
    const navigate = useNavigate();
    return (  
        <div className="internship">
            <h1 className="title">Internship Experience</h1>
            <div className="intern-layout">
                {InternshipData.map(internship => (//looping throught the internships
                    <div key={internship.id} className="internship-box" onClick={() => navigate(internship.link)}> 
                        <img src={internship.image} alt={internship.name} />
                        <div className="overlay">
                            <p className="title">{internship.name}</p>
                            <p className="description">{internship.description}</p>
                            <div className="skills">
                                {internship.skills.map((skill, index) => (
                                    <span key={index} className="skill">{skill}</span>
                                ))}
                            </div>
                            
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}