// src/components/ContactMe.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactMe.css';
import mail from './sending.gif';
const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    const serviceID = 'service_lnwxnlm';
    const templateID = 'template_bheue3u';
    const userID = 'xCeIepWczKbogR3J-';

    try {
      await emailjs.send(serviceID, templateID, formData, userID);
      setIsSent(true);
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      setIsSending(false);
      setTimeout(() => setIsSent(false), 2000); // Reset button after 2 seconds
    }
  };

  return (
    <center>
    <div>
         <img src={mail} alt="" style={{height:'200px',width:'300px'}} />
    <div className="contact-me-container">
       
      <form onSubmit={handleSubmit} className="contact-me-form">
        <h2>Contact Me</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={isSending}>
          {isSending ? 'Sending...' : isSent ? '✓' : 'Send'}
        </button>
      </form>
    </div></div></center>
  );
};

export default ContactMe;
