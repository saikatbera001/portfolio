// =============================================
// Component: Achievements — Key Achievements
// =============================================
import { motion } from "framer-motion";
import { FaTrophy, FaStar, FaRocket, FaCode, FaBrain, FaGithub } from "react-icons/fa";
import SectionTitle from "../Common/SectionTitle";
import { fadeIn, staggerContainer } from "../../utils/animation";

const achievements = [
  {
    id: 1,
    icon: FaTrophy,
    title: "Best Project Award",
    description: "Won 1st place in college annual tech fest for AI-Powered Attendance System",
    year: "2024",
    color: "#F59E0B",
  },
  {
    id: 2,
    icon: FaRocket,
    title: "12+ Successful Projects",
    description: "Delivered 12+ freelance projects with 100% client satisfaction rate",
    year: "2023-25",
    color: "#6366F1",
  },
  {
    id: 3,
    icon: FaCode,
    title: "Open Source Contributor",
    description: "Contributed to 10+ open source projects on GitHub with 150+ stars",
    year: "2023-25",
    color: "#8B5CF6",
  },
  {
    id: 4,
    icon: FaBrain,
    title: "AI Agent Builder",
    description: "Built production-ready AI agents with LangChain, MCP, and OpenAI GPT-4",
    year: "2025",
    color: "#10B981",
  },
  {
    id: 5,
    icon: FaStar,
    title: "Top Performer — BCA",
    description: "Graduated with 8.7 CGPA, ranking in top 5% of the department",
    year: "2024",
    color: "#EC4899",
  },
  {
    id: 6,
    icon: FaGithub,
    title: "Tech Community Leader",
    description: "Organized coding bootcamps and hackathons for 200+ college students",
    year: "2023-24",
    color: "#06B6D4",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="section-padding relative">
      <div className="section-container">
        <SectionTitle
          badge="Recognition"
          title="Key"
          highlight="Achievements"
          subtitle="Milestones that mark my growth as a developer and community contributor."
        />

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {achievements.map((ach, i) => {
            const Icon = ach.icon;
            return (
              <motion.div
                key={ach.id}
                variants={fadeIn("up", i * 0.07)}
                className="glass rounded-2xl p-5 group hover:shadow-glow-sm transition-all duration-300 flex gap-4"
                whileHover={{ y: -4 }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${ach.color}15` }}
                >
                  <Icon style={{ color: ach.color, fontSize: "1.3rem" }} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-dark-100 text-sm">{ach.title}</h3>
                  </div>
                  <p className="text-dark-400 text-xs leading-relaxed mb-2">{ach.description}</p>
                  <span className="text-xs font-mono" style={{ color: ach.color }}>{ach.year}</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
