import { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Main() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      let current = "";
      const scrollPos = window.scrollY;

      sections.forEach((section) => {
        const offsetTop = section.offsetTop;
        const offsetHeight = section.offsetHeight;
        if (
          scrollPos >= offsetTop - 100 &&
          scrollPos < offsetTop + offsetHeight - 100
        ) {
          current = section.getAttribute("id");
        }
      });

      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
            <a
              href="#home"
              onClick={handleLinkClick}
              className={activeSection === "home" ? "active" : ""}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={handleLinkClick}
              className={activeSection === "about" ? "active" : ""}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={handleLinkClick}
              className={activeSection === "works" ? "active" : ""}
            >
              Works
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={handleLinkClick}
              className={activeSection === "contact" ? "active" : ""}
            >
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
            href="https://instagram.com/lubna__febin"
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
