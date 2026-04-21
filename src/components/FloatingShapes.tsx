import { useEffect, useRef } from "react";

/**
 * Ambient 3D grid — a subtle perspective grid with floating particles.
 * Purple-tinted particles matching brand colors.
 */
export const FloatingShapes = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;

    // Particles
    const particles: { x: number; y: number; z: number; vx: number; vy: number; size: number; hue: number }[] = [];
    const PARTICLE_COUNT = 35;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.parentElement?.getBoundingClientRect();
      width = rect?.width || window.innerWidth;
      height = rect?.height || window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const initParticles = () => {
      particles.length = 0;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          z: Math.random() * 0.5 + 0.5,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.15 - 0.1,
          size: Math.random() * 1.5 + 0.5,
          hue: 260 + Math.random() * 30, // Purple range 260-290
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle grid lines (perspective-faked)
      const gridSpacing = 80;
      const vanishY = height * 0.3;

      ctx.strokeStyle = "rgba(168, 85, 247, 0.012)";
      ctx.lineWidth = 0.5;

      // Horizontal lines
      for (let y = vanishY; y < height; y += gridSpacing * 0.7) {
        const progress = (y - vanishY) / (height - vanishY);
        ctx.globalAlpha = progress * 0.5;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Vertical lines converging to vanish point
      const vanishX = width * 0.5;
      const lineCount = 14;
      for (let i = -lineCount / 2; i <= lineCount / 2; i++) {
        const bottomX = vanishX + i * gridSpacing * 1.8;
        const progress = 1 - Math.abs(i) / (lineCount / 2);
        ctx.globalAlpha = progress * 0.25;
        ctx.beginPath();
        ctx.moveTo(vanishX, vanishY);
        ctx.lineTo(bottomX, height);
        ctx.stroke();
      }

      ctx.globalAlpha = 1;

      // Draw and update particles
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const alpha = p.z * 0.25;
        const r = p.size * p.z;

        // Purple-tinted particles
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 70%, 60%, ${alpha})`;
        ctx.fill();

        // Subtle glow
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 6);
        grd.addColorStop(0, `hsla(${p.hue}, 70%, 60%, ${alpha * 0.3})`);
        grd.addColorStop(1, `hsla(${p.hue}, 70%, 60%, 0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, r * 6, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    resize();
    initParticles();
    draw();

    const handleResize = () => {
      resize();
      initParticles();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
};
