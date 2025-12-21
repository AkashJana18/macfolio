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
    name: "Portfolio", // was "Finder"
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
    name: "Skills", // was "Terminal"
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
  // {
  //   id: 1,
  //   date: "Feb 2025",
  //   title: "ShareBox: UCAN-Powered File Sharing Platform Built on Storacha",
  //   image: "/images/blog-sharebox.png",
  //   link: "https://medium.com/@akashjana663/sharebox-ucan-powered-file-sharing-platform-built-on-storacha",
  // },
  // {
  //   id: 2,
  //   date: "Jan 2025",
  //   title:
  //     "SecretShare: Secure One-Time Access to Secrets Using UCANs and Storacha",
  //   image: "/images/blog-secretshare.png",
  //   link: "https://medium.com/@akashjana663/secretshare-secure-one-time-access-to-secrets-built-with-ucans-and-storacha",
  // },
  // {
  //   id: 3,
  //   date: "Dec 2024",
  //   title: "DocumentSigner: Tracking System Using Storacha, UCANs, and IPNS",
  //   image: "/images/blog-documentsigner.png",
  //   link: "https://medium.com/@akashjana663/documentsigner-tracking-system-using-storacha-ucans-and-ipns",
  // },
  {
    id: 4,
    date: "Nov 2024",
    title: "Bridging OrbitDB with Storacha for Decentralized Database Backups",
    image: "/images/blog-orbitdb.png",
    link: "https://medium.com/@akashjana663/bridging-orbitdb-with-storacha-decentralized-database-backups",
  },
  {
    id: 5,
    date: "Oct 2024",
    title: "From Zero to Merge: Building a JSON Renaming Field Component in Go",
    image: "/images/blog-go-json.png",
    link: "https://dev.to/akashjana/from-zero-to-merge-building-a-json-renaming-field-component-in-go",
  },
  {
    id: 6,
    date: "Oct 2024",
    title: "How I Built CopilotMate with CopilotKit AI",
    image: "/images/blog-copilotmate.png",
    link: "https://dev.to/akashjana/how-i-built-copilotmate-with-copilotkit-ai",
  },
];
