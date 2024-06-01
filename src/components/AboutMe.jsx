// src/components/AboutMe.js
// import React from 'react';
// import me from './homeimage.png';
// import './AboutMe.css'
// const AboutMe = () =>( 
// <div style={{paddingRight:'30px'}}>
// <h1 style={{paddingLeft:"40px",fontSize:'50px',color:'#11f670',fontWeight:'bolder'}}>About Me <span className="jumping-smiley">😊</span></h1>
// <p style={{paddingLeft:'40px',color:'white',fontSize:'25px'}}> I am a skilled and passionate fresher, I bring a unique blend of 
//     enthusiasm, creativity, and technical expertise to the table. 
//     . I am eager to leverage my skills and contribute to innovative projects, driving success and adding value to the company. 
//     With a relentless drive for excellence and a keen eye for detail, I am committed to delivering high-quality results and continuous improvement.
//     </p>
//     <p style={{display:'flex'}}>
//     <p style={{lineHeight:'12px'}}>
//     <p style={{paddingLeft:"40px",fontSize:'42px',fontWeight:'bolder',color:'#11f670'}}>Skills</p>
//     <p  style={{paddingLeft:'50px',paddingTop:'0px',fontSize:'19px',color:'white'}}> 
//     <p>Python</p>
//     <p>Java</p>
//     <p>React</p>
//     <p>MySql</p>
//     <p>MongoDB</p>
//     <p>Flutter</p></p></p>
//      <img src={me} alt="" style={{float:'right',height:'280px',width:'500px', paddingLeft:'50%',paddingTop:'10px'}}/></p>
// </div>

// );

// export default AboutMe;
import React, { useState, useEffect } from 'react';
import me from './homeimage.png';
import './AboutMe.css';

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState('skills');
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => setAnimate(false), 300);
      return () => clearTimeout(timer);
    }
  }, [animate]);

  const handleTabClick = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
      setAnimate(true);
    }
  };

  return (
    <div style={{ paddingRight: '30px' }}>
      <h1 style={{ paddingLeft: "40px", fontSize: '50px', color: '#11f670', fontWeight: 'bolder' }}>
        About Me <span className="jumping-smiley">😊</span>
      </h1>
      <p style={{ paddingLeft: '40px', color: 'white', fontSize: '25px' }}>
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
            <p style={{ lineHeight: '12px' }}>
              <p style={{ paddingLeft: "40px", fontSize: '42px', fontWeight: 'bolder', color: '#11f670' }}>Skills</p>
              <p style={{ paddingLeft: '50px', paddingTop: '0px', fontSize: '19px', color: 'white' }}>
                <p>Python</p>
                <p>Java</p>
                <p>React</p>
                <p>MySql</p>
                <p>MongoDB</p>
                <p>Flutter</p>
              </p>
            </p>
          </div>
        )}
        {activeTab === 'certifications' && (
          <div className="certifications-content">
            <p style={{ paddingLeft: "40px", fontSize: '42px', fontWeight: 'bolder', color: '#11f670' }}>Certifications</p>
            <p style={{ paddingLeft: '50px', paddingTop: '0px', fontSize: '19px', color: 'white' }}>
              <p>Certification 1</p>
              <p>Certification 2</p>
              <p>Certification 3</p>
              <p>Certification 4</p>
              <p>Certification 5</p>
            </p>
          </div>
        )}
        {activeTab === 'education' && (
          <div className="education-content">
            <p style={{ paddingLeft: "40px", fontSize: '42px', fontWeight: 'bolder', color: '#11f670' }}>Education</p>
            <p style={{ paddingLeft: '50px', paddingTop: '0px', fontSize: '19px', color: 'white' }}>
              <p>Education 1</p>
              <p>Education 2</p>
              <p>Education 3</p>
              <p>Education 4</p>
              <p>Education 5</p>
            </p>
          </div>
        )}
      </div>

      <img 
        src={me} 
        alt="" 
        style={{ float: 'right', height: '280px', width: '500px', paddingLeft: '50%', paddingTop: '10px' }} 
      />
    </div>
  );
};

export default AboutMe;
