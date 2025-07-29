import { Metadata } from "next";
import { Suspense } from "react";
import QuizStartClient from "./_components/QuizStartClient";

// SEO Metadata
export const metadata: Metadata = {
  title: "JavaScript Quiz Game | Test Your JS, Node.js & System Design Skills",
  description:
    "Challenge yourself with our interactive JavaScript quiz game. Test your knowledge of JavaScript, Node.js, and System Design concepts. Multiple difficulty levels, instant feedback, and detailed explanations included.",
  keywords: [
    "javascript quiz",
    "nodejs quiz",
    "system design quiz",
    "programming test",
    "javascript assessment",
    "coding quiz",
    "web development quiz",
    "interactive quiz",
    "javascript skills test",
    "developer quiz",
  ],
  authors: [{ name: "CV Portfolio" }],
  creator: "CV Portfolio",
  publisher: "CV Portfolio",
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
    title: "JavaScript Quiz Game | Test Your Programming Skills",
    description:
      "Interactive JavaScript quiz game with multiple difficulty levels. Test your JS, Node.js, and System Design knowledge with instant feedback.",
    siteName: "CV Portfolio",
    images: [
      {
        url: "/quiz-og-image.png", // We'll create this
        width: 1200,
        height: 630,
        alt: "JavaScript Quiz Game - Test Your Programming Skills",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Quiz Game | Test Your Programming Skills",
    description:
      "Interactive JavaScript quiz game with multiple difficulty levels. Test your JS, Node.js, and System Design knowledge.",
    images: ["/quiz-og-image.png"],
  },
  alternates: {
    canonical: "/quiz",
  },
  other: {
    "application-name": "CV Portfolio Quiz",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "JS Quiz Game",
  },
};

// Structured Data for Quiz
const quizStructuredData = {
  "@context": "https://schema.org",
  "@type": "Quiz",
  name: "JavaScript Quiz Game",
  description: "Interactive quiz testing JavaScript, Node.js, and System Design knowledge",
  author: {
    "@type": "Person",
    name: "CV Portfolio Author",
  },
  publisher: {
    "@type": "Organization",
    name: "CV Portfolio",
  },
  educationalLevel: "Intermediate to Advanced",
  learningResourceType: "Assessment",
  teaches: [
    "JavaScript Programming",
    "Node.js Development",
    "System Design Concepts",
    "Web Development",
  ],
  interactivityType: "active",
  isAccessibleForFree: true,
  inLanguage: "en-US",
  audience: {
    "@type": "EducationalAudience",
    educationalRole: "developer",
  },
};

// Loading component for Suspense
function QuizLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-50 to-teal-50">
      <div className="text-center space-y-4">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-600 mx-auto"></div>
        <p className="text-gray-600">Loading quiz game...</p>
      </div>
    </div>
  );
}

export default function QuizPage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(quizStructuredData),
        }}
      />

      {/* Main Content with Suspense for better loading UX */}
      <main role="main" aria-label="JavaScript Quiz Game">
        <Suspense fallback={<QuizLoading />}>
          <QuizStartClient />
        </Suspense>
      </main>
    </>
  );
}
