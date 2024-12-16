import React from 'react';
import resume from '../Assets/resume.png';
import './Resume.css'; // Import the CSS file

const Resume = () => (
  <div className="resume-container">
    <h2 className="resume-title">Resume</h2>
    <p>
      <img src={resume} alt="Resume" className="resume-image" />
    </p>
  </div>
);

export default Resume;
