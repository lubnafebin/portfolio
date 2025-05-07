
import About from "./About";
import { Contact } from "./Contact";
import Main from "./Main";
import { Projects } from "./Projects";

export default function Home() {
  return (
    <>
      {/* 👇 Wrap the Main in a section with id="home" */}
      <section id="home">
        <Main />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
}
