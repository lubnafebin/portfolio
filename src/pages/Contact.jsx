import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export const Contact = () => {
  return (
    <div className="contact">
      <div className="text">
        <h3>Contact Me</h3>
        <p>Im available for any project according to my skills</p>
      </div>
      <div className="box">
        <div className="email">
          <div className="email-content">
            <MdEmail />
            <div className="email-text">
              <h4>Email</h4>
              <p>lubnafebin13@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="message">
          <div className="message-content">
            <h4>Message Me</h4>
            <div className="icons">
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
        </div>
      </div>
    </div>
  );
};
