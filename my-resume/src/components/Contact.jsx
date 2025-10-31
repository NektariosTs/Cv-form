import React from "react";
import {Mail, Phone, Linkedin} from "lucide-react";

const Contact = () => {
  return (
    <section className="section contact">
      <h3> <Phone /> Contact</h3>
      <div className="contact-icons">
        
        <a href="mailto:nektarios.tsagkaris@gmail.com" title="Email">
           <Mail size={24} />
        </a>
      
        <a href="tel:+306983062548" title="Τηλέφωνο">
          <Phone size={24} />
        </a>
        
        <a 
          href="https://www.linkedin.com/in/nektarios-tsagkaris-8b3898263/" 
          target="_blank" 
          rel="noopener noreferrer" 
          title="LinkedIn"
        >
          <Linkedin size={24} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
