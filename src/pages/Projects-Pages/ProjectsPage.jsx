import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import projectData from "./ProjectData";
import "./ProjectsPage.scss"

export const ProjectsPage = () => {
    const {id} = useParams(); //this retrieves the ID from the URL
    const project = projectData.find(p => p.id === id);//now we find the exact project related to the url
    //not certain about line above
    return (   
    <div className = "ProjectsPage">
        <div className="content">
            <div className="image">
                <div className = "overlay">
                    <h1> 
                        {project.name}
                    </h1>
                </div>
                <img src={project.banner} alt={project.name} />
            </div>
            
            <h4 className="skill-title">Technical Skills:</h4>
            <div className="skills">
                {project.technicalskills.map((skill, index) => (
                    <span key={index} className="skilli">{skill}</span>
                ))}
            </div>
            <h4 className="skill-title">Soft Skills:</h4>
            <div className="skills">
                {project.softskills.map((skill, index) => (
                    <span key={index} className="skilli">{skill}</span>
                ))}
            </div>
            <h4 className="description-title"> Description:</h4>
            <div className="description-body">{project.description}</div>
            <iframe className="link" src={project.link}></iframe>
        </div>
    </div>
    )

}