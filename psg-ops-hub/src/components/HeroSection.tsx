"use client";

import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-center space-y-4 py-6"
    >
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
        <span className="text-white">PSG </span>
        <span className="neon-text text-[#00d4ff]">Config</span>
        <span className="text-white"> Hub</span>
      </h1>

      <p className="text-base text-[#888899] max-w-lg mx-auto">
        Inventory reconciliation and lifecycle management tools
      </p>
    </motion.section>
  );
}
