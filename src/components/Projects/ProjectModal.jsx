// =============================================
// Component: ProjectModal — Project Detail Popup
// =============================================
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaGithub, FaExternalLinkAlt, FaStar } from "react-icons/fa";
import { modalVariant, backdropVariant } from "../../utils/animation";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-modal flex items-center justify-center p-4"
        variants={backdropVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-dark-950/80 backdrop-blur-md"
          onClick={onClose}
        />

        {/* Modal */}
        <motion.div
          className="relative glass rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto z-10"
          variants={modalVariant}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Close Button */}
          <motion.button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-9 h-9 rounded-xl glass flex items-center justify-center text-dark-400 hover:text-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Close modal"
          >
            <FaTimes />
          </motion.button>

          {/* Project Image */}
          <div className="relative h-48 sm:h-56 overflow-hidden rounded-t-3xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="project-card-overlay absolute inset-0" />
            {project.featured && (
              <span className="absolute top-4 left-4 badge">
                <FaStar className="text-yellow-400 text-xs" />
                Featured
              </span>
            )}
            <div className="absolute bottom-4 left-4">
              <span className="px-2 py-1 rounded-md text-xs bg-dark-900/80 text-dark-300 font-mono">
                {project.year} • {project.status}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-dark-50 mb-2">{project.title}</h3>
            <p className="text-dark-400 text-sm leading-relaxed mb-6">
              {project.longDescription}
            </p>

            {/* Tech Stack */}
            <div className="mb-6">
              <p className="text-dark-500 text-xs font-mono mb-2">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl glass text-sm text-dark-300 hover:text-white transition-colors border border-white/5 hover:border-primary/30"
              >
                <FaGithub />
                View Code
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm text-white transition-shadow duration-300 shadow-glow-sm hover:shadow-glow"
                style={{ background: "linear-gradient(135deg, #6366F1, #8B5CF6)" }}
              >
                <FaExternalLinkAlt className="text-xs" />
                Live Demo
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
