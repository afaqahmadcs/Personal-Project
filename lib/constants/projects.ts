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
  context?: string;
  problem?: string;
  approach?: string;
  buildDetails?: string;
  result?: string;
  lessons?: string;
}

export const PROJECTS: Project[] = [
  {
    number: "01",
    title: "Afaq Ahmad Real Estate",
    slug: "real-estate",
    category: "Real Estate Web Application",
    shortDescription: "A premium real estate browsing platform highlighting luxury property listings and clean UX patterns.",
    role: "Lead Full Stack Developer & UI Designer",
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
    liveUrl: "https://afaqahmad-cs.github.io/AFAQ-AHMAD-REAL-ESTATE-/",
  },
  {
    number: "02",
    title: "Luxury Car Business Website",
    slug: "luxury-car",
    category: "Automotive Landing Platform",
    shortDescription: "A bespoke automotive presentation portal with responsive designs tailored for premium vehicle showcases.",
    role: "Frontend Developer & Creative Director",
    technologies: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://afaqahmad-cs.github.io/Luxury-Car-Business-Website/",
  },
  {
    number: "03",
    title: "Business Website",
    slug: "business-portal",
    category: "Corporate Web Architecture",
    shortDescription: "A sophisticated modern corporate website featuring rich grid spacing, structured content systems, and minimal styling.",
    role: "Frontend Developer",
    technologies: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
    liveUrl: "https://afaqahmad-cs.github.io/Business-Website/",
  },
  {
    number: "04",
    title: "Premium Luxury Car Business Website",
    slug: "premium-car",
    category: "High-End Commercial Concept",
    shortDescription: "An elevated interactive digital experience showcasing premium luxury vehicles using custom visual flows.",
    role: "Lead Creative Technologist",
    technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    liveUrl: "https://afaqahmad-cs.github.io/Premium-Luxury-Car-Business-Website/",
  },
  {
    number: "05",
    title: "Blue Sapphire GemStone Project",
    slug: "gemstone-project",
    category: "Client E-Commerce & Catalogue Project",
    shortDescription: "A custom gemstone catalogue and branding client project designed specifically to exhibit rare blue sapphires.",
    role: "Full Stack Engineer & UX Specialist",
    technologies: ["React", "Next.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://www.bluesapphiregemstones.com/",
    githubUrl: "https://github.com/afaqahmadcs/GemStone-Project",
  },
];
