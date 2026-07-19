// =============================================
// Component: ServiceCard — Individual Service Card
// =============================================
import { motion } from "framer-motion";
import { FaCode, FaPalette, FaServer, FaBrain, FaDatabase, FaRocket, FaLink, FaCog } from "react-icons/fa";
import { cardHover } from "../../utils/animation";

const iconMap = { FaCode, FaPalette, FaServer, FaBrain, FaDatabase, FaRocket, FaLink, FaCog };

const ServiceCard = ({ service, index }) => {
  const Icon = iconMap[service.icon];

  return (
    <motion.div
      className="glass rounded-2xl p-6 group cursor-default relative overflow-hidden"
      variants={cardHover}
      initial="rest"
      whileHover="hover"
      custom={index}
    >
      {/* Gradient Background Glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at top left, ${service.color}10, transparent 60%)`,
        }}
      />

      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, ${service.color}, transparent)` }}
      />

      {/* Icon */}
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
        style={{
          background: `linear-gradient(135deg, ${service.color}20, ${service.color}08)`,
          border: `1px solid ${service.color}30`,
        }}
      >
        {Icon && <Icon style={{ color: service.color, fontSize: "1.5rem" }} />}
      </div>

      {/* Content */}
      <h3 className="font-bold text-dark-100 text-lg mb-3 group-hover:text-white transition-colors">
        {service.title}
      </h3>
      <p className="text-dark-400 text-sm leading-relaxed mb-4">{service.description}</p>

      {/* Features */}
      <ul className="flex flex-col gap-2">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-xs text-dark-500">
            <span className="text-primary">▸</span>
            {feature}
          </li>
        ))}
      </ul>

      {/* Number Label */}
      <span
        className="absolute top-4 right-4 text-4xl font-black opacity-5 group-hover:opacity-10 transition-opacity"
        style={{ color: service.color }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>
    </motion.div>
  );
};

export default ServiceCard;
