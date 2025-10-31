import React, { useState } from "react";
import { FaFolder, FaBars } from "react-icons/fa";

const Projects = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  const projects = [
    {
      title: "E-commerce app with Java & Angular",
      link: "https://github.com/NektariosTs/Ecommerce-project"
    },
    {
      title: "Todos app with Spring Boot",
      link: "https://github.com/NektariosTs/Todos-Project"
    },
    {
      title: "Crud Mvc app with Thmeleaf",
      link: "https://github.com/NektariosTs/Spring-Hibernate"
    },
     {
      title: "All About Movies App",
      link: "https://github.com/NektariosTs/Final-Project-allAboutMovies"
    },
       {
      title: "SpringBoot3, Spring 6 & Hibernate for Beginners",
      link: "https://www.udemy.com/certificate/UC-21fc0d24-088f-44fa-a855-a0a279c3d83e/"
    },
     {
      title: `Spring Boot REST APIs: Building Modern APIs with Spring Boot`,
      link: "https://www.udemy.com/certificate/UC-cae9ea25-2a02-4fbd-94de-81240e228f5c/"
    }
  ];

  return (
    <section className="section projects">
      <div className="proj-header">
        <h3><FaFolder /> Projects</h3>
        <button className="burger-btn" onClick={toggleMenu}>
          <FaBars />
        </button>
      </div>

      <ul className={`proj-list ${open ? "open" : ""}`}>
        {projects.map((proj, index) => (
          <li key={index} className="proj-item">
            <div className="proj-title">
              <a 
                href={proj.link} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                {proj.title}
              </a>
              <span className="proj-date">{proj.date}</span>
            </div>
            <p className="proj-desc">{proj.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
