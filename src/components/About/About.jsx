// =============================================
// Component: About — About Me Section
// =============================================
import { motion } from "framer-motion";
import { FaDownload, FaCode, FaBriefcase, FaGraduationCap, FaHeart } from "react-icons/fa";
import SectionTitle from "../Common/SectionTitle";
import { fadeIn, staggerContainer } from "../../utils/animation";
import { PERSONAL_INFO } from "../../utils/constants";

const highlights = [
  { icon: FaCode, label: "Projects", value: "20+", color: "#6366F1" },
  { icon: FaBriefcase, label: "Internships", value: "2", color: "#8B5CF6" },
  { icon: FaGraduationCap, label: "Degree", value: "MCA", color: "#06B6D4" },
  { icon: FaHeart, label: "Focus", value: "Frontend", color: "#EF4444" },
];

const About = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="section-container">
        <SectionTitle
          badge="Who I Am"
          title="About"
          highlight="Me"
          subtitle="A frontend developer passionate about building responsive, accessible web applications with modern technologies."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Image & Stats */}
          <motion.div
            className="relative"
            variants={fadeIn("right", 0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Main Card */}
            <div className="relative glass rounded-3xl p-8 overflow-hidden">
              {/* Gradient accent */}
              <div
                className="absolute -top-20 -left-20 w-64 h-64 rounded-full opacity-10"
                style={{ background: "radial-gradient(circle, #6366F1, transparent)" }}
              />

              {/* Avatar */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center font-black text-2xl text-white shadow-glow"
                  style={{ background: "linear-gradient(135deg, #6366F1, #8B5CF6)" }}
                >
                  SB
                </div>
                <div>
                  <h3 className="font-bold text-dark-100 text-lg">{PERSONAL_INFO.name}</h3>
                  <p className="text-dark-400 text-sm">{PERSONAL_INFO.title}</p>
                  <p className="text-dark-500 text-xs flex items-center gap-1 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {PERSONAL_INFO.location}
                  </p>
                </div>
              </div>

              {/* Code block style bio */}
              <div className="code-block mb-6">
                <p className="text-primary text-xs mb-1 font-mono">// about.js</p>
                <p>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-cyan-400">developer</span> = {"{"};
                </p>
                <p className="pl-4">
                  <span className="text-dark-400">name:</span>{" "}
                  <span className="text-emerald-400">"Saikat Bera"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-dark-400">role:</span>{" "}
                  <span className="text-emerald-400">"Frontend Developer"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-dark-400">stack:</span>{" "}
                  <span className="text-yellow-400">["React", "JavaScript", "HTML5", "CSS3"]</span>,
                </p>
                <p className="pl-4">
                  <span className="text-dark-400">tools:</span>{" "}
                  <span className="text-yellow-400">["Git", "Webpack", "npm", "REST APIs"]</span>,
                </p>
                <p className="pl-4">
                  <span className="text-dark-400">available:</span>{" "}
                  <span className="text-blue-400">true</span>
                </p>
                <p>{"}"};</p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3">
                {highlights.map(({ icon: Icon, label, value, color }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 p-3 rounded-xl bg-dark-800/50 border border-white/5"
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ background: `${color}20` }}
                    >
                      <Icon style={{ color, fontSize: "0.9rem" }} />
                    </div>
                    <div>
                      <p className="font-bold text-dark-100 text-sm">{value}</p>
                      <p className="text-dark-500 text-xs">{label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Text Content */}
          <motion.div
            className="flex flex-col gap-6"
            variants={staggerContainer(0.1, 0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeIn("left", 0)}>
              <h3 className="text-2xl font-bold text-dark-100 mb-4">
                Building Responsive Interfaces with{" "}
                <span className="gradient-text">React & Modern Web Tech</span>
              </h3>
              <p className="text-dark-400 leading-relaxed mb-4">{PERSONAL_INFO.bio}</p>
              <p className="text-dark-400 leading-relaxed">{PERSONAL_INFO.bio2}</p>
            </motion.div>

            {/* Info Grid */}
            <motion.div variants={fadeIn("left", 0.1)} className="grid sm:grid-cols-2 gap-4">
              {[
                { label: "Name", value: PERSONAL_INFO.name },
                { label: "Phone", value: PERSONAL_INFO.phone },
                { label: "Email", value: PERSONAL_INFO.email },
                { label: "Location", value: "Kolkata, West Bengal" },
                { label: "Degree", value: "BCA (6.78 GPA) | MCA (Pursuing)" },
                { label: "Status", value: "Open to Opportunities ✓" },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  <div>
                    <p className="text-dark-500 text-xs font-mono">{label}</p>
                    <p className="text-dark-200 text-sm font-medium">{value}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Download CV */}
            <motion.div variants={fadeIn("up", 0.2)}>
              <a
                href={PERSONAL_INFO.cvUrl}
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white shadow-glow hover:shadow-glow-lg transition-shadow duration-300"
                style={{ background: "linear-gradient(135deg, #6366F1, #8B5CF6)" }}
              >
                <FaDownload className="text-xs" />
                Download CV
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
