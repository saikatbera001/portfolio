// =============================================
// Component: ContactForm — EmailJS Contact Form
// =============================================
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane, FaCheck, FaExclamationCircle } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "../../utils/constants";
import { fadeIn } from "../../utils/animation";

const ContactForm = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [formData, setFormData] = useState({
    name: "", email: "", subject: "", message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await emailjs.sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        formRef.current,
        EMAILJS_CONFIG.PUBLIC_KEY
      );
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      console.error("EmailJS Error:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const fields = [
    { name: "name", label: "Your Name", type: "text", placeholder: "Saikat Bera", cols: 1 },
    { name: "email", label: "Email Address", type: "email", placeholder: "you@example.com", cols: 1 },
    { name: "subject", label: "Subject", type: "text", placeholder: "Project Inquiry", cols: 2 },
  ];

  return (
    <motion.form
      ref={formRef}
      onSubmit={handleSubmit}
      className="glass rounded-3xl p-6 sm:p-8"
      variants={fadeIn("right")}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h3 className="text-xl font-bold text-dark-100 mb-6">Send a Message</h3>

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        {fields.map((field) => (
          <div
            key={field.name}
            className={field.cols === 2 ? "sm:col-span-2" : ""}
          >
            <label className="block text-dark-400 text-xs font-medium mb-1.5 font-mono">
              {field.label}
            </label>
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder}
              required
              className="form-input"
            />
          </div>
        ))}

        {/* Message */}
        <div className="sm:col-span-2">
          <label className="block text-dark-400 text-xs font-medium mb-1.5 font-mono">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about your project..."
            rows={5}
            required
            className="form-input resize-none"
          />
        </div>
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-3.5 rounded-xl text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-70 shadow-glow hover:shadow-glow-lg"
        style={{ background: "linear-gradient(135deg, #6366F1, #8B5CF6)" }}
        whileHover={{ scale: status === "loading" ? 1 : 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {status === "loading" && (
          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        )}
        {status === "success" && <FaCheck />}
        {status === "error" && <FaExclamationCircle />}
        {status === "idle" && <FaPaperPlane className="text-xs" />}
        {status === "loading" ? "Sending..." : status === "success" ? "Message Sent!" : status === "error" ? "Failed — Try Again" : "Send Message"}
      </motion.button>

      {/* Status Messages */}
      {status === "success" && (
        <motion.p
          className="text-emerald-400 text-sm text-center mt-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          ✓ Your message was sent successfully. I'll reply within 24 hours!
        </motion.p>
      )}
      {status === "error" && (
        <motion.p
          className="text-red-400 text-sm text-center mt-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          ✗ Failed to send. Please email me directly at saikatbera208@gmail.com
        </motion.p>
      )}
    </motion.form>
  );
};

export default ContactForm;
