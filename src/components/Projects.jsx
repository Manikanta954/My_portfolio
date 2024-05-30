// src/components/Certifications.js
import React from 'react';
import './Projects.css';

const certifications = [
  { id: 1, title: 'Certificate 1', imageUrl: 'path/to/certificate1.jpg' },
  { id: 2, title: 'Certificate 2', imageUrl: 'path/to/certificate2.jpg' },
  { id: 3, title: 'Certificate 3', imageUrl: 'path/to/certificate3.jpg' },
  { id: 4, title: 'Certificate 4', imageUrl: 'path/to/certificate4.jpg' },
  // Add more certificates as needed
];

const Certifications = () => {
  return (
    <div className="certifications-grid">
      {certifications.map((cert) => (
        <div key={cert.id} className="cert-box">
          <img src={cert.imageUrl} alt={cert.title} className="cert-image" />
          <div className="cert-title">{cert.title}</div>
        </div>
      ))}
    </div>
  );
};

export default Certifications;
