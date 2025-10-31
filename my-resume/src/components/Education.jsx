import React, { useState } from "react";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  const studies = [
    {
      title: "Coding Factory",
      date: "08/2024 - 07/2025",
      university: "Athens University of Economics and Business",
      // link: "https://codingfactory.aueb.gr/",
      description: `Completed a backend-oriented coding bootcamp (Coding Factory –
                    AUEB), focusing on Java, development, SQL databases, and backend
                    application architecture. Worked on real-world projects, building
                    APIs and implementing object-oriented solutions, with additional
                    training in C#, Python and front-end tools like Angular and React.`,
    },
    {
      title: "Coding Bootcamp",
      date: "10/2023 - 08/2024",
      university: "Social Hackers Academy",
      description: `Completed an intensive coding bootcamp focused on full-stack
                    web development using JavaScript. Gained hands-on experience
                    building dynamic web applications with React on the frontend and
                    Node.js, Express, and MongoDB on the backend.`,
    },
    {
      title: "Mechanical Engineer",
      date: "2009 - 2015",
      university: "Merchant Marine Academy of Aspropyrgos",
      description: `Graduated as a Mechanical Engineer in the Merchant Navy,
                    equipped with specialized knowledge in ship machinery and
                    marine engineering systems.`,
    },
  ];

  return (
    <section className="section education">
      <div className="edu-header">
        <h3>
          <GraduationCap size={24} /> Education
        </h3>
        {/* <button className="burger-btn" onClick={toggleMenu}>
          <FaBars />
        </button> */}
      </div>

      <ul className="edu-list open">
        {studies.map((study, index) => (
          <li key={index} className="edu-item">
            <div className="edu-title">
              {study.title === "Coding Factory" ? (
                <a
                  href="https://codingfactory.aueb.gr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="edu-link"
                >
                  {study.title}
                </a>
              ) : (
                <span>{study.title}</span>
              )}
              <span className="edu-date">{study.date}</span>
            </div>
            <div className="edu-university">{study.university}</div>
            <p className="edu-desc">{study.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Education;
