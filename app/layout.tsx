import type { Metadata } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { siteConfig } from '@/data/content'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.meta.url),
  title: siteConfig.meta.title,
  description: siteConfig.meta.description,
  openGraph: {
    title: siteConfig.meta.title,
    description: siteConfig.meta.description,
    url: siteConfig.meta.url,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.meta.ogImage, width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.meta.title,
    description: siteConfig.meta.description,
    images: [siteConfig.meta.ogImage],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* SVG favicon — "SJ" monogram in accent green */}
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='3' fill='%232F5D50'/><text x='50%25' y='50%25' font-family='Georgia,serif' font-size='13' font-weight='700' fill='%23FAF8F4' text-anchor='middle' dominant-baseline='central'>SJ</text></svg>"
        />
        {/* Block FOUC for dark mode */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var saved = localStorage.getItem('theme');
                var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (saved === 'dark' || (!saved && prefersDark)) {
                  document.documentElement.classList.add('dark');
                }
              } catch(e) {}
            `,
          }}
        />
        {/* JSON-LD Person schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Sindhu Jeswani',
              email: 'sindhukumeri44@gmail.com',
              telephone: '+92-301-3408943',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Karachi',
                addressCountry: 'PK',
              },
              alumniOf: {
                '@type': 'CollegeOrUniversity',
                name: 'SZABIST University',
              },
              url: 'https://sindhujeswani.dev',
              sameAs: [
                'https://github.com/sindhujeswani',
                'https://www.linkedin.com/in/sindhu-jeswani/',
              ],
              jobTitle: 'Computer Science Student',
              description: siteConfig.meta.description,
            }),
          }}
        />
      </head>
      <body
        className={`${fraunces.variable} ${inter.variable}`}
        style={{
          fontFamily: 'var(--font-sans)',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        }}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
