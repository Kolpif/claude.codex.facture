'use client'

import Link from 'next/link'
import { FileText, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-primary-500 p-2 rounded-lg">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-lg font-bold text-white">
                  Facture Pro Conseil
                </div>
                <div className="text-xs text-gray-400">
                  Spécialiste facturation électronique
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-400 max-w-md">
              Accompagnement expert pour la mise en conformité avec la réforme de la facturation électronique obligatoire 2026. Solutions adaptées à chaque entreprise.
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-white font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-primary-400 transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/loi-2026" className="hover:text-primary-400 transition-colors">
                  La Loi 2026
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-primary-400 transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-primary-400 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Mail className="h-5 w-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <a href="mailto:contact@facturepro.fr" className="hover:text-primary-400 transition-colors">
                  contact@facturepro.fr
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="h-5 w-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <a href="tel:+33188812227" className="hover:text-primary-400 transition-colors">
                  01 88 81 22 27
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <span>25 rue Tronchet 75008 Paris</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-navy-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              <p>© {currentYear} Facture Pro Conseil. Tous droits réservés.</p>
              <p className="text-xs text-gray-500">
                Adresse: 25 rue Tronchet 75008 Paris • SIRET: 979 507 639 • Capital social: 3000 euros
              </p>
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/mentions-legales" className="hover:text-primary-400 transition-colors">
                Mentions légales
              </Link>
              <Link href="/politique-confidentialite" className="hover:text-primary-400 transition-colors">
                Politique de confidentialité
              </Link>
              <Link href="/cgv" className="hover:text-primary-400 transition-colors">
                CGV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
