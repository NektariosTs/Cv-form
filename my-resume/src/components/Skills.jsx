import React, { useState } from "react";
import {Wrench} from "lucide-react"

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
        <h3><Wrench size={24}/> Skills</h3>
      </div>

      <ul className="skills-list open">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
