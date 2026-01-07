"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

export function TopNav() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="glass-panel sticky top-0 z-50 border-b border-white/5"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-[#00d4ff] blur-lg opacity-30 rounded-full" />
              <Terminal className="relative w-8 h-8 text-[#00d4ff]" />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-white tracking-tight">
                PSG Ops Hub
              </h1>
              <p className="text-xs text-[#888899]">Command Center</p>
            </div>
          </div>

          <nav className="hidden sm:flex items-center gap-6">
            <a
              href="#tools"
              className="text-sm text-[#888899] hover:text-[#00d4ff] transition-colors"
            >
              Tools
            </a>
            <a
              href="#faq"
              className="text-sm text-[#888899] hover:text-[#00d4ff] transition-colors"
            >
              FAQ
            </a>
            <a
              href="#help"
              className="text-sm text-[#888899] hover:text-[#00d4ff] transition-colors"
            >
              Help
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs text-[#888899]">Systems Online</span>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
