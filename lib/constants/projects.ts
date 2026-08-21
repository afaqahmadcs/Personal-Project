export interface Project {
  number: string;
  title: string;
  slug: string;
  category: string;
  shortDescription: string;
  role: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  clientWebsite?: string;
  status: "LIVE" | "CLIENT" | "EXPERIMENT";
  featured?: boolean;
  
  // Future detailed case study architecture
  year?: string;
  client?: string;
  heroImage?: string;
  gallery?: string[];
  problem?: string;
  approach?: string;
  solution?: string;
  result?: string;
  lessons?: string;
}

export const PROJECTS: Project[] = [
  {
    number: "01",
    title: "AFAQ AHMAD REAL ESTATE",
    slug: "afaq-ahmad-real-estate",
    category: "WEB DEVELOPMENT",
    shortDescription: "A premium real estate browsing platform highlighting luxury property listings and clean UX patterns.",
    role: "Lead Full Stack Developer & UI Designer",
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
    liveUrl: "https://afaqahmad-cs.github.io/AFAQ-AHMAD-REAL-ESTATE-/",
    status: "LIVE",
    featured: true,
    year: "2025",
    client: "Internal Showcase",
    problem: "Real estate websites often feel cluttered, with slow image loading and disorienting grid flows that distract users from luxury listings.",
    approach: "Designed a visual hierarchy focusing on minimal editorial spacing, bold typography, and optimized asset cards.",
    solution: "A responsive React interface utilizing optimized grids and state bindings to ensure fluid property filtering.",
    lessons: "Handling large media rendering efficiently in modern React layouts."
  },
  {
    number: "02",
    title: "LUXURY CAR BUSINESS WEBSITE",
    slug: "luxury-car-business-website",
    category: "BUSINESS WEBSITE / WEB DEVELOPMENT",
    shortDescription: "A bespoke automotive presentation portal with responsive designs tailored for premium vehicle showcases.",
    role: "Frontend Developer & Creative Director",
    technologies: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://afaqahmad-cs.github.io/Luxury-Car-Business-Website/",
    status: "LIVE",
    featured: false,
    year: "2024",
    client: "Design Exploration",
    problem: "Showcasing high-end vehicles requires immersive, smooth layouts that defaults on mobile screens.",
    approach: "Implemented scroll-triggered animations and fluid component columns to emulate visual pacing."
  },
  {
    number: "03",
    title: "BUSINESS WEBSITE",
    slug: "business-website",
    category: "BUSINESS WEBSITE / WEB DEVELOPMENT",
    shortDescription: "A sophisticated modern corporate website featuring rich grid spacing, structured content systems, and minimal styling.",
    role: "Frontend Developer",
    technologies: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
    liveUrl: "https://afaqahmad-cs.github.io/Business-Website/",
    status: "LIVE",
    featured: false,
    year: "2024",
    client: "Corporate Concept",
    problem: "Corporate websites tend to look generic, using standard templates that lack distinct typographic identity.",
    approach: "Constructed an editorial layout emphasizing white space, minimal border lines, and clean sans fonts."
  },
  {
    number: "04",
    title: "PREMIUM LUXURY CAR BUSINESS WEBSITE",
    slug: "premium-luxury-car-business-website",
    category: "BUSINESS WEBSITE / WEB DEVELOPMENT",
    shortDescription: "An elevated interactive digital experience showcasing premium luxury vehicles using custom visual flows.",
    role: "Lead Creative Technologist",
    technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    liveUrl: "https://afaqahmad-cs.github.io/Premium-Luxury-Car-Business-Website/",
    status: "LIVE",
    featured: false,
    year: "2025",
    client: "Interactive Showcase",
    problem: "Automotive websites need to present custom visual interactions that feel premium and tactile.",
    approach: "Integrated responsive state controllers and advanced Framer Motion flows."
  },
  {
    number: "05",
    title: "GEMSTONE PROJECT",
    slug: "gemstone-project",
    category: "CLIENT PROJECT / WEB DEVELOPMENT",
    shortDescription: "A custom gemstone catalogue and branding client project designed specifically to exhibit rare blue sapphires.",
    role: "Full Stack Engineer & UX Specialist",
    technologies: ["React", "Next.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    githubUrl: "https://github.com/afaqahmadcs/GemStone-Project",
    liveUrl: "https://www.bluesapphiregemstones.com/",
    clientWebsite: "https://www.bluesapphiregemstones.com/",
    status: "CLIENT",
    featured: false,
    year: "2025",
    client: "Blue Sapphire Gemstones",
    problem: "Exhibiting high-value gemstones online requires dark, high-contrast aesthetics and clean visual catalog filtering."
  }
];
