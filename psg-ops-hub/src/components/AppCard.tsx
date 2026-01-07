"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface AppCardProps {
  title: string;
  tagline: string;
  url: string;
  accentColor: "blue" | "purple";
  icon: React.ReactNode;
}

export function AppCard({
  title,
  tagline,
  url,
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
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Card className={`glass-panel ${glowClass} overflow-hidden group h-full`}>
        <CardHeader className="pb-4">
          <div className={`p-3 rounded-lg bg-white/5 ${textClass} w-fit`}>
            {icon}
          </div>
          <CardTitle className="text-xl mt-4 text-white group-hover:text-[#f0f0f5] transition-colors">
            {title}
          </CardTitle>
          <p className={`${textClass} text-sm font-medium`}>
            {tagline}
          </p>
        </CardHeader>

        <CardContent className="pt-2">
          <div className="flex gap-3">
            <Button
              asChild
              className={`flex-1 ${buttonBg} font-medium`}
            >
              <a href={url} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Launch
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              className={`border-white/10 bg-transparent ${hoverBg} text-white`}
            >
              <a href={url}>
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
