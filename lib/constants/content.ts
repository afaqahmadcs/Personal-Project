export interface Article {
  id: string;
  slug: string;
  title: string;
  type: "ARTICLE" | "TUTORIAL" | "EXPERIMENT" | "PROJECT NOTE" | "VIDEO" | "RESOURCE";
  category: "WEB DEVELOPMENT" | "AI" | "DESIGN" | "CREATIVE" | "LEARNING";
  excerpt: string;
  date: string;
  image?: string;
  featured?: boolean;
  content?: string;
  externalUrl?: string;
  relatedProject?: string;
}

// Keeping empty initially to trigger the editorial empty state
export const ARTICLES: Article[] = [];
