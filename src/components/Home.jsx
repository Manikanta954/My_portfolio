// src/components/Home.js
// src/components/Home.js
// src/components/Home.js
import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import './home.css';  // Import the CSS file
import me1 from './me1.png';

const Home = () => (
  <div className="home-container">
    <h1 style={{fontSize:"40px"}}>Welcome! I am Manikanta Talagama</h1>
    <p style={{fontSize:"30px", color:'#7a7a7a'}}>I am a <ReactTypingEffect text={['Developer', 'Designer', 'Creator','Flutter Developer','React Developer']} speed={100} eraseSpeed={50} eraseDelay={2000} typingDelay={500} /></p>
    <p><img src={me1} alt="mypic" style={{float:'',height:'300px',width:'500px'}} /></p>
  </div>
);

export default Home;


