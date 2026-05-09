import type { Metadata } from "next";

import { ProjectsPageContent } from "@/components/main/projects-page-content";

export const metadata: Metadata = {
  title: "Projects | Portfolio",
  description:
    "Selected builds—production-ready web products, strong UX, SEO, and measurable performance.",
};

export default function ProjectsPage() {
  return (
    <main className="relative z-10 min-h-screen w-full bg-transparent">
      <ProjectsPageContent />
    </main>
  );
}
