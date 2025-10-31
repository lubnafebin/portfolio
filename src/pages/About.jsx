export default function About() {
  return (
    <div className="about">
      <div className="about-left">
        <h2>About Me</h2>
        <p>
          I am an enthusiastic and creative Full Stack Developer with a strong passion 
          for building efficient, user-friendly, and visually appealing web applications. 
          My journey into technology began with a Bachelor’s degree in Computer Applications (BCA), 
          where I developed a deep interest in both frontend and backend development. 
          Through various personal projects, I have gained hands-on experience working with the 
          MERN stack (MongoDB, Express.js, React.js, Node.js), which has strengthened my technical 
          foundation and problem-solving skills.
        </p>
        <div className="skills-section">
          <h3>Technical Proficiency</h3>
          <p>Im well-versed in range of technologies includes:</p>
          <span className="d-inline-flex">HTML</span>
          <span className="d-inline-flex">CSS</span>
          <span className="d-inline-flex">Tailwind CSS</span>
          <span className="d-inline-flex">ReactJs</span>
          <span className="d-inline-flex">JavaScript</span>
          <span className="d-inline-flex">TypeScript</span>
          <span className="d-inline-flex">Bootstrap</span>
          <span className="d-inline-flex">MUI</span>
          <span className="d-inline-flex">ExpressJs</span>
          <span className="d-inline-flex">NodeJs</span>
          <span className="d-inline-flex">Flutter</span>
          <span className="d-inline-flex">MongoDB</span>
          <span className="d-inline-flex">MYSQL</span>
          <span className="d-inline-flex">Git</span>
          <span className="d-inline-flex">Github</span>
        </div>
      </div>
      <div className="about-right">
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-box">
              <h3>Primary Education</h3>
              <p>Attained primary education from Govt High school Rippon</p>
            </div>
            <div className="timeline-dot"></div>
          </div>
          <div className="timeline-item">
            <div className="timeline-box">
              <h3>Secondary Education</h3>
              <p>
                Attained secondary education at GHSS Meppadi with a focus on
                Computer Applications.
              </p>
            </div>
            <div className="timeline-dot"></div>
          </div>
          <div className="timeline-item">
            <div className="timeline-box">
              <h3>Under Graduation</h3>
              <p>Completed a Bachelor's degree in Computer Applications from Calicut University.</p>
            </div>
            <div className="timeline-dot"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
