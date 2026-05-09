import dynamic from "next/dynamic";

const HeroContent = dynamic(
  () => import("@/components/sub/hero-content").then(mod => mod.HeroContent),
  { ssr: false }
);

export const Hero = () => {
  return (
    <div className="relative flex h-full w-full flex-col">
      <HeroContent />
    </div>
  );
};
