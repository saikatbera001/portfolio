// =============================================
// Component: SectionTitle — Reusable Title
// =============================================
import { motion } from "framer-motion";
import { sectionTitleVariant } from "../../utils/animation";

/**
 * Reusable section heading with animated underline and badge
 */
const SectionTitle = ({
  badge,
  title,
  highlight,
  subtitle,
  center = true,
  className = "",
}) => {
  return (
    <motion.div
      className={`mb-16 ${center ? "text-center" : ""} ${className}`}
      variants={sectionTitleVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Badge */}
      {badge && (
        <motion.span
          className="badge mb-4 inline-block"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
          {badge}
        </motion.span>
      )}

      {/* Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-dark-50 mb-4 leading-tight">
        {title}{" "}
        {highlight && (
          <span className="gradient-text">{highlight}</span>
        )}
      </h2>

      {/* Animated Line */}
      <motion.div
        className={`flex items-center gap-2 mb-6 ${center ? "justify-center" : ""}`}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{ originX: center ? "50%" : "0%" }}
      >
        <div className="h-1 w-12 rounded-full bg-gradient-to-r from-primary to-secondary" />
        <div className="w-2 h-2 rounded-full bg-accent" />
        <div className="h-1 w-6 rounded-full bg-gradient-to-r from-secondary to-accent" />
      </motion.div>

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          className="text-dark-400 text-base sm:text-lg max-w-2xl leading-relaxed"
          style={{ margin: center ? "0 auto" : "0" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
