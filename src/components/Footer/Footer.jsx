// =============================================
// Component: Footer — Site Footer
// =============================================
import { motion } from "framer-motion";
import { FaHeart, FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaArrowUp } from "react-icons/fa";
import { NAV_LINKS, PERSONAL_INFO } from "../../utils/constants";

const iconMap = { FaGithub, FaLinkedin, FaTwitter, FaInstagram };

const socialLinks = [
  { name: "GitHub", url: "https://github.com/saikatbera", icon: FaGithub, color: "#FFFFFF" },
  { name: "LinkedIn", url: "https://linkedin.com/in/saikatbera", icon: FaLinkedin, color: "#0A66C2" },
  { name: "Twitter", url: "https://twitter.com/saikatbera", icon: FaTwitter, color: "#1DA1F2" },
  { name: "Instagram", url: "https://instagram.com/saikatbera", icon: FaInstagram, color: "#E1306C" },
];

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-white/5">
      {/* Glow line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #6366F1, #8B5CF6, transparent)" }}
      />

      <div className="section-container py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-white shadow-glow-sm"
                style={{ background: "linear-gradient(135deg, #6366F1, #8B5CF6)" }}
              >
                SB
              </div>
              <div>
                <p className="font-black gradient-text text-lg">{PERSONAL_INFO.name}</p>
                <p className="text-dark-500 text-xs font-mono">{PERSONAL_INFO.title}</p>
              </div>
            </div>
            <p className="text-dark-400 text-sm leading-relaxed max-w-sm mb-4">
              {PERSONAL_INFO.bio}
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {socialLinks.map(({ name, url, icon: Icon }) => (
                <motion.a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="w-9 h-9 rounded-xl glass flex items-center justify-center text-dark-500 hover:text-white transition-colors"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="text-sm" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-dark-100 font-semibold text-sm mb-4">Quick Links</h4>
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-dark-400 text-sm hover:text-primary transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-dark-700 group-hover:bg-primary transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-dark-100 font-semibold text-sm mb-4">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-dark-400">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-primary transition-colors truncate">
                {PERSONAL_INFO.email}
              </a>
              <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:text-primary transition-colors">
                {PERSONAL_INFO.phone}
              </a>
              <p>{PERSONAL_INFO.location}</p>
              <span className="flex items-center gap-1.5 text-emerald-400 text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for hire
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-dark-500 text-sm flex items-center gap-1.5">
            Made with <FaHeart className="text-red-400 text-xs animate-pulse" /> by{" "}
            <span className="gradient-text font-semibold">{PERSONAL_INFO.name}</span>
            {" "}© {new Date().getFullYear()}
          </p>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-dark-500 text-sm hover:text-primary transition-colors"
            whileHover={{ y: -2 }}
          >
            <FaArrowUp className="text-xs" />
            Back to top
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
