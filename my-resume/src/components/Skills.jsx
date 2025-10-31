import React, { useState } from "react";
import { FaTools, FaBars } from "react-icons/fa";

const Skills = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  const skills = [
    "Java",
    "C#",
    "SQL",
    "React",
    "Python",
    "Node.js",
    "JavaScript",
    "HTML & CSS",
    "Git",
    "GitHub",

  ];

  return (
    <section className="section skills">
      <div className="skills-header">
        <h3><FaTools /> Skills</h3>
        <button className="burger-btn" onClick={toggleMenu}>
          <FaBars />
        </button>
      </div>

      <ul className={`skills-list ${open ? "open" : ""}`}>
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
