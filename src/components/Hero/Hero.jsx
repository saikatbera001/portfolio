// =============================================
// Component: Hero — Main Landing Section
// =============================================
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";
import { FaCode, FaMapMarkerAlt } from "react-icons/fa";
import HeroButtons from "./HeroButtons";
import SocialIcons from "./SocialIcons";
import FloatingShapes from "./FloatingShapes";
import { fadeIn, staggerContainer } from "../../utils/animation";
import { PERSONAL_INFO } from "../../utils/constants";

const Hero = () => {
  const typedRef = useRef(null);
  const typedInstance = useRef(null);

  /* --- Typed.js Animation --- */
  useEffect(() => {
    typedInstance.current = new Typed(typedRef.current, {
      strings: [
        "Full Stack MERN Developer",
        "AI Application Developer",
        "Agentic AI Enthusiast",
        "React & Node.js Expert",
        "Open Source Contributor",
      ],
      typeSpeed: 60,
      backSpeed: 35,
      backDelay: 2000,
      loop: true,
      smartBackspace: true,
    });
    return () => typedInstance.current?.destroy();
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Floating Tech Icons in background */}
      <FloatingShapes />

      {/* Hero Content */}
      <motion.div
        className="section-container relative z-10 pt-24 pb-16"
        variants={staggerContainer(0.15, 0.2)}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text Content */}
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            {/* Status Badge */}
            <motion.div
              variants={fadeIn("down", 0)}
              className="flex items-center gap-2"
            >
              <span className="badge">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for Freelance
              </span>
            </motion.div>

            {/* Greeting */}
            <motion.div variants={fadeIn("up", 0.1)}>
              <p className="text-dark-400 font-mono text-sm mb-2 flex items-center gap-2">
                <FaCode className="text-primary" />
                Hello World, I'm
              </p>
              <h1 className="heading-xl text-dark-50 mb-2">
                Saikat{" "}
                <span className="gradient-text text-glow">Bera</span>
              </h1>

              {/* Typing Animation */}
              <div className="flex items-center gap-3 h-10">
                <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-dark-300">
                  &lt;{" "}
                </span>
                <span
                  ref={typedRef}
                  className="text-xl sm:text-2xl md:text-3xl font-bold gradient-text-primary"
                />
                <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-dark-300">
                  {" "}/&gt;
                </span>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.p
              variants={fadeIn("up", 0.2)}
              className="text-dark-400 text-base sm:text-lg leading-relaxed max-w-xl"
            >
              {PERSONAL_INFO.bio}
            </motion.p>

            {/* Location & Experience */}
            <motion.div
              variants={fadeIn("up", 0.3)}
              className="flex flex-wrap items-center gap-4 text-sm text-dark-500"
            >
              <span className="flex items-center gap-1.5">
                <FaMapMarkerAlt className="text-primary" />
                {PERSONAL_INFO.location}
              </span>
              <span className="w-1 h-1 rounded-full bg-dark-600" />
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                2+ Years Experience
              </span>
              <span className="w-1 h-1 rounded-full bg-dark-600" />
              <span>{PERSONAL_INFO.university}</span>
            </motion.div>

            {/* CTA Buttons */}
            <HeroButtons />

            {/* Social Icons */}
            <motion.div
              variants={fadeIn("up", 0.5)}
              className="flex items-center gap-4"
            >
              <span className="text-dark-600 text-xs font-mono">Connect:</span>
              <SocialIcons />
            </motion.div>
          </div>

          {/* Right — Profile Card */}
          <div className="flex justify-center order-1 lg:order-2">
            <motion.div
              variants={fadeIn("left", 0.3)}
              className="relative"
            >
              {/* Blob Background */}
              <div
                className="absolute inset-0 rounded-full opacity-30 animate-blob"
                style={{
                  background: "radial-gradient(circle, rgba(99,102,241,0.6) 0%, rgba(139,92,246,0.4) 50%, transparent 70%)",
                  filter: "blur(30px)",
                  transform: "scale(1.3)",
                }}
              />

              {/* Profile Image Container */}
              <motion.div
                className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Rotating Border Ring */}
                <div
                  className="absolute inset-0 rounded-full animate-spin-slow"
                  style={{
                    background: "conic-gradient(from 0deg, #6366F1, #8B5CF6, #06B6D4, transparent, #6366F1)",
                    padding: "3px",
                    borderRadius: "50%",
                  }}
                >
                  <div className="w-full h-full rounded-full bg-dark-900" />
                </div>

                {/* Profile Image */}
                <div className="absolute inset-3 rounded-full overflow-hidden glass">
                  <div
                    className="w-full h-full rounded-full flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, rgba(99,102,241,0.3), rgba(139,92,246,0.2), rgba(6,182,212,0.2))",
                    }}
                  >
                    {/* Avatar Placeholder */}
                    <div className="text-center">
                      <div
                        className="w-28 h-28 rounded-full mx-auto mb-3 flex items-center justify-center font-black text-4xl text-white shadow-glow"
                        style={{ background: "linear-gradient(135deg, #6366F1, #8B5CF6)" }}
                      >
                        SB
                      </div>
                      <p className="text-dark-300 text-sm font-mono">Saikat Bera</p>
                      <p className="text-dark-500 text-xs">MERN Developer</p>
                    </div>
                  </div>
                </div>

                {/* Floating Badge — Experience */}
                <motion.div
                  className="absolute -bottom-4 -left-4 glass rounded-xl px-3 py-2 shadow-glow-sm"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                >
                  <p className="text-xs text-dark-400 font-mono">Experience</p>
                  <p className="gradient-text font-black text-lg">2+ Years</p>
                </motion.div>

                {/* Floating Badge — Projects */}
                <motion.div
                  className="absolute -top-4 -right-4 glass rounded-xl px-3 py-2 shadow-glow-sm"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                >
                  <p className="text-xs text-dark-400 font-mono">Projects</p>
                  <p className="gradient-text font-black text-lg">20+</p>
                </motion.div>

                {/* Floating Badge — AI */}
                <motion.div
                  className="absolute top-1/2 -right-8 glass rounded-xl px-3 py-2 shadow-glow-sm"
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}
                >
                  <p className="text-xs text-emerald-400 font-mono flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    AI Ready
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-dark-500 text-xs font-mono">Scroll Down</span>
          <div className="w-5 h-8 border border-dark-600 rounded-full flex items-start justify-center pt-1">
            <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
