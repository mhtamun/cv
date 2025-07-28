import { portfolioData } from "@/data/portfolio-data";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

// Extract all skills for SEO keywords
const allSkills = portfolioData.skills.categories.flatMap((cat) => [
  ...cat.mainSkills.map((s) => s.name),
  ...cat.otherSkills.flatMap((os) => os.skills),
]);

// Extract all technologies from projects
const allTechnologies = portfolioData.projects.items.flatMap((project) => project.tags);

// Combine unique skills and technologies
const uniqueKeywords = Array.from(
  new Set([
    "Maruf Hossain",
    "Senior Software Engineer",
    "Full Stack Developer",
    "Software Engineer",
    "React Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer",
    "Software Development",
    "System Design",
    "Microservices",
    "Microfrontends",
    portfolioData.summary.contactInfo.location,
    ...portfolioData.skills.categories.map((cat) => cat.title),
    ...allSkills,
    ...allTechnologies,
    ...portfolioData.experience.items.map((exp) => exp.company),
    ...portfolioData.projects.items.map((project) => project.title),
  ])
);

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0891b2" },
    { media: "(prefers-color-scheme: dark)", color: "#0891b2" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: `${portfolioData.hero.name} - ${portfolioData.hero.title}`,
    template: `%s | ${portfolioData.hero.name}`,
  },
  description: portfolioData.summary.text,
  authors: [
    {
      name: portfolioData.hero.name,
      url: portfolioData.summary.contactInfo.linkedin,
    },
  ],
  creator: portfolioData.hero.name,
  publisher: portfolioData.hero.name,
  keywords: uniqueKeywords,
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
    type: "profile",
    title: `${portfolioData.hero.name} - ${portfolioData.hero.title}`,
    description: portfolioData.summary.text,
    url: portfolioData.summary.contactInfo.portfolio,
    siteName: `${portfolioData.hero.name} Portfolio`,
    locale: "en_US",
    images: [
      {
        url: "/assets/images/profile.png",
        width: 1200,
        height: 630,
        alt: `${portfolioData.hero.name} - ${portfolioData.hero.title}`,
        type: "image/png",
      },
      {
        url: "/assets/images/profile.png",
        width: 400,
        height: 400,
        alt: portfolioData.hero.name,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolioData.hero.name} - ${portfolioData.hero.title}`,
    description: portfolioData.summary.text,
    creator: "@mhtamun",
    images: ["/assets/images/profile.png"],
  },
  metadataBase: new URL(portfolioData.summary.contactInfo.portfolio),
  alternates: {
    canonical: portfolioData.summary.contactInfo.portfolio,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  category: "technology",
  classification: "portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        {/* Structured Data for Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: portfolioData.hero.name,
              jobTitle: portfolioData.hero.title,
              description: portfolioData.summary.text,
              url: portfolioData.summary.contactInfo.portfolio,
              sameAs: [
                portfolioData.summary.contactInfo.linkedin,
                portfolioData.summary.contactInfo.github,
              ],
              email: portfolioData.summary.contactInfo.email,
              address: {
                "@type": "PostalAddress",
                addressLocality: portfolioData.summary.contactInfo.location.split(", ")[0],
                addressCountry: "BD",
              },
              alumniOf: {
                "@type": "Organization",
                name: portfolioData.education.items[0].institution,
              },
              worksFor: {
                "@type": "Organization",
                name: portfolioData.experience.items[0].company,
              },
              knowsAbout: allSkills,
              hasCredential: portfolioData.education.items.map((edu) => ({
                "@type": "EducationalOccupationalCredential",
                credentialCategory: edu.degree,
                educationalLevel: edu.degree,
                recognizedBy: {
                  "@type": "Organization",
                  name: edu.institution,
                },
              })),
            }),
          }}
        />

        {/* Structured Data for Portfolio Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Portfolio",
              name: `${portfolioData.hero.name} Portfolio`,
              description: portfolioData.hero.description,
              url: portfolioData.summary.contactInfo.portfolio,
              author: {
                "@type": "Person",
                name: portfolioData.hero.name,
                jobTitle: portfolioData.hero.title,
              },
              mainEntity: {
                "@type": "Person",
                name: portfolioData.hero.name,
              },
              about: portfolioData.skills.categories.map((cat) => ({
                "@type": "Thing",
                name: cat.title,
              })),
            }),
          }}
        />

        {/* Structured Data for Professional Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: `${portfolioData.hero.name} - Software Engineering Services`,
              description: portfolioData.summary.text,
              provider: {
                "@type": "Person",
                name: portfolioData.hero.name,
                jobTitle: portfolioData.hero.title,
              },
              areaServed: {
                "@type": "Place",
                name: portfolioData.summary.contactInfo.location,
              },
              serviceType: [
                "Software Development",
                "Web Development",
                "Frontend Development",
                "Backend Development",
                "Full Stack Development",
                "System Design",
                "Technical Consulting",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
