import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Main() {
  const toggleMenu = () => {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
  };
  return (
    <div>
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Works</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="menu-icon" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>

      <section className="hero">
        <h1>
          Hi, I'm <span className="name">Lubna Febin</span>
        </h1>
        <p className="typing-text">
          {" "}
          <Typewriter
            words={["Frontend Developer", "UI/UX Designer"]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </p>
      </section>

      <div className="social-icons">
        <a
          href="https://github.com/lubnafebin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/lubnafebin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://instagram.com/lubna_._febin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
    </div>
  );
}
