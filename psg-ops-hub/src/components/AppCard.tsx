"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowRight, MonitorPlay, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface AppCardProps {
  title: string;
  tagline: string;
  description: string;
  features: string[];
  url: string;
  embedUrl: string;
  accentColor: "blue" | "purple";
  icon: React.ReactNode;
}

export function AppCard({
  title,
  tagline,
  description,
  features,
  url,
  embedUrl,
  accentColor,
  icon,
}: AppCardProps) {
  const glowClass = accentColor === "blue" ? "cyber-glow cyber-border" : "cyber-glow-purple cyber-border-purple";
  const textClass = accentColor === "blue" ? "text-[#00d4ff]" : "text-[#a855f7]";
  const hoverBg = accentColor === "blue" ? "hover:bg-[#00d4ff]/10" : "hover:bg-[#a855f7]/10";
  const buttonBg = accentColor === "blue"
    ? "bg-[#00d4ff] hover:bg-[#00d4ff]/80 text-black"
    : "bg-[#a855f7] hover:bg-[#a855f7]/80 text-white";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Card className={`glass-panel ${glowClass} overflow-hidden group`}>
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between">
            <div className={`p-3 rounded-lg bg-white/5 ${textClass}`}>
              {icon}
            </div>
            <span className={`text-xs px-2 py-1 rounded-full bg-white/5 ${textClass} border border-current/20`}>
              Active
            </span>
          </div>
          <CardTitle className="text-xl mt-4 text-white group-hover:text-[#f0f0f5] transition-colors">
            {title}
          </CardTitle>
          <CardDescription className={`${textClass} font-medium`}>
            {tagline}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <p className="text-sm text-[#888899] leading-relaxed">
            {description}
          </p>

          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-white/60 uppercase tracking-wider">
              Key Features
            </h4>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2 text-sm text-[#888899]"
                >
                  <CheckCircle2 className={`w-4 h-4 ${textClass} flex-shrink-0`} />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 pt-4 border-t border-white/5">
            <Button
              asChild
              className={`flex-1 ${buttonBg} font-medium`}
            >
              <a href={url} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Open in New Tab
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              className={`flex-1 border-white/10 bg-transparent ${hoverBg} text-white`}
            >
              <a href={url}>
                <ArrowRight className="w-4 h-4 mr-2" />
                Open Here
              </a>
            </Button>

            <Button
              asChild
              variant="ghost"
              className={`flex-1 ${hoverBg} text-[#888899] hover:text-white`}
            >
              <a href={embedUrl}>
                <MonitorPlay className="w-4 h-4 mr-2" />
                Embed View
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
