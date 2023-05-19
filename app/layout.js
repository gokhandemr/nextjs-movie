import './globals.css'
import Header from '@/components/header/Header'
import Footer from '@/components/Footer'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

//! SEO //
export const metadata = {
  title: 'Movies Home Page',
  description: 'Sit ullamco magna ipsum mollit consectetur esse tempor.',
  keywords: ['movie', 'next.js', 'javascript'],
  metadataBase: new URL('http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: './icon.png',
  },
  creator: 'Gökhan',
  publisher: 'Gökhan',
  openGraph: {
    title: 'Movies Home Page',
    description: 'Sit ullamco magna ipsum mollit consectetur esse tempor.',
    url: 'http://localhost:3000',
    siteName: 'Movies',
    images: [
      {
        url: './icon.png',
        width: 48,
        height: 48,
      },
      {
        url: './icon.png',
        width: 48,
        height: 48,
        alt: 'Movies',
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Movie',
    description: 'Fugiat irure tempor commodo laborum mollit et proident elit fugiat ut officia.',
  },
  category: 'movies',
}
//! SEO //

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
