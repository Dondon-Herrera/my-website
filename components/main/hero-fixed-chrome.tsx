"use client";

import {
  AcademicCapIcon,
  BriefcaseIcon,
  ChevronLeftIcon,
  CpuChipIcon,
  HomeIcon,
  PencilSquareIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useState } from "react";
import { MdEmail } from "react-icons/md";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { SiUpwork } from "react-icons/si";

import { LINKS } from "@/constants";
import { cn } from "@/lib/utils";

/** Mockup: electric cyan on deep navy */
const SKY = "#8ec8ff";
const SKY_DIM = "rgba(142, 200, 255, 0.9)";
const SOCIAL_TILE = "#9ed2ff";
const SOCIAL_ICON = "#070b14";

const SECTION_IDS = [
  "welcome",
  "about-me",
  "skills",
  "education",
  "experience",
  "project",
  "available",
] as const;

const socialTileClass =
  "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.22)] transition hover:brightness-110 sm:h-14 sm:w-14 md:h-[50px] md:w-[50px]";

function OrbitSparkle() {
  return (
    <motion.span
      aria-hidden
      className="relative ml-1.5 inline-flex h-4 w-4 shrink-0 items-center justify-center min-[400px]:ml-2 min-[400px]:h-[18px] min-[400px]:w-[18px] sm:h-5 sm:w-5"
      animate={{ rotate: 360 }}
      transition={{ duration: 1.9, ease: "linear", repeat: Infinity }}
    >
      {/* Center sparkle (outline) */}
      <svg
        viewBox="0 0 24 24"
        className="absolute left-1/2 top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 min-[400px]:h-4 min-[400px]:w-4 sm:h-[18px] sm:w-[18px]"
        fill="none"
        style={{ color: SKY }}
      >
        <path
          d="M12 4.5v3.2M12 16.3v3.2M4.5 12h3.2M16.3 12h3.2M7.4 7.4l2.3 2.3M14.3 14.3l2.3 2.3M16.6 7.4l-2.3 2.3M9.7 14.3l-2.3 2.3"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>

      {/* Small sparkle 1 */}
      <svg
        viewBox="0 0 24 24"
        className="absolute right-0 top-1/2 h-2.5 w-2.5 -translate-y-1/2 translate-x-[20%] opacity-90"
        fill="none"
        style={{ color: SKY }}
      >
        <path
          d="M12 6.5v2.2M12 15.3v2.2M6.5 12h2.2M15.3 12h2.2"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>

      {/* Small sparkle 2 */}
      <svg
        viewBox="0 0 24 24"
        className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-[20%] opacity-70"
        fill="none"
        style={{ color: SKY }}
      >
        <path
          d="M12 6.5v2.2M12 15.3v2.2M6.5 12h2.2M15.3 12h2.2"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    </motion.span>
  );
}

const dockItems = [
  {
    id: "welcome" as const,
    href: "/#welcome",
    label: "Home",
    Icon: HomeIcon,
    activeFor: ["welcome"] as const,
  },
  {
    id: "about-me" as const,
    href: "/#about-me",
    label: "Profile",
    Icon: UserIcon,
    activeFor: ["about-me"] as const,
  },
  {
    id: "skills" as const,
    href: "/#skills",
    label: "Skills",
    Icon: CpuChipIcon,
    activeFor: ["skills"] as const,
  },
  {
    id: "education" as const,
    href: "/#education",
    label: "Education",
    Icon: AcademicCapIcon,
    activeFor: ["education"] as const,
  },
  {
    id: "experience" as const,
    href: "/#experience",
    label: "Experience",
    Icon: BriefcaseIcon,
    activeFor: ["experience"] as const,
  },
  {
    id: "project" as const,
    href: "/#project",
    label: "Projects",
    Icon: PencilSquareIcon,
    activeFor: ["project", "available"] as const,
  },
] as const;

