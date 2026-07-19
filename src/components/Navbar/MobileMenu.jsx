// =============================================
// Component: MobileMenu — Sidebar Mobile Nav
// =============================================
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaDownload } from "react-icons/fa";
import NavLinks from "./NavLinks";
import { NAV_LINKS, PERSONAL_INFO } from "../../utils/constants";

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-40 bg-dark-950/80 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Sidebar Panel */}
          <motion.aside
            key="sidebar"
            className="fixed top-0 right-0 h-full w-80 z-50 glass border-l border-primary/10 flex flex-col lg:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/5">
              <div>
                <p className="font-black text-lg gradient-text">{PERSONAL_INFO.name}</p>
                <p className="text-xs text-dark-400 font-mono">MERN Developer</p>
              </div>
              <motion.button
                onClick={onClose}
                className="w-9 h-9 rounded-xl flex items-center justify-center glass hover:bg-white/5 text-dark-300 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Close menu"
              >
                <FaTimes />
              </motion.button>
            </div>

            {/* Nav Links */}
            <div className="flex-1 overflow-y-auto p-6">
              <NavLinks links={NAV_LINKS} onClick={onClose} mobile={true} />
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-white/5 flex flex-col gap-3">
              <a
                href={PERSONAL_INFO.resumeUrl}
                download
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold text-white transition-all duration-300"
                style={{ background: "linear-gradient(135deg, #6366F1, #8B5CF6)" }}
                onClick={onClose}
              >
                <FaDownload className="text-xs" />
                Download Resume
              </a>
              <a
                href={PERSONAL_INFO.cvUrl}
                download
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold text-dark-200 border border-primary/20 hover:border-primary/50 hover:bg-white/5 transition-all duration-300 glass"
                onClick={onClose}
              >
                <FaDownload className="text-xs" />
                Download CV
              </a>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
