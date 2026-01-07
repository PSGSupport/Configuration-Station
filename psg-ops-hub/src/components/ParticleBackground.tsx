"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  delay: number;
}

export function ParticleBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 100 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Generate random particles
    const newParticles: Particle[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      color: Math.random() > 0.5 ? "#00d4ff" : "#a855f7",
      delay: Math.random() * 2,
    }));
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        mouseX.set((e.clientX - rect.left) / rect.width);
        mouseY.set((e.clientY - rect.top) / rect.height);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full opacity-20"
          style={{
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
          }}
          animate={{
            x: [0, Math.random() * 40 - 20, 0],
            y: [0, Math.random() * 40 - 20, 0],
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Mouse follower particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`follower-${i}`}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 4 - i * 0.5,
            height: 4 - i * 0.5,
            backgroundColor: i % 2 === 0 ? "#00d4ff" : "#a855f7",
            boxShadow: `0 0 ${8 - i * 1.5}px ${i % 2 === 0 ? "#00d4ff" : "#a855f7"}`,
            x: smoothMouseX,
            y: smoothMouseY,
            left: `calc(${50}% - 2px)`,
            top: `calc(${50}% - 2px)`,
            opacity: 0.4 - i * 0.08,
          }}
          animate={{
            x: smoothMouseX.get() * (typeof window !== 'undefined' ? window.innerWidth : 1000) - (i * 15),
            y: smoothMouseY.get() * (typeof window !== 'undefined' ? window.innerHeight : 800) - (i * 15),
          }}
          transition={{
            type: "spring",
            damping: 20 + i * 5,
            stiffness: 150 - i * 20,
          }}
        />
      ))}
    </div>
  );
}
