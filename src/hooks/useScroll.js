// =============================================
// Hook: useScroll — Track scroll position
// =============================================
import { useState, useEffect } from "react";

/**
 * useScroll — returns scroll position & direction
 */
const useScroll = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [isAtTop, setIsAtTop] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;

      // Update scroll position
      setScrollY(currentScrollY);
      setIsAtTop(currentScrollY < 50);

      // Update scroll direction
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      lastScrollY = currentScrollY;

      // Update scroll progress (0-1)
      const progress = totalHeight > 0 ? currentScrollY / totalHeight : 0;
      setScrollProgress(Math.min(progress, 1));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { scrollY, scrollDirection, isAtTop, scrollProgress };
};

export default useScroll;
