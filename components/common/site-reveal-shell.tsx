"use client";

import type { PropsWithChildren } from "react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

const REVEAL_EVENT = "site-reveal";

/**
 * Fades / slides main column in when {@link InitialLoadOverlay} dispatches `site-reveal`
 * (crossfade with the loader). Fallback timeout if the event never fires.
 */
export function SiteRevealShell({ children }: PropsWithChildren) {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    let done = false;
    const reveal = () => {
      if (done) return;
      done = true;
      setRevealed(true);
    };

    window.addEventListener(REVEAL_EVENT, reveal, { once: true });
    const fallbackMs = 15_000;
    const t = window.setTimeout(reveal, fallbackMs);

    return () => {
      window.removeEventListener(REVEAL_EVENT, reveal);
      window.clearTimeout(t);
    };
  }, []);

  return (
    <div
      className={cn(
        "transition-[opacity,transform] duration-[680ms] ease-out motion-reduce:transition-opacity motion-reduce:duration-500",
        revealed
          ? "translate-y-0 opacity-100"
          : "translate-y-2 opacity-0 motion-reduce:translate-y-0",
      )}
    >
      {children}
    </div>
  );
}
