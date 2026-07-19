// =============================================
// Component: Contact — Full Contact Section
// =============================================
import { motion } from "framer-motion";
import {
  FaEnvelope, FaPhone, FaMapMarkerAlt,
  FaGithub, FaLinkedin, FaTwitter,
} from "react-icons/fa";
import SectionTitle from "../Common/SectionTitle";
import ContactForm from "./ContactForm";
import { PERSONAL_INFO, SOCIAL_LINKS } from "../../utils/constants";
import { fadeIn } from "../../utils/animation";

const iconMap = { FaGithub, FaLinkedin, FaTwitter, FaEnvelope };

const contactInfo = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: PERSONAL_INFO.email,
    href: `mailto:${PERSONAL_INFO.email}`,
    color: "#6366F1",
  },
  {
    icon: FaPhone,
    label: "Phone",
    value: PERSONAL_INFO.phone,
    href: `tel:${PERSONAL_INFO.phone}`,
    color: "#10B981",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: PERSONAL_INFO.location,
    href: "https://maps.google.com/?q=West+Bengal+India",
    color: "#06B6D4",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute inset-0 mesh-gradient opacity-30 pointer-events-none" />
      <div className="section-container relative z-10">
        <SectionTitle
          badge="Get In Touch"
          title="Let's"
          highlight="Connect"
          subtitle="Have a project idea? Want to collaborate? Or just want to say hi? My inbox is always open!"
        />

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left — Info */}
          <motion.div
            className="flex flex-col gap-6"
            variants={fadeIn("left")}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-bold text-dark-100 mb-3">
                Ready to build something <span className="gradient-text">amazing?</span>
              </h3>
              <p className="text-dark-400 leading-relaxed">
                Whether you have a project in mind, need a full-stack developer, or want to discuss AI solutions — I'm just one message away. Let's turn your vision into reality.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="flex flex-col gap-3">
              {contactInfo.map(({ icon: Icon, label, value, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 glass rounded-xl p-4 hover:shadow-glow-sm transition-all duration-300 group"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${color}15` }}
                  >
                    <Icon style={{ color, fontSize: "1rem" }} />
                  </div>
                  <div>
                    <p className="text-dark-500 text-xs font-mono">{label}</p>
                    <p className="text-dark-100 text-sm font-medium">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-dark-500 text-xs font-mono mb-3">FIND ME ON</p>
              <div className="flex gap-3">
                {SOCIAL_LINKS.slice(0, 4).map((social) => {
                  const SIcon = iconMap[social.icon] || FaGithub;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="w-10 h-10 rounded-xl glass flex items-center justify-center text-dark-400 hover:text-white transition-all duration-300"
                      whileHover={{ scale: 1.15, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      style={{ "--hover-shadow": `0 0 15px ${social.color}50` }}
                    >
                      <SIcon className="text-base" />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Availability Notice */}
            <div className="glass rounded-xl p-4 border border-emerald-400/20">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 text-sm font-medium">Available for Freelance</span>
              </div>
              <p className="text-dark-400 text-xs">
                Currently accepting new projects. Typical response within 24 hours.
              </p>
            </div>
          </motion.div>

          {/* Right — Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
