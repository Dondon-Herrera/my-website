"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { slideInFromTop } from "@/lib/motion";

const subtitleClass =
  "text-center text-[14px] font-medium leading-snug tracking-[0.02em] text-gray-100/90 drop-shadow-[0_2px_16px_rgba(0,0,0,0.55)] sm:text-[16px] sm:leading-relaxed md:text-[17px]";

export const Encryption = () => {
  const [isDecrypted, setIsDecrypted] = useState(false);

  return (
    <div className="relative mb-0 flex h-full min-h-[60vh] w-full flex-col items-center justify-center overflow-hidden px-2 pt-0 pb-0 sm:min-h-screen sm:px-0 sm:pb-0 sm:pt-0">
      {/* Title */}
      <div className="pointer-events-none absolute left-1/2 top-12 z-[30] w-[min(100%,20rem)] -translate-x-1/2 px-2 sm:top-20 sm:w-auto sm:px-0 md:top-24">
        <motion.div
          variants={slideInFromTop}
          className="text-[22px] font-medium text-center text-gray-200 drop-shadow-[0_2px_12px_rgba(0,0,0,0.75)] sm:text-[32px] md:text-[40px]"
        >
          Performance{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            &amp;
          </span>{" "}
          security.
        </motion.div>
      </div>

      {/* Lock / portrait + CTA + subtitle — flow layout keeps subtitle tight under the animation */}
      <div className="relative z-[20] flex w-full max-w-[32rem] flex-1 flex-col items-center px-4 max-sm:justify-start max-sm:pt-[7.5rem] sm:justify-center sm:px-8 sm:pt-0">
        <AnimatePresence mode="wait">
          {isDecrypted ? (
            <motion.div
              key="decrypted"
              initial={{ opacity: 0, scale: 0.8, y: 50, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.8, y: 50, filter: "blur(10px)" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: 1 }}
                className="relative flex flex-col items-center"
              >
                <Image
                  src="/formal2.jpg"
                  alt="Praduman portrait"
                  width={220}
                  height={220}
                  className="h-auto w-[140px] rounded-2xl object-cover shadow-[0_0_40px_rgba(112,66,248,0.5)] sm:w-[220px]"
                  draggable={false}
                  priority
                />
                <motion.div
                  onClick={() => setIsDecrypted(false)}
                  whileHover={{ scale: 1.08 }}
                  className="mt-6 cursor-pointer rounded-xl border border-[#7042F88B] bg-black/50 px-6 py-2.5 text-[15px] text-gray-200 shadow-[0_0_25px_rgba(112,66,248,0.6)] backdrop-blur-sm transition"
                >
                  Encrypt
                </motion.div>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="locked"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="flex flex-col items-center"
            >
              <div className="group flex cursor-pointer flex-col items-center leading-none">
                {/* One unit: overlap shackle + body (assets are split sprites) */}
                <div className="relative flex flex-col items-center">
                  <Image
                    src="/lock-top.png"
                    alt=""
                    width={38}
                    height={38}
                    aria-hidden
                    className="relative z-[1] mx-auto block h-[38px] w-[38px] -mb-[18px] translate-y-0 object-contain object-bottom transition-transform duration-200 ease-out group-hover:translate-y-3 sm:-mb-[20px] sm:translate-y-0 sm:group-hover:translate-y-6"
                  />
                  <Image
                    src="/lock-main.png"
                    alt="Locked"
                    width={55}
                    height={55}
                    className="relative z-[2] mx-auto block h-[55px] w-[55px] object-contain object-top"
                  />
                </div>
              </div>
              <motion.div
                onClick={() => setIsDecrypted(true)}
                whileHover={{ scale: 1.08 }}
                className="mt-5 cursor-pointer rounded-xl border border-[#7042F88B] bg-black/50 px-6 py-2.5 text-[15px] text-gray-200 shadow-[0_0_25px_rgba(112,66,248,0.6)] backdrop-blur-sm transition"
              >
                Decrypt
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <p className={`${subtitleClass} mt-3 max-w-[min(100%,32rem)] sm:mt-4`}>
          Secure your data with{" "}
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-violet-200 to-cyan-300 [text-shadow:none]">
            end-to-end encryption
          </span>
          .
        </p>
      </div>

      {/* Video background */}
      <div className="w-full flex items-start justify-center absolute z-0">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto object-cover opacity-40"
        >
          <source src="/videos/encryption-bg.webm" type="video/webm" />
        </video>
      </div>
    </div>
  );
};
