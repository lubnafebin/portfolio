import React from "react";
import empowernetImg from "../assets/empowernet.png";
import portfolioImg from "../assets/portfolio.png";
import { TfiPinAlt } from "react-icons/tfi";

export function Projects() {
  const projects = [
    {
      title: "EmpowerNet",
      description:
        "EmpowerNet is a comprehensive web application developed to streamline the administration of Self-Help Groups (SHGs) across multiple levels—CDS, ADS, NHG, and Member. It enhances transparency, automates approval workflows, and facilitates efficient data management and communication within the SHG framework.",
      tech: [
        "React",
        "Javascript",
        "TypeScript",
        "CSS",
        "Bootstrap",
        "Node.js",
        "MySQL",
        "Git",
        "GitHub",
      ],
      image: empowernetImg,
      live: "https://your-live-link.com",
    },
    {
      title: "Portfolio Website",
      description:
        "This portfolio website highlights my work as a frontend developer, featuring selected projects, technical skills, and contact information. Built with React, it focuses on clean design, responsiveness, and user-friendly navigation.",
      tech: ["React", "CSS", "TypeScript", "Git", "GitHub"],
      image: portfolioImg,
      live: "#",
    },
  ];

  return (
    <section id="works" className="works-section">
      <h2>My Recent Works</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            <div className="card-header-inline">
              <h3 className="project-title">{project.title}</h3>
              <a
                href={project.live}
                className="live-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="gradient-icon">
                  <TfiPinAlt />
                </span>{" "}
                Live
              </a>
            </div>

            <p className="project-description">{project.description}</p>

            <div className="tech-tags">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-hash">
                  <span className="hash-symbol"> #</span>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
