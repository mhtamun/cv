# 🚀 Deployment Guide for SSG (Static Site Generation)

This guide will help you deploy your CV portfolio with quiz functionality to GitHub Pages or any static hosting provider.

## 📋 Pre-Deployment Checklist

### 1. Update Site Configuration

Edit `src/config/site.ts` and update these values:

```typescript
export const siteConfig = {
  // 🚨 IMPORTANT: Update with your actual GitHub Pages URL
  baseUrl: "https://your-username.github.io/repository-name",

  // Update with your information
  name: "Your Name - CV Portfolio",
  description: "Your professional description",

  author: {
    name: "Your Name",
    email: "your.email@example.com",
    github: "https://github.com/your-username",
    linkedin: "https://linkedin.com/in/your-profile",
  },

  // Update last modified date when making major changes
  lastUpdated: "2024-12-15", // Use current date
};
```

### 2. Verify Next.js Configuration

Ensure your `next.config.mjs` has:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

## 🛠️ Build Process

### 1. Install Dependencies

```bash
npm install
# or
pnpm install
```

### 2. Build for Production

```bash
npm run build
# or
pnpm build
```

### 3. Test Locally (Optional)

```bash
npm run start
# or serve the out/ directory with any static server
npx serve out/
```

## 🚀 GitHub Pages Deployment

### Option 1: GitHub Actions (Recommended)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main, master]
  pull_request:
    branches: [main, master]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "18"
          cache: "npm"

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        if: github.ref == 'refs/heads/main'
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

### Option 2: Manual Deployment

1. Build your project: `npm run build`
2. Push the `out/` folder to the `gh-pages` branch
3. Enable GitHub Pages in repository settings

## 🌐 Other Static Hosting Providers

### Netlify

1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `out`

### Vercel

1. Import your GitHub repository
2. Vercel will auto-detect Next.js
3. Ensure `output: 'export'` is in your config

### Cloudflare Pages

1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set build output directory: `out`

## ✅ Post-Deployment Verification

After deployment, verify:

1. **SEO**: Check sitemap.xml and robots.txt are accessible

   - `https://your-domain.com/sitemap.xml`
   - `https://your-domain.com/robots.txt`

2. **Quiz Functionality**: Test the quiz works correctly

3. **Responsive Design**: Test on mobile, tablet, and desktop

4. **Accessibility**: Use tools like Lighthouse or axe-devtools

5. **Performance**: Check Core Web Vitals

## 🐛 Common Issues & Solutions

### Issue: 404 on Quiz Page

**Solution**: Ensure `trailingSlash: true` in next.config.mjs

### Issue: Images Not Loading

**Solution**: Use relative paths and ensure `images.unoptimized: true`

### Issue: Base URL Issues

**Solution**: Double-check `siteConfig.baseUrl` matches your actual domain

### Issue: Build Fails on Static Export

**Solution**: Ensure no server-side features are used (no API routes in SSG)

## 📈 SEO Optimization Tips

1. **Update Last Modified**: Change `siteConfig.lastUpdated` when making content updates
2. **Add OG Image**: Create `/public/assets/images/og-image.png` (1200x630px)
3. **Submit Sitemap**: Submit your sitemap to Google Search Console
4. **Monitor Performance**: Use Google PageSpeed Insights

## 🔧 Maintenance

- Update `lastUpdated` in site config when making significant changes
- Regularly check broken links
- Monitor quiz questions file for updates
- Keep dependencies updated for security

---

**Need Help?** Check the README.md or create an issue in the repository.
