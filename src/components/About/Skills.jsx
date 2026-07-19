// =============================================
// Component: Skills — Skills Section with Categories
// =============================================
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaJava, FaDocker, FaGithub, FaLinux, FaAws, FaBrain, FaDatabase, FaLayerGroup } from "react-icons/fa";
import {
  SiMongodb, SiExpress, SiTailwindcss, SiRedux, SiFirebase, SiNextdotjs,
  SiAnthropic, SiLangchain, SiHuggingface, SiTypescript, SiPostgresql, SiMysql, SiRedis, SiSupabase,
  SiJavascript, SiC, SiVercel, SiNginx, SiPostman, SiFramer, SiFastapi, SiGnubash,
} from "react-icons/si";
import SectionTitle from "../Common/SectionTitle";
import { skillCategories } from "../../data/skills";
import { fadeIn, staggerContainer, progressBarVariant } from "../../utils/animation";

/* Icon Map */
const iconMap = {
  FaReact, FaNodeJs, FaPython, FaJava, FaDocker, FaGithub, FaLinux, FaAws,
  FaBrain, FaDatabase, FaLayerGroup,
  SiMongodb, SiExpress, SiTailwindcss, SiRedux, SiFirebase, SiNextdotjs,
  SiAnthropic, SiLangchain, SiHuggingface, SiTypescript, SiPostgresql, SiMysql, SiRedis, SiSupabase,
  SiJavascript, SiC, SiVercel, SiNginx, SiPostman, SiFramer, SiFastapi, SiGnubash,
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const activeSkills = skillCategories.find((c) => c.id === activeCategory);

  return (
    <section id="skills" className="section-padding relative">
      <div className="section-container">
        <SectionTitle
          badge="What I Know"
          title="Technical"
          highlight="Skills"
          subtitle="A comprehensive toolkit built through real-world projects and continuous learning."
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {skillCategories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? "text-white shadow-glow-sm"
                  : "glass text-dark-400 hover:text-dark-200"
              }`}
              style={
                activeCategory === cat.id
                  ? { background: `linear-gradient(135deg, ${cat.color}CC, ${cat.color}88)` }
                  : {}
              }
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat.label}
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
            variants={staggerContainer(0.08)}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
          >
            {activeSkills?.skills.map((skill) => {
              const Icon = iconMap[skill.icon];
              return (
                <motion.div
                  key={skill.name}
                  variants={fadeIn("up")}
                  className="glass rounded-2xl p-4 hover:shadow-glow-sm transition-shadow duration-300 group"
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    {/* Icon */}
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: `${skill.color}18` }}
                    >
                      {Icon ? (
                        <Icon style={{ color: skill.color, fontSize: "1.2rem" }} />
                      ) : (
                        <span className="text-xs font-bold" style={{ color: skill.color }}>
                          {skill.name.slice(0, 2)}
                        </span>
                      )}
                    </div>
                    {/* Name & Level */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-dark-100 text-sm font-semibold">{skill.name}</span>
                        <span className="text-dark-500 text-xs font-mono">{skill.level}%</span>
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="skill-bar">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)` }}
                      variants={progressBarVariant(skill.level)}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;
