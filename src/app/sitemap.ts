import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const currentDate = new Date();

  // Define static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/quiz`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  // You can add dynamic pages here if you have them
  // For example, if you have blog posts or other dynamic content:
  /*
  const dynamicPages: MetadataRoute.Sitemap = []

  // Fetch dynamic content and add to sitemap
  try {
    const posts = await fetchBlogPosts() // Your data fetching function
    const dynamicPages = posts.map(post => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  } catch (error) {
    console.error('Error fetching dynamic pages for sitemap:', error)
  }
  */

  return [
    ...staticPages,
    // ...dynamicPages, // Uncomment when you have dynamic pages
  ];
}
