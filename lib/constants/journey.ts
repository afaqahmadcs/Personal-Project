export interface JourneyEvent {
  year: string;
  title: string;
  institution: string;
  location: string;
  description: string;
  type: "education" | "milestone" | "project";
}

export const JOURNEY: JourneyEvent[] = [
  {
    year: "2025 – Present",
    title: "FSc Computer Science Student",
    institution: "The Superior Group of Colleges",
    location: "Peshawar, Pakistan",
    description: "Rigorous academic study focusing on intermediate computer science foundations, mathematics, and programming fundamentals.",
    type: "education",
  },
  {
    year: "2024 – Present",
    title: "Independent AI & Full Stack Developer",
    institution: "Self-Initiated / Client projects",
    location: "Peshawar, Pakistan",
    description: "Developing custom portfolio portals, corporate platforms, e-commerce integrations, and exploring generative AI API integrations practically.",
    type: "milestone",
  },
];
