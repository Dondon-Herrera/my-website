"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { PROJECTS_SHOWCASE } from "@/constants";
import { ProjectCard } from "@/components/sub/project-card";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import { useTypewriter } from "react-simple-typewriter";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const count = PROJECTS_SHOWCASE.length;

function getScrollStep(el: HTMLDivElement) {
  const slide = el.querySelector<HTMLElement>("[data-project-slide]");
  const gap = parseInt(getComputedStyle(el).gap || "16", 10) || 16;
  return (slide?.offsetWidth ?? 0) + gap;
}

export const Projects = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(0);

  const minFocus = !isMobile && count >= 3 ? 1 : 0;
  const maxFocus = !isMobile && count >= 3 ? count - 2 : count - 1;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    const step = getScrollStep(el);
    if (step < 1) return;

    if (!isMobile && count >= 3) {
      setFocusedIndex(1);
      el.scrollTo({ left: 0, behavior: "auto" });
    } else {
      setFocusedIndex(0);
      el.scrollTo({ left: 0, behavior: "auto" });
    }
  }, [isMobile]);

  const syncFocusFromScroll = useCallback(() => {
    const el = sliderRef.current;
    if (!el) return;
    const step = getScrollStep(el);
    if (step < 1) return;

    if (!isMobile && count >= 3) {
      const c = Math.round(el.scrollLeft / step) + 1;
      const next = Math.min(Math.max(c, 1), count - 2);
      setFocusedIndex((prev) => (prev === next ? prev : next));
    } else {
      const i = Math.round(el.scrollLeft / step);
      const next = Math.min(Math.max(i, 0), count - 1);
      setFocusedIndex((prev) => (prev === next ? prev : next));
    }
  }, [isMobile]);

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(syncFocusFromScroll);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("scroll", onScroll);
    };
  }, [syncFocusFromScroll]);

  const scrollLeft = () => {
    const el = sliderRef.current;
    if (!el) return;
    const step = getScrollStep(el);
    setFocusedIndex((f) => {
      const next = Math.max(f - 1, minFocus);
      const left = !isMobile && count >= 3 ? (next - 1) * step : next * step;
      el.scrollTo({ left, behavior: "smooth" });
      return next;
    });
  };

  const scrollRight = () => {
    const el = sliderRef.current;
    if (!el) return;
    const step = getScrollStep(el);
    setFocusedIndex((f) => {
      const next = Math.min(f + 1, maxFocus);
      const left = !isMobile && count >= 3 ? (next - 1) * step : next * step;
      el.scrollTo({ left, behavior: "smooth" });
      return next;
    });
  };

  const canGoLeft = focusedIndex > minFocus;
  const canGoRight = focusedIndex < maxFocus;

  const [text] = useTypewriter({
    words: ["My Projects", "Things I’ve Built", "Showcase 🚀"],
    loop: true,
    delaySpeed: 2000,
  });

  const isCenterZoom = !isMobile && count >= 3;

  return (
    <section
      id="project"
      className="relative mt-0 flex flex-col items-center justify-center overflow-hidden pt-0 pb-12 sm:pb-16 md:pb-20"
    >
      <div className="absolute inset-0 -z-10 opacity-30">
        <Canvas camera={{ position: [0, 0, 3] }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[2, 2, 2]} />
          <Sphere args={[1.8, 64, 64]} scale={2}>
            <MeshDistortMaterial
              color="#9333EA"
              distort={0.4}
              speed={1.5}
              roughness={0.2}
            />
          </Sphere>
        </Canvas>
      </div>

      <div className="mx-auto w-full max-w-7xl px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative mb-10 text-center text-[28px] font-semibold sm:text-[36px] md:text-[42px]"
        >
          <span className="invisible block text-center">Showcase 🚀</span>
          <span
            className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent"
          >
            {text}
          </span>
        </motion.h1>
      </div>

      <div className="relative w-full max-w-[88rem] px-2 sm:px-4 lg:px-6">
        <button
          type="button"
          onClick={scrollLeft}
          disabled={!canGoLeft}
          aria-label="Previous projects"
          className="absolute left-0 top-1/2 z-20 -translate-y-1/2 rounded-lg border border-white/20 bg-black/40 p-1.5 text-white shadow-md backdrop-blur-lg transition-all duration-300 hover:scale-110 hover:border-purple-400 hover:shadow-[0_0_15px_rgba(168,85,247,0.7)] disabled:pointer-events-none disabled:opacity-35 sm:left-1 sm:p-2 lg:left-2"
        >
          <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>

        <button
          type="button"
          onClick={scrollRight}
          disabled={!canGoRight}
          aria-label="Next projects"
          className="absolute right-0 top-1/2 z-20 -translate-y-1/2 rounded-lg border border-white/20 bg-black/40 p-1.5 text-white shadow-md backdrop-blur-lg transition-all duration-300 hover:scale-110 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.7)] disabled:pointer-events-none disabled:opacity-35 sm:right-1 sm:p-2 lg:right-2"
        >
          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>

        <div
          ref={sliderRef}
          className="flex snap-x snap-mandatory scroll-smooth gap-4 overflow-x-auto overscroll-x-contain py-4 [scrollbar-width:none] sm:gap-6 sm:px-10 md:px-12 lg:px-14 [&::-webkit-scrollbar]:hidden"
        >
          {PROJECTS_SHOWCASE.map((project, idx) => {
            const isFocused = focusedIndex === idx;
            const scale = isCenterZoom
              ? isFocused
                ? 1.075
                : 0.92
              : isFocused
                ? 1.03
                : 1;

            return (
              <motion.div
                key={project.title}
                data-project-slide
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  opacity: { duration: 0.5 },
                  y: { duration: 0.5 },
                  scale: {
                    type: "spring",
                    stiffness: 420,
                    damping: 34,
                    mass: 0.85,
                  },
                }}
                animate={{ scale }}
                style={{
                  zIndex: isFocused ? 2 : 1,
                }}
                className={`relative min-w-0 snap-center ${
                  isMobile || count < 3
                    ? "w-[min(100%,calc(100vw-5.5rem))] shrink-0"
                    : "shrink-0 flex-[0_0_calc((100%-3rem)/3)]"
                }`}
              >
                <ProjectCard
                  src={project.image}
                  title={project.title}
                  description={project.description}
                  link={project.liveUrl ?? project.repoUrl ?? "/projects"}
                  priority={idx < 8}
                />
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="mt-10">
        <Link
          href="/projects"
          className="inline-block rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-500 px-6 py-3 font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105"
        >
          More Projects →
        </Link>
      </div>
    </section>
  );
};
