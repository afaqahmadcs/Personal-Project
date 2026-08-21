import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://github.com/afaqahmadcs/Personal-Project"; // Fallback production URL mapping

  const routes = [
    "",
    "/about",
    "/capabilities",
    "/work",
    "/ai-creative",
    "/journey",
    "/content",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
