// =============================================
// Component: Loader — Animated Loading Screen
// =============================================
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Animate progress bar
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setShow(false);
            if (onComplete) onComplete();
          }, 400);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 120);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-loader flex flex-col items-center justify-center bg-dark-900"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Background */}
          <div className="absolute inset-0 aurora-bg" />
          <div className="absolute inset-0 grid-pattern opacity-20" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* Logo / Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              {/* Animated Logo */}
              <div className="relative mb-4">
                <motion.div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, #6366F1, #8B5CF6)",
                    boxShadow: "0 0 40px rgba(99,102,241,0.5)",
                  }}
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <span className="text-white font-black text-2xl">SB</span>
                </motion.div>
                {/* Outer ring */}
                <motion.div
                  className="absolute inset-0 w-20 h-20 rounded-2xl border border-primary/30"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>

              <h1 className="text-2xl font-black gradient-text mb-1">Saikat Bera</h1>
              <p className="text-dark-400 text-sm font-mono">Full Stack Developer</p>
            </motion.div>

            {/* Progress Bar */}
            <div className="w-64">
              <div className="flex justify-between text-xs text-dark-500 mb-2 font-mono">
                <span>Loading portfolio...</span>
                <span>{Math.min(Math.round(progress), 100)}%</span>
              </div>
              <div className="h-1 bg-dark-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background: "linear-gradient(90deg, #6366F1, #8B5CF6, #06B6D4)",
                    backgroundSize: "200% 100%",
                  }}
                  animate={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
            </div>

            {/* Loading dots */}
            <div className="flex gap-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-primary"
                  animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
                  transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.2 }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
