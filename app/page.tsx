import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import HowIWork from "@/components/sections/HowIWork";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import { site } from "@/content/portfolio";

const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.url,
};

// Section order: Hero → Experience → Projects → Skills → How I work → Testimonials → Contact.
// scroll-mt keeps headings clear of the sticky header when jumping to a section.
export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteStructuredData).replace(/</g, "\\u003c"),
        }}
      />
      <section id="about" className="scroll-mt-20">
        <About />
      </section>

      <section id="experiences" className="scroll-mt-20 py-section">
        <Experience />
      </section>

      <section id="projects" className="scroll-mt-20 py-section">
        <Projects />
      </section>

      <section id="skills" className="scroll-mt-20 py-section">
        <Skills />
      </section>

      <section id="how-i-work" className="scroll-mt-20 py-section">
        <HowIWork />
      </section>

      <section id="testimonials" className="scroll-mt-20 py-section">
        <Testimonials />
      </section>

      <section id="contact" className="scroll-mt-20 py-section">
        <Contact />
      </section>
    </>
  );
}
