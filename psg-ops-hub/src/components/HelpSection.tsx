"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HelpCircle,
  RefreshCcw,
  FileText,
  ChevronRight,
  Search,
  AlertCircle,
  Clock,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";

type Tool = "audit" | "lifecycle" | null;

const toolInfo = {
  audit: {
    name: "Configurations Audit",
    color: "#00d4ff",
    icon: RefreshCcw,
    useCases: [
      "Reconcile NinjaOne devices with ConnectWise",
      "Find missing configurations in your PSA",
      "Identify orphaned entries without RMM counterparts",
      "Verify billing accuracy across systems"
    ],
    howItWorks: [
      "Matches by serial number first (most reliable)",
      "Falls back to hostname matching if needed",
      "Supports multiple matching strategies",
      "Exports results for review"
    ],
    tips: [
      "Some devices may have missing/non-unique serials",
      "Large orgs may take longer to process",
      "Use client-side filtering for best results"
    ]
  },
  lifecycle: {
    name: "Lifecycle Report",
    color: "#a855f7",
    icon: FileText,
    useCases: [
      "Generate hardware age analysis reports",
      "Plan hardware refresh cycles",
      "Check OS support status",
      "Get warranty quotes for clients"
    ],
    howItWorks: [
      "Categorizes devices: 0-3yr, 3-5yr, 5yr+",
      "Flags unsupported operating systems",
      "Generates PDF and HTML reports",
      "Bulk warranty lookup with markup options"
    ],
    tips: [
      "Large organizations take longer to process",
      "Reports run asynchronously",
      "Executive summaries included automatically"
    ]
  }
};

const questions = [
  {
    question: "Do you need to compare RMM and PSA inventory?",
    audit: true,
    lifecycle: false
  },
  {
    question: "Are you planning hardware replacements?",
    audit: false,
    lifecycle: true
  },
  {
    question: "Looking for missing or orphaned assets?",
    audit: true,
    lifecycle: false
  },
  {
    question: "Need warranty information or quotes?",
    audit: false,
    lifecycle: true
  }
];

export function HelpSection() {
  const [selectedTool, setSelectedTool] = useState<Tool>(null);
  const [activeTab, setActiveTab] = useState<"finder" | "details">("finder");

  const handleQuestionClick = (auditMatch: boolean) => {
    setSelectedTool(auditMatch ? "audit" : "lifecycle");
    setActiveTab("details");
  };

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
        <div className="flex items-center justify-center gap-2">
          <HelpCircle className="w-5 h-5 text-[#00d4ff]" />
          <h2 className="text-xl font-bold text-white">Help Center</h2>
        </div>
        <p className="text-sm text-[#888899]">
          Find the right tool and learn how to use it
        </p>
      </div>

      {/* Tab Switcher */}
      <div className="flex justify-center gap-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setActiveTab("finder")}
          className={`${activeTab === "finder" ? "bg-white/10 text-white" : "text-[#888899]"}`}
        >
          <Search className="w-4 h-4 mr-2" />
          Tool Finder
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setActiveTab("details")}
          className={`${activeTab === "details" ? "bg-white/10 text-white" : "text-[#888899]"}`}
        >
          <FileText className="w-4 h-4 mr-2" />
          Tool Details
        </Button>
      </div>

      <div className="glass-panel cyber-border rounded-lg p-6">
        <AnimatePresence mode="wait">
          {activeTab === "finder" ? (
            <motion.div
              key="finder"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-4"
            >
              <p className="text-sm text-[#888899] text-center mb-6">
                Click a question to find your tool
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {questions.map((q, i) => (
                  <motion.button
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleQuestionClick(q.audit)}
                    className={`p-4 rounded-lg text-left transition-all border ${
                      q.audit
                        ? "border-[#00d4ff]/20 hover:border-[#00d4ff]/50 hover:bg-[#00d4ff]/5"
                        : "border-[#a855f7]/20 hover:border-[#a855f7]/50 hover:bg-[#a855f7]/5"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white">{q.question}</span>
                      <ChevronRight className={`w-4 h-4 ${q.audit ? "text-[#00d4ff]" : "text-[#a855f7]"}`} />
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="details"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              {/* Tool Selector */}
              <div className="flex gap-2 justify-center mb-6">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedTool("audit")}
                  className={`${selectedTool === "audit" ? "bg-[#00d4ff]/20 text-[#00d4ff]" : "text-[#888899]"}`}
                >
                  <RefreshCcw className="w-4 h-4 mr-2" />
                  Configurations Audit
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedTool("lifecycle")}
                  className={`${selectedTool === "lifecycle" ? "bg-[#a855f7]/20 text-[#a855f7]" : "text-[#888899]"}`}
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Lifecycle Report
                </Button>
              </div>

              {/* Tool Details */}
              {selectedTool ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="grid md:grid-cols-3 gap-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" style={{ color: toolInfo[selectedTool].color }} />
                      <h4 className="text-sm font-medium text-white">Use Cases</h4>
                    </div>
                    <ul className="space-y-2">
                      {toolInfo[selectedTool].useCases.map((item, i) => (
                        <li key={i} className="text-xs text-[#888899] flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ background: toolInfo[selectedTool].color }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" style={{ color: toolInfo[selectedTool].color }} />
                      <h4 className="text-sm font-medium text-white">How It Works</h4>
                    </div>
                    <ul className="space-y-2">
                      {toolInfo[selectedTool].howItWorks.map((item, i) => (
                        <li key={i} className="text-xs text-[#888899] flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ background: toolInfo[selectedTool].color }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="w-4 h-4" style={{ color: toolInfo[selectedTool].color }} />
                      <h4 className="text-sm font-medium text-white">Tips</h4>
                    </div>
                    <ul className="space-y-2">
                      {toolInfo[selectedTool].tips.map((item, i) => (
                        <li key={i} className="text-xs text-[#888899] flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ background: toolInfo[selectedTool].color }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ) : (
                <p className="text-sm text-[#888899] text-center py-8">
                  Select a tool above to view details
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
