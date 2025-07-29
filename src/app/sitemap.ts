import { siteConfig } from "@/config/site";
import { MetadataRoute } from "next";

// Required for SSG with output: export
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.baseUrl;
  const buildTime = new Date(siteConfig.lastUpdated);

  // Define static pages with appropriate priorities and change frequencies
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: buildTime,
      changeFrequency: "monthly", // Portfolio updates less frequently
      priority: 1.0, // Highest priority for main portfolio page
    },
    {
      url: `${baseUrl}/quiz`,
      lastModified: buildTime,
      changeFrequency: "weekly", // Quiz content might be updated more often
      priority: 0.8, // High priority for quiz section
    },
  ];

  return staticPages;
}
