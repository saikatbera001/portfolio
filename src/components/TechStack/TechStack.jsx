// =============================================
// Component: TechStack — Tech Stack Showcase
// =============================================
import { motion } from "framer-motion";
import {
  FaReact, FaNodeJs, FaPython, FaJava, FaDocker, FaGithub, FaAws,
} from "react-icons/fa";
import {
  SiMongodb, SiExpress, SiTailwindcss, SiRedux, SiNextdotjs,
  SiAnthropic, SiLangchain, SiTypescript, SiJavascript, SiVercel, SiPostgresql,
  SiFirebase, SiNginx,
} from "react-icons/si";
import SectionTitle from "../Common/SectionTitle";
import TechCard from "./TechCard";

/* --- All technologies grouped --- */
const techGroups = [
  {
    label: "Frontend",
    color: "#06B6D4",
    items: [
      { Icon: FaReact, name: "React.js", color: "#61DAFB" },
      { Icon: SiNextdotjs, name: "Next.js", color: "#FFFFFF" },
      { Icon: SiTailwindcss, name: "Tailwind", color: "#38BDF8" },
      { Icon: SiRedux, name: "Redux", color: "#764ABC" },
      { Icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
      { Icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
    ],
  },
  {
    label: "Backend",
    color: "#68A063",
    items: [
      { Icon: FaNodeJs, name: "Node.js", color: "#68A063" },
      { Icon: SiExpress, name: "Express.js", color: "#FFFFFF" },
      { Icon: FaPython, name: "Python", color: "#3776AB" },
      { Icon: SiMongodb, name: "MongoDB", color: "#47A248" },
      { Icon: SiPostgresql, name: "PostgreSQL", color: "#336791" },
      { Icon: SiFirebase, name: "Firebase", color: "#FFCA28" },
    ],
  },
  {
    label: "AI / ML",
    color: "#10A37F",
    items: [
      { Icon: SiAnthropic, name: "OpenAI", color: "#10A37F" },
      { Icon: SiLangchain, name: "LangChain", color: "#4CAF50" },
      { Icon: FaPython, name: "Pinecone", color: "#5959F5" },
    ],
  },
  {
    label: "DevOps",
    color: "#2496ED",
    items: [
      { Icon: FaDocker, name: "Docker", color: "#2496ED" },
      { Icon: FaGithub, name: "GitHub", color: "#FFFFFF" },
      { Icon: FaAws, name: "AWS", color: "#FF9900" },
      { Icon: SiVercel, name: "Vercel", color: "#FFFFFF" },
      { Icon: SiNginx, name: "Nginx", color: "#009639" },
    ],
  },
];

const TechStack = () => {
  return (
    <section id="techstack" className="section-padding relative">
      <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />
      <div className="section-container relative z-10">
        <SectionTitle
          badge="My Toolkit"
          title="Tech"
          highlight="Stack"
          subtitle="Technologies I use to bring ideas to life — from frontend pixels to AI pipelines."
        />

        <div className="flex flex-col gap-10">
          {techGroups.map((group) => (
            <div key={group.label}>
              {/* Group Label */}
              <motion.div
                className="flex items-center gap-3 mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ background: group.color, boxShadow: `0 0 10px ${group.color}` }}
                />
                <h3 className="text-sm font-semibold text-dark-400 font-mono uppercase tracking-widest">
                  {group.label}
                </h3>
                <div className="flex-1 h-px bg-dark-800" />
              </motion.div>

              {/* Tech Grid */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
                {group.items.map((tech, i) => (
                  <TechCard key={tech.name} tech={tech} index={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
