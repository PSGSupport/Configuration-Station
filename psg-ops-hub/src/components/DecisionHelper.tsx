"use client";

import { motion } from "framer-motion";
import { ArrowRight, Search, FileText, RefreshCcw, Shield } from "lucide-react";

const decisions = [
  {
    question: "Need to reconcile inventory between RMM and PSA?",
    answer: "Configurations Audit",
    description: "Compare NinjaOne devices against ConnectWise Manage configurations",
    icon: <RefreshCcw className="w-5 h-5" />,
    color: "blue" as const,
  },
  {
    question: "Need lifecycle reports or warranty information?",
    answer: "Lifecycle Report",
    description: "Generate age analysis, OS support status, and warranty quotes",
    icon: <FileText className="w-5 h-5" />,
    color: "purple" as const,
  },
  {
    question: "Looking for missing or orphaned assets?",
    answer: "Configurations Audit",
    description: "Find devices missing in CW or orphaned without RMM counterparts",
    icon: <Search className="w-5 h-5" />,
    color: "blue" as const,
  },
  {
    question: "Planning hardware refreshes or budgeting?",
    answer: "Lifecycle Report",
    description: "See device age bands and replacement recommendations",
    icon: <Shield className="w-5 h-5" />,
    color: "purple" as const,
  },
];

export function DecisionHelper() {
  return (
    <motion.section
      id="help"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-white">
          Which Tool Do I Need?
        </h2>
        <p className="text-[#888899]">
          Quick guide to help you choose the right tool
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {decisions.map((item, index) => {
          const borderColor = item.color === "blue" ? "border-[#00d4ff]/20 hover:border-[#00d4ff]/40" : "border-[#a855f7]/20 hover:border-[#a855f7]/40";
          const textColor = item.color === "blue" ? "text-[#00d4ff]" : "text-[#a855f7]";
          const bgHover = item.color === "blue" ? "hover:bg-[#00d4ff]/5" : "hover:bg-[#a855f7]/5";

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`glass-panel p-5 rounded-lg border ${borderColor} ${bgHover} transition-all duration-300 group cursor-default`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-2 rounded-lg bg-white/5 ${textColor} flex-shrink-0`}>
                  {item.icon}
                </div>
                <div className="space-y-2 flex-1">
                  <p className="text-sm text-white font-medium">
                    {item.question}
                  </p>
                  <div className="flex items-center gap-2">
                    <ArrowRight className={`w-4 h-4 ${textColor}`} />
                    <span className={`text-sm font-semibold ${textColor}`}>
                      {item.answer}
                    </span>
                  </div>
                  <p className="text-xs text-[#888899]">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
