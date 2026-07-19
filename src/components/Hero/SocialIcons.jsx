// =============================================
// Component: SocialIcons — Animated Social Links
// =============================================
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";
import { SOCIAL_LINKS } from "../../utils/constants";

const iconMap = {
  FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope,
};

const SocialIcons = ({ vertical = false, showLabel = false }) => {
  return (
    <div className={`flex ${vertical ? "flex-col" : "flex-row"} items-center gap-3`}>
      {SOCIAL_LINKS.map((social, i) => {
        const Icon = iconMap[social.icon];
        return (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className="group relative flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + i * 0.1, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
          >
            <div
              className="w-10 h-10 rounded-xl glass flex items-center justify-center text-dark-400 group-hover:text-white transition-all duration-300"
              style={{
                "--hover-color": social.color,
              }}
            >
              {Icon && (
                <Icon
                  className="text-base transition-colors duration-300"
                  style={{ color: "inherit" }}
                />
              )}
            </div>
            {/* Tooltip */}
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-dark-800 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap border border-primary/20 pointer-events-none">
              {social.name}
            </span>
            {showLabel && (
              <span className="text-dark-400 text-sm">{social.name}</span>
            )}
          </motion.a>
        );
      })}

      {/* Vertical line decoration */}
      {vertical && (
        <div className="w-px h-16 bg-gradient-to-b from-primary/50 to-transparent" />
      )}
    </div>
  );
};

export default SocialIcons;
