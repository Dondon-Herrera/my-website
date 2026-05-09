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
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
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

export const PROJECTS = [
 {
    title: "Trendinghashtag.in",
    description:
      "TrendingHashtag.in – An AI-powered hashtag generator that helps creators and businesses boost their social media reach. It provides country-specific trending hashtags, removes banned tags to ensure safe posting, and offers extra tools like couple/wedding hashtag generators and media downloaders, all in one platform.",
    image: "/projects/trendinghashtag.png",
    link: "https://trendinghashtag.in/",
  },
  {
    title: "ISP Website (Hilltell)",
    description:
      "HillTell.in – An ISP company website that I developed using PHP, XAMPP, and MySQL (phpMyAdmin). It highlights services like Managed WiFi, MPLS, P2P connectivity, and IP One Class, with a responsive design, integrated contact options, and an interactive chatbot for customer queries.",
    image: "/projects/hilltell.png",
    link: "https://hilltell.in/index.php",
  },
    {
    title: "Enterprise Admin Dashboard",
      description:
      "The Enterprise Admin Dashboard with API Vault & Workflow Management is a full-stack business management platform built with Next.js, Node.js, and Firebase. It offers intern and employee management, company management, announcements, and a secure API vault within a modern responsive UI. Designed with a 3-tier architecture, it ensures scalability, security, and efficiency through JWT authentication, RBAC, and encrypted storage.",
    image: "/projects/crm.png",
    link: "https://cyberclipper-admin-panel-ochre.vercel.app/",
   
  },
  {
    title: "Portfolio Website",
    description:
      "A Next.js, Tailwind & Three.js personal portfolio demonstrating my expertise in full-stack development—from frontend and backend to cloud, mobile, and AI.",
    image: "/projects/project-3.png",
    link: "https://github.com/praduman1212/My-Portfolio",
  },
    {
    title: "File Sharing Web Application",
    description:
      "File Sharing Web Application – A MERN stack project I developed that enables users to securely upload, share, and manage files online. Built with MongoDB, Express.js, React.js, and Node.js, it features a clean UI, fast performance, and secure file handling",
    image: "/projects/file sharing app.png",
    link: "https://github.com/praduman1212/File-Sharing-Web-Application-",
  },
] as const;

/** Full-width projects page (/projects): cards, tech tags, live + repo actions */
export type ProjectShowcaseEntry = {
  title: string;
  description: string;
  image: string;
  features: string[];
  tech: string[];
  liveUrl: string;
  repoUrl: string | null;
};

export const PROJECTS_SHOWCASE: ProjectShowcaseEntry[] = [
  {
    title: "Trendinghashtag.in",
    description:
      "An AI-powered hashtag generator for creators and brands—country-specific trending tags, safer posting with banned-tag filtering, and bonus tools like couple/wedding hashtag helpers and media utilities in one place.",
    image: "/projects/trendinghashtag.png",
    features: [
      "AI-assisted hashtag discovery",
      "Geo-aware trending data",
      "Banned-tag safety checks",
      "Responsive, fast UX",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "AI APIs", "Vercel"],
    liveUrl: "https://trendinghashtag.in/",
    repoUrl: null,
  },
  {
    title: "ISP Website (Hilltell)",
    description:
      "ISP marketing site for HillTell—Managed WiFi, MPLS, P2P, and IP services—with responsive layouts, lead capture, and a chatbot for customer questions.",
    image: "/projects/hilltell.png",
    features: [
      "Service-focused landing flows",
      "Integrated contact & support paths",
      "Interactive chatbot",
      "Mobile-first layout",
    ],
    tech: ["PHP", "MySQL", "JavaScript", "XAMPP", "Responsive CSS"],
    liveUrl: "https://hilltell.in/index.php",
    repoUrl: null,
  },
  {
    title: "Enterprise Admin Dashboard",
    description:
      "Full-stack operations hub with intern/employee and company management, announcements, and a secure API vault—JWT, RBAC, encryption, and a polished admin UI.",
    image: "/projects/crm.png",
    features: [
      "Role-based access control",
      "API vault & workflow tools",
      "3-tier scalable architecture",
      "Production-hardened auth",
    ],
    tech: ["Next.js", "Node.js", "Firebase", "TypeScript", "REST APIs"],
    liveUrl: "https://cyberclipper-admin-panel-ochre.vercel.app/",
    repoUrl: null,
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio built with Next.js, Tailwind, and Three.js—showcasing full-stack work from UI polish to cloud-ready deployment patterns.",
    image: "/projects/project-3.png",
    features: [
      "Interactive 3D hero accents",
      "Optimized content sections",
      "Clean component architecture",
      "Deploy-ready static assets",
    ],
    tech: ["Next.js", "Tailwind CSS", "Three.js", "TypeScript", "Vercel"],
    liveUrl: "https://github.com/praduman1212/My-Portfolio",
    repoUrl: "https://github.com/praduman1212/My-Portfolio",
  },
  {
    title: "File Sharing Web Application",
    description:
      "MERN app for secure uploads, sharing, and file management—clear UI, validated flows, and sensible defaults for production-style file handling.",
    image: "/projects/file sharing app.png",
    features: [
      "Secure upload & sharing flows",
      "RESTful API design",
      "MongoDB-backed storage",
      "MERN stack delivery",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "JavaScript"],
    liveUrl: "https://github.com/praduman1212/File-Sharing-Web-Application-",
    repoUrl: "https://github.com/praduman1212/File-Sharing-Web-Application-",
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
