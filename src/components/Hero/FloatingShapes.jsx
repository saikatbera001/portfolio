// =============================================
// Component: FloatingShapes — Hero background icons
// =============================================
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaDocker } from "react-icons/fa";
import { SiMongodb, SiExpress, SiAnthropic, SiTailwindcss } from "react-icons/si";

const techIcons = [
  { Icon: FaReact, color: "#61DAFB", label: "React", x: "8%", y: "20%" },
  { Icon: FaNodeJs, color: "#68A063", label: "Node.js", x: "85%", y: "15%" },
  { Icon: SiMongodb, color: "#47A248", label: "MongoDB", x: "5%", y: "65%" },
  { Icon: SiExpress, color: "#aaa", label: "Express", x: "90%", y: "60%" },
  { Icon: FaPython, color: "#3776AB", label: "Python", x: "75%", y: "80%" },
  { Icon: SiAnthropic, color: "#10A37F", label: "AI", x: "15%", y: "82%" },
  { Icon: FaDocker, color: "#2496ED", label: "Docker", x: "88%", y: "38%" },
  { Icon: SiTailwindcss, color: "#38BDF8", label: "Tailwind", x: "2%", y: "42%" },
];

const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {techIcons.map(({ Icon, color, label, x, y }, i) => (
        <motion.div
          key={label}
          className="absolute flex flex-col items-center gap-1 opacity-0 sm:opacity-100"
          style={{ left: x, top: y }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
          whileHover={{ scale: 1.2, opacity: 1 }}
        >
          <div
            className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl glass flex items-center justify-center shadow-card"
            style={{ boxShadow: `0 0 15px ${color}30` }}
          >
            <Icon style={{ color, fontSize: "1.3rem" }} />
          </div>
          <span className="text-dark-500 text-xs font-mono hidden lg:block">{label}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingShapes;
