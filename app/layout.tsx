import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StandupSync — Async Daily Standups with Smart Summaries",
  description: "Collect async standup updates from your remote team and get AI-powered summaries delivered to managers every morning."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="83ed7e5b-93b5-4abf-b3e3-172e832b9b46"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
