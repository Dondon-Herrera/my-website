import type { Metadata } from "next";

import { AboutMeContent } from "@/components/main/about-me-content";

export const metadata: Metadata = {
  title: "About me | Praduman Sharma",
  description:
    "Product-focused software engineer — experience, education, and engineering expertise.",
};

export default function AboutMePage() {
  return (
    <main className="relative z-10 min-h-screen w-full bg-transparent">
      <AboutMeContent />
    </main>
  );
}
