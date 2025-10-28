import empowernetImg from "../assets/empowernet.png";
import portfolioImg from "../assets/portfolio.png";
import netflixImg from "../assets/netflix.png";
import veggieCartImg from "../assets/veggiecart.png";
import recipeAppImg from "../assets/recipe.png";
import wayanadImg from "../assets/explorer.png";
import { TfiPinAlt } from "react-icons/tfi";

export function Projects() {
  const projects = [
    {
      title: "EmpowerNet",
      description:
        "EmpowerNet is a comprehensive web application developed to streamline the administration of Self-Help Groups (SHGs) across multiple levels—CDS, ADS, NHG, and Member.",
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
      live: "https://github.com/lubnafebin/empowerNet",
    },
    {
      title: "Recipe App",
      description:
        "AI-powered recipe app that generates recipes based on user input. Frontend built with React and Tailwind CSS, backend APIs with Node.js and MongoDB.",
      tech: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "Git",
        "GitHub",
      ],
      image: recipeAppImg,
      live: "https://recipe-app-eight-gamma.vercel.app/",
    },
    {
      title: "Veggie-Cart",
      description:
        "A vegetable shopping cart web app with add-to-cart, quantity update, and order management features. Built with RESTful APIs and responsive frontend.",
      tech: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "CSS",
        "Git",
        "GitHub",
      ],
      image: veggieCartImg,
      live: "https://product-list-three-kappa.vercel.app/",
    },
    {
      title: "Netflix",
      description:
        "This is a React-based web application that displays movies dynamically by fetching data from The Movie Database (TMDB) API.Users can explore different categories of movies and watch their trailers through YouTube integration.",
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
        "Developed a responsive travel web app using React and Tailwind CSS to explore destinations in Wayanad.Designed a clean, modern UI with smooth navigation and story highlights for an engaging user experience.",
      tech: ["React", "Tailwind CSS", "JavaScript", "Git", "GitHub"],
      image: wayanadImg,
      live: "https://wayanad-explorer.vercel.app/",
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
                Link
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
