"use client";

import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass-panel border-t border-white/5 mt-12"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#888899]/60">
          <span>PSG Config Hub v1.0</span>
          <span>{currentYear} Pearl Solutions Group</span>
        </div>
      </div>
    </motion.footer>
  );
}
