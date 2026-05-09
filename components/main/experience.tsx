"use client";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Sphere, OrbitControls } from "@react-three/drei";
import { TextureLoader } from "three";
import { useCallback, useLayoutEffect, useRef, useState } from "react";

const EarthBall = () => {
  const meshRef = useRef<any>();
  const texture = useLoader(
    TextureLoader,
    "https://threejs.org/examples/textures/land_ocean_ice_cloud_2048.jpg"
  );

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
  });

  return (
    <Sphere args={[1, 64, 64]} ref={meshRef} scale={1.4}>
      <meshStandardMaterial map={texture} />
    </Sphere>
  );
};

const ORB_SPRING = { stiffness: 95, damping: 24, mass: 0.32, restDelta: 0.0004 };

const experiences = [
  {
    company: "CYBERCLIPPER SOLUTIONS LLP",
    role: "Software Engineer",
    date: "Jan 2025 – Present",
    points: [
      "Led a cross-functional team delivering scalable, high-performance web apps.",
      "Owned platform integrations: REST APIs, payment gateways, and third-party services.",
      "Hired and mentored developers; improved interview loops and onboarding.",
      "Drove project planning and delivery to align software outcomes with business goals.",
      "Improved web visibility using Search Console, Analytics, and SEO best practices.",
    ],
  },
  {
    company: "NEXOCIDE",
    role: "Full Stack Developer Intern",
    date: "Aug 2024 – Sep 2024",
    points: [
      "Built end-to-end features with Next.js, Tailwind CSS, and Firebase; +15% engagement.",
      "Designed REST APIs and optimized database queries; reduced response time by 20%.",
    ],
  },
  {
    company: "SKYNET E-SOLUTION PVT LTD",
    role: "Software Developer Intern",
    date: "Jun 2024 – Aug 2024",
    points: [
      "Improved page load speeds by 25% using PHP, JavaScript, HTML5, CSS3, Bootstrap.",
      "Contributed to CI/CD pipelines; delivered zero-downtime launches and smoother releases.",
    ],
  },
];

export const Experience = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);
  const [lineHeight, setLineHeight] = useState(0);
  const [orbHalf, setOrbHalf] = useState(30);

  // Progress 0→1 while the timeline (line + cards) scrolls through the viewport
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, ORB_SPRING);

  useLayoutEffect(() => {
    const timeline = timelineRef.current;
    const orb = orbRef.current;
    if (!timeline) return;

    const update = () => {
      setLineHeight(timeline.clientHeight);
      if (orb) setOrbHalf(orb.offsetHeight / 2);
    };

    const ro = new ResizeObserver(update);
    ro.observe(timeline);
    if (orb) ro.observe(orb);
    update();

    return () => ro.disconnect();
  }, []);

  const travel = Math.max(0, lineHeight);
  // Invert mapping so: scroll down → globe goes up, scroll up → globe goes down.
  const orbTranslateY = useTransform(
    smoothProgress,
    [0, 1],
    [travel - orbHalf, -orbHalf]
  );

  const scrollTimelineToProgress = useCallback((p: number) => {
    const el = timelineRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const docTop = rect.top + window.scrollY;
    const h = el.offsetHeight;
    const vh = window.innerHeight;
    const span = Math.max(0, h - vh);
    const clamped = Math.min(Math.max(p, 0), 1);
    const top = docTop + clamped * span;
    window.scrollTo({ top, behavior: "auto" });
  }, []);

  const onOrbPointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault();
    draggingRef.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
  }, []);

  const onOrbPointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    const timeline = timelineRef.current;
    if (!timeline) return;
    const rect = timeline.getBoundingClientRect();
    const lh = Math.max(1, timeline.clientHeight);
    const y = e.clientY - rect.top;
    const p = 1 - Math.min(Math.max(y / lh, 0), 1);
    scrollTimelineToProgress(p);
  }, [scrollTimelineToProgress]);

  const onOrbPointerUp = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    draggingRef.current = false;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      /* already released */
    }
  }, []);

  const onOrbLostPointerCapture = useCallback(() => {
    draggingRef.current = false;
  }, []);

  return (
    <section
      id="experience"
      className="relative flex flex-col items-center justify-center py-10 sm:py-20"
    >
      {/* Background Orb */}
      <div className="absolute inset-0 -z-10">
        <Canvas camera={{ position: [0, 0, 6] }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[3, 5, 2]} intensity={1.2} />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate />
          <Sphere visible args={[1, 100, 200]} scale={3}>
            <meshStandardMaterial color="#32165a" metalness={0.6} roughness={0.3} />
          </Sphere>
        </Canvas>
      </div>

      {/* Heading */}
      <h2 className="text-2xl sm:text-4xl md:text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-10 sm:mb-16">
        Experience
      </h2>

      {/* Timeline */}
      <div
        ref={timelineRef}
        className="relative w-full max-w-full sm:max-w-3xl md:max-w-6xl px-2 sm:px-4 md:px-0"
      >
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[2px] sm:w-[4px] bg-gradient-to-b from-purple-500 via-pink-400 to-cyan-500 shadow-[0_0_15px_rgba(147,51,234,0.7)]" />

        {/* Earth Ball — spring-smoothed to scroll; drag vertically to scrub page scroll */}
        <motion.div
          ref={orbRef}
          role="slider"
          tabIndex={0}
          aria-label="Scroll the experience timeline"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-orientation="vertical"
          onPointerDown={onOrbPointerDown}
          onPointerMove={onOrbPointerMove}
          onPointerUp={onOrbPointerUp}
          onPointerCancel={onOrbPointerUp}
          onLostPointerCapture={onOrbLostPointerCapture}
          style={{
            left: "50%",
            top: 0,
            x: "-50%",
            y: orbTranslateY,
            willChange: "transform",
            touchAction: "none",
          }}
          className="absolute z-[1] w-[60px] cursor-grab touch-none select-none overflow-hidden rounded-full shadow-[0_0_25px_rgba(34,211,238,0.9)] active:cursor-grabbing sm:h-[90px] sm:w-[90px] h-[60px] w-[60px]"
        >
          <Canvas
            className="pointer-events-none !touch-none"
            style={{ pointerEvents: "none" }}
            camera={{ position: [0, 0, 3] }}
          >
            <ambientLight intensity={0.8} />
            <directionalLight position={[5, 3, 2]} />
            <EarthBall />
          </Canvas>
        </motion.div>

        {/* Timeline Cards */}
        <div className="space-y-12 sm:space-y-24">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -120 : 120 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, type: "spring" }}
              viewport={{ once: true }}
              className={`relative flex ${
                i % 2 === 0 ? "justify-start pr-2 sm:pr-12" : "justify-end pl-2 sm:pl-12"
              }`}
            >
              <div className="w-[95%] sm:w-[85%] md:w-[46%] p-4 sm:p-6 rounded-2xl bg-[rgba(3,0,20,0.55)] border border-[#2A0E61] shadow-md hover:shadow-cyan-500/40 transition">
                <div className="mb-3 flex flex-col gap-1 md:flex-row md:items-start md:justify-between md:gap-4">
                  <div className="min-w-0 flex-1">
                    <div className="break-words text-base font-bold text-purple-300 sm:text-lg">
                      {exp.company}
                    </div>
                    <div className="text-sm text-gray-300">{exp.role}</div>
                  </div>
                  <div className="shrink-0 text-xs text-gray-400 sm:whitespace-nowrap">
                    {exp.date}
                  </div>
                </div>

                <ul className="list-disc pl-5 text-sm text-gray-300 space-y-1">
                  {exp.points.map((p, idx) => (
                    <li key={idx}>{p}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