export function HeroFixedChrome() {
  const pathname = usePathname();
  const [activeId, setActiveId] = useState<string>("welcome");
  const [isPortfolioCtaVisible, setIsPortfolioCtaVisible] = useState(false);
  const [isHomeHeroPortraitInView, setIsHomeHeroPortraitInView] =
    useState(true);
  const [isSocialPinnedOpen, setIsSocialPinnedOpen] = useState(false);

  useEffect(() => {
    const pickActive = () => {
      if (pathname === "/about-me") {
        setActiveId("about-me");
        return;
      }
      if (pathname === "/projects") {
        setActiveId("project");
        return;
      }
      if (pathname === "/contact") {
        setActiveId("skills");
        return;
      }

      // At the top of the dashboard, keep the welcome hero as active so the URL is /#welcome
      // (avoids #about-me winning when the intro block also intersects the viewport).
      if (pathname === "/") {
        const hash = window.location.hash;
        if (
          window.scrollY < 12 &&
          (hash === "" || hash === "#" || hash === "#welcome")
        ) {
          setActiveId("welcome");
          return;
        }
      }

      const mid = window.innerHeight * 0.42;
      let bestId: (typeof SECTION_IDS)[number] = SECTION_IDS[0];
      let bestDist = Number.POSITIVE_INFINITY;

      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.bottom <= 0 || r.top >= window.innerHeight) continue;
        const sectionMid = r.top + r.height / 2;
        const dist = Math.abs(sectionMid - mid);
        if (dist < bestDist) {
          bestDist = dist;
          bestId = id;
        }
      }
      setActiveId(bestId);
    };

    pickActive();
    window.addEventListener("scroll", pickActive, { passive: true });
    window.addEventListener("resize", pickActive, { passive: true });
    return () => {
      window.removeEventListener("scroll", pickActive);
      window.removeEventListener("resize", pickActive);
    };
  }, [pathname]);

  // Default dashboard URL to /#welcome before first paint when there is no hash yet
  useLayoutEffect(() => {
    if (pathname !== "/") return;
    const h = window.location.hash;
    if (h !== "" && h !== "#") return;
    window.history.replaceState(
      window.history.state,
      "",
      `${window.location.pathname}${window.location.search}#welcome`
    );
  }, [pathname]);

  // Dashboard only: reflect scroll-spy section in the URL hash (e.g. /#about-me, /#experience)
  useEffect(() => {
    if (pathname !== "/") return;

    const nextHash = `#${activeId}`;
    if (window.location.hash === nextHash) return;

    const url = `${window.location.pathname}${window.location.search}${nextHash}`;
    window.history.replaceState(window.history.state, "", url);
  }, [pathname, activeId]);

  useEffect(() => {
    if (pathname !== "/about-me" && pathname !== "/projects") {
      setIsPortfolioCtaVisible(false);
      return;
    }

    let cancelled = false;
    let io: IntersectionObserver | null = null;
    let rafId = 0;
    let attempts = 0;

    const attach = () => {
      if (cancelled) return;
      const el = document.getElementById("portfolio-page-cta");
      if (!el) {
        if (attempts++ < 90) rafId = requestAnimationFrame(attach);
        return;
      }
      io = new IntersectionObserver(
        entries => {
          const visible = entries.some(e => e.isIntersecting);
          setIsPortfolioCtaVisible(visible);
        },
        { root: null, threshold: 0.08, rootMargin: "0px 0px -8% 0px" }
      );
      io.observe(el);
    };

    rafId = requestAnimationFrame(attach);
    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
      io?.disconnect();
    };
  }, [pathname]);

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

    let cancelled = false;
    let io: IntersectionObserver | null = null;
    let rafId = 0;
    let attempts = 0;

    const attach = () => {
      if (cancelled) return;
      const el = document.getElementById("welcome");
      if (!el) {
        if (attempts++ < 90) rafId = requestAnimationFrame(attach);
        return;
      }
      io = new IntersectionObserver(
        entries => {
          const inView = entries.some(e => e.isIntersecting);
          setIsHomeHeroPortraitInView(inView);
        },
        { root: null, threshold: 0 }
      );
      io.observe(el);
    };

    rafId = requestAnimationFrame(attach);
    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
      io?.disconnect();
    };
  }, [pathname]);

  useEffect(() => {
    if (!isSocialPinnedOpen) return;

    // After opening via the chevron, any scroll closes again (matches auto-hide).
    const onScroll = () => {
      setIsSocialPinnedOpen(false);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isSocialPinnedOpen]);

  const scrollTop = () => {
    // Reset manual override so socials return to auto-hide.
    setIsSocialPinnedOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const showSocial =
    isSocialPinnedOpen ||
    (pathname === "/about-me" || pathname === "/projects"
      ? !isPortfolioCtaVisible
      : pathname === "/" && activeId === "welcome");
  const showSocialToggle = !showSocial;

  const showBottomDock =
    pathname !== "/" || !isHomeHeroPortraitInView;

  return (
    <div className="pointer-events-none fixed inset-0 z-[55]">
      {/* Top right — mockup: cyan pill, transparent fill, star icon, dot + line + chevron */}
      <div className="pointer-events-auto absolute right-[max(0.75rem,env(safe-area-inset-right,0px))] top-[max(0.75rem,env(safe-area-inset-top,0px))] flex max-w-[calc(100vw-1.5rem-env(safe-area-inset-left,0px)-env(safe-area-inset-right,0px))] items-center justify-end gap-2 sm:right-6 sm:top-6 sm:gap-3 md:right-8 md:top-8">
        <Link
          href={pathname === "/contact" ? "#contact-form" : "/contact"}
          className="flex shrink-0 items-center gap-0 rounded-full border bg-transparent px-3 py-1.5 text-[11px] font-semibold leading-none tracking-wide transition hover:bg-[rgba(202, 210, 219, 0.1)] min-[400px]:px-4 min-[400px]:py-2 min-[400px]:text-[13px] sm:px-5 sm:py-2.5 sm:text-[14px]  md:text-base"
          style={{ borderColor: SKY, color: SKY }}
        >
          <span className="whitespace-nowrap text-center">
            <span className="inline min-[400px]:hidden">Start Project</span>
            <span className="hidden min-[400px]:inline">Start a Project</span>
          </span>
          <OrbitSparkle />
        </Link>
        <div
          className="ml-1 hidden min-[420px]:flex min-[420px]:items-center sm:ml-5"
          style={{ color: SKY }}
          aria-hidden
        >
          <span
            className="mr-2 h-2.5 w-2.5 shrink-0 rounded-full sm:h-3 sm:w-3"
            style={{ backgroundColor: SKY }}
          />
          <span
            className="h-px w-10 sm:w-[4.5rem] md:w-10"
            style={{ backgroundColor: SKY_DIM }}
          />
          <ChevronLeftIcon className="ml-1.5 h-4 w-4 shrink-0 sm:h-[18px] sm:w-[18px] md:h-5 md:w-5" />
        </div>
      </div>

      {/* Bottom left — social links (fixed) */}
      {/* Toggle chevron when auto-hidden */}
      <button
        type="button"
        onClick={() => setIsSocialPinnedOpen(v => !v)}
        aria-label={showSocial ? "Hide social links" : "Show social links"}
        className={cn(
          "absolute bottom-[calc(9.25rem+env(safe-area-inset-bottom,0px))] left-[max(0.5rem,env(safe-area-inset-left,0px))] hidden h-11 w-11 items-center justify-center rounded-2xl border bg-[rgba(14,18,32,0.28)] text-white shadow-[0_10px_40px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-2xl transition-[opacity,transform] duration-300 ease-out sm:flex",
          showSocialToggle
            ? "pointer-events-auto opacity-100 translate-y-0"
            : "pointer-events-none opacity-0 translate-y-2"
        )}
        style={{ borderColor: "rgba(142, 200, 255, 0.35)", color: SKY }}
      >
        <ChevronLeftIcon
          className={cn(
            "h-5 w-5 transition-transform duration-300",
            isSocialPinnedOpen ? "-rotate-0" : "rotate-180"
          )}
          aria-hidden
        />
      </button>

      <div
        className={cn(
          "absolute bottom-[calc(8.75rem+env(safe-area-inset-bottom,0px))] left-[max(0.75rem,env(safe-area-inset-left,0px))] hidden flex-col gap-3.5 transition-[opacity,transform] duration-300 ease-out will-change-transform sm:bottom-6 sm:left-8 sm:flex sm:gap-[1.125rem] md:bottom-8 md:left-10 md:gap-5",
          showSocial
            ? "pointer-events-auto opacity-100 translate-y-0"
            : "pointer-events-none opacity-0 translate-y-2"
        )}
      >
        <Link
          href={LINKS.github}
          target="_blank"
          rel="noreferrer noopener"
          className={socialTileClass}
          style={{ backgroundColor: SOCIAL_TILE, color: SOCIAL_ICON }}
          aria-label="GitHub"
        >
          <RxGithubLogo className="h-[22px] w-[22px] sm:h-7 sm:w-7 md:h-[30px] md:w-[30px]" />
        </Link>
        <Link
          href="mailto:sharmapraduman6@gmail.com"
          className={socialTileClass}
          style={{ backgroundColor: SOCIAL_TILE, color: SOCIAL_ICON }}
          aria-label="Email"
        >
          <MdEmail className="h-[22px] w-[22px] sm:h-7 sm:w-7 md:h-[30px] md:w-[30px]" />
        </Link>
        <Link
          href={LINKS.linkedin}
          target="_blank"
          rel="noreferrer noopener"
          className={socialTileClass}
          style={{ backgroundColor: SOCIAL_TILE, color: SOCIAL_ICON }}
          aria-label="LinkedIn"
        >
          <RxLinkedinLogo className="h-[22px] w-[22px] sm:h-7 sm:w-7 md:h-[30px] md:w-[30px]" />
        </Link>
        <Link
          href={LINKS.upwork}
          target="_blank"
          rel="noreferrer noopener"
          className={socialTileClass}
          style={{ backgroundColor: SOCIAL_TILE, color: SOCIAL_ICON }}
          aria-label="Upwork"
        >
          <SiUpwork className="h-[22px] w-[22px] sm:h-7 sm:w-7 md:h-[30px] md:w-[30px]" />
        </Link>
        <button
          type="button"
          onClick={scrollTop}
          className="mt-3 flex flex-col items-center transition hover:opacity-90"
          style={{ color: SKY }}
          aria-label="Scroll to top"
        >
          <span
            className="h-20 w-px rounded-full sm:h-24 md:h-28"
            style={{
              background: `linear-gradient(to bottom, ${SKY}, transparent)`,
            }}
          />
          <ChevronLeftIcon
            className="-mt-1 h-5 w-5 rotate-90 sm:h-5 sm:w-5 md:h-6 md:w-6"
            aria-hidden
          />
        </button>
      </div>

      {/* Bottom center — hidden on home while portrait hero is in view */}
      <nav
        className={cn(
          "absolute bottom-[max(1rem,env(safe-area-inset-bottom,0px))] left-1/2 flex max-w-[calc(100vw-0.5rem-env(safe-area-inset-left,0px)-env(safe-area-inset-right,0px))] -translate-x-1/2 items-center justify-center gap-0.5 overflow-x-auto rounded-[999px] border border-white/20 bg-[rgba(14,18,32,0.32)] px-1.5 py-2 shadow-[0_20px_60px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.14)] backdrop-blur-2xl backdrop-saturate-150 transition-[opacity,transform] duration-300 ease-out [scrollbar-width:none] min-[400px]:gap-1 min-[400px]:px-3 min-[400px]:py-2.5 sm:bottom-9 sm:gap-2 sm:px-6 sm:py-4 sm:backdrop-blur-3xl md:bottom-11 md:gap-2.5 md:px-8 md:py-[1.125rem] [&::-webkit-scrollbar]:hidden",
          showBottomDock
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0"
        )}
        aria-label="Section navigation"
        aria-hidden={!showBottomDock}
      >
        {dockItems.map(({ id, href, label, Icon, activeFor }) => {
          const isActive = (activeFor as readonly string[]).includes(activeId);
          return (
          <Link
            key={id}
            href={href}
            className={cn(
              "flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition min-[400px]:h-11 min-[400px]:w-11 sm:h-12 sm:w-12 md:h-[52px] md:w-[52px]",
              isActive
                ? "bg-white/15 ring-1 ring-[rgba(142,200,255,0.45)]"
                : "hover:bg-white/10"
            )}
            style={{ color: SKY }}
            aria-current={isActive ? "true" : undefined}
            aria-label={label}
          >
            <Icon
              className="h-[18px] w-[18px] min-[400px]:h-5 min-[400px]:w-5 sm:h-6 sm:w-6 md:h-[26px] md:w-[26px]"
              strokeWidth={1.85}
            />
          </Link>
          );
        })}
      </nav>
    </div>
  );
}
