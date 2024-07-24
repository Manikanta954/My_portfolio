import React, { useState, useEffect } from 'react';
import './AboutMe.css';

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState('skills');
  const [animate, setAnimate] = useState(false);
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => setAnimate(false), 300);
      return () => clearTimeout(timer);
    }
  }, [animate]);

  useEffect(() => {
    setPageLoaded(true);
  }, []);

  const handleTabClick = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
      setAnimate(true);
    }
  };

  return (
    <div className={`about-me-container ${pageLoaded ? 'page-loaded' : ''}`}>
      <h1 className="about-me-heading">
        About Me <span className="jumping-smiley">😊</span>
      </h1>
      <p className="about-me-description">
        I am a skilled and passionate fresher, I bring a unique blend of 
        enthusiasm, creativity, and technical expertise to the table. 
        I am eager to leverage my skills and contribute to innovative projects, driving success and adding value to the company. 
        With a relentless drive for excellence and a keen eye for detail, I am committed to delivering high-quality results and continuous improvement.
      </p>

      <div className="tabs">
        <div 
          className={`tab ${activeTab === 'skills' ? 'active ' + (animate ? 'active-animate' : '') : ''}`} 
          onClick={() => handleTabClick('skills')}
        >
          Skills
        </div>
        <div 
          className={`tab ${activeTab === 'certifications' ? 'active ' + (animate ? 'active-animate' : '') : ''}`} 
          onClick={() => handleTabClick('certifications')}
        >
          Certifications
        </div>
        <div 
          className={`tab ${activeTab === 'education' ? 'active ' + (animate ? 'active-animate' : '') : ''}`} 
          onClick={() => handleTabClick('education')}
        >
          Education
        </div>
      </div>

      <div className="tab-content">
        {activeTab === 'skills' && (
          <div className="skills-content">
            <ul>
              <li>Python</li>
              <li>Java</li>
              <li>React</li>
              <li>MySql</li>
              <li>MongoDB</li>
              <li>Flutter</li>
            </ul>
          </div>
        )}
        {activeTab === 'certifications' && (
          <div className="certifications-content">
            <ul>
              <li>Certification 1</li>
              <li>Certification 2</li>
            </ul>
          </div>
        )}
        {activeTab === 'education' && (
          <div className="education-content">
            <ul>
              <li>Pursuing <span>B.Tech</span> in <span>AIML</span> at Mallareddy University CGPA: <span></span></li>
              <li>Intermediate at Bhavan's Sri Aurovindo Junior College with <span>95%</span></li>
              <li>Schooling (1 to 10<sup>th</sup>) at Model Mission High School with GPA: <span>9.8</span></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutMe;
