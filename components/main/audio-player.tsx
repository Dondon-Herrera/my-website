"use client";

import { useEffect, useRef, useState } from "react";

export const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const audioEl = audioRef.current;
    if (!audioEl) return;

    const onCanPlay = () => setIsReady(true);
    audioEl.addEventListener("canplay", onCanPlay);

    // Attempt autoplay with sound on mount
    audioEl.muted = false;
    audioEl.volume = 0.35;
    audioEl.play().catch(() => {
      // Autoplay may be blocked; fallback to muted and try again
      audioEl.muted = true;
      setIsMuted(true);
      audioEl.play().catch(() => {});
    });

    return () => {
      audioEl.removeEventListener("canplay", onCanPlay);
    };
  }, []);

  const toggleMute = () => {
    const audioEl = audioRef.current;
    if (!audioEl) return;
    const nextMuted = !isMuted;
    audioEl.muted = nextMuted;
    setIsMuted(nextMuted);
    if (!nextMuted) {
      audioEl.play().catch(() => {});
    }
  };

  return (
    <div className="fixed bottom-[calc(6.25rem+env(safe-area-inset-bottom,0px))] right-[max(0.5rem,env(safe-area-inset-right,0px))] z-[60] flex max-w-[calc(100vw-1rem)] items-center gap-1 rounded-full border border-[#2A0E61] bg-[rgba(3,0,20,0.6)] px-2 py-1 text-xs text-gray-200 backdrop-blur-md sm:bottom-4 sm:right-4 sm:gap-2 sm:px-3 sm:py-2 sm:text-sm">
      <audio ref={audioRef} src="/space-120280.mp3" loop autoPlay playsInline />
      <button onClick={toggleMute} className="text-xs sm:text-sm cursor-pointer">
        {isMuted ? "Unmute" : "Mute"}
      </button>
      <span className="text-[10px] sm:text-xs opacity-70">{isReady ? "Music" : "Loading"}</span>
    </div>
  );
};


