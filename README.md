# Axia CRM Landing Page

A high-performance Next.js landing page optimized for Cloudflare Pages deployment.

[![Deploy to Cloudflare Pages](https://deploy.workers.cloudflare.com/button)](https://dash.cloudflare.com/?to=/:account/pages/new)

## Quick Deploy

**Deploy to Cloudflare Pages in 2 clicks:**

1. **[Click here to connect GitHub](https://dash.cloudflare.com/?to=/:account/pages/new)** → Select "Continue with GitHub"
2. Select `seefeldmaxwell/AxiaCRM-Website` (or your fork) → Click "Begin setup"

**Cloudflare will automatically detect:**
- ✅ Framework: Next.js
- ✅ Build command: `npm run build`
- ✅ Build output directory: `out`
- ✅ Node version: 20

Just click "Save and Deploy" - that's it! Your site will be live in under 2 minutes. ⚡

> **Note:** Cloudflare Pages automatically detects Next.js projects and pre-fills all build settings. No manual configuration needed!

## Features

- ⚡ Next.js 15 with App Router
- 🌐 Optimized for Cloudflare Pages
- 🎨 Modern dark theme with smooth animations
- 📱 Fully responsive design
- 🚀 Static export for maximum performance
- 🔒 Built-in Stripe payment integration
- 🛡️ Security headers and caching optimizations

## Tech Stack

- **Framework**: Next.js 15.5
- **Language**: TypeScript
- **Runtime**: React 19
- **Styling**: CSS Modules
- **Deployment**: Cloudflare Pages
- **Payments**: Stripe Buy Button

## Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

Build static export:

```bash
npm run build
```

The static files will be generated in the `out` directory.

## Deployment to Cloudflare Pages

### Option 1: GitHub Integration (Recommended)

1. Go to [Cloudflare Pages Dashboard](https://dash.cloudflare.com/?to=/:account/pages)
2. Click "Create a project" → "Connect to Git"
3. Select your GitHub repository
4. Configure build settings:
   - **Framework preset**: Next.js (Static HTML Export)
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Root directory**: `/` (leave default)
   - **Deploy command**: Leave EMPTY (do not set a deploy command)
5. Click "Save and Deploy"

**Important:** Do NOT configure a deploy command. Cloudflare Pages automatically handles deployment after the build completes.

### Option 2: Manual Deployment with Wrangler

For one-time or CI/CD deployments:

```bash
# Install Wrangler
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Build and deploy
npm run build
wrangler pages deploy out --project-name=axiacrm
```

## Environment Variables

No environment variables required for basic deployment. Stripe keys are embedded in the buy button.

## Performance Optimizations

- Static HTML export for instant page loads
- Optimized CSS with minimal runtime
- No external dependencies except Stripe
- Cloudflare CDN for global distribution
- Sub-50ms response times worldwide

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles
├── public/                 # Static assets
├── next.config.mjs        # Next.js configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

## License

See LICENSE file for details.

## Support

For questions or support, contact support@y12.ai
