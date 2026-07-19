// =============================================
// Component: Services — Services Section
// =============================================
import { motion } from "framer-motion";
import SectionTitle from "../Common/SectionTitle";
import ServiceCard from "./ServiceCard";
import { services } from "../../data/services";
import { staggerContainer } from "../../utils/animation";

const Services = () => {
  return (
    <section id="services" className="section-padding relative">
      {/* Subtle background */}
      <div className="absolute inset-0 mesh-gradient opacity-30 pointer-events-none" />

      <div className="section-container relative z-10">
        <SectionTitle
          badge="What I Offer"
          title="My"
          highlight="Services"
          subtitle="From frontend to backend, AI to deployment — I deliver complete digital solutions."
        />

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          variants={staggerContainer(0.08, 0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
