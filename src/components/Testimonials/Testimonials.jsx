// =============================================
// Component: Testimonials — Testimonial Slider
// =============================================
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import SectionTitle from "../Common/SectionTitle";
import { TESTIMONIALS } from "../../utils/constants";
import { testimonialVariant } from "../../utils/animation";

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };
  const next = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % TESTIMONIALS.length);
  };

  const testimonial = TESTIMONIALS[current];

  return (
    <section id="testimonials" className="section-padding relative">
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(139,92,246,0.4), transparent)",
        }}
      />
      <div className="section-container relative z-10">
        <SectionTitle
          badge="Client Love"
          title="What Clients"
          highlight="Say"
          subtitle="Real feedback from real clients who trusted me with their digital products."
        />

        <div className="max-w-3xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="relative overflow-hidden" style={{ minHeight: "280px" }}>
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={testimonialVariant}
                initial="enter"
                animate="center"
                exit="exit"
                className="glass rounded-3xl p-8 sm:p-10 relative"
              >
                {/* Quote Icon */}
                <FaQuoteLeft
                  className="text-primary/20 text-5xl absolute top-6 left-6"
                />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <FaStar key={i} className="star-filled text-sm" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-dark-200 text-base sm:text-lg leading-relaxed mb-8 relative z-10">
                  "{testimonial.review}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full border-2 border-primary/30"
                    onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${testimonial.name}&background=6366F1&color=fff`; }}
                  />
                  <div>
                    <p className="font-bold text-dark-100">{testimonial.name}</p>
                    <p className="text-dark-400 text-sm">
                      {testimonial.role} — {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className={`rounded-full transition-all duration-300 ${
                    i === current ? "w-6 h-2 bg-primary" : "w-2 h-2 bg-dark-700"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            {/* Arrow Buttons */}
            <div className="flex gap-2">
              <motion.button
                onClick={prev}
                className="w-10 h-10 rounded-xl glass flex items-center justify-center text-dark-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Previous testimonial"
              >
                <FaChevronLeft className="text-sm" />
              </motion.button>
              <motion.button
                onClick={next}
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
                style={{ background: "linear-gradient(135deg, #6366F1, #8B5CF6)" }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Next testimonial"
              >
                <FaChevronRight className="text-sm" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
