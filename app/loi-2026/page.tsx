'use client'

import { motion } from 'framer-motion'
import { Calendar, AlertTriangle, FileText, Shield, TrendingDown, Building2, Users, Globe } from 'lucide-react'
import Link from 'next/link'

export default function Loi2026Page() {
  const timeline = [
    {
      date: '1er septembre 2026',
      title: 'Grandes entreprises',
      description: 'Entreprises de plus de 5000 employés ou CA > 1,5 milliard €',
      color: 'red',
      icon: Building2,
    },
    {
      date: '1er septembre 2027',
      title: 'ETI',
      description: 'Entreprises de 250 à 5000 employés ou CA entre 50M€ et 1,5 milliard €',
      color: 'orange',
      icon: Building2,
    },
    {
      date: '1er septembre 2028',
      title: 'PME et Micro-entreprises',
      description: 'Toutes les autres entreprises assujetties à la TVA',
      color: 'yellow',
      icon: Users,
    },
  ]

  const raisons = [
    {
      title: 'Lutter contre la fraude à la TVA',
      description: 'Estimée à 20 milliards €/an en France',
      stat: '20 Md€',
    },
    {
      title: 'Simplifier les obligations déclaratives',
      description: 'Des entreprises et réduire la charge administrative',
      stat: '-75%',
    },
    {
      title: 'Moderniser l\'économie',
      description: 'Alignement avec la directive européenne ViDA',
      stat: '4M',
    },
  ]

  const sanctions = [
    {
      type: 'Par facture non conforme',
      montant: '15€',
      detail: 'Plafonné à 15 000€/an',
      color: 'from-red-500 to-red-600',
    },
    {
      type: 'Par défaut de e-reporting',
      montant: '250€',
      detail: 'Plafonné à 15 000€/an',
      color: 'from-orange-500 to-orange-600',
    },
    {
      type: 'Amendes TVA associées',
      montant: 'Variable',
      detail: 'Selon le montant',
      color: 'from-purple-500 to-purple-600',
    },
  ]

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              La Loi Facturation Électronique{' '}
              <span className="text-gradient bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                2026
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Tout ce que vous devez savoir sur l'obligation de facturation électronique en France : calendrier, exigences, formats et sanctions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pourquoi cette réforme */}
      <section className="py-20 bg-white dark:bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Pourquoi cette réforme ?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              La France met en place cette réforme dans le cadre de la{' '}
              <strong>directive européenne ViDA</strong> (VAT in the Digital Age) pour moderniser les échanges commerciaux.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {raisons.map((raison, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-navy-800 rounded-xl p-6 border border-gray-200 dark:border-navy-700"
              >
                <div className="text-4xl font-bold text-yellow-600 dark:text-yellow-500 mb-3">
                  {raison.stat}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {raison.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {raison.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6">
            <div className="flex items-start space-x-3">
              <Shield className="h-6 w-6 text-yellow-600 dark:text-yellow-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-yellow-900 dark:text-yellow-200 mb-2">
                  Les objectifs principaux sont :
                </h4>
                <ul className="space-y-2 text-sm text-yellow-800 dark:text-yellow-300">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Lutte renforcée contre la fraude à la TVA (estimée à 20 milliards €/an en France)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Simplification des obligations déclaratives des entreprises</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Modernisation et digitalisation de l'économie française</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendrier */}
      <section className="py-20 bg-gray-50 dark:bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Calendrier d'application
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Un déploiement progressif selon la taille de votre entreprise
            </p>
          </motion.div>

          <div className="space-y-6">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className={`bg-gradient-to-r from-${item.color}-500 to-${item.color}-600 rounded-xl p-6 text-white shadow-lg`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="bg-white/20 p-3 rounded-lg">
                        <item.icon className="h-8 w-8" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold mb-1">
                          À partir du
                        </div>
                        <div className="text-3xl font-extrabold">
                          {item.date}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold mb-1">
                        {item.title}
                      </div>
                      <div className="text-sm opacity-90">
                        {item.description}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center space-x-2 bg-white/10 rounded-lg px-4 py-2 inline-flex">
                    <AlertTriangle className="h-4 w-4" />
                    <span className="text-sm font-medium">Émission ET réception obligatoires</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Formats & Plateformes */}
      <section className="py-20 bg-white dark:bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Formats obligatoires */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Formats obligatoires
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg border border-primary-200 dark:border-primary-800">
                  <FileText className="h-5 w-5 text-primary-600 dark:text-primary-400 flex-shrink-0" />
                  <span className="font-medium text-gray-900 dark:text-white">Factur-X (PDF/A-3 + XML)</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg border border-primary-200 dark:border-primary-800">
                  <FileText className="h-5 w-5 text-primary-600 dark:text-primary-400 flex-shrink-0" />
                  <span className="font-medium text-gray-900 dark:text-white">UBL (Universal Business Language)</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg border border-primary-200 dark:border-primary-800">
                  <FileText className="h-5 w-5 text-primary-600 dark:text-primary-400 flex-shrink-0" />
                  <span className="font-medium text-gray-900 dark:text-white">CII (Cross Industry Invoice)</span>
                </div>
              </div>
              <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                <p className="text-sm text-red-800 dark:text-red-300">
                  <strong>Note :</strong> Les PDF simples et factures papier ne seront plus acceptés pour les transactions B2B.
                </p>
              </div>
            </motion.div>

            {/* Plateformes autorisées */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-1"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Plateformes autorisées
              </h3>
              <div className="space-y-3">
                <div className="p-4 bg-gray-50 dark:bg-navy-800 rounded-lg border border-gray-200 dark:border-navy-700">
                  <div className="flex items-center space-x-2 mb-2">
                    <Globe className="h-5 w-5 text-primary-500" />
                    <span className="font-semibold text-gray-900 dark:text-white">PPF - Portail Public de Facturation (gratuit)</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Plateforme gouvernementale accessible à toutes les entreprises
                  </p>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-navy-800 rounded-lg border border-gray-200 dark:border-navy-700">
                  <div className="flex items-center space-x-2 mb-2">
                    <Building2 className="h-5 w-5 text-primary-500" />
                    <span className="font-semibold text-gray-900 dark:text-white">PDP - Plateformes de Dématérialisation Partenaires</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Solutions certifiées offrant des services additionnels
                  </p>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-navy-800 rounded-lg border border-gray-200 dark:border-navy-700">
                  <div className="flex items-center space-x-2 mb-2">
                    <Users className="h-5 w-5 text-primary-500" />
                    <span className="font-semibold text-gray-900 dark:text-white">OD - Opérateurs de Dématérialisation</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Prestataires agréés pour la transmission
                  </p>
                </div>
              </div>
            </motion.div>

            {/* E-reporting obligatoire */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-1"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                E-reporting obligatoire
              </h3>
              <div className="bg-gradient-to-br from-navy-800 to-navy-900 dark:from-navy-900 dark:to-navy-950 rounded-xl p-6 text-white h-full">
                <div className="mb-4">
                  <AlertTriangle className="h-8 w-8 text-yellow-400 mb-3" />
                  <h4 className="font-bold text-xl mb-2">Transmission des données à la DGFiP</h4>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Transactions B2C domestiques</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Opérations internationales</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Transmission des données à la DGFiP</span>
                  </li>
                </ul>
                <div className="mt-6 p-4 bg-white/10 rounded-lg border border-white/20">
                  <p className="text-sm">
                    Ces données doivent être transmises même si elles ne passent pas par le PPF ou PDP
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sanctions */}
      <section className="py-20 bg-gray-50 dark:bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-red-100 dark:bg-red-900/30 rounded-full px-4 py-2 mb-6">
              <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400" />
              <span className="text-sm font-semibold text-red-700 dark:text-red-300">Attention</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Sanctions en cas de non-conformité
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Des pénalités financières importantes pour les entreprises non conformes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {sanctions.map((sanction, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-navy-900 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-navy-800"
              >
                <div className={`h-2 bg-gradient-to-r ${sanction.color}`} />
                <div className="p-6">
                  <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    {sanction.montant}
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {sanction.type}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {sanction.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 rounded-xl p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
              <div className="flex-shrink-0">
                <div className="bg-red-100 dark:bg-red-900/50 p-4 rounded-full">
                  <AlertTriangle className="h-12 w-12 text-red-600 dark:text-red-400" />
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-red-900 dark:text-red-200 mb-3">
                  Risques supplémentaires
                </h3>
                <ul className="space-y-2 text-red-800 dark:text-red-300">
                  <li className="flex items-start">
                    <span className="mr-2 text-red-600 dark:text-red-400">•</span>
                    <span>Contrôles fiscaux renforcés de la part de la DGFiP</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-red-600 dark:text-red-400">•</span>
                    <span>Perte de confiance des partenaires commerciaux</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-red-600 dark:text-red-400">•</span>
                    <span>Impossibilité de facturer légalement vos clients</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-red-600 dark:text-red-400">•</span>
                    <span>Risque de redressement fiscal en cas d'anomalies détectées</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à vous mettre en conformité ?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Ne prenez pas de risques. Obtenez votre diagnostic personnalisé gratuitement.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/#quiz"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-all shadow-lg"
            >
              Faire mon diagnostic gratuit
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-700 text-white font-semibold rounded-lg hover:bg-primary-800 transition-all border-2 border-white/20"
            >
              Voir nos solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
