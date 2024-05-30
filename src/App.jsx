// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Certifications from './components/Certifications';
import ContactMe from './components/ContactMe';
import Resume from './components/Resume';
import './styles.css';


const App = () => (
  <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-me" element={<AboutMe />} />
      <Route path="/certifications" element={<Certifications />} />
      <Route path="/contact-me" element={<ContactMe />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  </Router>
);

export default App;
