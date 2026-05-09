"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "@/constants";
import { ProjectCard } from "@/components/sub/project-card";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import { useTypewriter } from "react-simple-typewriter";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export const Projects = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollStep = () => {
    const el = sliderRef.current;
    if (!el) return Math.min(320, typeof window !== "undefined" ? window.innerWidth * 0.88 : 320);
    const card = el.querySelector<HTMLElement>("[data-project-slide]");
    if (card) return card.offsetWidth + 24;
    return Math.min(el.clientWidth * 0.92, 650);
  };

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -scrollStep(),
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: scrollStep(),
        behavior: "smooth",
      });
    }
  };

  const [text] = useTypewriter({
    words: ["My Projects", "Things I’ve Built", "Showcase 🚀"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section
      id="my-projects"
      className="relative flex flex-col items-center justify-center overflow-hidden py-12 sm:py-16 md:py-20"
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

    
    

<div className="w-full max-w-4xl mx-auto px-4">
  <motion.h1
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="relative text-[28px] sm:text-[36px] md:text-[42px] font-semibold mb-10"
  >
    {/* Invisible placeholder keeps space reserved */}
    <span className="invisible block text-center">
      Showcase 🚀
    </span>

    {/* Visible typewriter text with gradient */}
    <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center 
                     text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
      {text}
    </span>
  </motion.h1>
</div>


      {/* Slider Container */}
      <div className="relative w-full max-w-6xl">
  {/* Left Button */}
<button
  type="button"
  onClick={scrollLeft}
  aria-label="Previous projects"
  className="absolute left-1 top-1/2 z-10 -translate-y-1/2 rounded-lg border border-white/20 bg-black/40 p-1.5 text-white shadow-md backdrop-blur-lg transition-all duration-300 hover:scale-110 hover:border-purple-400 hover:shadow-[0_0_15px_rgba(168,85,247,0.7)] sm:left-3 sm:p-2"
>
  <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
</button>

<button
  type="button"
  onClick={scrollRight}
  aria-label="Next projects"
  className="absolute right-1 top-1/2 z-10 -translate-y-1/2 rounded-lg border border-white/20 bg-black/40 p-1.5 text-white shadow-md backdrop-blur-lg transition-all duration-300 hover:scale-110 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.7)] sm:right-3 sm:p-2"
>
  <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
</button>


        
        <div
          ref={sliderRef}
          className="flex snap-x snap-mandatory scroll-smooth gap-4 overflow-x-auto px-10 py-4 sm:gap-6 sm:px-12 md:overflow-x-hidden overscroll-x-contain"
        >
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={idx}
              data-project-slide
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`flex-shrink-0 ${
                isMobile ? "w-[min(100%,calc(100vw-5.5rem))]" : "w-[calc(50%-12px)]"
              } snap-center`}
            >
              <ProjectCard
                src={project.image}
                title={project.title}
                description={project.description}
                link={project.link}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* More Projects Button */}
      <div className="mt-10">
        <Link
          href="/projects"
          className="inline-block px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
        >
          More Projects →
        </Link>
      </div>
    </section>
  );
};
