import React from "react";
import { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Main() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };
  return (
    <div>
      <nav className="navbar">
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={menuOpen ? "bar rotate-top" : "bar"}></span>
          <span className={menuOpen ? "bar hide-middle" : "bar"}></span>
          <span className={menuOpen ? "bar rotate-bottom" : "bar"}></span>
        </div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <a href="#home" onClick={handleLinkClick}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={handleLinkClick}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" onClick={handleLinkClick}>
              Works
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleLinkClick}>
              Contact
            </a>
          </li>
        </ul>
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
        <div className="social-icons">
          <a
            href="https://github.com/lubnafebin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/lubna-febin/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com/lubna._.febin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </section>
    </div>
  );
}
