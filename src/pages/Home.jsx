// =============================================
// Page: Home — Main Portfolio Page
// =============================================
import { motion } from "framer-motion";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Skills from "../components/About/Skills";
import Experience from "../components/About/Experience";
import Services from "../components/Services/Services";
import Projects from "../components/Projects/Projects";
import TechStack from "../components/TechStack/TechStack";
import Timeline from "../components/Timeline/Timeline";
import Education from "../components/Education/Education";
import Certifications from "../components/Certifications/Certifications";
import Achievements from "../components/Achievements/Achievements";
import Statistics from "../components/Statistics/Statistics";
import Testimonials from "../components/Testimonials/Testimonials";
import Contact from "../components/Contact/Contact";
import { pageVariant } from "../utils/animation";

const Home = () => {
  return (
    <motion.div
      variants={pageVariant}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Hero */}
      <Hero />

      {/* Statistics Banner */}
      <Statistics />

      {/* About Me */}
      <About />

      {/* Skills */}
      <Skills />

      {/* Experience (inside About section group) */}
      <section className="section-padding">
        <div className="section-container">
          <Experience />
        </div>
      </section>

      {/* Services */}
      <Services />

      {/* Projects */}
      <Projects />

      {/* Tech Stack */}
      <TechStack />

      {/* Timeline */}
      <Timeline />

      {/* Education & Certifications */}
      <Education />

      {/* Achievements */}
      <Achievements />

      {/* Testimonials */}
      <Testimonials />

      {/* Contact */}
      <Contact />
    </motion.div>
  );
};

export default Home;
