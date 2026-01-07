"use client";

import { useEffect, useRef, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  targetAlpha: number;
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>(0);

  const createParticle = useCallback((x: number, y: number, isMouseParticle = false): Particle => {
    const colors = ["#00d4ff", "#a855f7", "#7c3aed", "#06b6d4"];
    return {
      x: isMouseParticle ? x : Math.random() * window.innerWidth,
      y: isMouseParticle ? y : Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * (isMouseParticle ? 3 : 0.5),
      vy: (Math.random() - 0.5) * (isMouseParticle ? 3 : 0.5),
      size: isMouseParticle ? Math.random() * 3 + 2 : Math.random() * 2 + 1,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: isMouseParticle ? 0.8 : Math.random() * 0.3 + 0.1,
      targetAlpha: isMouseParticle ? 0 : Math.random() * 0.3 + 0.1,
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize background particles
    particlesRef.current = Array.from({ length: 60 }, () => createParticle(0, 0, false));

    let lastMouseX = 0;
    let lastMouseY = 0;
    let frameCount = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };

      // Add trail particles on mouse move
      const dx = e.clientX - lastMouseX;
      const dy = e.clientY - lastMouseY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance > 5) {
        // Add multiple particles along the movement path
        const numParticles = Math.min(Math.floor(distance / 8), 5);
        for (let i = 0; i < numParticles; i++) {
          const t = i / numParticles;
          const px = lastMouseX + dx * t;
          const py = lastMouseY + dy * t;
          particlesRef.current.push(createParticle(px, py, true));
        }
        lastMouseX = e.clientX;
        lastMouseY = e.clientY;
      }

      // Limit total particles
      if (particlesRef.current.length > 200) {
        particlesRef.current = particlesRef.current.slice(-200);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frameCount++;

      particlesRef.current = particlesRef.current.filter((particle) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Fade mouse particles
        if (particle.targetAlpha === 0) {
          particle.alpha -= 0.015;
          if (particle.alpha <= 0) return false;
        } else {
          // Background particles: gentle floating
          particle.vx += (Math.random() - 0.5) * 0.02;
          particle.vy += (Math.random() - 0.5) * 0.02;
          particle.vx *= 0.99;
          particle.vy *= 0.99;

          // Subtle attraction to mouse
          const dx = mouseRef.current.x - particle.x;
          const dy = mouseRef.current.y - particle.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 200 && dist > 0) {
            particle.vx += (dx / dist) * 0.03;
            particle.vy += (dy / dist) * 0.03;
            particle.alpha = Math.min(particle.alpha + 0.01, 0.5);
          } else {
            particle.alpha += (particle.targetAlpha - particle.alpha) * 0.02;
          }

          // Wrap around screen
          if (particle.x < 0) particle.x = canvas.width;
          if (particle.x > canvas.width) particle.x = 0;
          if (particle.y < 0) particle.y = canvas.height;
          if (particle.y > canvas.height) particle.y = 0;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.alpha;
        ctx.fill();

        // Draw glow
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 2
        );
        gradient.addColorStop(0, particle.color);
        gradient.addColorStop(1, "transparent");
        ctx.fillStyle = gradient;
        ctx.globalAlpha = particle.alpha * 0.5;
        ctx.fill();

        ctx.globalAlpha = 1;
        return true;
      });

      // Draw connections between nearby particles
      ctx.strokeStyle = "#00d4ff";
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const p1 = particlesRef.current[i];
          const p2 = particlesRef.current[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.globalAlpha = (1 - dist / 100) * 0.15;
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationRef.current);
    };
  }, [createParticle]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
      style={{ opacity: 0.7 }}
    />
  );
}
