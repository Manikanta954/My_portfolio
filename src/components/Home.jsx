// src/components/Home.js
// src/components/Home.js
// src/components/Home.js
import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import './home.css';  // Import the CSS file
import me from './Manikanta.png';

const Home = () => (
  <div className="home-container">
    <h1 style={{fontSize:"40px"}}>Welcome! I am Manikanta Talagama</h1>
    <p>I am a <ReactTypingEffect text={['Developer', 'Designer', 'Creator','Flutter Developer','React Developer']} speed={100} eraseSpeed={50} eraseDelay={2000} typingDelay={500} /></p>
    <div className="image-container">
      <img src={me} alt="My Portrait" className="portrait" />
    </div>
  </div>
);

export default Home;


