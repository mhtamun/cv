// Site configuration for SSG deployment
// Update these values when deploying to your GitHub Pages or other static hosting

export const siteConfig = {
  // 🚨 IMPORTANT: Update this with your actual GitHub Pages URL
  // Format: https://username.github.io/repository-name
  baseUrl: "https://mhtamun.github.io",

  // Main portfolio site information (for the home page /)
  portfolio: {
    name: "Maruf Hossain - Senior Software Engineer",
    description:
      "Professional CV and Portfolio showcasing expertise in Full Stack Development, System Design, and modern web technologies. Experienced Senior Software Engineer specializing in React, Node.js, and scalable architecture.",
    keywords: [
      "Maruf Hossain",
      "Senior Software Engineer",
      "Full Stack Developer",
      "React Developer",
      "Node.js Developer",
      "TypeScript Developer",
      "Software Engineer CV",
      "Portfolio",
      "Dhaka Bangladesh",
      "System Design",
      "Microservices",
    ],
  },

  // Quiz specific configuration (for the /quiz route)
  quiz: {
    title: "JavaScript Quiz Game",
    description:
      "Test your knowledge of JavaScript, Node.js, and System Design concepts with our interactive quiz game. Multiple difficulty levels, instant feedback, and detailed explanations included.",
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
      "technical interview preparation",
      "programming challenge",
    ],
    topics: ["JavaScript", "Node.js", "System Design"],
    difficulty: "Intermediate",
  },

  // Author information
  author: {
    name: "Maruf Hossain",
    email: "mhtamun@gmail.com",
    github: "https://github.com/mhtamun",
    linkedin: "https://linkedin.com/in/mhtamun",
  },

  // Social media and SEO
  social: {
    twitter: "@mhtamun", // Optional
    og: {
      portfolioImage: "/assets/images/profile.png", // For main portfolio page
      quizImage: "/assets/images/quiz-og-image.png", // For quiz page (you can create this)
      imageAlt: "Maruf Hossain - Senior Software Engineer Portfolio",
    },
  },

  // Build information (update this when you make major changes)
  lastUpdated: "2024-12-15",
};
