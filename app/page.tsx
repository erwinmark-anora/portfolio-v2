import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <section id="about" className="scroll-mt-20">
        <About />
      </section>

      <section id="experiences" className="scroll-mt-20 mb-60">
        <Experience />
      </section>

      <section id="projects" className="scroll-mt-20">
        <Projects />
      </section>

      <section id="testimonials" className="scroll-mt-20">
        <Testimonials />
      </section>

      <section id="contact" className="scroll-mt-20">
        <Contact />
      </section>
    </>
  );
}
