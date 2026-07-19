// =============================================
// Component: TechCard — Individual Tech Card
// =============================================
import { motion } from "framer-motion";

const TechCard = ({ tech, index }) => {
  return (
    <motion.div
      className="group flex flex-col items-center gap-2 p-4 glass rounded-2xl hover:shadow-glow-sm transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, type: "spring", stiffness: 120 }}
      whileHover={{ y: -6, scale: 1.05 }}
      data-cursor="pointer"
    >
      {/* Icon wrapper */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
        style={{
          background: `${tech.color}15`,
          boxShadow: `0 0 0 0 ${tech.color}`,
          transition: "box-shadow 0.3s ease",
        }}
      >
        <tech.Icon style={{ color: tech.color, fontSize: "1.5rem" }} />
      </div>
      <span className="text-dark-400 text-xs text-center group-hover:text-dark-200 transition-colors font-medium">
        {tech.name}
      </span>
    </motion.div>
  );
};

export default TechCard;
