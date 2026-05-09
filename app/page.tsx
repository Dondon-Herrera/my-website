import { Encryption } from "@/components/main/encryption";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";
import { Education } from "@/components/main/education";
import { Experience } from "@/components/main/experience";
import StatsPage from "@/components/main/StatsThreeJS";

export default function Home() {
  return (
    <main className="h-full w-full pb-[calc(11rem+env(safe-area-inset-bottom,0px))] sm:pb-[calc(12rem+env(safe-area-inset-bottom,0px))] md:pb-[calc(14rem+env(safe-area-inset-bottom,0px))]">
      <div className="flex flex-col gap-6 sm:gap-8 md:gap-10">
        <Hero />
        <Skills />
        <Education />
        <Experience />
        <Encryption />
        <Projects />
        <StatsPage />
      </div>
    </main>
  );
}
