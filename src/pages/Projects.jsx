import empowernetImg from "../assets/empowernet.png";
import portfolioImg from "../assets/portfolio.png";
import netflixImg from "../assets/netflix.png";
import adminImg from "../assets/admin.png";
import { TfiPinAlt } from "react-icons/tfi";

export function Projects() {
  const projects = [
    {
      title: "EmpowerNet",
      description:
        "EmpowerNet is a comprehensive web application developed to streamline the administration of Self-Help Groups (SHGs) across multiple levels—CDS, ADS, NHG, and Member. It enhances transparency, automates approval workflows, and facilitates efficient data management and communication within the SHG framework.",
      tech: [
        "React",
        "Vite",
        "JavaScript",
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
      title: "Netflix",
      description:
        "This is a React-based web application that displays movies dynamically by fetching data from The Movie Database (TMDB) API.Users can explore different categories of movies and watch their trailers through YouTube integration. The project highlights dynamic rendering, API integration, and clean UI design.",
      tech: ["React", "CSS", "TMDB", "Git", "GitHub"],
      image: netflixImg,
      live: "https://netflix-lubnas-projects-1383a28b.vercel.app/",
    },
    {
      title: "Portfolio Website",
      description:
        "This portfolio website highlights my work as a frontend developer, featuring selected projects, technical skills, and contact information. Built with React, it focuses on clean design, responsiveness, and user-friendly navigation.",
      tech: ["React", "CSS", "Vite", "JavaScript", "Git", "GitHub"],
      image: portfolioImg,
      live: "#",
    },
    {
      title: "Wayanad Explorer",
      description:
        "A React-based explorer site that displays destinations dynamically using local data files. It features clean layout components like tables, charts, forms, and sidebar navigation. The project highlights component-based design and dynamic rendering without backend integration.",
      tech: ["React", "Tailwind css", "JavaScript", "Git", "GitHub"],
      image: adminImg,
      live: "https://admin-dashboard-lubnas-projects-1383a28b.vercel.app/",
    },
    {
      title: "Admin Dashboard",
      description:
        "A React-based admin dashboard that displays data dynamically using local data files. It features clean layout components like tables, charts, forms, and sidebar navigation. The project highlights component-based design and dynamic rendering without backend integration.",
      tech: ["React", "SCSS", "TypeScript", "Git", "GitHub"],
      image: adminImg,
      live: "https://admin-dashboard-lubnas-projects-1383a28b.vercel.app/",
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
