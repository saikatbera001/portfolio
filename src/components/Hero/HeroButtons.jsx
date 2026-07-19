// =============================================
// Component: HeroButtons — CTA Buttons
// =============================================
import { motion } from "framer-motion";
import { FaDownload, FaEye, FaArrowRight } from "react-icons/fa";
import Button from "../Common/Button";
import { PERSONAL_INFO } from "../../utils/constants";

const HeroButtons = () => {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      className="flex flex-wrap items-center gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
    >
      {/* Download Resume */}
      <Button
        href={PERSONAL_INFO.resumeUrl}
        download
        variant="primary"
        size="lg"
        glow
        icon={<FaDownload className="text-sm" />}
      >
        Download Resume
      </Button>

      {/* Download CV */}
      <Button
        href={PERSONAL_INFO.cvUrl}
        download
        variant="outline"
        size="lg"
        icon={<FaDownload className="text-sm" />}
      >
        Download CV
      </Button>

      {/* View Projects */}
      <Button
        onClick={scrollToProjects}
        variant="glass"
        size="lg"
        iconRight={<FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />}
      >
        View Projects
      </Button>
    </motion.div>
  );
};

export default HeroButtons;
