import { siteConfig } from "@/config/site";
import { Metadata } from "next";

// SEO Metadata for Quiz Section
export const metadata: Metadata = {
  title: siteConfig.quiz.title, // Remove author name - root layout template will add it
  description: siteConfig.quiz.description,
  keywords: siteConfig.quiz.keywords,
  authors: [{ name: siteConfig.author.name }],
  creator: siteConfig.author.name,
  publisher: siteConfig.author.name,
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
    type: "website",
    locale: "en_US",
    url: `${siteConfig.baseUrl}/quiz`,
    title: siteConfig.quiz.title,
    description: siteConfig.quiz.description,
    siteName: siteConfig.portfolio.name,
    images: [
      {
        url: `${siteConfig.baseUrl}${siteConfig.social.og.quizImage}`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.quiz.title} - Interactive Programming Quiz`,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.quiz.title,
    description: siteConfig.quiz.description,
    images: [`${siteConfig.baseUrl}${siteConfig.social.og.quizImage}`],
    creator: siteConfig.social.twitter,
  },
  alternates: {
    canonical: `${siteConfig.baseUrl}/quiz`,
  },
  // Remove viewport, icons, manifest, and other properties that are inherited from root layout
};

// Structured Data (JSON-LD) for Quiz
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Quiz",
  name: siteConfig.quiz.title,
  description: siteConfig.quiz.description,
  author: {
    "@type": "Person",
    name: siteConfig.author.name,
    url: siteConfig.baseUrl,
    sameAs: [siteConfig.author.linkedin, siteConfig.author.github],
  },
  publisher: {
    "@type": "Person",
    name: siteConfig.author.name,
  },
  url: `${siteConfig.baseUrl}/quiz`,
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
  mainEntity: {
    "@type": "WebPage",
    "@id": `${siteConfig.baseUrl}/quiz`,
    url: `${siteConfig.baseUrl}/quiz`,
    name: siteConfig.quiz.title,
    description: siteConfig.quiz.description,
    isPartOf: {
      "@type": "WebSite",
      "@id": siteConfig.baseUrl,
      url: siteConfig.baseUrl,
      name: siteConfig.portfolio.name,
    },
  },
  // Additional properties for better SEO
  potentialAction: {
    "@type": "ConsumeAction",
    target: `${siteConfig.baseUrl}/quiz`,
    expectsAcceptanceOf: {
      "@type": "Offer",
      name: "Free JavaScript Quiz",
      price: "0",
      priceCurrency: "USD",
    },
  },
  hasPart: siteConfig.quiz.topics.map((topic, index) => ({
    "@type": "Question",
    name: `${topic} Questions`,
    educationalLevel: siteConfig.quiz.difficulty,
    position: index + 1,
  })),
};

export default function QuizLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* Structured Data for Quiz */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      {/* Quiz Section Content */}
      {children}
    </>
  );
}
