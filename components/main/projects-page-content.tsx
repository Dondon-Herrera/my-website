"use client";

import { MoreHorizontal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

import { PortfolioCtaFooter } from "@/components/main/portfolio-cta-footer";
import { PROJECTS_SHOWCASE } from "@/constants";

/** Mockup: light sky headline color (aligned with welcome hero) */
const PORTFOLIO_SKY = "#B6DFFF";

const cardShell =
  "rounded-[28px] border border-sky-200/25 bg-[#0d1018]/90 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm md:p-8 lg:p-10";

const statCard =
  "flex min-w-[140px] flex-1 flex-col items-center justify-center rounded-[20px] border border-sky-200/20 bg-[#0a0c12]/95 px-6 py-5 text-center md:min-w-[180px] md:px-8 md:py-7";

const techPill =
  "rounded-full border border-white/[0.14] bg-[#0d0f16] px-3 py-1.5 text-[12px] font-medium text-gray-100 md:px-3.5 md:py-2 md:text-[13px]";

const previewFrame =
  "overflow-hidden rounded-[20px] border border-sky-200/25 bg-[#111520] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]";

const INITIAL_VISIBLE = 2;

export function ProjectsPageContent() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const projectCount = PROJECTS_SHOWCASE.length;
  const techCount = useMemo(() => {
    const set = new Set<string>();
    for (const p of PROJECTS_SHOWCASE) {
      for (const t of p.tech) set.add(t);
    }
    return set.size;
  }, []);

  const paddedProjects = String(projectCount).padStart(2, "0");
  const paddedTech = String(techCount).padStart(2, "0");

  const canLoadMore = visibleCount < PROJECTS_SHOWCASE.length;

  return (
    <div
      id="projects-page"
      className="min-h-screen w-full bg-transparent pb-[calc(5.5rem+env(safe-area-inset-bottom,0px))] pt-[max(5rem,env(safe-area-inset-top,0px)+3rem)] text-white sm:pb-[calc(6rem+env(safe-area-inset-bottom,0px))] md:pb-[calc(6.5rem+env(safe-area-inset-bottom,0px))]"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Hero title — PORT / FOLIO + bar + name tag */}
        <header className="relative mx-auto max-w-[56rem] text-center">
          <div
            className="pointer-events-none absolute left-1/2 top-[18%] h-[min(220px,48vw)] w-[min(100%,480px)] -translate-x-1/2 -translate-y-1/2 rounded-[100%] bg-gradient-to-r from-cyan-400/12 via-sky-400/10 to-indigo-500/10 blur-[56px]"
            aria-hidden
          />

          <div className="relative pt-2">
            <h1
              className="font-black uppercase leading-[0.88] tracking-[-0.02em] antialiased"
              style={{
                color: PORTFOLIO_SKY,
                fontSize: "clamp(2.75rem, 10vw, 5.75rem)",
                textShadow:
                  "0 0 40px rgba(182, 223, 255, 0.35), 0 0 88px rgba(56, 189, 248, 0.12)",
              }}
            >
              Port
            </h1>
            <h1
              className="mt-1 font-black uppercase leading-[0.88] tracking-[-0.02em] antialiased md:mt-1.5"
              style={{
                color: PORTFOLIO_SKY,
                fontSize: "clamp(2.75rem, 10vw, 5.75rem)",
                textShadow:
                  "0 0 40px rgba(182, 223, 255, 0.35), 0 0 88px rgba(56, 189, 248, 0.12)",
              }}
            >
              Folio
            </h1>
          </div>

          <div className="relative mx-auto mt-5 max-w-[min(100%,520px)] md:mt-7">
            <div
              className="h-2.5 w-full rounded-full shadow-[0_8px_24px_rgba(0,0,0,0.45)] md:h-3"
              style={{
                background:
                  "linear-gradient(90deg, rgba(182,223,255,0.15), rgba(182,223,255,0.55), rgba(182,223,255,0.2))",
              }}
            />
            <div className="absolute -right-1 top-1/2 z-10 -translate-y-[8%] translate-x-1/2 md:-right-2">
              <span
                className="cursive inline-block rounded-md border border-white/25 bg-[#0d1018]/95 px-3 py-1.5 text-[13px] text-white shadow-[0_12px_40px_rgba(0,0,0,0.5)] md:px-3.5 md:py-2 md:text-[15px]"
                style={{ color: PORTFOLIO_SKY }}
              >
                Dondon Herrera
              </span>
            </div>
          </div>

          <p className="relative mx-auto mt-10 max-w-[46rem] text-[15px] leading-relaxed text-gray-400 md:mt-12 md:text-[17px] md:leading-relaxed">
            Modern web products delivered with production-ready architecture,
            SEO optimised for search engines, integrated AI features, ready to
            deploy, strong UX, and measurable performance outcomes.
          </p>

          <div className="relative mx-auto mt-8 flex max-w-md flex-wrap items-stretch justify-center gap-4 md:mt-10 md:max-w-lg md:gap-5">
            <div className={statCard}>
              <span className="text-[34px] font-bold tabular-nums text-white md:text-[40px]">
                {paddedProjects}
              </span>
              <span className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500 md:text-[12px]">
                Projects
              </span>
            </div>
            <div className={statCard}>
              <span className="text-[34px] font-bold tabular-nums text-white md:text-[40px]">
                {paddedTech}
              </span>
              <span className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500 md:text-[12px]">
                Technologies
              </span>
            </div>
          </div>
        </header>

        {/* Project cards */}
        <div className="mx-auto mt-14 max-w-[1100px] space-y-8 md:mt-20 md:space-y-10 lg:space-y-12">
          {PROJECTS_SHOWCASE.slice(0, visibleCount).map((project) => (
            <article key={project.title} className={cardShell}>
              <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-14">
                <div className={previewFrame}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={640}
                    height={420}
                    className="h-auto w-full object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                <div className="flex flex-col text-left">
                  <h2 className="text-[22px] font-bold leading-snug tracking-tight text-white md:text-[28px] md:leading-tight lg:text-[32px]">
                    {project.title}
                  </h2>
                  <p className="mt-4 text-[14px] leading-relaxed text-gray-400 md:mt-5 md:text-[15px] md:leading-relaxed lg:text-[16px]">
                    {project.description}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-2 text-[13px] leading-snug text-sky-200/85 md:mt-6 md:text-[14px]">
                    {project.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <span
                          className="h-1 w-1 shrink-0 rounded-full bg-sky-300/80"
                          aria-hidden
                        />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 md:mt-8">
                    <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-gray-400 md:text-[13px]">
                      Tech used
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2 md:gap-2.5">
                      {project.tech.map((t) => (
                        <span key={t} className={techPill}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3 md:mt-9 md:gap-4">
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center justify-center rounded-full border border-white/45 bg-transparent px-6 py-2.5 text-[14px] font-semibold text-white transition hover:border-white hover:bg-white/[0.06] md:px-8 md:py-3 md:text-[15px]"
                    >
                      View live
                    </Link>
                    {project.repoUrl ? (
                      <Link
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center justify-center rounded-full border border-white/45 bg-transparent px-6 py-2.5 text-[14px] font-semibold text-white transition hover:border-white hover:bg-white/[0.06] md:px-8 md:py-3 md:text-[15px]"
                      >
                        View repo
                      </Link>
                    ) : null}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {canLoadMore ? (
          <div className="mt-10 flex justify-center md:mt-14">
            <button
              type="button"
              onClick={() =>
                setVisibleCount((c) =>
                  Math.min(c + 2, PROJECTS_SHOWCASE.length),
                )
              }
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-transparent px-8 py-3 text-[14px] font-semibold text-white transition hover:border-sky-300/60 hover:bg-white/[0.05] md:px-10 md:py-3.5 md:text-[15px]"
            >
              Load more
              <MoreHorizontal className="h-4 w-4 opacity-90 md:h-[18px] md:w-[18px]" />
            </button>
          </div>
        ) : null}
      </div>

      <div className="mx-auto mt-16 max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <PortfolioCtaFooter />
      </div>
    </div>
  );
}
