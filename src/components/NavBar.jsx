// src/components/NavBar.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './NavBar.css';  // Import the CSS file

// const NavBar = () => (
//   <nav className="navbar">
//     <ul className="nav-list">
//       <li className="nav-item"><Link to="/">Home</Link></li>
//       <li className="nav-item"><Link to="/about-me">About Me</Link></li>
//       <li className="nav-item"><Link to="/Projects">Projects</Link></li>
//       <li className="nav-item"><Link to="/contact-me">Contact Me</Link></li>
//       <li className="nav-item"><Link to="/resume">Resume</Link></li>
//     </ul>
//   </nav>
// );

// export default NavBar;
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';  // Import the CSS file

const NavBar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about-me" className={location.pathname === '/about-me' ? 'active' : ''}>About Me</Link>
        </li>
        <li className="nav-item">
          <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>Projects</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact-me" className={location.pathname === '/contact-me' ? 'active' : ''}>Contact Me</Link>
        </li>
        <li className="nav-item">
          <Link to="/resume" className={location.pathname === '/resume' ? 'active' : ''}>Resume</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
