import Image from "next/image";
import Link from "next/link";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { SiUpwork } from "react-icons/si";

import { PortfolioCtaFooter } from "@/components/main/portfolio-cta-footer";
import { LINKS } from "@/constants";

const cardBase =
  "rounded-[24px] border border-[#30363d]/80 bg-[#11121d] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.35)] md:p-10";

const sectionLabel =
  "text-[12px] font-semibold uppercase tracking-[0.14em] text-gray-400 md:text-[13px]";

const pill =
  "rounded-[10px] border border-white/[0.12] bg-[#0d0f16] px-3 py-1.5 text-[13px] text-gray-200 md:px-3.5 md:py-2 md:text-[14px]";

const experiences = [
  {
    date: "Jan 2025 — Present",
    title: "Software Engineer",
    org: "CYBERCLIPPER SOLUTIONS LLP",
    desc: "Led delivery of scalable web apps, integrations, and platform growth initiatives.",
  },
  {
    date: "Aug 2024 — Sep 2024",
    title: "Full Stack Developer Intern",
    org: "NEXOCIDE",
    desc: "Next.js, Tailwind, Firebase features; APIs and performance improvements.",
  },
  {
    date: "Jun 2024 — Aug 2024",
    title: "Software Developer Intern",
    org: "SKYNET E-SOLUTION PVT LTD",
    desc: "PHP/JS frontends, CI/CD contributions, faster page loads.",
  },
];

const education = [
  {
    date: "Sep 2021 — May 2025",
    title: "B.Tech Computer Science & Engineering",
    org: "Uttaranchal University · Dehradun",
    desc: "CGPA 9.36 · Focus on software engineering and full-stack systems.",
  },
];

const expertiseBlocks: { title: string; tags: string[] }[] = [
  {
    title: "Web Engineering",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "REST APIs",
      "Serverless",
    ],
  },
  {
    title: "Backend & Data",
    tags: ["Node.js", "PostgreSQL", "Firebase", "Auth", "Database design"],
  },
  {
    title: "Performance & Production",
    tags: [
      "Core Web Vitals",
      "Performance",
      "SEO",
      "Edge deployment",
      "Analytics",
    ],
  },
  {
    title: "AI & Modern Systems",
    tags: ["LLM integrations", "RAG patterns", "Vector DBs", "AI features"],
  },
  {
    title: "Software Engineering",
    tags: [
      "Clean architecture",
      "System design",
      "Scalable apps",
      "CI/CD",
    ],
  },
  {
    title: "Collaboration & Tools",
    tags: ["Git", "Code review", "Technical writing", "Project planning"],
  },
];

type CredentialCardProps = {
  issuerShort: string;
  sidebarBanner: string;
  sidebarItems: string[];
  badgeText: string;
  issuerLine: string;
  date?: string;
  headline: string;
  body: string;
};

function CredentialCertificateCard({
  issuerShort,
  sidebarBanner,
  sidebarItems,
  badgeText,
  issuerLine,
  date,
  headline,
  body,
}: CredentialCardProps) {
  return (
    <div className="overflow-hidden rounded-[20px] border border-gray-200/90 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.28)]">
      <div className="flex flex-col md:min-h-[320px] md:flex-row">
        {/* Left column — mockup sidebar */}
        <div className="flex w-full flex-col border-b border-gray-200/80 bg-[#e4eaf3] p-6 md:w-[30%] md:border-b-0 md:border-r md:p-7">
          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-gray-600">
            Issued by
          </p>
          <p className="mt-2 text-[14px] font-semibold text-gray-900">{issuerShort}</p>
          <div className="mt-5 rounded-md bg-[#2d333b] px-3 py-2.5 text-center">
            <p className="text-[11px] font-bold uppercase tracking-wide text-white">
              {sidebarBanner}
            </p>
          </div>
          <ul className="mt-4 space-y-2.5 text-[12px] font-medium leading-snug text-gray-900">
            {sidebarItems.map((line) => (
              <li key={line} className="border-b border-gray-300/50 pb-2 last:border-0 last:pb-0">
                {line}
              </li>
            ))}
          </ul>
          <div className="mt-6 md:mt-auto">
            <span className="inline-block rounded-full bg-[#b6dfff] px-4 py-2 text-[11px] font-bold text-gray-900 shadow-sm">
              {badgeText}
            </span>
          </div>
        </div>

        {/* Right column — main certificate body */}
        <div className="relative flex w-full flex-1 flex-col overflow-hidden bg-white p-6 md:w-[70%] md:p-9">
          <div
            className="pointer-events-none absolute -right-16 top-1/2 h-[min(280px,55vw)] w-[min(280px,55vw)] -translate-y-1/2 rounded-full border border-cyan-200/50 opacity-[0.35]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-8 top-8 h-40 w-40 rounded-full border border-sky-200/40 opacity-25"
            aria-hidden
          />

          <div className="relative flex flex-wrap items-start justify-between gap-3">
            <div className="rounded border border-gray-300/80 bg-white px-3 py-1.5 text-[12px] font-semibold text-gray-800">
              {issuerLine}
            </div>
            {date ? (
              <p className="text-[12px] text-gray-500">{date}</p>
            ) : null}
          </div>

          <p className="relative mt-6 text-[13px] leading-relaxed text-gray-600">
            <span className="font-semibold text-gray-900">Praduman Sharma</span> has
            successfully completed the professional program(s) listed in this
            credential.
          </p>

          <h3 className="relative mt-4 text-[22px] font-bold leading-tight tracking-tight text-gray-900 md:text-[28px] md:leading-tight">
            {headline}
          </h3>

          <p className="relative mt-4 max-w-prose text-[13px] leading-relaxed text-gray-600 md:text-[14px]">
            {body}
          </p>

          <p className="relative mt-auto pt-8 text-[10px] leading-relaxed text-gray-400 md:text-[11px]">
            Credentials reflect structured coursework and assessments. For verification
            details, see certificates on file or contact via LinkedIn.
          </p>
        </div>
      </div>
    </div>
  );
}

