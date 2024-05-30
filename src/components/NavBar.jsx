// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';  // Import the CSS file

const NavBar = () => (
  <nav className="navbar">
    <ul className="nav-list">
      <li className="nav-item"><Link to="/">Home</Link></li>
      <li className="nav-item"><Link to="/about-me">About Me</Link></li>
      <li className="nav-item"><Link to="/Projects">Projects</Link></li>
      <li className="nav-item"><Link to="/contact-me">Contact Me</Link></li>
      <li className="nav-item"><Link to="/resume">Resume</Link></li>
    </ul>
  </nav>
);

export default NavBar;
