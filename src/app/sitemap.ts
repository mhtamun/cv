import { MetadataRoute } from "next";

// Required for SSG with output: export
export const dynamic = "force-static";

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
    const posts = await fetchBlogPosts() // your data fetching method
    posts.forEach((post) => {
      dynamicPages.push({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.updatedAt),
        changeFrequency: 'monthly',
        priority: 0.7,
      })
    })
  } catch (error) {
    console.error('Error fetching dynamic pages for sitemap:', error)
  }
  */

  return [
    ...staticPages,
    // ...dynamicPages, // uncomment when you have dynamic pages
  ];
}
