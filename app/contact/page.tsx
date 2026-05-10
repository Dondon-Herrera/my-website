import type { Metadata } from "next";

import { ContactPageContent } from "@/components/main/contact-page-content";

export const metadata: Metadata = {
  title: "Contact | Dondon Herrera",
  description:
    "Start a project — share your vision, timeline, and goals. I’ll reply with clear next steps.",
};

export default function ContactPage() {
  return (
    <main className="relative z-10 min-h-screen w-full bg-transparent">
      <ContactPageContent />
    </main>
  );
}
