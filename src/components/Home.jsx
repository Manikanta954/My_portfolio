// src/components/Home.js
// src/components/Home.js
// src/components/Home.js
import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import './home.css';  // Import the CSS file
import me1 from './me1.png';

const Home = () => (
  <div className="home-container">
    <h1 style={{fontSize:"40px",color:'White'}}>Welcome!<span className="waving-hand">👋</span> </h1>
   <h1  style={{fontSize:"40px",color:'White'}}> I am <span style={{color:'#11f670'}}>
    <span style={{fontSize:"50px", padding:"5px"}}>M</span>anikanta <span style={{fontSize:"50px"}}>T</span>alagama</span></h1>
    <p style={{fontSize:"35px", color:'white',paddingRight:"15px"}}>I am a <span style={{color:'#11f670'}}> <ReactTypingEffect text={['Python programmer.', 'Java programmer.','Flutter Developer.','React Developer.']} speed={100} eraseSpeed={50} eraseDelay={2000} typingDelay={500} /></span></p>
    <p></p>
  </div>
);

export default Home;