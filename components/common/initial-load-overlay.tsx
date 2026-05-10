"use client";

import { useEffect, useState } from "react";

import { CRITICAL_IMAGE_PATHS } from "@/lib/critical-images";

type Phase = "loading" | "exiting" | "hidden";

const SKY = "#B6DFFF";

function preloadImage(src: string): Promise<void> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => resolve();
    img.src = src;
  });
}

function waitForWindowLoad(): Promise<void> {
  if (document.readyState === "complete") return Promise.resolve();
  return new Promise((resolve) => {
    window.addEventListener("load", () => resolve(), { once: true });
  });
}

/**
 * Waits for hero + profile + project thumbnails, then window `load`, then fades out
 * so the rest of the page can appear with a smooth shell animation (`html.app-ready`).
 */
export function InitialLoadOverlay() {
  const [phase, setPhase] = useState<Phase>("loading");

  useEffect(() => {
    let cancelled = false;
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const MIN_MS = reduced ? 0 : 780;
    const EXIT_MS = reduced ? 0 : 520;
    const MAX_WAIT_MS = 14_000;
    const started = Date.now();

    const finishSequence = () => {
      if (cancelled) return;
      const wait = Math.max(0, MIN_MS - (Date.now() - started));
      window.setTimeout(() => {
        if (cancelled) return;
        document.documentElement.classList.add("app-ready");
        setPhase("exiting");
        window.setTimeout(() => {
          if (!cancelled) setPhase("hidden");
        }, EXIT_MS);
      }, wait);
    };

    (async () => {
      const criticalDone = Promise.all(
        CRITICAL_IMAGE_PATHS.map((href) => preloadImage(href)),
      );
      const windowDone = waitForWindowLoad();

      try {
        await Promise.race([
          Promise.all([criticalDone, windowDone]),
          new Promise<void>((r) => window.setTimeout(r, MAX_WAIT_MS)),
        ]);
      } finally {
        if (!cancelled) finishSequence();
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (phase === "hidden") {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
  }, [phase]);

  if (phase === "hidden") return null;

  return (
    <div
      className={`fixed inset-0 z-[20000] flex flex-col items-center justify-center bg-[#030014] px-6 transition-[opacity,visibility] duration-[520ms] ease-out motion-reduce:transition-none ${
        phase === "exiting"
          ? "pointer-events-none opacity-0"
          : "opacity-100"
      }`}
      aria-hidden={phase === "exiting"}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden
      >
        <div className="absolute left-1/2 top-[28%] h-[min(280px,45vw)] w-[min(100%,520px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-cyan-500/25 via-sky-400/15 to-purple-500/20 blur-[72px]" />
      </div>

      <div className="relative flex flex-col items-center gap-7">
        <div className="relative h-[4.25rem] w-[4.25rem]">
          <div
            className="absolute inset-0 rounded-full border-2 border-white/[0.08]"
            aria-hidden
          />
          <div
            className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-cyan-400/90 border-r-purple-400/75 motion-reduce:animate-none"
            aria-hidden
          />
        </div>
        <div className="text-center">
          <p
            className="text-[15px] font-semibold tracking-[0.12em] md:text-base"
            style={{ color: SKY }}
          >
            Loading portfolio
          </p>
          <p className="mt-2 max-w-[16rem] text-[12px] leading-relaxed text-gray-500 md:text-[13px]">
            Loading hero, profile, and projects…
          </p>
        </div>
      </div>
    </div>
  );
}
