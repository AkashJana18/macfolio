export const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

export const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

export const dockApps = [
  {
    id: "finder",
    name: "Finder", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Terminal", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

export const INITIAL_Z_INDEX = 1000;

export const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "JavaScript", "TypeScript"],
  },
  {
    category: "Styling",
    items: ["Tailwindcss", "Sass", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Rust"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL", "SQL"],
  },
  {
    category: "Web3",
    items: ["Solana", "Base", "Ethereum"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker"],
  },
];

export const blogPosts = [
  {
    id: 1,
    date: "Sept 2025",
    title:
      "How to Add Filecoin Mainnet to MetaMask🦊, Stay Safe, and Cash Out on Binance",
    image: "/images/MFB.png",
    link: "https://medium.com/@akashjana663/how-to-add-filecoin-mainnet-to-metamask-stay-safe-and-cash-out-on-binance-b473b6c06b57",
  },
  {
    id: 2,
    date: "Aug 2025",
    title: "Bridging OrbitDB with Storacha for Decentralized Database Backups",
    image: "/images/blog-orbitdb.png",
    link: "https://medium.com/@akashjana663/bridging-orbitdb-with-storacha-decentralized-database-backups-44c7bee5c395",
  },
  {
    id: 3,
    date: "Nov 2024",
    title: "From Zero to Merge: Building a JSON Renaming Field Component in Go",
    image: "/images/instill banner.png",
    link: "https://dev.to/akashjana/from-zero-to-merge-building-a-json-renaming-field-component-in-go-17nh",
  },
];

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 101,
      name: "Lighthouse Revamp",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5",
      windowPosition: "top-[5vh] left-5",
      children: [
        {
          id: 1011,
          name: "Lighthouse Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Lighthouse Revamp is a modern marketing site rebuild inspired by Lighthouse Storage, focused on better UX, clarity, and developer-first messaging.",
            "Instead of a basic landing page, it improves information hierarchy, section storytelling, and responsiveness to match a premium Web3 product.",
            "Includes hero + feature sections, pricing, developer tooling, ecosystem, FAQs, and newsletter style footer.",
            "Built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and Radix UI.",
          ],
        },
        {
          id: 1012,
          name: "lighthouse-revamp.vercel.app",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://lighthouse-revamp.vercel.app",
          position: "top-10 right-20",
        },
        {
          id: 1013,
          name: "lighthouse.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/lighthouse-revamp.png",
        },
        {
          id: 1014,
          name: "Source Code.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/AkashJana18/lighthouse-revamp",
          position: "top-60 right-20",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 102,
      name: "Statify",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1021,
          name: "Statify Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "Statify is a minimal, theme-based dashboard app designed for service tracking and monitoring workflows.",
            "Instead of a cluttered admin panel, it focuses on clean UI, structured navigation, and role-based access.",
            "Planned scope includes tracking websites, APIs, and databases with charts, tables, and secure auth flows.",
            "Built with Next.js + Tailwind + shadcn/ui, Clerk auth, Prisma ORM, and Neon database.",
          ],
        },
        {
          id: 1022,
          name: "statify.vercel.app",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://statify-delta-mauve.vercel.app/",
          position: "top-20 left-20",
        },
        {
          id: 1023,
          name: "statify.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/statify.png",
        },
        {
          id: 1024,
          name: "Source Code.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/AkashJana18/statify",
          position: "top-60 left-5",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 103,
      name: "Cryptack",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1031,
          name: "Cryptack Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-10 left-5",
          description: [
            "Cryptack is a crypto tracking app that helps users compare coins, view charts, and build a watchlist from the top 100 cryptocurrencies.",
            "Instead of static price tables, it provides interactive graphs for price, volume, and market cap for quick analysis.",
            "Built with React, Material UI, Chart.js, React Router, and Coingecko API.",
            "Deployed with a clean responsive layout for fast browsing across devices.",
          ],
        },
        {
          id: 1032,
          name: "cryptack.netlify.app",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://cryptack.netlify.app",
          position: "top-10 right-20",
        },
        {
          id: 1033,
          name: "cryptack.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/cryptack.png",
        },
        {
          id: 1034,
          name: "Source Code.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/AkashJana18/cryptack",
          position: "top-60 right-20",
        },
      ],
    },
    // ▶ Project 4
    {
      id: 104,
      name: "CopilotMate",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-[22rem] left-20",
      windowPosition: "top-[10vh] left-[20vw]",
      children: [
        {
          id: 1041,
          name: "CopilotMate Description.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-6 left-8",
          description: [
            "CopilotMate is an open-source personal assistant that helps with productivity workflows like todo management, spreadsheets, chat, and expense tracking.",
            "Includes a StudyBuddy co-agent for note-taking, quiz creation, and study planning.",
            "Built using CopilotKit with Next.js, Tailwind CSS, Framer Motion, Groq SDK, and Llama models.",
            "Designed to feel like a single place to think, plan, and execute tasks faster.",
          ],
        },
        {
          id: 1042,
          name: "copilotmate demo (YouTube)",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://youtu.be/qPVRPUH8ewU",
          position: "top-10 right-16",
        },
        {
          id: 1043,
          name: "copilotmate.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-44 left-24",
          imageUrl: "/images/copilotmate.png",
        },
        {
          id: 1044,
          name: "Source Code.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/AkashJana18/copilotmate",
          position: "top-56 right-24",
        },
      ],
    },

    // ▶ Project 5
    {
      id: 105,
      name: "Portfolio",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-[22rem] left-[22rem]",
      windowPosition: "top-[18vh] left-[28vw]",
      children: [
        {
          id: 1051,
          name: "Portfolio Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-6 left-10",
          description: [
            "A modern developer portfolio showcasing interactive UI, 3D elements, and motion-driven sections.",
            "Includes dynamic hero visuals, bento-style layout, interactive components, testimonials, and experience blocks.",
            "Built with Next.js, Tailwind CSS, Framer Motion, and Three.js for 3D interactions.",
            "Designed to present projects and writing in a premium, product-like way.",
          ],
        },
        {
          id: 1052,
          name: "portfolio repo",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/AkashJana18/portfolio",
          position: "top-12 right-20",
        },
        {
          id: 1053,
          name: "portfolio.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-48 left-32",
          imageUrl: "/images/portfolio.png",
        },
        {
          id: 1054,
          name: "Source Code.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/AkashJana18/portfolio",
          position: "top-60 right-28",
        },
      ],
    },

    // ▶ Project 6
    {
      id: 106,
      name: "Shoe Landing Page",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-[22rem] left-[38rem]",
      windowPosition: "top-[25vh] left-[18vw]",
      children: [
        {
          id: 1061,
          name: "Shoe Landing Page.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-6 left-12",
          description: [
            "A clean landing page starter built with React + Vite for fast development and smooth iteration.",
            "Good for showcasing a product hero section, feature blocks, and CTA-driven marketing layout.",
            "Uses Vite for quick builds and hot reload during development.",
            "A solid base template to extend into a full product website.",
          ],
        },
        {
          id: 1062,
          name: "shoe-landing-pg repo",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/AkashJana18/shoe-landing-pg",
          position: "top-14 right-24",
        },
        {
          id: 1063,
          name: "shoe-landing.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-44 left-36",
          imageUrl: "/images/nike.png",
        },
        {
          id: 1064,
          name: "Source Code.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/AkashJana18/shoe-landing-pg",
          position: "top-60 right-20",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Universal pfp.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/dp.jpg",
    },
    {
      id: 2,
      name: "foodie-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/foodie-me.jpg",
    },
    {
      id: 3,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/casual-me.jpg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/formal-me.jpg",
      description: [
        "Hey! I’m Akash 👋 a frontend and Web3 developer who likes building smooth, interactive things on the internet.",
        "I mainly work with TS, JS, rust, React, and Next.js, and I care a lot about performance, motion, and clean UI. Good UX, readable code, and interfaces that don’t feel clunky are my priorities.",
        "Outside coding, I’m usually painting, playing chess, watching anime, or thinking about food—mostly as an introvert who enjoys building quietly 🎨♟️🍱",
        "In 2026, I’m actively stepping outside my comfort zone: creating content on YouTube, experimenting with Twitch, meeting people at conferences, and building discipline through running and calisthenics.",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

import {
  FaLinkedin,
  FaDev,
  FaDiscord,
  FaInstagram,
  FaEnvelope,
  FaMedium,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
export const contactLinks = [
  {
    id: "linkedin",
    name: "LinkedIn",
    href: "https://linkedin.com/in/akashjana",
    icon: FaLinkedin,
    color: "text-[#0A66C2]",
  },
  {
    id: "gmail",
    name: "Email",
    href: "mailto:akashjana663@gmail.com",
    icon: MdOutlineMail,
    color: "text-[#EA4335]",
  },
  {
    id: "twitter",
    name: "X (Twitter)",
    href: "https://x.com/akashjana__",
    icon: FaXTwitter,
    color: "text-black",
  },
  {
    id: "discord",
    name: "Discord",
    href: "https://discord.com/users/etherious_natsu_dragoneel",
    icon: FaDiscord,
    color: "text-[#5865F2]",
  },
  {
    id: "medium",
    name: "Medium",
    href: "https://medium.com/@akashjana663",
    icon: FaMedium,
    color: "text-black",
  },
  {
    id: "dev",
    name: "DEV.to",
    href: "https://dev.to/akashjana",
    icon: FaDev,
    color: "text-black",
  },

  {
    id: "instagram",
    name: "Instagram",
    href: "https://instagram.com/akashjana__",
    icon: FaInstagram,
    color: "text-purple-500",
  },
];
