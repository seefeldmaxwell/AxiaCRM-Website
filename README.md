# Axia CRM Landing Page

A high-performance Next.js landing page optimized for Cloudflare Pages deployment.

[![Deploy to Cloudflare Pages](https://deploy.workers.cloudflare.com/button)](https://dash.cloudflare.com/?to=/:account/pages/new)

## Quick Deploy

**Deploy to Cloudflare Pages:**

1. **[Click here to connect GitHub](https://dash.cloudflare.com/?to=/:account/pages/new)** → Select "Continue with GitHub"
2. Select `seefeldmaxwell/AxiaCRM-Website` (or your fork) → Click "Begin setup"
3. **Configure settings** (Cloudflare auto-detects most):
   - Build command: `npm run build`
   - Build output: `out`
   - Deploy command: `echo "Deployment complete"`
4. Click "Save and Deploy"

Your site will be live in under 2 minutes at `https://[your-project].pages.dev` ⚡

**Build Configuration:**
- ✅ Framework: Next.js (Static HTML Export)
- ✅ Build command: `npm run build`
- ✅ Build output directory: `out`
- ✅ Deploy command: `echo "Deployment complete"` (placeholder for required field)
- ✅ Node version: 20 (auto-detected)

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

### One-Click Deploy

1. **[Click here to deploy](https://dash.cloudflare.com/?to=/:account/pages/new)** → Select "Connect to Git"
2. Choose your repository: `seefeldmaxwell/AxiaCRM-Website`
3. Configure build settings (auto-detected):
   - **Framework preset**: Next.js (Static HTML Export)
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Deploy command**: `echo "Deployment complete"`
   - **Root directory**: `/` (leave default)
4. Click "Save and Deploy"

Your site will be live at `https://[your-project].pages.dev` in under 2 minutes! ⚡

> **Note:** The deploy command `echo "Deployment complete"` is a placeholder. Cloudflare Pages automatically deploys the `out` directory after the build completes.

### Manual Deployment with Wrangler

For one-time or CI/CD deployments:

```bash
# Install Wrangler
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Build the project
npm run build

# Deploy to Cloudflare Pages
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
