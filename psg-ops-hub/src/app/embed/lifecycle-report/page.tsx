"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, AlertTriangle, ArrowLeft, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const LIFECYCLE_REPORT_URL = process.env.NEXT_PUBLIC_LIFECYCLE_REPORT_URL || "https://machine-lifecycle-report-scalepad.onrender.com/";

export default function LifecycleReportEmbed() {
  const [loadFailed, setLoadFailed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set a timeout to detect if iframe fails to load
    const timeout = setTimeout(() => {
      if (isLoading) {
        setLoadFailed(true);
        setIsLoading(false);
      }
    }, 8000);

    return () => clearTimeout(timeout);
  }, [isLoading]);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="glass-panel border-b border-white/5 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm" className="text-[#888899] hover:text-white hover:bg-white/5">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Hub
              </Button>
            </Link>
            <div className="h-4 w-px bg-white/10" />
            <div>
              <h1 className="text-sm font-semibold text-white">Lifecycle Report</h1>
              <p className="text-xs text-[#a855f7]">Embedded View</p>
            </div>
          </div>
          <Button
            asChild
            size="sm"
            className="bg-[#a855f7] hover:bg-[#a855f7]/80 text-white"
          >
            <a href={LIFECYCLE_REPORT_URL} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Open in New Tab
            </a>
          </Button>
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 relative">
        {/* Loading State */}
        {isLoading && !loadFailed && (
          <div className="absolute inset-0 flex items-center justify-center bg-background z-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center space-y-4"
            >
              <Loader2 className="w-8 h-8 text-[#a855f7] animate-spin mx-auto" />
              <div>
                <p className="text-white font-medium">Loading Lifecycle Report...</p>
                <p className="text-sm text-[#888899]">This may take a moment</p>
              </div>
            </motion.div>
          </div>
        )}

        {/* Fallback UI */}
        {loadFailed && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center min-h-[calc(100vh-60px)]"
          >
            <div className="glass-panel cyber-border-purple rounded-lg p-8 max-w-md text-center space-y-6">
              <div className="p-4 rounded-full bg-yellow-500/10 w-fit mx-auto">
                <AlertTriangle className="w-8 h-8 text-yellow-500" />
              </div>
              <div className="space-y-2">
                <h2 className="text-xl font-semibold text-white">
                  Embedding Blocked
                </h2>
                <p className="text-sm text-[#888899]">
                  The Lifecycle Report app has security policies that prevent embedding.
                  This is normal and expected for security reasons.
                </p>
              </div>
              <div className="space-y-3">
                <Button
                  asChild
                  className="w-full bg-[#a855f7] hover:bg-[#a855f7]/80 text-white"
                >
                  <a href={LIFECYCLE_REPORT_URL} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Open in New Tab
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-white/10 bg-transparent hover:bg-white/5 text-white"
                >
                  <Link href="/">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Return to Hub
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Iframe */}
        {!loadFailed && (
          <iframe
            src={LIFECYCLE_REPORT_URL}
            className="w-full h-[calc(100vh-60px)] border-0"
            onLoad={handleIframeLoad}
            onError={() => {
              setLoadFailed(true);
              setIsLoading(false);
            }}
            title="Lifecycle Report"
            sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
          />
        )}
      </div>
    </div>
  );
}
