import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://axiacrm.com'),
  title: 'Axia CRM - Open Source Enterprise CRM | Click to Deploy Coming Soon',
  description: 'Battle-tested, open-source CRM with built-in power dialer, Cloudflare D1 database, and enterprise security. Support free CRM for small businesses.',
  keywords: ['CRM', 'open source', 'Cloudflare', 'power dialer', 'enterprise CRM', 'D1 database', 'sales automation', 'click to deploy', 'free CRM'],
  authors: [{ name: 'Y12.AI', url: 'https://y12.ai' }],
  creator: 'Y12.AI',
  publisher: 'Y12.AI',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Axia CRM - Open Source Enterprise CRM',
    description: 'Battle-tested, open-source CRM with built-in power dialer, Cloudflare D1 database, and enterprise security',
    url: 'https://axiacrm.com',
    siteName: 'Axia CRM',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Axia CRM - Open Source Enterprise CRM',
    description: 'Battle-tested, open-source CRM with built-in power dialer and enterprise security',
    creator: '@Y12AI',
  },
  verification: {
    google: 'verification_token',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
