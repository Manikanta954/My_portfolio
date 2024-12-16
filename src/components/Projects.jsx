import React from 'react';
import './Projects.css';
import project1 from '../Assets/project1.jpg';

const projects = [
  { id: 1, title: 'Project 1', description: 'A beautiful ecommerce web app for farm products with full fuctionality and real time usage.', imageUrl: project1, link: 'https://organic-egg-farm.vercel.app/' },
  { id: 2, title: 'Stock Price Pridiction', description: 'Description of Project 2', imageUrl: 'path/to/certificate2.jpg', link: 'https://github.com/Manikanta954/Stock-price-predictor' },
  { id: 3, title: 'Speech Emotion Detection using ML', description: 'Description of Project 3', imageUrl: 'path/to/certificate3.jpg', link: 'https://example.com/project3' },
  { id: 4, title: 'Vegies Shopping app using flutter', description: 'Description of Project 4', imageUrl: 'path/to/certificate4.jpg', link: 'https://github.com/Manikanta954/Vegetables-shopping-app' },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div className="projects-grid">
      {projects.map((proj) => (
        <a key={proj.id} href={proj.link} target="_blank" rel="noopener noreferrer" className="proj-link" style={{textDecoration:"none"}}>
          <div className="proj-card">
            <img src={proj.imageUrl} alt={proj.title} className="proj-image" />
            <div className="proj-details">
              <h3 className="proj-title">{proj.title}</h3>
              <p className="proj-description">{proj.description}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Projects;
