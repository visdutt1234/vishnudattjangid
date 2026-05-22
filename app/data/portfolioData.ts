export type Project = {
  ix: string;
  name: string;
  url: string;
  desc: string;
  tags: string[];
};

export type Post = {
  featured: boolean;
  embed: string;
  height: number;
  title: string;
  excerpt: string;
  tag: string;
  date: string;
  url: string;
};

export type Job = {
  company: string;
  role: string;
  location: string;
  dates: string;
  impact: string;
  bullets: string[];
};

export const projects: Project[] = [
  {
    ix: "PRJ_01",
    name: "CarDekho",
    url: "https://www.cardekho.com",
    desc: "India's #1 auto marketplace. Platform/PWA work - shared component library and bundle optimization.",
    tags: ["React", "PWA", "SSR", "Perf"]
  },
  {
    ix: "PRJ_02",
    name: "BikeDekho",
    url: "https://www.bikedekho.com",
    desc: "Multi-brand two-wheeler marketplace built on the shared react-common platform.",
    tags: ["React", "PWA", "SEO"]
  },
  {
    ix: "PRJ_03",
    name: "Connecto",
    url: "https://www.connecto.io/",
    desc: "Connected-mobility product surface - performance and UI engineering.",
    tags: ["Frontend", "UI"]
  },
  {
    ix: "PRJ_04",
    name: "Ashok Leyland",
    url: "https://www.ashokleyland.com/",
    desc: "Commercial-vehicle giant. Led the client frontend build end-to-end.",
    tags: ["Client", "React", "AMP"]
  },
  {
    ix: "PRJ_05",
    name: "Kinetic Green",
    url: "https://kineticgreen.com/",
    desc: "EV brand site delivered as a UI-team lead engagement.",
    tags: ["Client", "UI", "Perf"]
  },
  {
    ix: "PRJ_06",
    name: "Careline (Girnar)",
    url: "https://careline.girnarsoft.com/employee/login",
    desc: "Internal employee portal - frontend and auth flow.",
    tags: ["Internal", "Auth"]
  },
  {
    ix: "PRJ_07",
    name: "My Telly",
    url: "https://mytelly.in/",
    desc: "Consumer web platform - frontend development.",
    tags: ["Frontend", "UI"]
  },
  {
    ix: "PRJ_08",
    name: "Dada Motors",
    url: "https://design.girnarsoft.com/vishnu/dadaMotors/",
    desc: "Dealer microsite build - responsive HTML/CSS/React.",
    tags: ["Client", "Responsive"]
  },
  {
    ix: "PRJ_09",
    name: "Tata Yodha",
    url: "https://design.girnarsoft.com/vishnu/tata/app/index.html",
    desc: "Interactive product app prototype.",
    tags: ["Prototype", "JS"]
  },
  {
    ix: "PRJ_10",
    name: "Icareheal",
    url: "https://icareheal.com/",
    desc: "Healthcare platform - frontend engineering.",
    tags: ["Frontend", "UI"]
  },
  {
    ix: "PRJ_11",
    name: "Connected Cars",
    url: "https://www.cardekho.com/connected-cars",
    desc: "CarDekho connected-cars vertical landing experience.",
    tags: ["SEO", "React"]
  },
  {
    ix: "PRJ_12",
    name: "SIAM Admin",
    url: "https://design.girnarsoft.com/vishnu/SIAM-admin/index.html",
    desc: "Admin dashboard interface build.",
    tags: ["Dashboard", "UI"]
  },
  {
    ix: "PRJ_13",
    name: "Kinetic Green (build)",
    url: "https://design.girnarsoft.com/vishnu/kineticgreen/index.htm",
    desc: "Static delivery build for the Kinetic Green campaign.",
    tags: ["Client", "HTML/CSS"]
  },
  {
    ix: "PRJ_14",
    name: "Jansons Carpets",
    url: "https://jansonscarpets.com/",
    desc: "Ecommerce/brand site delivered as a client engagement.",
    tags: ["Client", "Ecommerce"]
  }
];

export const posts: Post[] = [
  {
    featured: true,
    embed: "https://www.linkedin.com/embed/feed/update/urn:li:share:7451680744394919936",
    height: 1062,
    title: "Recent post - frontend and performance",
    excerpt:
      "A recent update from my LinkedIn on building fast, scalable web platforms. Load it to read the full post inline, or open it on LinkedIn.",
    tag: "LinkedIn",
    date: "2025",
    url: "https://www.linkedin.com/feed/update/urn:li:share:7451680744394919936/"
  },
  {
    featured: true,
    embed: "https://www.linkedin.com/embed/feed/update/urn:li:share:7442639336140951552",
    height: 1993,
    title: "On scalable architecture and design systems",
    excerpt:
      "Notes on structuring large multi-brand codebases and shared design systems. Load to read in full, or open on LinkedIn.",
    tag: "LinkedIn",
    date: "2025",
    url: "https://www.linkedin.com/feed/update/urn:li:share:7442639336140951552/"
  },
  {
    featured: true,
    embed: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7419588985062248448",
    height: 791,
    title: "Engineering notes",
    excerpt:
      "A post from my feed on day-to-day engineering. Load to read the full post inline, or open it on LinkedIn.",
    tag: "LinkedIn",
    date: "2024",
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7419588985062248448/"
  }
];

export const jobs: Job[] = [
  {
    company: "Thrillophilia",
    role: "SENIOR SOFTWARE ENGINEER",
    location: "JAIPUR",
    dates: "MAY 2025 - PRESENT",
    impact: "IMPACT_LOG // India's largest experiences and travel marketplace",
    bullets: [
      "Migrated the build system from Webpack to Vite and decoupled the React app from Ruby on Rails - builds got ~95% faster.",
      "Set up an Nx monorepo to consolidate frontend code, speeding up CI and sharing tooling.",
      "Built a Tailwind-based design system with reusable components and design tokens.",
      "Worked on business-critical flows: lead forms, login/signup, and campaign landing pages.",
      "Added Playwright E2E tests and wired ESLint + Prettier into every PR via GitHub Actions."
    ]
  },
  {
    company: "CarDekho - Girnar Software",
    role: "SOFTWARE ENGINEER - PLATFORM / PWA",
    location: "JAIPUR",
    dates: "APR 2023 - APR 2025",
    impact: "IMPACT_LOG // Auto-tech unicorn - ~30M+ monthly users across 4 brands",
    bullets: [
      "Built and maintained react-common, the shared library powering CarDekho, BikeDekho, TruckDekho and BatteryDekho.",
      "Cut JS bundle size by 40%+ using route-level code splitting, lazy loading, and error boundaries.",
      "Built PWA service-worker caching with per-resource strategies for faster repeat visits.",
      "Worked on React SSR with Express and page-specific critical CSS for first paint and SEO.",
      "Owned revenue modules and partnered with SEO/growth on Core Web Vitals fixes."
    ]
  },
  {
    company: "CarDekho - Girnar Software",
    role: "FRONTEND DEVELOPER - UI TEAM LEAD",
    location: "JAIPUR",
    dates: "MAR 2019 - APR 2023",
    impact: "IMPACT_LOG // Client engagements and team leadership",
    bullets: [
      "Led a 3-person UI team delivering frontend builds for Ashok Leyland, Kinetic Green and Jansons Carpets.",
      "Mentored junior developers via code reviews and pairing with quality standards around performance and accessibility.",
      "Delivered client projects from scratch using HTML, CSS, ReactJS, GraphQL, AMP and TailwindCSS."
    ]
  }
];
