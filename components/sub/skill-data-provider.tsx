"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

type SkillDataProviderProps = {
  src: string;
  name: string;
  width: number;
  height: number;
  index: number;
};

export const SkillDataProvider = (props: SkillDataProviderProps) => {
  const { src, name, index } = props;
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.1;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
      className="flex shrink-0 items-center justify-center"
    >
      {/* Uniform cell so every logo reads at the same scale (intrinsic PNG sizes vary). */}
      <div className="relative aspect-square w-[clamp(2.625rem,7.25vw,4.5rem)] shrink-0 sm:w-[clamp(2.875rem,6.5vw,4.25rem)] md:w-[clamp(3.125rem,5.5vw,4.5rem)]">
        <Image
          src={`/skills/${encodeURIComponent(src)}`}
          alt={name}
          sizes="(max-width: 640px) 48px, (max-width: 1024px) 56px, 72px"
          className="object-contain p-[10%]"
          fill
        />
      </div>
    </motion.div>
  );
};
