"use client";

import { Points, PointMaterial } from "@react-three/drei";
import { Canvas, type PointsProps, useFrame } from "@react-three/fiber";
import * as random from "maath/random";
import { useState, useRef, Suspense } from "react";
import type { Points as PointsType } from "three";

import { cn } from "@/lib/utils";

export const StarBackground = (props: PointsProps) => {
  const ref = useRef<PointsType | null>(null);
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        stride={3}
        positions={new Float32Array(sphere)}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

type StarsCanvasProps = {
  /** `hero`: first-section layer only. Omit for legacy full-viewport (fixed) backdrop. */
  variant?: "hero" | "viewport";
  className?: string;
};

export const StarsCanvas = ({
  variant = "viewport",
  className,
}: StarsCanvasProps) => (
  <div
    className={cn(
      "h-full w-full",
      variant === "viewport" &&
        "pointer-events-none fixed inset-0 z-[1] min-h-[100dvh]",
      variant === "hero" &&
        "pointer-events-none absolute inset-0 z-0 min-h-[100svh]",
      className
    )}
  >
    <Canvas
      className="h-full min-h-[inherit] w-full"
      camera={{ position: [0, 0, 1] }}
      gl={{ alpha: true }}
    >
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);
