import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { portfolioData } from "@/data/portfolio-data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: portfolioData.hero.name + " - " + portfolioData.hero.title,
  description: portfolioData.hero.description,
  authors: [
    {
      name: portfolioData.hero.name,
      url: `https://www.linkedin.com/in/${portfolioData.summary.contactInfo.linkedin}`,
    },
  ],
  keywords: [
    "Maruf Hossain",
    "Senior Software Engineer",
    "Portfolio",
    "Java",
    "JavaScript",
    "React",
    "Next.js",
    "TypeScript",
    "System Design",
    ...portfolioData.skills.categories.flatMap((cat) => [
      cat.title,
      ...cat.mainSkills.map((s) => s.name),
    ]),
  ],
  openGraph: {
    title: portfolioData.hero.name + " - " + portfolioData.hero.title,
    description: portfolioData.hero.description,
    url: "https://mhtamun.github.io", // Update to your real domain
    siteName: portfolioData.hero.name,
    locale: "en_US",
    type: "profile",
    images: {
      url: "/assets/images/profile.png", // Place a profile.jpg in public/
      width: 400,
      height: 400,
      alt: portfolioData.hero.name,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: portfolioData.hero.name + " - " + portfolioData.hero.title,
    description: portfolioData.hero.description,
    site: "@mhtamun",
    creator: "@mhtamun",
    images: "/assets/images/profile.png",
  },
  metadataBase: new URL("https://mhtamun.github.io"), // Update to your real domain
  alternates: {
    canonical: "https://mhtamun.github.io", // Update to your real domain
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple:
      "/apple-touch-icon.png",
  },
  themeColor: "#0891b2",
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
        <link
          rel="icon"
          href={"/favicon.ico"}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={
            "/android-chrome-32x32.png"
          }
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={
            "/android-chrome-16x16.png"
          }
        />
        <link
          rel="icon"
          type="image/png"
          sizes="128x128"
          href={
            "/android-chrome-128x128.png"
          }
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href={
            "/android-chrome-192x192.png"
          }
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href={
            "/android-chrome-512x512.png"
          }
        />
        <link
          rel="apple-touch-icon"
          href={
            "/apple-touch-icon.png"
          }
        />
        <link
          rel="manifest"
          href={
            "/site.webmanifest"
          }
        />
        <meta name="theme-color" content="#0891b2" />
        {/* Structured Data for Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: portfolioData.hero.name,
              jobTitle: portfolioData.hero.title,
              url: "https://mhtamun.github.io",
              sameAs: [
                `https://www.linkedin.com/in/${portfolioData.summary.contactInfo.linkedin}`,
                `https://github.com/${portfolioData.summary.contactInfo.github}`,
              ],
              email: portfolioData.summary.contactInfo.email,
              address: {
                "@type": "PostalAddress",
                addressLocality: portfolioData.summary.contactInfo.location,
                addressCountry: "BD",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
