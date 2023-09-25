import '../styles/global.css'
import { Open_Sans } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Next.js Film Sitesi',
  description: 'Next.js Film Sitesi - Gökhan Demir',
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={openSans.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}