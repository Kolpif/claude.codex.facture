import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { ThemeProvider } from './context/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Facture Pro Conseil - Facturation Électronique 2026',
  description: 'Expert en mise en conformité avec la réforme de la facturation électronique obligatoire 2026. Solutions adaptées pour toutes les entreprises françaises.',
  keywords: 'facturation électronique, loi 2026, e-invoicing, conformité, PPF, PDP, Factur-X',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-navy-900">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
