// =============================================
// Component: Experience — Work Experience
// =============================================
import { motion } from "framer-motion";
import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from "react-icons/fa";
import { fadeIn, staggerContainer } from "../../utils/animation";

const experiences = [
  {
    id: 1,
    role: "Web Development Intern",
    company: "TechStartup Pvt. Ltd.",
    location: "Kolkata, West Bengal",
    duration: "Jan 2023 – Jul 2023",
    type: "Internship",
    color: "#6366F1",
    description:
      "Worked on React.js dashboards, Node.js REST APIs, and MongoDB database optimization. Contributed to 3 production-level features.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    achievements: [
      "Reduced API response time by 40% through MongoDB indexing",
      "Built reusable component library with 20+ components",
      "Implemented JWT authentication for 5000+ users",
    ],
  },
  {
    id: 2,
    role: "Freelance MERN Developer",
    company: "Self-Employed",
    location: "Remote",
    duration: "Aug 2023 – Present",
    type: "Freelance",
    color: "#8B5CF6",
    description:
      "Building full-stack web applications and AI-powered tools for clients. Specialized in MERN stack, RESTful APIs, and AI integrations.",
    tech: ["React", "Next.js", "Node.js", "MongoDB", "OpenAI", "LangChain"],
    achievements: [
      "Delivered 12+ successful client projects",
      "Built AI chatbot with 95% user satisfaction",
      "Integrated payment gateways for 3 e-commerce projects",
    ],
  },
];

const Experience = () => {
  return (
    <motion.div
      className="mt-16"
      variants={staggerContainer(0.15)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h3 className="text-xl font-bold text-dark-100 mb-8 flex items-center gap-3">
        <FaBriefcase className="text-primary" />
        Work Experience
      </h3>

      <div className="flex flex-col gap-6">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.id}
            variants={fadeIn("up", i * 0.1)}
            className="glass rounded-2xl p-6 hover:shadow-glow-sm transition-shadow duration-300"
            whileHover={{ y: -2 }}
          >
            {/* Header */}
            <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ background: exp.color }}
                  />
                  <h4 className="font-bold text-dark-100">{exp.role}</h4>
                  <span
                    className="px-2 py-0.5 rounded-full text-xs font-medium"
                    style={{ background: `${exp.color}20`, color: exp.color }}
                  >
                    {exp.type}
                  </span>
                </div>
                <p className="text-dark-300 text-sm font-medium">{exp.company}</p>
                <div className="flex items-center gap-3 text-xs text-dark-500 mt-1">
                  <span className="flex items-center gap-1">
                    <FaCalendar className="text-primary/60" />
                    {exp.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaMapMarkerAlt className="text-primary/60" />
                    {exp.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-dark-400 text-sm leading-relaxed mb-4">{exp.description}</p>

            {/* Achievements */}
            <ul className="flex flex-col gap-1.5 mb-4">
              {exp.achievements.map((ach, j) => (
                <li key={j} className="flex items-start gap-2 text-sm text-dark-400">
                  <span className="text-primary mt-0.5">▸</span>
                  {ach}
                </li>
              ))}
            </ul>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {exp.tech.map((tech) => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
