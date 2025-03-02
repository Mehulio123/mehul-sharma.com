import React, { useState } from "react";
import "./Project.scss"
import { useNavigate } from "react-router-dom";
import image from './WLU-Hero.png';

const projectData = [
    { id: 1, name: "Startup", category: "business", image: image, link: "/projects/business-plan" },
    { id: 2, name: "Lazsicc", category: "business", image: image, link: "/projects/marketing-analysis" },
    { id: 3, name: "Email script", category: "cs", image: image, link: "/projects/machine-learning" },
    { id: 4, name: "App", category: "cs", image: image, link: "/projects/web-development" },
];//storing all my projects 



export const Project = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const navigate = useNavigate();

    const filteredProjects = projectData.filter(project =>
        selectedCategory === "all" || project.category === selectedCategory
    );

    return (  
        <div className="project">
            <h1 className="title">Projects</h1>

            <div className="filter-buttons">
                <button onClick={()=> setSelectedCategory("all")}>
                All
                </button>
                <button onClick={()=> setSelectedCategory("business")}>
                Computer Science
                </button>
                <button onClick={()=> setSelectedCategory("cs")}>
                Business
                </button>
            </div>

            <div className="projects-grid">
                {filteredProjects.map(project => (
                        <div key={project.id} className="project-box" onClick={() => navigate(project.link)}>
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