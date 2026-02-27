import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://axiacrm.com'),
  title: 'Axia CRM — AI-Powered CRM for Modern Sales Teams',
  description: 'Close deals faster with AI-powered CRM. Pipeline management, built-in phone, Gmail sync, and AI assistant — all for $60/month. No per-seat pricing.',
  keywords: [
    'CRM', 'AI CRM', 'sales CRM', 'pipeline management', 'power dialer',
    'Gmail sync', 'AI assistant', 'sales automation', 'deal management',
    'kanban pipeline', 'email CRM', 'calendar sync', 'marketing hub',
  ],
  authors: [{ name: 'Axia CRM', url: 'https://axiacrm.com' }],
  creator: 'Axia CRM',
  publisher: 'Axia CRM',
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
    title: 'Axia CRM — AI-Powered CRM for Modern Sales Teams',
    description: 'Pipeline management, built-in phone, Gmail sync, and AI assistant — all for $60/month.',
    url: 'https://axiacrm.com',
    siteName: 'Axia CRM',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Axia CRM — AI-Powered CRM for Modern Sales Teams',
    description: 'Close deals faster with AI-powered CRM. All for $60/month. No per-seat pricing.',
    creator: '@AxiaCRM',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
