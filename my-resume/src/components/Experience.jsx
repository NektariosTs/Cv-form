import React, { useState } from "react";
import {BriefcaseBusiness} from "lucide-react"
const Experience = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  const experiences = [
    {
      role: "Professional Driver",
      company: "Taxi",
      date: "2018 - 2025",
      description: `I work as a taxi driver collaborating with various companies and
                    hotels, providing reliable and professional transportation services to
                  clients.`
    },
    {
      role: "Mechanical Engineer",
      company: "Blue Star Ferries",
      date: "03/2010-09/2010",
      description: `Served as a trainee mechanical engineer onboard the Superferry II
                    of Blue Star Ferries, gaining hands-on experience in the operation
                    and maintenance of ship machinery.`
    },
     {
      role: "Mechanical Engineer",
      company: `Super-Eco Tankers Management Inc.`,
      date: "08/2014-05/2015",
      description: `Served as a trainee mechanical engineer on the vessel Venus for
                    Super Eco Tankers Management, acquiring practical experience in
                    engine maintenance and shipboard engineering operations.`
    }
  ];

  return (
    <section className="section experience">
      <div className="exp-header">
        <h3><BriefcaseBusiness size={24} /> Experience</h3>
      </div>

      <ul className="exp-list open">
        {experiences.map((exp, index) => (
          <li key={index} className="exp-item">
            <div className="exp-title">
              <span>{exp.role}</span>
              <span className="exp-date">{exp.date}</span>
            </div>
            <div className="exp-company">{exp.company}</div>
            <p className="exp-desc">{exp.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Experience;
