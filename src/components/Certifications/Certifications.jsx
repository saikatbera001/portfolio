// =============================================
// Component: Certifications — Standalone Certificates
// =============================================
import { motion } from "framer-motion";
import { FaCertificate, FaExternalLinkAlt, FaAws } from "react-icons/fa";
import { SiUdemy, SiCoursera, SiMongodb, SiDeepmind } from "react-icons/si";
import SectionTitle from "../Common/SectionTitle";
import { certifications } from "../../data/education";
import { fadeIn, staggerContainer } from "../../utils/animation";

const certIconMap = { SiUdemy, SiCoursera, SiMongodb, FaAws, FaCertificate, SiDeepmind };

const Certifications = () => {
  return (
    <section id="certifications" className="section-padding relative">
      <div className="section-container">
        <SectionTitle
          badge="Credentials"
          title="My"
          highlight="Certifications"
          subtitle="Industry-recognized certifications that validate my expertise."
        />

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certifications.map((cert, i) => {
            const CertIcon = certIconMap[cert.icon] || FaCertificate;
            return (
              <motion.div
                key={cert.id}
                variants={fadeIn("up", i * 0.07)}
                className="glass rounded-2xl p-5 group hover:shadow-glow-sm transition-shadow duration-300 relative overflow-hidden"
                whileHover={{ y: -4 }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle at top left, ${cert.color}08, transparent 60%)` }}
                />
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ background: `${cert.color}15` }}
                    >
                      <CertIcon style={{ color: cert.color, fontSize: "1.3rem" }} />
                    </div>
                    <span className="text-xs text-dark-500 font-mono">{cert.date}</span>
                  </div>
                  <h3 className="font-bold text-dark-100 text-sm mb-1">{cert.title}</h3>
                  <p className="text-dark-400 text-xs mb-3">{cert.issuer}</p>
                  <p className="text-dark-600 text-xs font-mono mb-4">ID: {cert.credentialId}</p>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium transition-colors duration-200"
                    style={{ color: cert.color }}
                  >
                    <FaExternalLinkAlt className="text-xs" />
                    View Certificate
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
