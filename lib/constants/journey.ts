export interface TimelineStage {
  id: string;
  num: string;
  year: string;
  title: string;
  category: string;
  focus: string;
  description: string;
  technologies: string[];
  relatedProject?: string;
  relatedPage?: string;
}

export const JOURNEY_STAGES: TimelineStage[] = [
  {
    id: "stage-01",
    num: "01",
    year: "2025 &mdash; PRESENT",
    title: "FOUNDATION",
    category: "Academics",
    focus: "Computer Science",
    description: "Starting intermediate curriculum at The Superior Group of Colleges, Peshawar. Structuring logical reasoning, basic computer science theory, and architectural concepts.",
    technologies: ["Computer Logic", "Architecture Foundations", "Theory"]
  },
  {
    id: "stage-02",
    num: "02",
    year: "2025 &mdash; PRESENT",
    title: "BUILDING FOR THE WEB",
    category: "Frontend Development",
    focus: "HTML, CSS, JavaScript",
    description: "Fiddling with DOM APIs, learning layout flow grids, media responsive styling variables, and building vanilla interface templates.",
    technologies: ["HTML5", "CSS3", "JavaScript"]
  },
  {
    id: "stage-03",
    num: "03",
    year: "2025 &mdash; PRESENT",
    title: "GOING DEEPER",
    category: "Modern Stack",
    focus: "TypeScript, React, Next.js",
    description: "Translating static CSS markup templates into dynamic component rendering structures using Next.js framework routing rules.",
    technologies: ["TypeScript", "React", "Next.js", "Tailwind CSS"]
  },
  {
    id: "stage-04",
    num: "04",
    year: "2025 &mdash; PRESENT",
    title: "BEYOND FRONTEND",
    category: "Full Stack",
    focus: "Node, Express, MongoDB",
    description: "Exploring simple client-server-database paradigms to coordinate API configurations and back-end schema queries.",
    technologies: ["Node.js", "Express.js", "MongoDB"]
  },
  {
    id: "stage-05",
    num: "05",
    year: "2025 &mdash; PRESENT",
    title: "EXPLORING AI",
    category: "Practical AI",
    focus: "Prompt Engineering & Assistants",
    description: "Integrating LLM coding assistants and image generators directly to automate boilerplate coding schedules and explore concept directions.",
    technologies: ["AI Coding", "Midjourney", "Prompt Engineering"],
    relatedPage: "/ai-creative"
  },
  {
    id: "stage-06",
    num: "06",
    year: "2026",
    title: "LEARNING THROUGH PROJECTS",
    category: "Deployment",
    focus: "Real-World Showcase",
    description: "Structuring portfolio layouts, automotive client mockups, gemstone directories, and property search web platforms.",
    technologies: ["Real Estate Web App", "Car Business Sites", "GemStone Catalogues"],
    relatedProject: "afaq-ahmad-real-estate",
    relatedPage: "/work"
  }
];
