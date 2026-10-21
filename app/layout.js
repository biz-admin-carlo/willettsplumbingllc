import { Barlow_Condensed, DM_Sans } from 'next/font/google'
import './globals.css'
import 'aos/dist/aos.css'
import { ThemeProvider } from '@/context/ThemeContext'
import AOSInit from '@/components/AOSInit'
import { siteConfig, contactConfig, mainwebsiteConfig } from '@/config/v1.config'

const barlowCondensed = Barlow_Condensed({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-barlow',
  display: 'swap',
})

const dmSans = DM_Sans({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-dm',
  display: 'swap',
})

export const viewport = {
  themeColor: siteConfig.themeColor,
}

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.businessName} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.businessName}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.businessName }],
  creator: siteConfig.businessName,
  publisher: 'MyBizSolutions',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.businessName,
    title: `${siteConfig.businessName} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.businessName} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
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
  alternates: {
    canonical: siteConfig.url,
  },
  verification: {
    google: siteConfig.googleVerification,
    other: {
      'msvalidate.01': siteConfig.bingVerification,
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': siteConfig.schemaType,
  name: siteConfig.businessName,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: contactConfig.phone,
  email: contactConfig.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: contactConfig.address,
  },
  sameAs: [mainwebsiteConfig.url],
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${barlowCondensed.variable} ${dmSans.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme')||'dark';if(t==='dark')document.documentElement.classList.add('dark');}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider>
          <AOSInit />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
