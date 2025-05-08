import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-box">
        <h3 className="gradient-text">Contact Me</h3>
        <p className="description">
          Feel free to reach out via email or connect with me on social media.
        </p>

        <a
          href="mailto:lubnafebin13@gmail.com"
          className="email-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Say Hello
        </a>

        <div className="icons">
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
      </div>
    </div>
  );
};
