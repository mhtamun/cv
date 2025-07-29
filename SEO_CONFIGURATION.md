# 🔍 SEO Configuration Guide

This document explains how SEO is configured for both the main portfolio page and the quiz section.

## 📊 Overview

Your application has two main routes with distinct SEO configurations:

1. **Portfolio Route (`/`)** - Main CV/Portfolio page
2. **Quiz Route (`/quiz`)** - Interactive JavaScript quiz game

## 🏠 Portfolio Route (`/`) SEO

**Location**: `src/app/layout.tsx`

### Key Features:

- ✅ **Comprehensive Person Schema** - Structured data for search engines
- ✅ **Portfolio Schema** - Professional portfolio markup
- ✅ **Professional Service Schema** - Services offered
- ✅ **Open Graph Profile** - Social media sharing optimized
- ✅ **Dynamic Keywords** - Auto-generated from skills and experience
- ✅ **Rich Metadata** - Complete professional information

### SEO Elements:

```typescript
- Title: "Maruf Hossain - Senior Software Engineer"
- Description: Dynamic from portfolioData.summary.text
- Type: "profile" (OpenGraph)
- Keywords: Auto-generated from skills, projects, experience
- Images: "/assets/images/profile.png"
- Structured Data: Person, Portfolio, ProfessionalService
```

### Target Audience:

- Recruiters and hiring managers
- Potential clients
- Professional networking
- Career opportunities

## 🎯 Quiz Route (`/quiz`) SEO

**Location**: `src/app/quiz/page.tsx`

### Key Features:

- ✅ **Educational Content Schema** - Quiz and learning markup
- ✅ **Interactive Content** - Structured for educational platforms
- ✅ **Topic-Specific Keywords** - JavaScript, Node.js, System Design
- ✅ **Free Educational Resource** - Marked as accessible
- ✅ **Developer Audience** - Targeted educational content

### SEO Elements:

```typescript
- Title: "JavaScript Quiz Game | Maruf Hossain"
- Description: "Test your knowledge of JavaScript, Node.js, and System Design concepts..."
- Type: "website" (OpenGraph)
- Keywords: ["javascript quiz", "nodejs quiz", "system design quiz", ...]
- Images: "/assets/images/quiz-og-image.png"
- Structured Data: Quiz, Educational content
```

### Target Audience:

- Developers preparing for interviews
- Students learning JavaScript
- Professionals testing skills
- Educational platforms

## ⚙️ Configuration Files

### 1. Site Configuration (`src/config/site.ts`)

```typescript
export const siteConfig = {
  baseUrl: "https://mhtamun.github.io",

  // Portfolio-specific config
  portfolio: {
    name: "Maruf Hossain - Senior Software Engineer",
    description: "Professional CV and Portfolio...",
    keywords: ["Senior Software Engineer", "Full Stack Developer", ...]
  },

  // Quiz-specific config
  quiz: {
    title: "JavaScript Quiz Game",
    description: "Test your knowledge of JavaScript...",
    keywords: ["javascript quiz", "nodejs quiz", ...]
  },

  // Shared author info
  author: {
    name: "Maruf Hossain",
    email: "mhtamun@gmail.com",
    // ...
  }
}
```

### 2. SEO Utilities (`src/lib/utils/seo.ts`)

- Context-aware metadata generation
- Structured data helpers
- Image URL management
- SEO validation tools

### 3. Sitemap (`src/app/sitemap.ts`)

```xml
https://mhtamun.github.io/          (Priority: 1.0, Monthly updates)
https://mhtamun.github.io/quiz      (Priority: 0.8, Weekly updates)
```

## 🎨 Social Media Images

### Portfolio Image:

- **Path**: `/assets/images/profile.png`
- **Usage**: Main portfolio page, professional sharing
- **Dimensions**: 1200x630px (recommended)

### Quiz Image:

- **Path**: `/assets/images/quiz-og-image.png`
- **Usage**: Quiz page sharing, educational content
- **Dimensions**: 1200x630px (recommended)
- **Status**: ⚠️ _You need to create this image_

## 🔧 SEO Best Practices Implemented

### Technical SEO:

- ✅ **Mobile-first design** - Responsive meta viewport
- ✅ **Fast loading** - Optimized images and code splitting
- ✅ **Accessibility** - WCAG 2.2 compliant
- ✅ **Structured data** - Rich snippets for search engines
- ✅ **Clean URLs** - SEO-friendly routing

### Content SEO:

- ✅ **Unique titles** - Different for each page
- ✅ **Compelling descriptions** - Optimized for click-through
- ✅ **Relevant keywords** - Context-appropriate targeting
- ✅ **Fresh content** - Quiz questions and portfolio updates

### Performance SEO:

- ✅ **Static generation** - Pre-rendered for speed
- ✅ **Image optimization** - WebP format when possible
- ✅ **Minimal JavaScript** - Fast initial load
- ✅ **Caching headers** - Browser and CDN optimization

## 📈 SEO Monitoring

### Tools to Use:

1. **Google Search Console** - Monitor search performance
2. **Google Analytics** - Track user behavior
3. **Lighthouse** - Performance and SEO audits
4. **Schema Markup Validator** - Test structured data

### Key Metrics to Track:

- **Portfolio Page**: "Senior Software Engineer", "React Developer", "Full Stack Developer"
- **Quiz Page**: "JavaScript quiz", "Node.js quiz", "Programming test"

## 🚀 Deployment Checklist

Before deploying, ensure:

1. ✅ Update `siteConfig.baseUrl` with your actual domain
2. ✅ Update `siteConfig.lastUpdated` when making changes
3. ⚠️ Create `/assets/images/quiz-og-image.png`
4. ✅ Test all metadata with social media debuggers
5. ✅ Validate structured data with Google's tools
6. ✅ Submit sitemap to Google Search Console

## 🎯 Next Steps

1. **Create Quiz OG Image**: Design a 1200x630px image for quiz sharing
2. **Monitor Performance**: Set up Google Search Console
3. **A/B Test Titles**: Try different title variations
4. **Content Updates**: Keep portfolio and quiz content fresh
5. **Backlink Building**: Share quiz on developer communities

---

**Note**: Both routes are optimized for their specific audiences while maintaining consistent branding and technical excellence.
