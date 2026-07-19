// =============================================
// Component: Projects — Projects Section
// =============================================
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "../Common/SectionTitle";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { projects, projectCategories } from "../../data/projects";
import { staggerContainer, fadeIn } from "../../utils/animation";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section-padding relative">
      <div className="section-container">
        <SectionTitle
          badge="My Work"
          title="Featured"
          highlight="Projects"
          subtitle="A showcase of real-world applications built with passion and modern technology."
        />

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {projectCategories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-xl text-sm font-medium capitalize transition-all duration-300 ${
                activeFilter === cat
                  ? "text-white shadow-glow-sm"
                  : "glass text-dark-400 hover:text-dark-200"
              }`}
              style={
                activeFilter === cat
                  ? { background: "linear-gradient(135deg, #6366F1, #8B5CF6)" }
                  : {}
              }
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer(0.1)}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
          >
            {filtered.map((project, i) => (
              <motion.div key={project.id} variants={fadeIn("up", i * 0.07)}>
                <ProjectCard
                  project={project}
                  onViewDetails={(p) => setSelectedProject(p)}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filtered.length === 0 && (
          <motion.div
            className="text-center py-20 text-dark-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            No projects found in this category.
          </motion.div>
        )}

        {/* GitHub Link */}
        <motion.div
          className="text-center mt-12"
          variants={fadeIn("up")}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/saikatbera"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border border-primary/20 text-sm font-medium text-dark-300 hover:text-white hover:border-primary/50 transition-all duration-300"
          >
            View All Projects on GitHub →
          </a>
        </motion.div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
