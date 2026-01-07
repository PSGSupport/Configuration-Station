"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
          <div className="flex items-center gap-4">
            <Image
              src="/pearl-logo.png"
              alt="Pearl Solutions Group"
              width={52}
              height={52}
              className="rounded"
            />
            <div>
              <h1 className="text-lg font-semibold text-white tracking-tight">
                Config Hub
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs text-[#888899]">Online</span>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
