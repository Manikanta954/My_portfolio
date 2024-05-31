import React from 'react';
import './Projects.css';

const projects = [
  { id: 1, title: 'Project 1', description: 'Description of Project 1', imageUrl: 'path/to/certificate1.jpg' },
  { id: 2, title: 'Project 2', description: 'Description of Project 2', imageUrl: 'path/to/certificate2.jpg' },
  { id: 3, title: 'Project 3', description: 'Description of Project 3', imageUrl: 'path/to/certificate3.jpg' },
  { id: 4, title: 'Project 4', description: 'Description of Project 4', imageUrl: 'path/to/certificate4.jpg' },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div>
       <h1 style={{paddingLeft:'30px',fontSize:'40px',color:'#11f670',fontWeight:'bolder'}}>My Projects</h1>
    <div className="projects-grid">
     
      {projects.map((proj) => (
        <div key={proj.id} className="proj-box">
          <img src={proj.imageUrl} alt={proj.title} className="proj-image" />
          <div className="proj-info">
            <h3 className="proj-title">{proj.title}</h3>
            <p className="proj-description">{proj.description}</p>
          </div>
        </div>
      ))}
    </div></div>
  );
};

export default Projects;
