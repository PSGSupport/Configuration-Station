"use client";

import { Settings, BarChart3 } from "lucide-react";
import { TopNav } from "@/components/TopNav";
import { HeroSection } from "@/components/HeroSection";
import { AppCard } from "@/components/AppCard";
import { DecisionHelper } from "@/components/DecisionHelper";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Footer } from "@/components/Footer";

const CONFIG_AUDIT_URL = process.env.NEXT_PUBLIC_CONFIG_AUDIT_URL || "https://configurations-audit.onrender.com/";
const LIFECYCLE_REPORT_URL = process.env.NEXT_PUBLIC_LIFECYCLE_REPORT_URL || "https://machine-lifecycle-report-scalepad.onrender.com/";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopNav />

      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
          <HeroSection />

          {/* App Cards Section */}
          <section id="tools" className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold text-white">
                Operations Tools
              </h2>
              <p className="text-[#888899]">
                Choose your tool to get started
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <AppCard
                title="Configurations Audit"
                tagline="NinjaOne to ConnectWise Reconciliation"
                description="Reconcile your device inventory between NinjaOne RMM and ConnectWise Manage PSA. Find missing, matched, and orphaned configurations instantly."
                features={[
                  "Serial number & hostname matching",
                  "Identify missing CW configurations",
                  "Find orphaned ConnectWise entries",
                  "Multi-organization support",
                  "Export audit results",
                ]}
                url={CONFIG_AUDIT_URL}
                embedUrl="/embed/config-audit"
                accentColor="blue"
                icon={<Settings className="w-6 h-6" />}
              />

              <AppCard
                title="Lifecycle Report"
                tagline="Hardware Lifecycle & Warranty Management"
                description="Generate comprehensive lifecycle reports with device age analysis, OS support status, and warranty information. Perfect for hardware refresh planning."
                features={[
                  "Device age band analysis (0-3, 3-5, 5+ years)",
                  "OS support status warnings",
                  "Warranty lookup & quotes",
                  "PDF & HTML report export",
                  "Bulk warranty processing",
                ]}
                url={LIFECYCLE_REPORT_URL}
                embedUrl="/embed/lifecycle-report"
                accentColor="purple"
                icon={<BarChart3 className="w-6 h-6" />}
              />
            </div>
          </section>

          <DecisionHelper />

          <FAQAccordion />
        </div>
      </main>

      <Footer />
    </div>
  );
}
