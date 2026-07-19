// =============================================
// Component: ScrollTop — Back to Top Button
// =============================================
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import useScroll from "../../hooks/useScroll";

const ScrollTop = () => {
  const { scrollY } = useScroll();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {scrollY > 400 && (
        <motion.button
          key="scroll-top"
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-xl flex items-center justify-center shadow-glow"
          style={{ background: "linear-gradient(135deg, #6366F1, #8B5CF6)" }}
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(99,102,241,0.7)" }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-white text-sm" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollTop;
