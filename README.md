# Axia CRM Landing Page

A high-performance Next.js landing page optimized for Cloudflare Pages deployment.

[![Deploy to Cloudflare Pages](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/seefeldmaxwell/AxiaCRM-Website)

## Quick Deploy

**One-Click Deploy to Cloudflare Pages:**

Click the button above or [deploy directly here](https://pages.cloudflare.com/new?from=https://github.com/seefeldmaxwell/AxiaCRM-Website) to instantly launch your own Axia CRM landing page.

**Build Configuration:**
- **Build command:** `npm run build`
- **Build output directory:** `out`
- **Node version:** 20

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

### Option 1: Automatic Deployment (Recommended)

1. Push your code to GitHub
2. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
3. Connect your GitHub repository
4. Configure build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Root directory**: `/`
5. Click "Save and Deploy"

### Option 2: Manual Deployment with Wrangler

Install Wrangler CLI:

```bash
npm install -g wrangler
```

Login to Cloudflare:

```bash
wrangler login
```

Deploy:

```bash
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
