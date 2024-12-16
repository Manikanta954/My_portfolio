import React, { useState, useEffect } from 'react';
import './AboutMe.css'; // Keep this to manage styles
import python from '../Assets/python.png';
import java from '../Assets/java.png';
import react from '../Assets/react.png'
import mysql from '../Assets/mysql.png';
import mongodb from '../Assets/mongodb.png'
import flutter from '../Assets/flutter.png'
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
        I am a skilled and passionate fresher, I bring a unique blend of enthusiasm, creativity, and technical expertise to the table. 
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
        <div 
          className={`tab ${activeTab === 'achievements' ? 'active ' + (animate ? 'active-animate' : '') : ''}`} 
          onClick={() => handleTabClick('achievements')}
        >
          Achievements
        </div>
      </div>

      <div className="tab-content">
        {activeTab === 'skills' && (
          <div className="skills-content">
            <div className="skills-grid">
              <div className="skill-box">
                <img src={python} alt="" className="skill-icon" />
                <p className="skill-name">Python</p>
              </div>
              <div className="skill-box">
                <img src={java}  alt="" className="skill-icon" />
                <p className="skill-name">Java</p>
              </div>
              <div className="skill-box">
                <img src={react} alt="" className="skill-icon" />
                <p className="skill-name">React</p>
              </div>
              <div className="skill-box">
                <img src={mysql} alt="" className="skill-icon" />
                <p className="skill-name">MySQL</p>
              </div>
              <div className="skill-box">
                <img src={mongodb} alt="" className="skill-icon" />
                <p className="skill-name">MongoDB</p>
              </div>
              <div className="skill-box">
                <img src={flutter} alt="" className="skill-icon" />
                <p className="skill-name">Flutter</p>
              </div>
            </div>
          </div>
        )}
        {activeTab === 'certifications' && (
          <div className="certifications-content">
            <ul>
              <li><span>Data Structures in Python</span> : Coursera, Michigan University</li>
              <li><span>Artificial Intelligence</span> : NPTEL IIT Madras</li>
              <li><span>Deep Learning</span> : NPTEL IIT Madras</li>
              <li><span>Introduction to Flutter</span> : Simplilearn</li>
              <li><span>Public Speaking</span> : Coursera, Shanghai University</li>
            </ul>
          </div>
        )}
        {activeTab === 'education' && (
          <div className="education-content">
            <ul>
              <li>Pursuing <span>B.Tech</span> in <span>AIML</span> at Mallareddy University CGPA: <span>---</span></li>
              <li>Intermediate at Bhavan's Sri Aurovindo Junior College with <span>95%</span></li>
              <li>Schooling (1 to 10<sup>th</sup>) at Model Mission High School with GPA: <span>9.8</span></li>
            </ul>
          </div>
        )}
        {activeTab === 'achievements' && (
          <div className="achievements-content">
            <ul>
            <li><h3>Clinched <span style={{color:'#11f670'}}> 2nd prize</span> in <span style={{color:'#11f670'}}> National-level Tech Quiz</span> conducted by Mallareddy university </h3></li>
            <li><h3>Won <span style={{color:'#11f670'}}>1st price</span> in college level Webathon at Mallareddy university</h3></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutMe;
