// =============================================
// Component: Button — Reusable Button
// =============================================
import { motion } from "framer-motion";
import { buttonVariants } from "../../utils/animation";

/**
 * Reusable Button component
 * @param {string} variant — "primary" | "outline" | "ghost" | "danger"
 * @param {string} size — "sm" | "md" | "lg"
 * @param {boolean} glow — enable glow effect
 */
const Button = ({
  children,
  variant = "primary",
  size = "md",
  glow = false,
  className = "",
  onClick,
  href,
  target,
  rel,
  type = "button",
  disabled = false,
  icon,
  iconRight,
  ...props
}) => {
  /* --- Size Classes --- */
  const sizeClasses = {
    sm: "px-4 py-2 text-sm gap-1.5",
    md: "px-6 py-3 text-sm gap-2",
    lg: "px-8 py-4 text-base gap-2.5",
  };

  /* --- Variant Classes --- */
  const variantClasses = {
    primary:
      "bg-gradient-to-r from-primary to-secondary text-white shadow-glow hover:shadow-glow-lg",
    outline:
      "border border-primary/40 text-primary hover:bg-primary/10 hover:border-primary backdrop-blur-sm",
    ghost:
      "text-dark-300 hover:text-white hover:bg-white/5",
    danger:
      "bg-gradient-to-r from-red-500 to-rose-600 text-white",
    cyan:
      "bg-gradient-to-r from-accent to-secondary text-white shadow-glow-cyan",
    glass:
      "glass text-dark-100 hover:border-primary/40",
  };

  const baseClasses = `
    inline-flex items-center justify-center font-semibold rounded-xl
    transition-all duration-300 relative overflow-hidden
    disabled:opacity-50 disabled:cursor-not-allowed
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${glow ? "animate-glow" : ""}
    ${className}
  `;

  const content = (
    <>
      {/* Shimmer overlay on hover */}
      <span className="absolute inset-0 translate-x-[-100%] hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 skew-x-12" />
      {icon && <span className="relative z-10">{icon}</span>}
      <span className="relative z-10">{children}</span>
      {iconRight && <span className="relative z-10">{iconRight}</span>}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        className={baseClasses}
        variants={buttonVariants}
        initial="rest"
        whileHover="hover"
        whileTap="tap"
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
      variants={buttonVariants}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      {...props}
    >
      {content}
    </motion.button>
  );
};

export default Button;
