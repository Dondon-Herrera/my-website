import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { SiUpwork } from "react-icons/si";

import { PortfolioCtaFooter } from "@/components/main/portfolio-cta-footer";
import { siteConfig } from "@/config";
import { CERTIFICATION_SUMMARY_ITEMS, LINKS } from "@/constants";

const credentialHolderName =
  siteConfig.authors && !Array.isArray(siteConfig.authors)
    ? siteConfig.authors.name ?? "Dondon Herrera"
    : "Dondon Herrera";

const cardBase =
  "rounded-[24px] border border-[#30363d]/80 bg-[#11121d] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.35)] md:p-10";

const sectionLabel =
  "text-[12px] font-semibold uppercase tracking-[0.14em] text-gray-400 md:text-[13px]";

const pill =
  "rounded-[10px] border border-white/[0.12] bg-[#0d0f16] px-3 py-1.5 text-[13px] text-gray-200 md:px-3.5 md:py-2 md:text-[14px]";

/** Soft light CTA — certificate sidebar (matches pale blue panel) */
const certificateLiveViewClass =
  "group relative mt-4 inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl border border-sky-200/70 bg-white/65 px-4 py-3 text-[12px] font-semibold tracking-wide text-slate-600 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_8px_24px_rgba(56,189,248,0.08)] backdrop-blur-[6px] outline-none transition duration-300 ease-out hover:border-sky-200 hover:bg-white/90 hover:text-slate-800 hover:shadow-[0_2px_8px_rgba(15,23,42,0.06),0_12px_32px_rgba(125,211,252,0.18)] focus-visible:ring-2 focus-visible:ring-sky-300/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[#e4eaf3] active:scale-[0.99]";

const experiences = [
  {
    date: "Apr 2023 — Jul 2024 · Remote",
    title: "Senior Software Engineer",
    org: "Offshore Team",
    desc: "Enterprise SaaS backends in C#, .NET Core, Node.js, PostgreSQL, Redis, and Kafka for 120K+ MAUs; cut average API latency ~47% and strengthened peak throughput. Event-driven microservices and Kafka/async workflows reduced bottlenecks ~55%; Docker/Kubernetes migrations cut rollback incidents ~40%. AI-assisted engineering (Copilot), RAG-style internal tooling, Azure (App Services, Storage), and mentorship across architecture and backend practice.",
  },
  {
    date: "Oct 2020 — Nov 2023 · Remote",
    title: "Senior Backend Engineer (Freelance)",
    org: "Kobkiat-IT",
    desc: "Scalable systems for logistics, e-commerce, booking, and CRM using Java, Spring Boot, .NET Core, Node.js, MongoDB, and PostgreSQL—platforms handling 1.5M+ monthly transactions. ERP, payment, and shipping integrations; indexing, query tuning, and caching improved database performance ~52%. Terraform and GitHub Actions CI/CD cut manual deployment effort ~40%; partnered with international stakeholders on production architectures.",
  },
  {
    date: "Jun 2019 — Sep 2020 · Manila, Philippines",
    title: "Backend Developer",
    org: "Emerio",
    desc: "Java, Spring Boot, C#, and SQL Server services for business automation; integrations reduced manual processing ~60%. API refactoring, async work, and query optimization lowered average processing time ~42%. Built sync and migration pipelines for large datasets; helped modernize CI/CD with QA and infrastructure for reliability and observability.",
  },
  {
    date: "Nov 2018 — Jun 2019 · Manila, Philippines",
    title: "Backend Developer",
    org: "Yeaps",
    desc: "Node.js, Express, MySQL, and MongoDB APIs with auth, sessions, and secure client communication. Reusable service layers accelerated delivery; optimizations improved response times ~30%. Integrated payments and third-party APIs; supported production deployments and Agile delivery.",
  },
];

const education = [
  {
    date: "Jun 2011 — Apr 2016",
    title: "Bachelor’s Degree in Information Technology",
    org: "Cavite State University · Cavite, Philippines",
    desc: "Undergraduate IT program covering software fundamentals, systems, and applied computing.",
  },
  {
    date: "Sep 2024 — Apr 2026",
    title: "Software Development",
    org: "Bow Valley College · Alberta, Canada",
    desc: "Diploma-style software development training aligned with industry tools and delivery practices.",
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
  holderName: string;
  /** Official certificate / completion page (opens in new tab) */
  certificateUrl: string;
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
  holderName,
  certificateUrl,
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
          <a
            href={certificateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={certificateLiveViewClass}
            aria-label="Open official certificate in a new tab"
          >
            <span
              className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-b from-white/50 via-sky-50/20 to-transparent opacity-70 transition duration-300 group-hover:opacity-100"
              aria-hidden
            />
            <span className="relative flex items-center gap-2">
              Live view
              <ArrowTopRightOnSquareIcon
                className="h-4 w-4 text-sky-500/75 transition duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-sky-600"
                strokeWidth={1.75}
                aria-hidden
              />
            </span>
          </a>
          <div className="mt-5 md:mt-auto">
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
            <span className="font-semibold text-gray-900">{holderName}</span> has
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

const credentials: Omit<CredentialCardProps, "holderName">[] = [
  {
    issuerShort: "LinkedIn Learning",
    sidebarBanner: "Certificate of completion",
    sidebarItems: ["Java: Data Structures — Issued Jan 2026"],
    badgeText: "Java · Data structures",
    issuerLine: "LinkedIn Learning",
    date: "Jan 2026",
    headline: "Java: Data Structures",
    body: "LinkedIn Learning course on core Java data structures: arrays, the Collections API, lists and sets, stacks and queues, and ordered tree-based collections—building practical fluency with standard library types for real-world code.",
    certificateUrl:
      "https://www.linkedin.com/learning/certificates/8b92be211afbded85afff6092e06754882a7227fbd7187ee99ae2a2811a34555?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BQyXI%2BX06SbGX%2FCER%2FlLP5A%3D%3D",
  },
  {
    issuerShort: "MongoDB University",
    sidebarBanner: "Developer course",
    sidebarItems: ["M220N — MongoDB for .NET Developers — Issued May 2021"],
    badgeText: "MongoDB · .NET",
    issuerLine: "MongoDB, Inc. · MongoDB University",
    date: "May 2021",
    headline: "M220N: MongoDB for .NET Developers",
    body: "MongoDB University course focused on ASP.NET-style application development with MongoDB: the official C#/.NET driver, document modeling and serialization, CRUD operations, flexible querying (including LINQ-oriented workflows), and aggregation patterns suited to production services.",
    certificateUrl:
      "https://university.mongodb.com/course_completion/de1fc953-514a-4bd1-8549-7c37759cb278?utm_source=copy&utm_medium=social&utm_campaign=university_social_sharing",
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

            <p className={`${sectionLabel} mt-10`}>Certifications</p>
            <ul className="mt-4 space-y-3 border-l-2 border-purple-400/40 pl-4 text-[14px] leading-relaxed text-gray-300 md:text-[15px]">
              {CERTIFICATION_SUMMARY_ITEMS.map((line) => (
                <li key={line} className="text-gray-300">
                  {line}
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
              <CredentialCertificateCard
                key={c.headline}
                {...c}
                holderName={credentialHolderName}
              />
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
