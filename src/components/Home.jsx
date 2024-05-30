// src/components/Home.js
// src/components/Home.js
import React from 'react';
import { ReactTyped as Typed } from 'react-typed';

const Home = () => (
  <div>
    <h1>Welcome to my portfolio</h1>
    <p>I am a <Typed strings={['Developer', 'Designer', 'Creator']} typeSpeed={40} backSpeed={50} loop /></p>
  </div>
);

export default Home;

