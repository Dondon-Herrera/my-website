import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

import {
  PORTFOLIO_PAGE_METRIC_BADGES,
  PORTFOLIO_PAGE_TICKER_ITEMS,
} from "@/constants";

type PortfolioCtaFooterProps = {
  backLink?: { href: string; label: string };
};

export function PortfolioCtaFooter({ backLink }: PortfolioCtaFooterProps) {
  return (
    <>
      <section
        id="portfolio-page-cta"
        className="relative mx-auto mt-16 max-w-[42rem] px-3 text-center md:mt-24 md:px-4"
      >
        <div
          className="pointer-events-none absolute left-1/2 top-[10%] h-[min(200px,45vw)] w-[min(100%,520px)] -translate-x-1/2 -translate-y-1/2 rounded-[100%] bg-gradient-to-r from-amber-200/30 via-cyan-400/35 to-teal-500/25 blur-[50px] md:blur-[64px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-24 w-[90%] max-w-md -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/15 to-transparent blur-2xl"
          aria-hidden
        />

        <h2 className="relative text-[26px] font-bold leading-[1.15] tracking-tight text-white md:text-[38px] md:leading-[1.12] lg:text-[42px]">
          Let&apos;s{" "}
          <span className="bg-gradient-to-r from-cyan-200 via-sky-300 to-teal-300 bg-clip-text text-transparent">
            Create Something Amazing
          </span>{" "}
          Together
        </h2>
        <p className="relative mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-gray-300/95 md:mt-6 md:text-[17px] md:leading-relaxed">
          Turn your idea into a polished product with thoughtful UX, resilient
          engineering, and a launch-ready strategy.
        </p>
        <Link
          href="/contact"
          className="relative mt-9 inline-flex items-center gap-2.5 rounded-full border border-white/50 bg-transparent px-9 py-3 text-[15px] font-semibold text-white shadow-[0_0_40px_rgba(56,189,248,0.12)] transition hover:border-white hover:bg-white/[0.06] md:mt-10 md:px-10 md:py-3.5"
        >
          Contact me
          <PaperAirplaneIcon
            className="h-4 w-4 md:h-[18px] md:w-[18px]"
            aria-hidden
          />
        </Link>

        <div className="relative mx-auto mt-12 flex max-w-xl flex-wrap items-center justify-center gap-3 px-1 md:mt-14 md:max-w-2xl md:gap-3.5">
          {PORTFOLIO_PAGE_METRIC_BADGES.map((b) => (
            <span
              key={b.label}
              style={{ transform: `rotate(${b.rotate})` }}
              className="rounded-full border border-white/[0.14] bg-[rgba(5,10,24,0.16)] px-3.5 py-2 text-[11px] font-medium text-white shadow-[0_2px_20px_rgba(0,0,0,0.25)] backdrop-blur-[12px] backdrop-saturate-150 [box-shadow:inset_0_1px_0_0_rgba(255,255,255,0.06)] md:px-4 md:py-2.5 md:text-[12px]"
            >
              {b.label}
            </span>
          ))}
        </div>

        {backLink ? (
          <div className="relative mt-6 md:mt-8">
            <Link
              href={backLink.href}
              className="text-[13px] text-gray-500 underline-offset-4 transition hover:text-cyan-400/90 hover:underline"
            >
              {backLink.label}
            </Link>
          </div>
        ) : null}
      </section>

      <div className="mx-3 mt-1.5 md:mx-6 md:mt-2 lg:mx-10">
        <div className="overflow-hidden rounded-full border border-white/[0.14] bg-[rgba(5,10,24,0.16)] py-2.5 shadow-[0_2px_20px_rgba(0,0,0,0.25),inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-[12px] backdrop-saturate-150 md:py-3">
          <div className="about-marquee-track flex w-max items-center gap-0 whitespace-nowrap px-5 text-[9px] font-bold uppercase tracking-[0.14em] text-white/90 sm:px-6 sm:text-[10px] md:text-[11px]">
            {[...PORTFOLIO_PAGE_TICKER_ITEMS, ...PORTFOLIO_PAGE_TICKER_ITEMS].map(
              (item, i) => (
                <span key={`${item}-${i}`} className="flex items-center">
                  <span className="px-2 sm:px-3">{item}</span>
                  <span className="text-white/45" aria-hidden>
                    *
                  </span>
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}
