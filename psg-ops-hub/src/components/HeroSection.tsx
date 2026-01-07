"use client";

import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-center space-y-6 py-8"
    >
      <div className="space-y-4">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-white/10"
        >
          <span className="h-2 w-2 rounded-full bg-[#00d4ff] animate-pulse" />
          <span className="text-sm text-[#888899]">Operations Command Center</span>
        </motion.div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          <span className="text-white">PSG </span>
          <span className="neon-text text-[#00d4ff]">Ops</span>
          <span className="text-white"> Hub</span>
        </h1>

        <p className="text-lg md:text-xl text-[#888899] max-w-2xl mx-auto leading-relaxed">
          Your unified gateway to{" "}
          <span className="text-[#00d4ff]">inventory reconciliation</span> and{" "}
          <span className="text-[#a855f7]">lifecycle management</span> tools.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="flex flex-wrap justify-center gap-4 text-sm text-[#888899]"
      >
        <div className="flex items-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-[#00d4ff]" />
          <span>NinjaOne Integration</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-[#a855f7]" />
          <span>ConnectWise Sync</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
          <span>Warranty Lookups</span>
        </div>
      </motion.div>
    </motion.section>
  );
}
