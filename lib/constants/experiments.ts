export interface Experiment {
  id: string;
  number: string;
  title: string;
  category: "IMAGE" | "VIDEO" | "UI" | "CODE" | "3D" | "PROMPT";
  description: string;
  status: "EXPLORATION" | "EXPERIMENT" | "REFINED";
  year: string;
  tools: string[];
}

export const EXPERIMENTS: Experiment[] = [
  {
    id: "exp-01",
    number: "01",
    title: "Dynamic Component Synthesis",
    category: "UI",
    description: "Iterating prompt-to-structure component schemas using Next.js Turbopack configurations.",
    status: "REFINED",
    year: "2025",
    tools: ["React", "AI Prompts", "Next.js"]
  },
  {
    id: "exp-02",
    number: "02",
    title: "Aesthetic Style Exploration",
    category: "IMAGE",
    description: "Exploring isometric structural visual directions and glassmorphism styling parameters.",
    status: "EXPLORATION",
    year: "2025",
    tools: ["Midjourney", "Figma"]
  },
  {
    id: "exp-03",
    number: "03",
    title: "Figma to Tailwind Parser",
    category: "CODE",
    description: "An automated helper script analyzing JSON coordinate mappings to construct Tailwind container blocks.",
    status: "EXPERIMENT",
    year: "2026",
    tools: ["Node.js", "AI Coding", "Tailwind CSS"]
  }
];
