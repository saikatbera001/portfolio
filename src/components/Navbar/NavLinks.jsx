// =============================================
// Component: NavLinks — Navigation Link Items
// =============================================
import { motion } from "framer-motion";

const NavLinks = ({ links, onClick, mobile = false }) => {
  const handleClick = (href) => {
    if (onClick) onClick();
    // Smooth scroll to section
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (mobile) {
    return (
      <nav className="flex flex-col gap-2">
        {links.map((link, i) => (
          <motion.a
            key={link.label}
            href={link.href}
            onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-dark-300 hover:text-white hover:bg-white/5 transition-all duration-200 text-base font-medium group"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.07 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
            {link.label}
          </motion.a>
        ))}
      </nav>
    );
  }

  return (
    <nav className="hidden lg:flex items-center gap-1">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
          className="relative px-4 py-2 text-sm font-medium text-dark-300 hover:text-white transition-colors duration-200 group animated-underline"
        >
          {link.label}
          <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
        </a>
      ))}
    </nav>
  );
};

export default NavLinks;
