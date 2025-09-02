# GitHub Pages Deployment Setup

Your Next.js UUID application is now configured for GitHub Pages deployment!

## ✅ What's Been Configured

1. **Static Export Enabled**: `next.config.ts` updated with `output: 'export'`
2. **GitHub Actions Workflow**: `.github/workflows/github-pages.yml` created
3. **Build Test**: Successfully builds static files to `./out` directory

## 🚀 Setup Steps

### 1. Enable GitHub Pages in Repository Settings

1. Go to your GitHub repository
2. Click **Settings** tab
3. Scroll down to **Pages** section (left sidebar)
4. Under **Source**, select **"GitHub Actions"**
5. Save the settings

### 2. Push Your Code

```bash
git add .
git commit -m "Configure GitHub Pages deployment"
git push origin main
```

### 3. Deployment Process

- The workflow will automatically trigger on push to `main`
- Build process takes ~2-3 minutes
- Your site will be available at: `https://[username].github.io/shesha-uuid/`

## 🔍 Monitoring Deployment

1. Go to **Actions** tab in your repository
2. Watch the "Deploy to GitHub Pages" workflow
3. Once complete, visit your live site!

## 📝 Notes

- **Static Generation**: Your UUID page generates a new UUID on each page load
- **No Server Required**: Fully static site, perfect for GitHub Pages
- **Automatic Deployment**: Every push to `main` triggers a new deployment
- **Manual Trigger**: You can also trigger deployment manually from Actions tab

## 🛠 Troubleshooting

If deployment fails:
1. Check the Actions tab for error details
2. Ensure Pages is set to "GitHub Actions" source
3. Verify the repository is public (or you have GitHub Pro for private repos)

Your UUID generator will be live at: `https://[your-username].github.io/shesha-uuid/uuid/`
