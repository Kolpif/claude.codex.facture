'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Moon, Sun, FileText } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { motion } from 'framer-motion'

export default function Header() {
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'La Loi 2026', href: '/loi-2026' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-navy-950/80 backdrop-blur-lg border-b border-gray-200 dark:border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="bg-primary-500 p-2 rounded-lg group-hover:scale-110 transition-transform">
              <FileText className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="text-lg font-bold text-navy-900 dark:text-white">
                Facture Pro Conseil
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                Spécialiste de la facturation électronique 2026
              </div>
            </div>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all relative ${
                    isActive
                      ? 'text-primary-600 dark:text-primary-400'
                      : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-navy-800'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-navy-800 hover:bg-gray-200 dark:hover:bg-navy-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              ) : (
                <Sun className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              )}
            </button>

            {/* CTA Button */}
            <Link
              href="/#quiz"
              className="hidden sm:inline-flex items-center px-6 py-2.5 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-colors shadow-lg shadow-primary-500/30"
            >
              Test d'éligibilité
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden border-t border-gray-200 dark:border-navy-800">
        <nav className="px-4 py-3 flex overflow-x-auto space-x-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                  isActive
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 dark:bg-navy-800 text-gray-700 dark:text-gray-300'
                }`}
              >
                {item.name}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
