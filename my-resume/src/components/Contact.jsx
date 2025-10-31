import React from "react";
import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="section contact">
      <h3> <FaPhone /> Contact</h3>
      <div className="contact-icons">
        
        <a href="mailto:nektarios.tsagkaris@gmail.com" title="Email">
          <FaEnvelope />
        </a>
      
        <a href="tel:+306983062548" title="Τηλέφωνο">
          <FaPhone />
        </a>
        
        <a 
          href="https://www.linkedin.com/in/nektarios-tsagkaris-8b3898263/" 
          target="_blank" 
          rel="noopener noreferrer" 
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
};

export default Contact;
