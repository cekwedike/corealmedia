import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans, DM_Mono } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { ThemeProvider } from '@/lib/theme'
import { JsonLd, organizationSchema } from '@/components/shared/JsonLd'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-cormorant',
  display: 'swap',
  preload: true,
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
  preload: true,
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-mono',
  display: 'swap',
})

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://corealmedia.com'),
  title: {
    default: 'Coréal Media | Content Systems for Brands That Scale',
    template: '%s | Coréal Media',
  },
  description:
    'Coréal Media builds content engines for founders, multi-brand companies, and agencies. Strategy, execution, and scale without losing what makes your brand human.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://corealmedia.com',
    siteName: 'Coréal Media',
    images: [
      {
        url: '/images/og/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Coréal Media Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/og/og-default.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js-eu1.hs-scripts.com/148060728.js"
        />
      </head>
      <body className="bg-bg-primary text-text-primary font-body antialiased">
        {/* Anti-flash: apply saved theme before hydration */}
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');var theme=t==='light'||t==='dark'?t:window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.setAttribute('data-theme',theme);}())`,
          }}
        />
        <JsonLd data={organizationSchema} />
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
