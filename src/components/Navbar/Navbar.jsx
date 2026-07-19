// =============================================
// Component: Navbar — Sticky Glassmorphism Nav
// =============================================
import { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaDownload, FaSun, FaMoon } from "react-icons/fa";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import { useTheme } from "../../context/ThemeContext";
import { NAV_LINKS, PERSONAL_INFO } from "../../utils/constants";
import useScroll from "../../hooks/useScroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const { isAtTop, scrollDirection } = useScroll();

  const isVisible = isAtTop || scrollDirection === "up";

  return (
    <>
      <motion.header
        className={`
          fixed top-0 left-0 right-0 z-navbar transition-all duration-500
          ${isAtTop ? "bg-transparent" : "glass border-b border-primary/10 shadow-card"}
        `}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <motion.a
              href="#home"
              className="flex items-center gap-3 group"
              onClick={(e) => { e.preventDefault(); document.querySelector("#home")?.scrollIntoView({ behavior: "smooth" }); }}
              whileHover={{ scale: 1.02 }}
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-white text-sm shadow-glow-sm group-hover:shadow-glow transition-shadow duration-300"
                style={{ background: "linear-gradient(135deg, #6366F1, #8B5CF6)" }}
              >
                SB
              </div>
              <span className="font-bold text-dark-100 group-hover:gradient-text transition-all duration-300 text-sm hidden sm:block">
                Saikat<span className="gradient-text">.</span>dev
              </span>
            </motion.a>

            {/* Desktop Nav */}
            <NavLinks links={NAV_LINKS} />

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              {/* Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                className="w-9 h-9 rounded-xl glass flex items-center justify-center text-dark-300 hover:text-primary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle theme"
              >
                {isDark ? <FaSun className="text-sm" /> : <FaMoon className="text-sm" />}
              </motion.button>

              {/* Resume Button (desktop) */}
              <motion.a
                href={PERSONAL_INFO.resumeUrl}
                download
                className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white shadow-glow-sm hover:shadow-glow transition-shadow duration-300"
                style={{ background: "linear-gradient(135deg, #6366F1, #8B5CF6)" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload className="text-xs" />
                Resume
              </motion.a>

              {/* CV Button (desktop) */}
              <motion.a
                href={PERSONAL_INFO.cvUrl}
                download
                className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-dark-200 border border-primary/20 hover:border-primary/50 hover:bg-white/5 transition-all duration-300 glass"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload className="text-xs" />
                CV
              </motion.a>

              {/* Hamburger (mobile) */}
              <motion.button
                onClick={() => setMenuOpen(true)}
                className="lg:hidden w-9 h-9 rounded-xl glass flex items-center justify-center text-dark-300 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Open menu"
              >
                <FaBars className="text-sm" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Sidebar */}
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

export default Navbar;
