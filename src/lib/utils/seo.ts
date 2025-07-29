import { Metadata } from "next";

// Base URL helper
export function getBaseUrl(): string {
  if (process.env.NEXT_PUBLIC_BASE_URL) {
    return process.env.NEXT_PUBLIC_BASE_URL;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return "http://localhost:3000";
}

// Generate Open Graph images URL
export function generateOGImageUrl(
  title: string,
  description?: string,
  theme: "light" | "dark" = "light"
): string {
  const baseUrl = getBaseUrl();
  const params = new URLSearchParams({
    title: title.slice(0, 100), // Limit title length
    ...(description && { description: description.slice(0, 160) }), // Limit description
    theme,
  });

  return `${baseUrl}/api/og?${params.toString()}`;
}

// Create standardized metadata for pages
export function createMetadata({
  title,
  description,
  path = "",
  image,
  type = "website",
  publishedTime,
  modifiedTime,
  tags = [],
  author = "CV Portfolio",
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  tags?: string[];
  author?: string;
}): Metadata {
  const baseUrl = getBaseUrl();
  const url = `${baseUrl}${path}`;
  const defaultImage = `${baseUrl}/quiz-og-image.png`;

  return {
    title,
    description,
    authors: [{ name: author }],
    creator: author,
    publisher: author,
    ...(tags.length > 0 && { keywords: tags }),
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type,
      title,
      description,
      url,
      siteName: "CV Portfolio",
      locale: "en_US",
      images: [
        {
          url: image || defaultImage,
          width: 1200,
          height: 630,
          alt: title,
          type: "image/png",
        },
      ],
      ...(type === "article" && {
        publishedTime,
        modifiedTime,
        tags,
        authors: [author],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image || defaultImage],
    },
    alternates: {
      canonical: url,
    },
  };
}

// Generate structured data for different types
export function generatePersonSchema(person: {
  name: string;
  jobTitle: string;
  description: string;
  url: string;
  email: string;
  location: string;
  linkedin?: string;
  github?: string;
  skills: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    jobTitle: person.jobTitle,
    description: person.description,
    url: person.url,
    email: person.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: person.location.split(", ")[0],
      addressCountry: person.location.split(", ")[1] || "BD",
    },
    sameAs: [
      ...(person.linkedin ? [person.linkedin] : []),
      ...(person.github ? [person.github] : []),
    ].filter(Boolean),
    knowsAbout: person.skills,
  };
}

export function generateQuizSchema(quiz: {
  name: string;
  description: string;
  author: string;
  url: string;
  difficulty: string;
  topics: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Quiz",
    name: quiz.name,
    description: quiz.description,
    author: {
      "@type": "Person",
      name: quiz.author,
    },
    url: quiz.url,
    educationalLevel: quiz.difficulty,
    teaches: quiz.topics,
    interactivityType: "active",
    isAccessibleForFree: true,
    inLanguage: "en-US",
    audience: {
      "@type": "EducationalAudience",
      educationalRole: "developer",
    },
  };
}

export function generateWebsiteSchema(website: {
  name: string;
  description: string;
  url: string;
  author: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Website",
    name: website.name,
    description: website.description,
    url: website.url,
    author: {
      "@type": "Person",
      name: website.author,
    },
    inLanguage: "en-US",
    copyrightHolder: {
      "@type": "Person",
      name: website.author,
    },
  };
}

// SEO performance helpers
export function generatePreloadLinks(
  resources: Array<{
    href: string;
    as: "script" | "style" | "font" | "image";
    type?: string;
    crossOrigin?: "anonymous" | "use-credentials";
  }>
) {
  return resources.map((resource) => ({
    rel: "preload",
    href: resource.href,
    as: resource.as,
    ...(resource.type && { type: resource.type }),
    ...(resource.crossOrigin && { crossOrigin: resource.crossOrigin }),
  }));
}

// Core Web Vitals optimization helpers
export const webVitalsOptimization = {
  // Largest Contentful Paint (LCP) optimization
  optimizeLCP: {
    preloadHero: (imageSrc: string) => `<link rel="preload" as="image" href="${imageSrc}">`,
    preconnectOrigins: ["https://fonts.googleapis.com", "https://fonts.gstatic.com"],
  },

  // First Input Delay (FID) optimization
  optimizeFID: {
    deferNonCriticalJS: true,
    useReactConcurrent: true,
  },

  // Cumulative Layout Shift (CLS) optimization
  optimizeCLS: {
    setImageDimensions: true,
    reserveSpaceForAds: true,
    avoidDynamicContent: true,
  },
};

// Meta tags validation - simplified to avoid complex type checking
export function validateMetaTags(metadata: Metadata): {
  isValid: boolean;
  warnings: string[];
  errors: string[];
} {
  const warnings: string[] = [];
  const errors: string[] = [];

  // Title validation
  if (!metadata.title) {
    errors.push("Title is required");
  } else {
    let titleString = "";
    if (typeof metadata.title === "string") {
      titleString = metadata.title;
    } else if (
      metadata.title &&
      typeof metadata.title === "object" &&
      "default" in metadata.title
    ) {
      titleString = metadata.title.default || "";
    }

    if (titleString.length > 60) {
      warnings.push("Title is longer than 60 characters");
    }
    if (titleString.length < 30) {
      warnings.push("Title is shorter than 30 characters");
    }
  }

  // Description validation
  if (!metadata.description) {
    errors.push("Description is required");
  } else {
    if (metadata.description.length > 160) {
      warnings.push("Description is longer than 160 characters");
    }
    if (metadata.description.length < 120) {
      warnings.push("Description is shorter than 120 characters");
    }
  }

  // Open Graph validation - simplified
  const hasOGImages =
    metadata.openGraph?.images &&
    ((Array.isArray(metadata.openGraph.images) && metadata.openGraph.images.length > 0) ||
      (!Array.isArray(metadata.openGraph.images) && metadata.openGraph.images));

  if (!hasOGImages) {
    warnings.push("Open Graph image is missing");
  }

  return {
    isValid: errors.length === 0,
    warnings,
    errors,
  };
}
