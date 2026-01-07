"use client";

import { Settings, BarChart3 } from "lucide-react";
import { TopNav } from "@/components/TopNav";
import { HeroSection } from "@/components/HeroSection";
import { AppCard } from "@/components/AppCard";
import { HelpSection } from "@/components/HelpSection";
import { Footer } from "@/components/Footer";
import { ParticleBackground } from "@/components/ParticleBackground";

const CONFIG_AUDIT_URL = process.env.NEXT_PUBLIC_CONFIG_AUDIT_URL || "https://configurations-audit.onrender.com/";
const LIFECYCLE_REPORT_URL = process.env.NEXT_PUBLIC_LIFECYCLE_REPORT_URL || "https://machine-lifecycle-report-scalepad.onrender.com/";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <ParticleBackground />

      <TopNav />

      <main className="flex-1 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
          <HeroSection />

          {/* App Cards Section */}
          <section id="tools" className="space-y-6">
            <div className="text-center">
              <h2 className="text-lg font-semibold text-white">
                Configuration Tools
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <AppCard
                title="Configurations Audit"
                tagline="NinjaOne + ConnectWise Sync"
                url={CONFIG_AUDIT_URL}
                accentColor="blue"
                icon={<Settings className="w-6 h-6" />}
              />

              <AppCard
                title="Lifecycle Report"
                tagline="Hardware & Warranty Management"
                url={LIFECYCLE_REPORT_URL}
                accentColor="purple"
                icon={<BarChart3 className="w-6 h-6" />}
              />
            </div>
          </section>

          <HelpSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}
