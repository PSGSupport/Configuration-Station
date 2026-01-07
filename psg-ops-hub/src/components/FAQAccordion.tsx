"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const configAuditFAQ = [
  {
    question: "What does the Configurations Audit tool do?",
    answer:
      "It reconciles device inventory between NinjaOne (RMM) and ConnectWise Manage (PSA). The tool identifies matched devices, devices missing in ConnectWise, and orphaned configurations in ConnectWise that don't exist in NinjaOne.",
  },
  {
    question: "How does the matching work?",
    answer:
      "The tool first attempts to match devices by serial number (most reliable). If no serial match is found, it falls back to hostname matching. Hostname matching supports multiple strategies: exact match, contains match, and word-based matching.",
  },
  {
    question: "What outputs does the audit produce?",
    answer:
      "Three main categories: (1) Matched devices found in both systems, (2) Missing in CW devices in NinjaOne but not ConnectWise, and (3) Orphaned in CW devices in ConnectWise without a NinjaOne counterpart.",
  },
  {
    question: "Are there any known limitations?",
    answer:
      "Yes. Some devices have missing or non-unique serial numbers. Hostname mismatches occur due to naming conventions. The ConnectWise API org filtering can be unreliable, so client-side filtering is used. Large organizations may take longer to process.",
  },
  {
    question: "Who should use this tool?",
    answer:
      "MSP operations teams responsible for asset reconciliation, billing accuracy, and inventory management between RMM and PSA systems.",
  },
];

const lifecycleFAQ = [
  {
    question: "What does the Lifecycle Report tool generate?",
    answer:
      "It generates comprehensive HTML and PDF lifecycle reports for hardware assets. Reports include an executive summary, device age distribution, and warranty status information.",
  },
  {
    question: "How are device ages categorized?",
    answer:
      "Devices are grouped into age bands: 0-3 years (green/healthy), 3-5 years (yellow/aging), and 5+ years (red/replacement recommended). This helps prioritize refresh planning.",
  },
  {
    question: "What about operating system support?",
    answer:
      "The tool flags devices running unsupported or soon-to-be-unsupported operating systems, helping you identify security risks and plan OS upgrades.",
  },
  {
    question: "Does it support warranty lookups?",
    answer:
      "Yes! The tool includes warranty quote features with bulk lookup capabilities, search functionality, configurable coverage months, and markup options for client proposals.",
  },
  {
    question: "How long do reports take to generate?",
    answer:
      "Report generation time varies by organization size. Large organizations with many devices may take several minutes. The tool uses async job processing to handle this without blocking.",
  },
];

export function FAQAccordion() {
  return (
    <motion.section
      id="faq"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-white">
          Frequently Asked Questions
        </h2>
        <p className="text-[#888899]">
          Everything you need to know about our tools
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Config Audit FAQ */}
        <div className="glass-panel cyber-border rounded-lg p-6 space-y-4">
          <div className="flex items-center gap-2">
            <div className="h-1 w-1 rounded-full bg-[#00d4ff]" />
            <h3 className="text-lg font-semibold text-[#00d4ff]">
              Configurations Audit
            </h3>
          </div>
          <Accordion type="single" collapsible className="space-y-2">
            {configAuditFAQ.map((item, index) => (
              <AccordionItem
                key={index}
                value={`config-${index}`}
                className="border-white/5 rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="text-sm text-white hover:text-[#00d4ff] px-4 py-3 hover:no-underline hover:bg-white/5 transition-colors">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-[#888899] px-4 pb-4 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Lifecycle Report FAQ */}
        <div className="glass-panel cyber-border-purple rounded-lg p-6 space-y-4">
          <div className="flex items-center gap-2">
            <div className="h-1 w-1 rounded-full bg-[#a855f7]" />
            <h3 className="text-lg font-semibold text-[#a855f7]">
              Lifecycle Report
            </h3>
          </div>
          <Accordion type="single" collapsible className="space-y-2">
            {lifecycleFAQ.map((item, index) => (
              <AccordionItem
                key={index}
                value={`lifecycle-${index}`}
                className="border-white/5 rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="text-sm text-white hover:text-[#a855f7] px-4 py-3 hover:no-underline hover:bg-white/5 transition-colors">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-[#888899] px-4 pb-4 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </motion.section>
  );
}
