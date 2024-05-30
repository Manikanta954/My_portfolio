// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about-me">About Me</Link></li>
      <li><Link to="/certifications">Certifications</Link></li>
      <li><Link to="/contact-me">Contact Me</Link></li>
      <li><Link to="/resume">Resume</Link></li>
    </ul>
  </nav>
);

export default NavBar;
