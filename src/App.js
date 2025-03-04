import React from 'react';
import { Home } from './pages/Home';
import { Project } from './pages/Project';
import { Internship } from './pages/Internship';
import { Contact } from './pages/Contact';
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
                    <Route index path='/Contact' element={<Contact />} />
                    <Route index path='/Internship' element={<Internship />} />
                </Routes>
                <div className="App__overlay"></div>
            </div>
        </Router>
    );
}

export default App;
