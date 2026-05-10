"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

/** Mockup sky blue; satellite sizes scale off Web/Apps `em`. */
const MOCK_SKY = "#B6DFFF";
const WEB_APPS_FONT_SIZE =
  "clamp(3rem, min(12vw, 13vh), 10rem)";
/** ~25% of Web/Apps */
const MODERN_FONT_SIZE = "calc(1em / 4)";
/** ~24% of Web/Apps (slightly above previous 1/4.5) */
const DEVELOPER_FONT_SIZE = "calc(1em / 4.2)";

export const HeroContent = () => {
  const [aboutPortraitSrc, setAboutPortraitSrc] = useState("/formal2.jpg");

  return (
    <>
      {/* —— Portrait hero: headline behind figure; SVG removes light (white) photo bg —— */}
      <div
        id="welcome"
        className="relative isolate min-h-[100svh] w-full bg-transparent overflow-x-clip"
      >
        {/* Nebula accents — closer to mockup (cool + slight warm/green) */}
        <div
          className="pointer-events-none absolute -left-28 -top-36 z-0 h-[48vh] w-[min(92vw,620px)] rounded-full bg-gradient-to-br from-emerald-400/15 via-amber-200/10 to-purple-500/20 blur-[100px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-24 top-[18%] z-0 h-[38vh] w-[55vw] max-w-lg rounded-full bg-cyan-400/12 blur-[90px]"
          aria-hidden
        />

        <div className="grid min-h-[100svh] w-full grid-cols-1 grid-rows-1">
          {/* Portrait + headline (headline tied to figure head) + CTAs */}
          <div className="relative z-10 col-start-1 row-start-1 flex min-h-[100svh] w-full max-w-[100rem] flex-col items-center justify-end self-stretch justify-self-center px-3 pb-[calc(2rem+env(safe-area-inset-bottom,0px))] pt-[max(2.5rem,env(safe-area-inset-top,0px))] sm:px-6 sm:pb-8 sm:pt-14 md:pb-10 md:pt-10 lg:pb-10">
            <div className="relative z-10 flex w-full max-w-full flex-col items-center">
              {/* Image-only box so headline % aligns with head (mockup) */}
              <div className="relative w-fit max-w-full shrink-0">
                {/*
                  Mockup structure: face sits between Web | Apps
                  Modern above Web · Developer under Apps
                */}
                {/* Mobile headline (mockup): Modern / Web Apps / Developer */}
                <div
                  className="pointer-events-none absolute left-1/2 top-[max(0px,env(safe-area-inset-top,0px))] z-[2] w-full -translate-x-1/2 -translate-y-1 px-4 pt-0 text-center font-sans antialiased sm:hidden"
                  aria-hidden
                >
                  <div
                    className="mx-auto flex w-full max-w-[26rem] translate-x-[min(0.75rem,3.5vw)] flex-col items-center"
                    style={{ color: MOCK_SKY }}
                  >
                    <div
                      className="font-black uppercase"
                      style={{
                        fontSize: "clamp(0.9rem, 3.6vw, 1.15rem)",
                        letterSpacing: "0.22em",
                        textShadow:
                          "0 0 1px rgba(182, 223, 255, 0.95), 0 0 18px rgba(182, 223, 255, 0.45)",
                      }}
                    >
                      Modern
                    </div>
                    <div
                      className="mt-1 whitespace-nowrap font-black leading-[0.88] tracking-[-0.04em]"
                      style={{
                        fontSize: "clamp(3.2rem, 12.5vw, 4.6rem)",
                        textShadow:
                          "0 0 40px rgba(182, 223, 255, 0.42), 0 0 82px rgba(56, 189, 248, 0.1)",
                      }}
                    >
                      Web Apps
                    </div>
                    <div
                      className="mt-1 whitespace-nowrap font-black"
                      style={{
                        fontSize: "clamp(1.1rem, 4.2vw, 1.5rem)",
                        letterSpacing: "0.08em",
                        textShadow:
                          "0 0 22px rgba(182, 223, 255, 0.45), 0 0 44px rgba(56, 189, 248, 0.12)",
                      }}
                    >
                      Developer
                    </div>
                  </div>
                </div>

                <div
                  className="pointer-events-none absolute left-1/2 z-[1] hidden w-full max-w-[100vw] -translate-x-1/2 -translate-y-[2%] font-sans antialiased sm:block sm:-translate-y-[3%] md:-translate-y-[4%]"
                  style={{
                    top: "clamp(0px, 12vh, 140px)",
                    paddingLeft: "clamp(1rem, 6vw, 8rem)",
                    paddingRight: "clamp(1rem, 6vw, 8rem)",
                  }}
                >
                  {/*
                    Gap Web|Apps ≈ face width; Modern 1/4em, Developer 1/4.2em
                  */}
                  <div
                    className="mx-auto flex w-full max-w-[min(100%,1900px)] flex-row items-end justify-center"
                    style={{
                      gap: "clamp(2.5rem, min(22vw, 25rem), 18rem)",
                    }}
                  >
                    <div
                      className="relative shrink-0"
                      style={{
                        fontSize: WEB_APPS_FONT_SIZE,
                        transform:
                          "translateX(clamp(0.5rem, 1.35vw, 2.25rem))",
                      }}
                    >
                      <span
                        className="absolute left-0 whitespace-nowrap font-black leading-none"
                        style={{
                          bottom: "calc(100% + clamp(6px, 0.9vw, 14px))",
                          color: MOCK_SKY,
                          fontSize: MODERN_FONT_SIZE,
                          letterSpacing: "0.12em",
                          textShadow:
                            "0 0 1px rgba(182, 223, 255, 0.95), 0 0 26px rgba(182, 223, 255, 0.55)",
                        }}
                      >
                        Modern
                      </span>
                      <span
                        className="block font-black leading-[0.82] tracking-[-0.04em]"
                        style={{
                          fontSize: "1em",
                          color: MOCK_SKY,
                          textShadow:
                            "0 0 40px rgba(182, 223, 255, 0.45), 0 0 88px rgba(56, 189, 248, 0.12)",
                        }}
                      >
                        Web
                      </span>
                    </div>
                    <div
                      className="relative shrink-0"
                      style={{ fontSize: WEB_APPS_FONT_SIZE }}
                    >
                      <span
                        className="block font-black leading-[0.82] tracking-[-0.04em]"
                        style={{
                          fontSize: "1em",
                          color: MOCK_SKY,
                          /* Pull “Apps” left (behind portrait); scale with viewport, cap so small screens stay sane */
                          transform:
                            "translateX(calc(-1 * clamp(0.625rem, 4.75vw, 4.75rem)))",
                          textShadow:
                            "0 0 40px rgba(182, 223, 255, 0.45), 0 0 88px rgba(56, 189, 248, 0.12)",
                        }}
                      >
                        Apps
                      </span>
                      <span
                        className="absolute right-0 whitespace-nowrap font-black leading-none"
                        style={{
                          top: "calc(100% + clamp(28px, 3vw, 56px))",
                          transform: "translateX(clamp(6px, 0.75vw, 18px))",
                          color: MOCK_SKY,
                          fontSize: DEVELOPER_FONT_SIZE,
                          letterSpacing: "0.08em",
                          textShadow:
                            "0 0 24px rgba(182, 223, 255, 0.5), 0 0 48px rgba(56, 189, 248, 0.15)",
                        }}
                      >
                        Developer
                      </span>
                    </div>
                  </div>
                </div>

                <Image
                  src="/hero_body_cutout.svg"
                  alt="Dondon Herrera"
                  width={1027}
                  height={1248}
                  priority
                  unoptimized
                  draggable={false}
                  className="relative z-10 mx-auto mt-[clamp(6rem,20vh,10.25rem)] block h-auto max-h-[min(86vh,1020px)] w-auto max-w-[min(98vw,980px)] object-contain object-bottom object-center select-none sm:mt-0 sm:max-h-[min(91vh,1180px)] sm:max-w-[min(95vw,1040px)] md:max-h-[min(89vh,1240px)] md:max-w-[min(93vw,1180px)] lg:max-w-[min(91vw,1220px)]"
                />

                {/* Name + CTAs overlaid on lower portrait; nudged up from bottom edge */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[25] flex translate-y-5 flex-col items-center px-2 pb-0 sm:translate-y-6 sm:pb-0.5 md:translate-y-7">
                  <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[min(42%,220px)] bg-gradient-to-t from-[#030014]/85 via-[#030014]/35 to-transparent sm:h-[min(38%,260px)]"
                    aria-hidden
                  />
                  <p className="relative z-10 w-full min-w-0 px-2 text-center text-lg leading-snug text-white/90 drop-shadow-[0_2px_14px_rgba(0,0,0,0.92)] sm:text-xl">
                    Dondon Herrera · Senior Software Engineer
                  </p>
                  <div className="relative z-10 mt-2.5 flex w-full min-w-0 max-w-xl flex-col items-stretch justify-center gap-3 px-2 sm:mt-3 sm:max-w-2xl sm:flex-row sm:gap-5">
                    <Link
                      href="/about-me"
                      className="pointer-events-auto rounded-full border border-white/25 bg-white/[0.12] px-5 py-3 text-center text-sm font-medium text-white shadow-[0_8px_32px_rgba(0,0,0,0.45)] backdrop-blur-md transition hover:bg-white/20 sm:px-8 sm:py-4 sm:text-lg"
                    >
                      About Me
                    </Link>
                    <Link
                      href="/projects"
                      className="pointer-events-auto rounded-full border border-cyan-400/50 bg-cyan-500/20 px-5 py-3 text-center text-sm font-medium leading-snug text-cyan-50 shadow-[0_8px_32px_rgba(0,0,0,0.45)] backdrop-blur-md transition hover:bg-cyan-500/30 sm:px-8 sm:py-4 sm:text-lg"
                    >
                      My Last Projects
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Soft blend into intro — no hard line */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[8] h-[min(20vh,180px)] bg-gradient-to-b from-transparent via-[#030014]/12 to-[#030014]/28 sm:h-[min(22vh,200px)]"
          aria-hidden
        />
      </div>

      {/* —— Intro / about block (#about-me), below #welcome —— */}
      <div
        id="about-me"
        className="relative flex min-h-[62svh] w-full flex-col justify-center bg-[linear-gradient(180deg,transparent_0%,rgba(3,0,20,0.26)_14%,rgba(3,0,20,0.5)_38%,rgba(3,0,20,0.46)_58%,rgba(3,0,20,0.18)_82%,transparent_100%)] backdrop-blur-[3px] sm:min-h-[58svh] md:min-h-[min(56svh,720px)]"
      >
        <div className="pointer-events-none absolute inset-0 z-[5] bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.18)_22%,rgba(0,0,0,0.32)_48%,rgba(0,0,0,0.1)_80%,transparent_100%)] lg:bg-none" />

        <div className="relative z-[20] flex w-full flex-col items-center justify-center py-16 pl-7 pr-4 sm:py-20 sm:pl-11 sm:pr-5 md:flex-row md:py-24 md:pl-[clamp(4.5rem,10vw,7.5rem)] md:pr-12 lg:pl-[clamp(5.5rem,11vw,9rem)]">
          <div className="m-auto flex h-full w-full flex-col justify-center gap-4 text-start sm:gap-5">
              <div className="Welcome-box flex max-w-full items-center border border-[#7042f88b] px-[8px] py-[8px] opacity-[0.9] sm:px-[10px] sm:py-[9px]">
              <SparklesIcon className="mr-[10px] h-6 w-6 shrink-0 text-[#b49bff]" />
              <h1 className="Welcome-text text-[14px] sm:text-[15px]">
                Dondon Herrera · Software Engineer
              </h1>
            </div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.35 }}
              className="mt-4 flex h-auto w-auto max-w-full flex-col gap-4 text-3xl font-bold text-white sm:mt-6 sm:gap-6 sm:text-5xl md:max-w-[600px] md:text-6xl"
            >
              <span>
                Engineering{" "}
                <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                  digital solutions that solve
                </span>{" "}
                real problems.
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.35, delay: 0.06 }}
              className="my-3 max-w-full text-base text-gray-400 sm:my-5 sm:text-lg md:max-w-[600px]"
            >
              Full Stack Engineer specializing in React, Next.js, and Node.js.
              I build responsive, high-performance applications and thrive on
              solving real-world challenges with modern tools.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.35, delay: 0.1 }}
            >
              <Link
                href="/about-me"
                className="flex max-w-[200px] cursor-pointer justify-center rounded-lg border border-cyan-400/35 bg-white/[0.06] py-2.5 text-center text-[15px] font-medium text-cyan-50 shadow-[0_14px_45px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-sm transition hover:bg-white/[0.1] hover:border-cyan-300/55 sm:max-w-[240px] sm:py-3 sm:text-base"
              >
                More about me
              </Link>
            </motion.div>

            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.35, delay: 0.12 }}
              href="/DONDON_REYES_HERRERA.pdf"
              target="_blank"
              rel="noreferrer noopener"
              className="button-primary max-w-[200px] cursor-pointer rounded-lg py-2.5 text-center text-[15px] text-white sm:max-w-[240px] sm:py-3 sm:text-base"
            >
              View Resume
            </motion.a>
            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.35, delay: 0.16 }}
              href="#project"
              className="button-secondary max-w-[200px] cursor-pointer rounded-lg border border-purple-500/50 bg-purple-600 py-2.5 text-center text-[15px] text-white transition-colors hover:bg-purple-700 sm:max-w-[240px] sm:py-3 sm:text-base"
            >
              See Project List
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45 }}
            className="mt-12 hidden h-full w-full items-center justify-center md:mt-0 md:flex md:pl-2"
          >
            <div className="relative w-[260px] shrink-0 -translate-x-4 sm:-translate-x-5 md:-translate-x-8 lg:-translate-x-10 sm:w-[340px] md:w-[420px] lg:w-[520px] xl:w-[620px]">
              <Image
                src="/hero-bg.svg"
                alt="Work icons"
                height={320}
                width={320}
                draggable={false}
                className="relative z-0 h-auto w-full select-none"
              />
              <div className="pointer-events-none absolute left-1/2 top-1/2 z-[15] aspect-square w-[min(36%,14rem)] min-w-[120px] max-w-[15.5rem] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-[3px] border-white/35 bg-[#030014] shadow-[0_16px_48px_rgba(0,0,0,0.55)] sm:min-w-[128px] md:min-w-[136px] md:w-[min(34%,15.5rem)]">
                <Image
                  src={aboutPortraitSrc}
                  alt="Dondon Herrera"
                  fill
                  priority
                  sizes="(max-width: 640px) 40vw, (max-width: 1024px) 35vw, 15.5rem"
                  draggable={false}
                  unoptimized
                  onError={() => {
                    setAboutPortraitSrc((prev) =>
                      prev === "/hero_body_cutout.svg"
                        ? prev
                        : "/hero_body_cutout.svg",
                    );
                  }}
                  className={
                    aboutPortraitSrc.endsWith(".svg")
                      ? "object-cover object-[center_16%] scale-[1.12]"
                      : "object-cover object-center"
                  }
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};
