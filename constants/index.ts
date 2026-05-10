import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "C#",
    image: "c#.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: ".NET",
    image: "net.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Java",
    image: "java.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Spring Boot",
    image: "spring-boot.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Microsoft Azure",
    image: "icons8-azure-96.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "AWS",
    image: "icons8-aws-96.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Kubernetes",
    image: "icons8-kubernetes-96.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Terraform",
    image: "icons8-terraform-96.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Apache Kafka",
    image: "icons8-apache-kafka-96.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redis",
    image: "icons8-redis-80.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Angular",
    image: "icons8-angularjs-96.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Stripe",
    image: "stripe.png",
    width: 80,
    height: 80,
  },
] as const;

export const SOCIALS = [
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/praduman12/",
  },
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/praduman1212",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Material UI",
    image: "mui.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Prisma",
    image: "prisma.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Graphql",
    image: "graphql.png",
    width: 80,
    height: 80,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "React Native",
    image: "reactnative.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Tauri",
    image: "tauri.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },

  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Go",
    image: "go.png",
    width: 60,
    height: 60,
  },
] as const;

/** One-line summaries: home `#education` certifications + `/about-me` list */
export const CERTIFICATION_SUMMARY_ITEMS: readonly string[] = [
  "Java: Data Structures • Collections, stacks, queues and tree sets • Issued Jan 2026 • LinkedIn Learning",
  "M220N: MongoDB for .NET Developers • C#/.NET driver, CRUD, querying and aggregation with ASP.NET • Issued May 2021 • MongoDB University",
];

/** Full-width projects page (/projects): cards, tech tags, live + repo actions */
export type ProjectShowcaseEntry = {
  title: string;
  description: string;
  image: string;
  features: string[];
  tech: string[];
  liveUrl: string | null;
  repoUrl: string | null;
};

export const PROJECTS_SHOWCASE: ProjectShowcaseEntry[] = [
  {
    title: "E-Commerce Operations & Integration — 6 Australian Consumer Brands",
    description:
      "Multi-brand e-commerce backbone for Toppik, Waterpik, Curash, Flawless, Therabreath, and Hero Cosmetics on BigCommerce B2C and B2B. A custom Windows Service layer automated order fulfillment end-to-end via Cargoline and Pronto (FTP-backed APIs)—cutting manual processing time by about 60% while keeping high-volume retail operations predictable.",
    image: "/projects/crm.png",
    features: [
      "Six consumer brands on unified BigCommerce B2C & B2B",
      "Windows Services automation for fulfillment pipelines",
      "Deep Cargoline + Pronto integration over FTP",
      "~60% reduction in manual order handling",
    ],
    tech: [
      "BigCommerce",
      "Windows Services",
      "Cargoline",
      "Pronto",
      "B2B",
      "FTP integrations",
    ],
    liveUrl: null,
    repoUrl: null,
  },
  {
    title: "Jurlique — Real-Time E-Commerce Event Integration",
    description:
      "Real-time monitoring for Jurlique on BigCommerce: webhooks and ngrok gave full-spectrum listening across storefront events. Incident detection moved from hours to minutes by surfacing problems as they happened—not after customers already felt them.",
    image: "/projects/trendinghashtag.png",
    features: [
      "Webhook-driven event coverage across the storefront",
      "Secure tunneling with ngrok for active listening",
      "Near-complete visibility into commerce events",
      "Faster mean time to detect operational issues",
    ],
    tech: ["BigCommerce", "B2B", "Webhooks", "ngrok", "Event-driven design"],
    liveUrl: null,
    repoUrl: null,
  },
  {
    title: "Payperclip — Content Monetization Platform",
    description:
      "Dual-sided platform for Creators and Fans with multi-tier content pricing and three payment rails—Paysociety e-wallet, bank transfer, and card. The backend is a full microservices architecture with Kafka for event-driven workflows, built to scale billing, access control, and payouts cleanly.",
    image: "/projects/file sharing app.png",
    features: [
      "Creator vs Fan roles with tiered monetization",
      "Three integrated payment methods (wallet, bank, card)",
      "Microservices with Kafka event streaming",
      "Production-minded money movement and access rules",
    ],
    tech: [
      "Microservices",
      "Apache Kafka",
      "MongoDB",
      ".NET 10",
      "C#",
      "REST APIs",
    ],
    liveUrl: null,
    repoUrl: null,
  },
  {
    title: "Paysociety — E-Wallet System",
    description:
      "Distributed fintech wallet supporting TopUp, transfers, and multi-channel payment flows. Kafka powers event streaming across services; Ocelot acts as the API gateway hardening cross-service traffic; Identity Server anchors authentication for a coherent security story.",
    image: "/projects/project-3.png",
    features: [
      "Wallet core: TopUp, transfer, and multi-channel payments",
      "Kafka-backed asynchronous processing",
      "Ocelot API gateway for service boundaries",
      "Identity Server for centralized auth",
    ],
    tech: [
      "MongoDB",
      "Apache Kafka",
      ".NET 10",
      "IdentityServer",
      "Ocelot",
      "C#",
    ],
    liveUrl: null,
    repoUrl: null,
  },
  {
    title: "Recruitment Online — Serviced by AXA (Philippines)",
    description:
      "End-to-end digital hiring for AXA Philippines—from applicant intake through licensed financial advisor onboarding. A TDD-shaped REST API underpins the pipeline; SSRS reporting and tuned stored procedures give leadership real-time visibility into every stage of recruitment.",
    image: "/projects/hilltell.png",
    features: [
      "Full recruitment lifecycle automation",
      "TDD-oriented REST API design",
      "SSRS dashboards on optimized SQL",
      "Real-time pipeline visibility for stakeholders",
    ],
    tech: [
      "C#",
      ".NET Core",
      "SSRS",
      "Azure DevOps Server",
      "Microsoft SQL Server",
    ],
    liveUrl: null,
    repoUrl: null,
  },
  {
    title: "RespAi — Fire Department CRM & Lead Generation",
    description:
      "SaaS CRM for fire departments: ingests federal grant data, runs automated matching and lead scoring to surface funding opportunities, and delivers results through a secure cloud UI. Shipped on Azure Static Web Apps and Azure Functions with OAuth 2.0, MSAL.js, and Axios interceptors—React and TypeScript on the front end as part of a collaborative delivery team.",
    image: "/projects/crm.png",
    features: [
      "Grant intelligence with matching & scoring",
      "Azure Static Web Apps + Azure Functions",
      "OAuth 2.0 / MSAL.js with hardened HTTP layer",
      "React + TypeScript product experience",
    ],
    tech: [
      "Azure Static Web Apps",
      "Azure Functions",
      "TypeScript",
      "React",
      "OAuth 2.0",
      "MSAL.js",
    ],
    liveUrl: null,
    repoUrl: null,
  },
  {
    title: "UCO Tracking System",
    description:
      "Internal operations platform for a fintech—tracks UCO collection across many collectors. Hangfire runs background jobs; custom stored procedures and multiple report types give operations real-time insight into collection performance and exceptions.",
    image: "/projects/file sharing app.png",
    features: [
      "Multi-collector UCO activity tracking",
      "Hangfire for reliable scheduled work",
      "Custom SQL + reporting for operations KPIs",
      "Real-time visibility into field performance",
    ],
    tech: [
      "C#",
      ".NET Core",
      "Microsoft SQL Server",
      "EF Core",
      "Hangfire",
    ],
    liveUrl: null,
    repoUrl: null,
  },
  {
    title: "YEAPS — Sales Tracking System",
    description:
      "Internal sales intelligence for YEAPS—individual promoter performance across the organization in one place. Owned the full SDLC from requirements through deployment so leadership could steer incentives and territory plans with data instead of spreadsheets.",
    image: "/projects/project-3.png",
    features: [
      "Promoter-level performance analytics",
      "Org-wide sales visibility",
      "Requirements through deployment ownership",
      "Operational reporting for management",
    ],
    tech: ["C#", ".NET Core", "Microsoft SQL Server", "ASP.NET"],
    liveUrl: null,
    repoUrl: null,
  },
];

