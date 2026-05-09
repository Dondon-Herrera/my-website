"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { slideInFromTop } from "@/lib/motion";

export const Encryption = () => {
  const [isDecrypted, setIsDecrypted] = useState(false);

  return (
    <div className="flex flex-col relative items-center justify-center min-h-[60vh] sm:min-h-screen w-full h-full py-8 sm:py-14 overflow-hidden px-2 sm:px-0">
      {/* Portrait - shows only when decrypted */}
      <AnimatePresence>
        {isDecrypted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.8, y: 50, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0 z-[1] flex items-center justify-center"
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
                className="object-cover rounded-2xl shadow-[0_0_40px_rgba(112,66,248,0.5)] w-[140px] sm:w-[220px] h-auto"
                draggable={false}
                priority
              />

              {/* Encrypt button under the image */}
              <motion.div
                onClick={() => setIsDecrypted(false)}
                whileHover={{ scale: 1.08 }}
                className="mt-6 px-[24px] py-[10px] border border-[#7042F88B] bg-black/50 text-gray-200 text-[15px] rounded-xl cursor-pointer shadow-[0_0_25px_rgba(112,66,248,0.6)] backdrop-blur-sm transition"
              >
                Encrypt
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Title */}
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-[22px] sm:text-[32px] md:text-[40px] font-medium text-center text-gray-200"
        >
          Performance{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            &amp;
          </span>{" "}
          security.
        </motion.div>
      </div>

      {/* Lock animation + Decrypt button */}
      {!isDecrypted && (
        <div className="flex flex-col items-center justify-center absolute z-[20] w-auto h-auto translate-y-[-30px] sm:translate-y-[-50px]">
          <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
            <Image
              src="/lock-top.png"
              alt="Lock top"
              width={38}
              height={38}
              className="translate-y-3 sm:translate-y-5 transition-all duration-200 group-hover:translate-y-7 sm:group-hover:translate-y-11"
            />
            <Image
              src="/lock-main.png"
              alt="Lock main"
              width={55}
              height={55}
              className="z-10"
            />
          </div>

          {/* Decrypt button */}
          <motion.div
            onClick={() => setIsDecrypted(true)}
            whileHover={{ scale: 1.08 }}
            className="mt-5 px-[24px] py-[10px] border border-[#7042F88B] bg-black/50 text-gray-200 text-[15px] rounded-xl cursor-pointer shadow-[0_0_25px_rgba(112,66,248,0.6)] backdrop-blur-sm transition"
          >
            Decrypt
          </motion.div>
        </div>
      )}

      {/* Subtitle */}
      <div className="absolute z-[20] bottom-[10px] sm:bottom-[15px] px-[6px] sm:px-[10px]">
        <div className="cursive text-[15px] sm:text-[18px] md:text-[20px] font-medium text-center text-gray-300">
          Secure your data with end-to-end encryption.
        </div>
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
