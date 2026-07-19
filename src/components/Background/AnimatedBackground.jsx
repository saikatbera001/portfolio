// =============================================
// Component: AnimatedBackground
// Particle canvas + aurora gradient blobs
// =============================================
import { useEffect, useRef } from "react";

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let animFrameId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    /* --- Particle Class --- */
    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.speedY = (Math.random() - 0.5) * 0.4;
        this.opacity = Math.random() * 0.5 + 0.1;
        this.color = this.getColor();
        this.life = 0;
        this.maxLife = Math.random() * 200 + 100;
      }
      getColor() {
        const colors = [
          "99, 102, 241",  // primary
          "139, 92, 246",  // secondary
          "6, 182, 212",   // accent
        ];
        return colors[Math.floor(Math.random() * colors.length)];
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life++;
        if (
          this.life > this.maxLife ||
          this.x < 0 || this.x > canvas.width ||
          this.y < 0 || this.y > canvas.height
        ) {
          this.reset();
        }
      }
      draw() {
        const fadeIn = Math.min(this.life / 30, 1);
        const fadeOut = Math.max(1 - (this.life - this.maxLife + 30) / 30, 0);
        const alpha = this.opacity * Math.min(fadeIn, fadeOut);
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color}, ${alpha})`;
        ctx.fill();
      }
    }

    /* --- Init Particles --- */
    const PARTICLE_COUNT = 80;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new Particle());
    }

    /* --- Draw Connection Lines --- */
    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const alpha = ((120 - dist) / 120) * 0.15;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(99, 102, 241, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    /* --- Animation Loop --- */
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => { p.update(); p.draw(); });
      drawConnections();
      animFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Canvas Particles */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Aurora Blob 1 */}
      <div
        className="absolute -top-40 -left-40 w-96 h-96 rounded-full opacity-20 animate-blob"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.6) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      {/* Aurora Blob 2 */}
      <div
        className="absolute top-1/3 -right-40 w-80 h-80 rounded-full opacity-15 animate-blob"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.5) 0%, transparent 70%)",
          filter: "blur(50px)",
          animationDelay: "2s",
        }}
      />
      {/* Aurora Blob 3 */}
      <div
        className="absolute -bottom-40 left-1/3 w-96 h-96 rounded-full opacity-10 animate-blob"
        style={{
          background: "radial-gradient(circle, rgba(6,182,212,0.4) 0%, transparent 70%)",
          filter: "blur(60px)",
          animationDelay: "4s",
        }}
      />

      {/* Subtle Grid */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(15,23,42,0.8) 100%)",
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
