import { Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/app/components/Layout/Header'
import Footer from '@/app/components/Layout/Footer'
import ScrollToTop from '@/app/components/ScrollToTop'
import SmoothScroll from '@/app/components/SmoothScroll'
import { LanguageProvider } from '@/app/context/language'

const font = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={font.className}>
        <LanguageProvider>
          <SmoothScroll />
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </LanguageProvider>
      </body>
    </html>
  )
}
