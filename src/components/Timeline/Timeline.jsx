// =============================================
// Component: Timeline — Vertical Career Timeline
// =============================================
import { motion } from "framer-motion";
import {
  FaGraduationCap, FaBriefcase, FaCode, FaBrain, FaRobot,
} from "react-icons/fa";
import SectionTitle from "../Common/SectionTitle";
import { timelineEvents } from "../../data/timeline";
import { fadeIn } from "../../utils/animation";

const iconMap = {
  FaGraduationCap, FaBriefcase, FaCode, FaBrain, FaRobot,
};

const typeColors = {
  education: "#6366F1",
  work: "#10B981",
  project: "#8B5CF6",
  milestone: "#06B6D4",
};

const Timeline = () => {
  return (
    <section id="timeline" className="section-padding relative">
      <div className="section-container">
        <SectionTitle
          badge="My Journey"
          title="Career"
          highlight="Timeline"
          subtitle="From curious student to full-stack developer and AI enthusiast — the milestones that shaped me."
        />

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center Line */}
          <div className="timeline-line hidden md:block" />

          <div className="flex flex-col gap-8">
            {timelineEvents.map((event, i) => {
              const Icon = iconMap[event.icon] || FaCode;
              const isLeft = i % 2 === 0;
              const color = typeColors[event.type] || "#6366F1";

              return (
                <motion.div
                  key={event.id}
                  className={`relative flex items-center ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-4`}
                  variants={fadeIn(isLeft ? "right" : "left", i * 0.08)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                >
                  {/* Card */}
                  <div className="flex-1 md:w-5/12">
                    <motion.div
                      className="glass rounded-2xl p-5 hover:shadow-glow-sm transition-shadow duration-300"
                      whileHover={{ y: -3 }}
                    >
                      {/* Header */}
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <span
                            className="text-xs font-mono px-2 py-0.5 rounded-md mb-2 inline-block capitalize"
                            style={{ background: `${color}20`, color }}
                          >
                            {event.type}
                          </span>
                          <h3 className="font-bold text-dark-100 text-base">{event.title}</h3>
                          <p className="text-dark-400 text-sm">{event.subtitle}</p>
                        </div>
                        <span
                          className="font-black text-2xl opacity-20"
                          style={{ color }}
                        >
                          {event.year}
                        </span>
                      </div>
                      <p className="text-dark-500 text-sm leading-relaxed">{event.description}</p>
                    </motion.div>
                  </div>

                  {/* Center Icon (md+) */}
                  <div className="hidden md:flex flex-col items-center gap-2 z-10 w-12">
                    <motion.div
                      className="w-12 h-12 rounded-full flex items-center justify-center shadow-card"
                      style={{ background: `linear-gradient(135deg, ${color}, ${color}88)` }}
                      whileHover={{ scale: 1.2 }}
                    >
                      <Icon className="text-white text-base" />
                    </motion.div>
                    <span
                      className="text-xs font-bold font-mono"
                      style={{ color }}
                    >
                      {event.year}
                    </span>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
