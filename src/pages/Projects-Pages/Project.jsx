import React, { useState } from "react";
import "./Project.scss"
import { useNavigate } from "react-router-dom";
import projectData from "./ProjectData";


export const Project = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const navigate = useNavigate();

    const filteredProjects = projectData.filter(project =>
        selectedCategory === "all" || project.category === selectedCategory
    );

    return (  
        <div className="project">
            <h1 className="title">Projects & EC's</h1>

            <div className="filter-buttons">
                <button onClick={()=> setSelectedCategory("all")}>
                All
                </button>
                <button onClick={()=> setSelectedCategory("business")}>
                Business
                </button>
                <button onClick={()=> setSelectedCategory("cs")}>
                Computer Science
                </button>
            </div>

            <div className="projects-grid">
                {filteredProjects.map(project => (
                        <div key={project.id} className="project-box" onClick={() => navigate(`/project/${project.id}`)}>
                            <img src={project.image} alt={project.name} />
                            <div className="overlay">
                                <p>{project.name}</p>
                            </div>
                        </div>
                ))}
            </div>
        </div>
    );
}