/** Shared with About me + Projects page footers */
export const PORTFOLIO_PAGE_TICKER_ITEMS = [
  "SOLUTIONS",
  "SECURITY BEST PRACTICES",
  "CMS INTEGRATION",
  "MVP DEVELOPMENT",
  "PERFORMANCE OPTIMIZATION",
  "SCALABLE ARCHITECTURE",
  "AI INTEGRATION",
  "SEO OPTIMIZATION",
] as const;

export const PORTFOLIO_PAGE_METRIC_BADGES: { label: string; rotate: string }[] =
  [
    { label: "95+ Lighthouse Score", rotate: "-5deg" },
    { label: "98% Performance Score", rotate: "7deg" },
    { label: "1.8s Load Time", rotate: "-3deg" },
    { label: "<120ms API Response", rotate: "5deg" },
    { label: "Optimized Core Web Vitals", rotate: "-4deg" },
    { label: "SEO Score 100", rotate: "6deg" },
    { label: "Mobile-Friendly", rotate: "-2deg" },
    { label: "99.9% Uptime", rotate: "4deg" },
  ];

export const FOOTER_DATA = [
  {
    title: "About Me",
    data: [
      {
        name: "I’m Praduman Sharma, a passionate Software Engineer from Dehradun. I’m open to relocation and remote opportunities, and I’m driven by a love for building impactful digital solutions with creativity and precision.",
        icon: null,
        link: null,
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/praduman12/",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/praduman1212",
      },
    ],
  },
  {
    title: "Quick Links",
    data: [
      {
        name: "Hire Me",
        icon: null,
        link: "https://wa.me/919520949165",
      },
      {
        name: "Learn about me",
        icon: null,
        link: "#about-me",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:sharmapraduman6@gmail.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  { title: "Welcome", link: "#welcome" },
  { title: "About me", link: "#about-me" },
  { title: "Skills", link: "#skills" },
  { title: "Education", link: "#education" },
  { title: "Experience", link: "#experience" },
  { title: "Projects", link: "/projects" },
  { title: "Available", link: "#available" },
] as const;

export const LINKS = {
  linkedin: "https://www.linkedin.com/in/praduman12/",
  github: "https://github.com/praduman1212",
  whatsapp: "https://wa.me/919520949165",
  /** Replace with your Upwork freelancer profile URL when ready */
  upwork: "https://www.upwork.com/",
};
