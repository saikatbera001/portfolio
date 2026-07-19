// =============================================
// Component: Card — Reusable Glass Card
// =============================================
import { motion } from "framer-motion";
import { cardHover } from "../../utils/animation";

/**
 * Reusable glassmorphism Card component
 */
const Card = ({
  children,
  className = "",
  hover = true,
  glow = false,
  gradient = false,
  padding = "md",
  onClick,
  ...props
}) => {
  const paddingClasses = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <motion.div
      className={`
        glass rounded-2xl
        ${paddingClasses[padding]}
        ${glow ? "shadow-glow" : "shadow-card"}
        ${gradient ? "gradient-border" : ""}
        ${onClick ? "cursor-pointer" : ""}
        ${className}
      `}
      variants={hover ? cardHover : undefined}
      initial={hover ? "rest" : undefined}
      whileHover={hover ? "hover" : undefined}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
