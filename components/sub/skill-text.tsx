"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { memo } from "react";

const fadeUp = { initial: { opacity: 0, y: -10 }, animate: { opacity: 1, y: 0, transition: { duration: 0.5 } } };
const fadeLeft = { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.5 } } };
const fadeRight = { initial: { opacity: 0, x: 20 }, animate: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.5 } } };

const SkillTextComponent = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center px-2 sm:px-0">
      <motion.div
        {...fadeUp}
        className="flex items-center py-2 px-3 border border-[#7042f88b] opacity-90 rounded"
      >
        <SparklesIcon className="text-[#b49bff] mr-2 h-4 w-4 sm:h-5 sm:w-5" />
        <h1 className="text-[12px] sm:text-[13px] text-white font-medium">
          Code. Engineer. Optimize. Deliver
        </h1>
      </motion.div>

      <motion.div
        {...fadeLeft}
        className="text-[22px] sm:text-[26px] md:text-[30px] text-white font-medium mt-2 text-center mb-3"
      >
        Making apps with modern technologies.
      </motion.div>

      <motion.div
        {...fadeRight}
        className="text-[14px] sm:text-[16px] text-gray-200 mt-2 mb-6 text-center"
      >
        Frontend, Backend, Databases, Cloud, and AI — I Build It All
      </motion.div>
    </div>
  );
};

export const SkillText = memo(SkillTextComponent);
