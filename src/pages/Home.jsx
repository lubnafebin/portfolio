
import About from "./About";
import { Contact } from "./Contact";
import Main from "./Main";
import { Projects } from "./Projects";

export default function Home() {
  return (
    <>
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
