// =============================================
// Utils: Animation Variants — Framer Motion
// =============================================

/* --- Fade Variants --- */
export const fadeIn = (direction = "up", delay = 0, duration = 0.6) => ({
  hidden: {
    opacity: 0,
    y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
    x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
      delay,
      duration,
    },
  },
});

/* --- Stagger Container --- */
export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

/* --- Zoom In --- */
export const zoomIn = (delay = 0, duration = 0.5) => ({
  hidden: { opacity: 0, scale: 0.7 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 120,
      delay,
      duration,
    },
  },
});

/* --- Slide In from Side --- */
export const slideIn = (direction = "left", delay = 0) => ({
  hidden: {
    x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
    y: direction === "up" ? "100%" : direction === "down" ? "-100%" : 0,
    opacity: 0,
  },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 120,
      delay,
    },
  },
});

/* --- Text Character Animation --- */
export const textVariant = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      delay,
    },
  },
});

/* --- Card Hover --- */
export const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.02,
    y: -8,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

/* --- Navbar Link Hover --- */
export const navLinkHover = {
  rest: { scaleX: 0 },
  hover: {
    scaleX: 1,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

/* --- Button Hover --- */
export const buttonVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};

/* --- Float Animation --- */
export const floatVariant = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

/* --- Rotate Animation --- */
export const rotateVariant = {
  initial: { rotate: 0 },
  animate: {
    rotate: 360,
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

/* --- Progress Bar --- */
export const progressBarVariant = (width) => ({
  hidden: { width: 0 },
  visible: {
    width: `${width}%`,
    transition: { duration: 1.5, ease: "easeOut", delay: 0.2 },
  },
});

/* --- Counter --- */
export const counterVariant = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

/* --- Modal --- */
export const modalVariant = {
  hidden: { opacity: 0, scale: 0.85, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 25 },
  },
  exit: {
    opacity: 0,
    scale: 0.85,
    y: 30,
    transition: { duration: 0.25, ease: "easeIn" },
  },
};

/* --- Backdrop --- */
export const backdropVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

/* --- Page Transition --- */
export const pageVariant = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.6 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

/* --- Section Title --- */
export const sectionTitleVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* --- Timeline Item --- */
export const timelineVariant = (isLeft) => ({
  hidden: {
    opacity: 0,
    x: isLeft ? -50 : 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
});

/* --- Testimonial Slide --- */
export const testimonialVariant = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 200, damping: 25 },
  },
  exit: (direction) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    transition: { duration: 0.3 },
  }),
};