const credentials: CredentialCardProps[] = [
  {
    issuerShort: "Internshala · Brillica",
    sidebarBanner: "2 Programs",
    sidebarItems: [
      "Full Stack Web Development — 8 Weeks — Internshala",
      "Web Development — 8 Weeks — Brillica Services",
    ],
    badgeText: "Certified Full-Stack Web Developer",
    issuerLine: "Internshala Training · Brillica Services",
    headline: "Professional Web & Full-Stack Development",
    body: "Hands-on training across modern front-end and back-end stacks, project-based delivery, and production-oriented practices aligned with industry workflows.",
  },
  {
    issuerShort: "Great Learning · IIRS",
    sidebarBanner: "2 Courses",
    sidebarItems: [
      "Introduction to JavaScript — 3 Hours — Great Learning",
      "Automated Feature Extraction from High-Resolution Images — 7.5 Hours — IIRS",
    ],
    badgeText: "Specialized Skills Credential",
    issuerLine: "Great Learning · Indian Institute of Remote Sensing",
    headline: "JavaScript foundations & geospatial ML fundamentals",
    body: "Focused modules on core JavaScript concepts and introductory methods for feature extraction from imagery—complementing broader software engineering practice.",
  },
];

export function AboutMeContent() {
  return (
    <div
      id="about-me"
      className="min-h-screen w-full bg-transparent pb-[calc(5.5rem+env(safe-area-inset-bottom,0px))] pt-[max(5rem,env(safe-area-inset-top,0px)+3rem)] text-white sm:pb-[calc(6rem+env(safe-area-inset-bottom,0px))] md:pb-[calc(6.5rem+env(safe-area-inset-bottom,0px))]"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Top: profile + summary */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-6">
          <div className={`${cardBase} md:col-span-1`}>
            <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0d0f16]">
              <Image
                src="/hero_body_cutout.svg"
                alt="Praduman Sharma"
                width={400}
                height={520}
                unoptimized
                className="aspect-[4/5] w-full object-contain object-bottom"
                priority
              />
            </div>
            <p className={`${sectionLabel} mt-8`}>About me</p>
            <h1 className="mt-3 text-[28px] font-bold leading-tight tracking-tight text-white md:text-[32px]">
              Praduman Sharma
            </h1>
            <p className="mt-2 text-[15px] text-gray-400 md:text-base">
              Product-focused software engineer
            </p>
          </div>

          <div className={`${cardBase} md:col-span-2`}>
            <p className={`${sectionLabel} flex items-center gap-2`}>
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400/90" />
              Self summary
            </p>
            <h2 className="mt-5 text-[26px] font-bold leading-snug tracking-tight text-white md:text-[34px] md:leading-snug">
              Building scalable digital products that are fast, intuitive, and
              built for real-world impact.
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-gray-400 md:text-base md:leading-relaxed">
              Full stack engineer specializing in React, Next.js, and Node.js.
              I ship responsive, high-performance applications and enjoy turning
              complex requirements into clear, maintainable systems—from UX polish
              to APIs, databases, and production delivery.
            </p>
            <p className="mt-6 flex items-start gap-2 text-[14px] leading-relaxed text-gray-400 md:text-[15px]">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gray-500" />
              Focused on modern web systems, integrations, and scalable product
              development.
            </p>
          </div>
        </div>

        {/* Experience + Education */}
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-6">
          <div className={cardBase}>
            <p className={sectionLabel}>Experience</p>
            <ul className="mt-8 space-y-8">
              {experiences.map((item) => (
                <li key={item.date + item.title}>
                  <p className="text-[13px] text-gray-500">{item.date}</p>
                  <p className="mt-1 text-[17px] font-semibold text-white md:text-lg">
                    {item.title}
                  </p>
                  <p className="text-[14px] text-gray-400">{item.org}</p>
                  <p className="mt-2 text-[14px] leading-relaxed text-gray-400 md:text-[15px]">
                    {item.desc}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className={cardBase}>
            <p className={sectionLabel}>Education</p>
            <ul className="mt-8 space-y-8">
              {education.map((item) => (
                <li key={item.date}>
                  <p className="text-[13px] text-gray-500">{item.date}</p>
                  <p className="mt-1 text-[17px] font-semibold text-white md:text-lg">
                    {item.title}
                  </p>
                  <p className="text-[14px] text-gray-400">{item.org}</p>
                  <p className="mt-2 text-[14px] leading-relaxed text-gray-400 md:text-[15px]">
                    {item.desc}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Engineering expertise */}
        <div className={`${cardBase} mt-6`}>
          <p className={sectionLabel}>Engineering expertise</p>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {expertiseBlocks.map((block) => (
              <div
                key={block.title}
                className="rounded-[20px] border border-white/[0.08] bg-[#0d0f16] p-6 md:p-8"
              >
                <h3 className="text-[17px] font-semibold text-white md:text-lg">
                  {block.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {block.tags.map((tag) => (
                    <span key={tag} className={pill}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Credentials — white certificate cards (mockup style) */}
        <div className={`${cardBase} mt-6`}>
          <p className={sectionLabel}>Credentials</p>
          <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-gray-400 md:text-[15px]">
            Professional certificates and structured programs. Layout matches a formal
            credential presentation: sidebar summary and main certificate body.
          </p>
          <div className="mt-8 flex flex-col gap-8 lg:gap-10">
            {credentials.map((c) => (
              <CredentialCertificateCard key={c.headline} {...c} />
            ))}
          </div>
        </div>

        {/* Profiles + Beyond */}
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-6">
          <div className={cardBase}>
            <p className={sectionLabel}>Profiles</p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href={LINKS.github}
                target="_blank"
                rel="noreferrer noopener"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/[0.14] bg-[#0d0f16] text-gray-200 transition hover:border-cyan-400/40 hover:text-white"
                aria-label="GitHub"
              >
                <RxGithubLogo className="h-6 w-6" />
              </Link>
              <Link
                href={LINKS.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/[0.14] bg-[#0d0f16] text-gray-200 transition hover:border-cyan-400/40 hover:text-white"
                aria-label="LinkedIn"
              >
                <RxLinkedinLogo className="h-6 w-6" />
              </Link>
              <Link
                href={LINKS.upwork}
                target="_blank"
                rel="noreferrer noopener"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/[0.14] bg-[#0d0f16] text-gray-200 transition hover:border-cyan-400/40 hover:text-white"
                aria-label="Upwork"
              >
                <SiUpwork className="h-6 w-6" />
              </Link>
            </div>
            <p className="mt-6 text-[14px] leading-relaxed text-gray-400 md:text-[15px]">
              Open to collaborations, product work, and meaningful tech
              conversations. Explore my projects or reach out if you want to
              build something impactful together.
            </p>
          </div>

          <div className={cardBase}>
            <p className={sectionLabel}>Beyond the screen</p>
            <p className="mt-6 text-[14px] leading-relaxed text-gray-400 md:text-[15px]">
              Outside of engineering I recharge with sports, time outdoors, and
              relaxed evenings with friends and family—balance keeps the code
              sharp and the ideas fresh.
            </p>
          </div>
        </div>

        <PortfolioCtaFooter
          backLink={{ href: "/", label: "← Back to portfolio" }}
        />
      </div>

    </div>
  );
}
