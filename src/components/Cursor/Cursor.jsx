// =============================================
// Component: Cursor — Custom animated cursor
// =============================================
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const Cursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const trailX = useMotionValue(-100);
  const trailY = useMotionValue(-100);
  const isVisible = useRef(false);
  const isPointer = useRef(false);

  // Smooth spring for trail dot
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only show on non-touch devices
    if ("ontouchstart" in window) return;

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      trailX.set(e.clientX);
      trailY.set(e.clientY);
      isVisible.current = true;
    };

    const handlePointer = () => {
      const hovered = document.querySelectorAll(
        "a, button, [data-cursor='pointer'], input, textarea, select, label"
      );
      hovered.forEach((el) => {
        el.addEventListener("mouseenter", () => { isPointer.current = true; });
        el.addEventListener("mouseleave", () => { isPointer.current = false; });
      });
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });
    handlePointer();
    document.addEventListener("DOMContentLoaded", handlePointer);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY, trailX, trailY]);

  // Don't render on mobile
  if (typeof window !== "undefined" && "ontouchstart" in window) return null;

  return (
    <>
      {/* Main Cursor Dot */}
      <motion.div
        className="custom-cursor w-3 h-3 rounded-full bg-primary pointer-events-none"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          zIndex: 9999,
        }}
      />

      {/* Trailing Ring */}
      <motion.div
        className="custom-cursor w-8 h-8 rounded-full border border-primary/50 pointer-events-none"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
          zIndex: 9998,
        }}
      />
    </>
  );
};

export default Cursor;
