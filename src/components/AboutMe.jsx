// src/components/AboutMe.js
import React from 'react';
import me from './homeimage.png';
import './AboutMe.css'
const AboutMe = () =>( 
<div style={{paddingRight:'30px'}}>
<h1 style={{paddingLeft:"40px",fontSize:'50px',color:'#11f670',fontWeight:'bolder'}}>About Me <span className="jumping-smiley">😊</span></h1>
<p style={{paddingLeft:'40px',color:'white',fontSize:'25px'}}> I am a skilled and passionate fresher, I bring a unique blend of 
    enthusiasm, creativity, and technical expertise to the table. 
    . I am eager to leverage my skills and contribute to innovative projects, driving success and adding value to the company. 
    With a relentless drive for excellence and a keen eye for detail, I am committed to delivering high-quality results and continuous improvement.
    </p>
    <p style={{display:'flex'}}>
    <p style={{lineHeight:'12px'}}>
    <p style={{paddingLeft:"40px",fontSize:'42px',fontWeight:'bolder',color:'#11f670'}}>Skills</p>
    <p  style={{paddingLeft:'50px',paddingTop:'0px',fontSize:'19px',color:'white'}}> 
    <p>Python</p>
    <p>Java</p>
    <p>React</p>
    <p>MySql</p>
    <p>MongoDB</p>
    <p>Flutter</p></p></p>
     <img src={me} alt="" style={{float:'right',height:'280px',width:'500px', paddingLeft:'50%',paddingTop:'10px'}}/></p>
</div>

);

export default AboutMe;
