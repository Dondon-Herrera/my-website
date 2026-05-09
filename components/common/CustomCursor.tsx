"use client";

import { useEffect } from "react";

import fluidCursor from "@/lib/hooks/useFluidCursor";

const FluidCursor = () => {
  useEffect(() => {
    fluidCursor();
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[48] h-screen w-screen">
      <canvas
        id="fluid"
        className="h-full w-full"
        style={{ pointerEvents: "none" }}
      />
    </div>
  );
};

export default FluidCursor;
