// =============================================
// Component: Education — Education & Certifications
// =============================================
import { motion } from "framer-motion";
import { FaGraduationCap, FaCertificate, FaExternalLinkAlt, FaAws } from "react-icons/fa";
import { SiUdemy, SiCoursera, SiMongodb, SiDeepmind } from "react-icons/si";
import SectionTitle from "../Common/SectionTitle";
import { educationData, certifications } from "../../data/education";
import { fadeIn, staggerContainer } from "../../utils/animation";

const certIconMap = {
  SiUdemy, SiCoursera, SiMongodb, FaAws, SiDeepmind,
};

const Education = () => {
  return (
    <section id="education" className="section-padding relative">
      <div className="absolute inset-0 mesh-gradient opacity-20 pointer-events-none" />
      <div className="section-container relative z-10">
        <SectionTitle
          badge="Academic Background"
          title="Education &"
          highlight="Certifications"
          subtitle="Building a strong academic foundation alongside practical, industry-recognized credentials."
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left — Education */}
          <div>
            <h3 className="text-lg font-bold text-dark-100 mb-6 flex items-center gap-2">
              <FaGraduationCap className="text-primary" />
              Academic Education
            </h3>
            <motion.div
              className="flex flex-col gap-4"
              variants={staggerContainer(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {educationData.map((edu, i) => (
                <motion.div
                  key={edu.id}
                  variants={fadeIn("right", i * 0.1)}
                  className={`glass rounded-2xl p-5 relative overflow-hidden ${
                    edu.status === "Pursuing" ? "border border-primary/30" : ""
                  }`}
                  whileHover={{ y: -3 }}
                >
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${edu.gradient} pointer-events-none`} />

                  <div className="relative z-10">
                    {/* Status Badge */}
                    <div className="flex items-start justify-between mb-3">
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                          edu.status === "Pursuing"
                            ? "bg-emerald-400/20 text-emerald-400"
                            : "bg-dark-700 text-dark-400"
                        }`}
                      >
                        {edu.status}
                      </span>
                      <span className="text-dark-500 text-xs font-mono">{edu.duration}</span>
                    </div>

                    <h4 className="font-bold text-dark-100 text-sm mb-1">{edu.degree}</h4>
                    <p className="text-primary text-sm font-medium mb-1">{edu.institution}</p>
                    <p className="text-dark-500 text-xs mb-3">{edu.location}</p>

                    {edu.cgpa && (
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-dark-400 font-mono">
                          CGPA / Score: <span className="text-dark-200 font-bold">{edu.cgpa}</span>
                        </span>
                      </div>
                    )}

                    {/* Subjects */}
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {edu.subjects.map((sub) => (
                        <span key={sub} className="tech-tag text-xs">{sub}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right — Certifications */}
          <div>
            <h3 className="text-lg font-bold text-dark-100 mb-6 flex items-center gap-2">
              <FaCertificate className="text-accent" />
              Certifications
            </h3>
            <motion.div
              className="flex flex-col gap-3"
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
                    variants={fadeIn("left", i * 0.08)}
                    className="glass rounded-xl p-4 flex items-center gap-4 hover:shadow-glow-sm transition-shadow duration-300 group"
                    whileHover={{ x: 4 }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: `${cert.color}15` }}
                    >
                      <CertIcon style={{ color: cert.color, fontSize: "1.1rem" }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-dark-100 text-sm font-semibold truncate">{cert.title}</p>
                      <p className="text-dark-400 text-xs">{cert.issuer} • {cert.date}</p>
                    </div>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-dark-600 hover:text-primary transition-colors shrink-0"
                      aria-label={`View ${cert.title} certificate`}
                    >
                      <FaExternalLinkAlt className="text-xs" />
                    </a>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
