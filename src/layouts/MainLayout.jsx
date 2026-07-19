// =============================================
// Layout: MainLayout — Root Layout Wrapper
// =============================================
import { useEffect } from "react";
import Lenis from "lenis";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import AnimatedBackground from "../components/Background/AnimatedBackground";
import Cursor from "../components/Cursor/Cursor";
import ScrollProgress from "../components/ScrollProgress/ScrollProgress";
import ScrollTop from "../components/ScrollTop/ScrollTop";

const MainLayout = ({ children }) => {
  /* --- Lenis Smooth Scroll --- */
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div className="relative min-h-screen bg-dark-900 overflow-x-hidden">
      {/* Scroll progress bar */}
      <ScrollProgress />

      {/* Particle + Aurora background */}
      <AnimatedBackground />

      {/* Custom Cursor */}
      <Cursor />

      {/* Sticky Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">{children}</main>

      {/* Footer */}
      <footer className="relative z-10">
        <Footer />
      </footer>

      {/* Back to Top */}
      <ScrollTop />
    </div>
  );
};

export default MainLayout;
