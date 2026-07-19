// =============================================
// Component: ProjectCard — Individual Project Card
// =============================================
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaStar, FaExpand } from "react-icons/fa";
import { cardHover } from "../../utils/animation";

const ProjectCard = ({ project, onViewDetails }) => {
  return (
    <motion.div
      className="glass rounded-2xl overflow-hidden group cursor-pointer"
      variants={cardHover}
      initial="rest"
      whileHover="hover"
      onClick={() => onViewDetails(project)}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        {/* Overlay */}
        <div className="project-card-overlay absolute inset-0 opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

        {/* Hover Actions */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl glass flex items-center justify-center text-white hover:bg-white/10"
            onClick={(e) => e.stopPropagation()}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            aria-label="GitHub"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl glass flex items-center justify-center text-white hover:bg-white/10"
            onClick={(e) => e.stopPropagation()}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Live Demo"
          >
            <FaExternalLinkAlt className="text-sm" />
          </motion.a>
          <motion.button
            className="w-10 h-10 rounded-xl glass flex items-center justify-center text-white hover:bg-white/10"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            aria-label="View details"
          >
            <FaExpand className="text-sm" />
          </motion.button>
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <span className="absolute top-3 left-3 badge text-xs">
            <FaStar className="text-yellow-400 text-xs" />
            Featured
          </span>
        )}

        {/* Category */}
        <span className="absolute top-3 right-3 px-2 py-0.5 rounded-md text-xs bg-dark-900/80 text-dark-400 font-mono capitalize">
          {project.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-bold text-dark-100 text-base mb-2 group-hover:text-white transition-colors line-clamp-1">
          {project.title}
        </h3>
        <p className="text-dark-400 text-sm leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((tech) => (
            <span key={tech} className="tech-tag text-xs">{tech}</span>
          ))}
          {project.tech.length > 4 && (
            <span className="tech-tag text-xs">+{project.tech.length - 4}</span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
