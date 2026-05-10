"use client";

import { useEffect, useState } from "react";

type Phase = "loading" | "exiting" | "hidden";

const SKY = "#B6DFFF";

/**
 * Full-screen loader until the window `load` event (document + subresources).
 * Fades out after a minimum time so fast connections don’t flash the overlay.
 */
export function InitialLoadOverlay() {
  const [phase, setPhase] = useState<Phase>("loading");

  useEffect(() => {
    let cancelled = false;
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const MIN_MS = reduced ? 0 : 850;
    const EXIT_MS = reduced ? 0 : 420;
    const started = Date.now();

    const finish = () => {
      if (cancelled) return;
      const wait = Math.max(0, MIN_MS - (Date.now() - started));
      window.setTimeout(() => {
        if (cancelled) return;
        setPhase("exiting");
        window.setTimeout(() => {
          if (!cancelled) setPhase("hidden");
        }, EXIT_MS);
      }, wait);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
    }

    return () => {
      cancelled = true;
      window.removeEventListener("load", finish);
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
      className={`fixed inset-0 z-[20000] flex flex-col items-center justify-center bg-[#030014] px-6 transition-[opacity,visibility] duration-500 ease-out motion-reduce:transition-none ${
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
            Preparing visuals and content…
          </p>
        </div>
      </div>
    </div>
  );
}
