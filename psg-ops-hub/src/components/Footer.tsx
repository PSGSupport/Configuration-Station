"use client";

import { motion } from "framer-motion";
import { Terminal, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass-panel border-t border-white/5 mt-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Terminal className="w-5 h-5 text-[#00d4ff]" />
            <span className="text-sm text-[#888899]">
              PSG Ops Hub v1.0.0
            </span>
          </div>

          <div className="flex items-center gap-1 text-sm text-[#888899]">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-[#a855f7] mx-1" />
            <span>by Pearl Solutions Group</span>
          </div>

          <div className="text-xs text-[#888899]/60">
            {currentYear} Pearl Solutions Group. Internal use only.
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-white/5">
          <div className="flex flex-wrap justify-center gap-6 text-xs text-[#888899]/60">
            <a
              href="https://configurations-audit.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00d4ff] transition-colors"
            >
              Configurations Audit
            </a>
            <span className="text-white/10">|</span>
            <a
              href="https://machine-lifecycle-report-scalepad.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#a855f7] transition-colors"
            >
              Lifecycle Report
            </a>
            <span className="text-white/10">|</span>
            <span>Status: All Systems Operational</span>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
