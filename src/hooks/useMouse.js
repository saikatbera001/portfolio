// =============================================
// Hook: useMouse — Track mouse position
// =============================================
import { useState, useEffect, useRef } from "react";

/**
 * useMouse — returns mouse position and velocity
 */
const useMouse = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [velocity, setVelocity] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const lastPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;

      // Calculate velocity
      setVelocity({
        x: clientX - lastPos.current.x,
        y: clientY - lastPos.current.y,
      });

      lastPos.current = { x: clientX, y: clientY };
      setMouse({ x: clientX, y: clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return { mouse, velocity, isHovering };
};

export default useMouse;
