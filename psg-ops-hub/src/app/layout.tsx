import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PSG Ops Hub",
  description: "Command center for PSG operations tools - Configurations Audit and Machine Lifecycle Reports",
  keywords: ["MSP", "operations", "NinjaOne", "ConnectWise", "lifecycle", "warranty"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased animated-gradient min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
