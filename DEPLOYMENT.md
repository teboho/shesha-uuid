# Deployment Guide

This project includes a GitHub Actions workflow that automatically builds and deploys your Next.js UUID application.

## Deployment Options

The workflow supports three deployment platforms (choose one):

### 1. Vercel (Recommended for Next.js)

**Setup:**
1. Create a Vercel account at [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Get your tokens from Vercel dashboard:
   - Go to Settings → Tokens → Create new token
   - Go to Settings → General to find your Org ID and Project ID

**Required GitHub Secrets:**
```
VERCEL_TOKEN=your_vercel_token
VERCEL_ORG_ID=your_org_id  
VERCEL_PROJECT_ID=your_project_id
```

**To enable:** The Vercel deployment is enabled by default in the workflow.

### 2. Netlify

**Setup:**
1. Create a Netlify account at [netlify.com](https://netlify.com)
2. Get your Site ID from Site settings
3. Generate a Personal Access Token from User settings

**Required GitHub Secrets:**
```
NETLIFY_AUTH_TOKEN=your_netlify_token
NETLIFY_SITE_ID=your_site_id
```

**To enable:** In `.github/workflows/deploy.yml`, change:
```yaml
if: github.ref == 'refs/heads/main' && false
```
to:
```yaml
if: github.ref == 'refs/heads/main' && true
```

### 3. GitHub Pages

**Setup:**
1. Go to your repository Settings → Pages
2. Set Source to "GitHub Actions"

**To enable:** In `.github/workflows/deploy.yml`, change:
```yaml
if: github.ref == 'refs/heads/main' && false
```
to:
```yaml
if: github.ref == 'refs/heads/main' && true
```

**Note:** For GitHub Pages, you'll also need to enable static export in `next.config.ts`.

## Adding GitHub Secrets

1. Go to your GitHub repository
2. Click Settings → Secrets and variables → Actions
3. Click "New repository secret"
4. Add the required secrets for your chosen platform

## Workflow Triggers

The deployment runs automatically when:
- Code is pushed to the `main` branch
- Pull requests are created (build only, no deployment)

## Manual Deployment

You can also trigger deployments manually from the Actions tab in your GitHub repository.
