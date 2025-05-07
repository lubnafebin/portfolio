import React from "react";

const projects = [
  {
    title: "EmpowerNet",
    description: "A digital self-help group management system built using React, Node.js, and MySQL.",
    tech: ["React", "Node.js", "MySQL"],
    live: "https://your-live-url.com",
    github: "https://github.com/yourusername/empowernet",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio with smooth scrolling and responsive design.",
    tech: ["React", "CSS"],
    github: "https://github.com/yourusername/portfolio",
  },
  // Add more projects here
];

export default function Projects() {
  return (
    <div className="works">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Tech Stack:</strong> {project.tech.join(", ")}</p>
            <div className="project-links">
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

