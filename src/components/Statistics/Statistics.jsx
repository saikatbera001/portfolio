// =============================================
// Component: Statistics — Animated Counters
// =============================================
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FaCode, FaCertificate, FaLayerGroup, FaStar, FaHeart, FaSmile } from "react-icons/fa";
import { STATS } from "../../utils/constants";
import { staggerContainer, fadeIn } from "../../utils/animation";

const iconMap = { FaCode, FaCertificate, FaLayerGroup, FaStar, FaHeart, FaSmile };

/* --- Animated Counter Hook --- */
const useCounter = (target, duration = 2000, start = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);

  return count;
};

/* --- Single Stat Item --- */
const StatItem = ({ stat, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const count = useCounter(stat.value, 2000, inView);
  const Icon = iconMap[stat.icon];

  return (
    <motion.div
      ref={ref}
      variants={fadeIn("up", index * 0.1)}
      className="flex flex-col items-center gap-3 glass rounded-2xl p-6 hover:shadow-glow-sm transition-shadow duration-300 group"
      whileHover={{ y: -4, scale: 1.02 }}
    >
      {/* Icon */}
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
        style={{ background: `${stat.color}15` }}
      >
        {Icon && <Icon style={{ color: stat.color, fontSize: "1.4rem" }} />}
      </div>

      {/* Counter */}
      <div className="text-center">
        <div
          className="text-4xl font-black mb-1"
          style={{ color: stat.color }}
        >
          {count}
          <span className="text-2xl">{stat.suffix}</span>
        </div>
        <p className="text-dark-400 text-sm font-medium">{stat.label}</p>
      </div>
    </motion.div>
  );
};

const Statistics = () => {
  return (
    <section id="statistics" className="section-padding relative">
      {/* Glow background */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(99,102,241,0.4), transparent)",
        }}
      />

      <div className="section-container relative z-10">
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {STATS.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Statistics;
