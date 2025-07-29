import { siteConfig } from "@/config/site";

// Base URL helper for SSG deployment
export function getBaseUrl(): string {
  return siteConfig.baseUrl;
}

// Generate Open Graph images URL for different contexts
export function generateOGImageUrl(
  title: string,
  description?: string,
  theme: "light" | "dark" = "light",
  context: "portfolio" | "quiz" = "portfolio"
): string {
  const baseUrl = getBaseUrl();
  const params = new URLSearchParams({
    title: title.slice(0, 100), // Limit title length
    ...(description && { description: description.slice(0, 160) }), // Limit description
    theme,
    context,
  });

  return `${baseUrl}/api/og?${params.toString()}`;
}

// Create standardized metadata for pages
export function createMetadata({
  title,
  description,
  path = "",
  image,
  noIndex = false,
  keywords = [],
  context = "portfolio",
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
  keywords?: string[];
  context?: "portfolio" | "quiz";
}) {
  const baseUrl = getBaseUrl();
  const url = `${baseUrl}${path}`;

  // Choose appropriate image based on context
  const defaultImage =
    context === "quiz" ? siteConfig.social.og.quizImage : siteConfig.social.og.portfolioImage;

  const finalImage = image || `${baseUrl}${defaultImage}`;

  return {
    title,
    description,
    keywords: keywords.join(", "),
    robots: noIndex ? "noindex,nofollow" : "index,follow",
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.portfolio.name,
      images: [{ url: finalImage }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [finalImage],
    },
    alternates: {
      canonical: url,
    },
  };
}

// Validate meta tags for SEO
export function validateMetaTags(metadata: any): string[] {
  const issues: string[] = [];

  if (!metadata.title || metadata.title.length < 30 || metadata.title.length > 60) {
    issues.push("Title should be 30-60 characters");
  }

  if (
    !metadata.description ||
    metadata.description.length < 120 ||
    metadata.description.length > 160
  ) {
    issues.push("Description should be 120-160 characters");
  }

  return issues;
}

// Generate JSON-LD structured data for different types
export function generateStructuredData(
  type: "WebSite" | "Quiz" | "Portfolio" | "Person",
  data: any
) {
  const baseUrl = getBaseUrl();

  const baseStructure = {
    "@context": "https://schema.org",
    "@type": type,
    url: baseUrl,
  };

  switch (type) {
    case "WebSite":
      return {
        ...baseStructure,
        name: data.name || siteConfig.portfolio.name,
        description: data.description,
        author: {
          "@type": "Person",
          name: siteConfig.author.name,
        },
        potentialAction: {
          "@type": "SearchAction",
          target: `${baseUrl}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      };

    case "Portfolio":
      return {
        ...baseStructure,
        "@type": "Portfolio",
        name: siteConfig.portfolio.name,
        description: siteConfig.portfolio.description,
        author: {
          "@type": "Person",
          name: siteConfig.author.name,
          jobTitle: data.jobTitle || "Senior Software Engineer",
          url: baseUrl,
          sameAs: [siteConfig.author.linkedin, siteConfig.author.github],
        },
        mainEntity: {
          "@type": "Person",
          name: siteConfig.author.name,
        },
        about:
          data.skills ||
          siteConfig.portfolio.keywords.map((keyword: string) => ({
            "@type": "Thing",
            name: keyword,
          })),
      };

    case "Quiz":
      return {
        ...baseStructure,
        "@type": "Quiz",
        name: siteConfig.quiz.title,
        description: siteConfig.quiz.description,
        author: {
          "@type": "Person",
          name: siteConfig.author.name,
          url: baseUrl,
          sameAs: [siteConfig.author.linkedin, siteConfig.author.github],
        },
        educationalLevel: siteConfig.quiz.difficulty,
        learningResourceType: "Quiz",
        teaches: siteConfig.quiz.topics,
        about: siteConfig.quiz.topics.map((topic) => ({
          "@type": "Thing",
          name: topic,
        })),
        interactivityType: "active",
        isAccessibleForFree: true,
        inLanguage: "en-US",
        audience: {
          "@type": "EducationalAudience",
          educationalRole: "developer",
        },
      };

    case "Person":
      return {
        ...baseStructure,
        "@type": "Person",
        name: siteConfig.author.name,
        jobTitle: data.jobTitle || "Senior Software Engineer",
        description: data.description || siteConfig.portfolio.description,
        url: baseUrl,
        email: siteConfig.author.email,
        sameAs: [siteConfig.author.linkedin, siteConfig.author.github],
        knowsAbout: data.skills || siteConfig.portfolio.keywords,
        address: {
          "@type": "PostalAddress",
          addressLocality: data.location || "Dhaka",
          addressCountry: "BD",
        },
      };

    default:
      return baseStructure;
  }
}
