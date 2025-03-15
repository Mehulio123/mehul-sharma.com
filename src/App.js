import React from 'react';
import { Home } from './pages/Home';
import { Project } from './pages/Projects-Pages/Project';
import { Internship } from './pages/Internship-Pages/Internship';
import { InternshipPage } from './pages/Internship-Pages/InternshipPage';
import { Contact } from './pages/Contact';
import { ProjectsPage } from './pages/Projects-Pages/ProjectsPage';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import ScrollToTop from "./Scrolltop"; 

function App() {
    return (
        <Router>
            <div className="App">
                <ScrollToTop /> 
                <NavBar />
                <Routes>
                    <Route index path='/' element={<Home />} />
                    <Route index path='/Project' element={<Project />} />
                    <Route index path='/project/:id' element={<ProjectsPage />}/>
                    <Route index path='/Contact' element={<Contact />} />
                    <Route index path='/Internship' element={<Internship />} />
                    <Route index path='/Internship/:id' element={<InternshipPage />} />
                </Routes>
                <div className="App__overlay"></div>
            </div>
        </Router>
    );
}

export default App;
