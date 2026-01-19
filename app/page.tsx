'use client'

import { motion } from 'framer-motion'
import { CheckCircle, AlertCircle, Rocket, Shield, Clock, Globe, Zap, TrendingDown, FileCheck, Users } from 'lucide-react'
import Link from 'next/link'
import LeadForm from './components/LeadForm'

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const obligations = [
    {
      icon: FileCheck,
      text: 'Format structuré obligatoire (Factur-X, UBL, CII)',
    },
    {
      icon: Globe,
      text: 'Transmission via Portail Public de Facturation (PPF) ou PDP agréé',
    },
    {
      icon: AlertCircle,
      text: 'E-reporting des données de transaction à l\'administration',
    },
    {
      icon: Clock,
      text: 'Conservation électronique pendant 10 ans',
    },
    {
      icon: Shield,
      text: 'Mentions légales obligatoires sur chaque facture',
    },
  ]

  const benefits = [
    {
      icon: Zap,
      title: 'Automatisation',
      description: 'Réduction des tâches manuelles et des erreurs de saisie',
      color: 'from-green-400 to-green-600',
    },
    {
      icon: Shield,
      title: 'Sécurité',
      description: 'Traçabilité complète et protection contre la fraude à la TVA',
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: Clock,
      title: 'Gain de temps',
      description: 'Traitement instantané des factures et paiements accélérés',
      color: 'from-purple-400 to-purple-600',
    },
    {
      icon: Globe,
      title: 'Conformité EU',
      description: 'Alignement avec les standards européens de facturation',
      color: 'from-orange-400 to-orange-600',
    },
  ]

  const stats = [
    { value: '4 millions', label: "d'entreprises concernées" },
    { value: '2 milliards', label: 'Factures B2B/an' },
    { value: '-75%', label: 'Gain de temps' },
    { value: '-80%', label: 'Coûts réduits' },
  ]

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <motion.div
            initial="initial"
            animate="animate"
            variants={stagger}
            className="text-center"
          >
            {/* Badge */}
            <motion.div variants={fadeInUp} className="inline-flex items-center space-x-2 bg-primary-500/10 border border-primary-500/20 rounded-full px-4 py-2 mb-8">
              <AlertCircle className="h-4 w-4 text-primary-400" />
              <span className="text-sm text-primary-300">Réforme fiscale majeure</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight"
            >
              Facturation Électronique
              <br />
              <span className="text-gradient bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                Obligatoire en 2026
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              La France modernise son système de facturation. Toutes les entreprises devront émettre et recevoir des factures électroniques d'ici 2028. Êtes-vous prêt ?
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
            >
              <a
                href="#quiz"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-all shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 hover:scale-105"
              >
                <Rocket className="mr-2 h-5 w-5" />
                Découvrez si vous êtes prêt en 2 min
              </a>
              <Link
                href="/loi-2026"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-all border border-white/20"
              >
                En savoir plus sur la loi
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={stagger}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Obligations Section */}
      <section className="py-20 bg-white dark:bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-sm font-semibold text-primary-600 dark:text-primary-400 tracking-wide uppercase mb-3">
              OBLIGATIONS
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Ce que vous devez savoir
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              La réforme impose de nouvelles exigences techniques et organisationnelles pour toutes les transactions B2B en France.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Obligations List */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {obligations.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50 dark:bg-navy-800 hover:shadow-md transition-shadow"
                >
                  <div className="flex-shrink-0">
                    <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                      <item.icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Formats Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-navy-800 to-navy-900 dark:from-navy-900 dark:to-navy-950 rounded-2xl p-8 text-white"
            >
              <h4 className="text-2xl font-bold mb-6">Formats acceptés</h4>
              <p className="text-gray-300 mb-6">Standards européens</p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg border border-white/10">
                  <CheckCircle className="h-5 w-5 text-primary-400 flex-shrink-0" />
                  <span className="font-medium">Factur-X (PDF/A-3 + XML)</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg border border-white/10">
                  <CheckCircle className="h-5 w-5 text-primary-400 flex-shrink-0" />
                  <span className="font-medium">UBL (Universal Business Language)</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg border border-white/10">
                  <CheckCircle className="h-5 w-5 text-primary-400 flex-shrink-0" />
                  <span className="font-medium">CII (Cross Industry Invoice)</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                <p className="text-sm text-red-300">
                  <strong>Note :</strong> Les PDF simples et factures papier ne seront plus acceptés pour les transactions B2B.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50 dark:bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-sm font-semibold text-primary-600 dark:text-primary-400 tracking-wide uppercase mb-3">
              AVANTAGES
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Les bénéfices pour votre entreprise
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Au-delà de la conformité, la facturation électronique offre de réels avantages compétitifs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white dark:bg-navy-900 rounded-2xl p-6 hover:shadow-xl transition-all border border-gray-200 dark:border-navy-800 hover:border-primary-500 dark:hover:border-primary-500"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${benefit.color} mb-4 group-hover:scale-110 transition-transform`}>
                  <benefit.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {benefit.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Detailed Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 grid md:grid-cols-4 gap-6"
          >
            <div className="bg-white dark:bg-navy-900 rounded-xl p-6 text-center border border-gray-200 dark:border-navy-800">
              <div className="text-4xl font-bold text-orange-500 mb-2">-75%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Gain de temps</div>
              <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">sur le traitement des factures</div>
            </div>
            <div className="bg-white dark:bg-navy-900 rounded-xl p-6 text-center border border-gray-200 dark:border-navy-800">
              <div className="text-4xl font-bold text-primary-500 mb-2">100%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Conformité</div>
              <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">garantie avec la loi 2026</div>
            </div>
            <div className="bg-white dark:bg-navy-900 rounded-xl p-6 text-center border border-gray-200 dark:border-navy-800">
              <div className="text-4xl font-bold text-blue-500 mb-2">4-10€</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Économies</div>
              <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">par facture traitée</div>
            </div>
            <div className="bg-white dark:bg-navy-900 rounded-xl p-6 text-center border border-gray-200 dark:border-navy-800">
              <div className="text-4xl font-bold text-purple-500 mb-2">-30%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Délai paiement</div>
              <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">grâce à l'automatisation</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section id="quiz" className="py-20 bg-white dark:bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center space-x-2 bg-primary-100 dark:bg-primary-900/30 rounded-full px-4 py-2 mb-6">
                <CheckCircle className="h-4 w-4 text-primary-600 dark:text-primary-400" />
                <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                  100% offert • Sans engagement
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Êtes-vous prêt pour 2026 ?
              </h2>

              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                En <strong>30 secondes</strong>, recevez votre diagnostic personnalisé et découvrez exactement ce que vous devez faire.
              </p>

              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6 mb-8">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="h-6 w-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-red-900 dark:text-red-200 mb-2">
                      Attention :
                    </h4>
                    <p className="text-sm text-red-800 dark:text-red-300">
                      Les entreprises non conformes risquent jusqu'à <strong>15 000€ d'amendes par an</strong> + contrôles fiscaux renforcés.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Diagnostic complet de votre situation
                    </h4>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-primary-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Votre calendrier personnalisé
                    </h4>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <TrendingDown className="h-6 w-6 text-primary-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Solutions adaptées à votre budget
                    </h4>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-primary-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Accompagnement par un expert dédié
                    </h4>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gray-100 dark:bg-navy-800 rounded-xl">
                <div className="flex items-center space-x-3 mb-3">
                  <Users className="h-8 w-8 text-primary-500" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">500+</div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  entreprises déjà accompagnées
                </p>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <LeadForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Prêt à simplifier votre facturation ?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Rejoignez les 500+ entreprises déjà accompagnées vers la conformité 2026
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#quiz"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-all shadow-lg"
              >
                <Rocket className="mr-2 h-5 w-5" />
                Commencer mon diagnostic
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-700 text-white font-semibold rounded-lg hover:bg-primary-800 transition-all border-2 border-white/20"
              >
                Parler à un expert
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
