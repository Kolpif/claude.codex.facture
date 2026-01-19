'use client'

import { motion } from 'framer-motion'
import { Check, Star, TrendingDown, Clock, Shield, Zap, Users, Building2, Store } from 'lucide-react'
import Link from 'next/link'

export default function SolutionsPage() {
  const solutions = [
    {
      icon: Store,
      title: 'Micro-entreprises',
      subtitle: 'Solution simple et économique pour les auto-entrepreneurs et TPE',
      color: 'from-yellow-500 to-yellow-600',
      features: [
        'Accès au Portail Public de Facturation (gratuit)',
        'Interface intuitive sans compétence technique',
        'Émission et réception de factures conformes',
        'Archivage légal 10 ans inclus',
      ],
      ideal: 'moins de 10 factures/mois',
    },
    {
      icon: Users,
      title: 'PME',
      subtitle: 'Solution intégrée pour les petites et moyennes entreprises',
      color: 'from-orange-500 to-orange-600',
      features: [
        'Connexion à votre logiciel comptable existant',
        'Automatisation des flux de facturation',
        'Tableau de bord et reporting avancé',
        'Support prioritaire dédié',
      ],
      ideal: '10-500 factures/mois',
      popular: true,
    },
    {
      icon: Building2,
      title: 'ETI & Grands Comptes',
      subtitle: 'Solution sur-mesure pour les grandes structures',
      color: 'from-red-500 to-red-600',
      features: [
        'Intégration ERP complète',
        'Multi-entités et multi-sites',
        'Workflows de validation personnalisés',
        'Chef de projet et accompagnement VIP',
      ],
      ideal: '+500 factures/mois',
    },
  ]

  const benefits = [
    {
      icon: TrendingDown,
      value: '-75%',
      label: 'Gain de temps',
      description: 'sur le traitement des factures',
    },
    {
      icon: Shield,
      value: '100%',
      label: 'Conformité',
      description: 'garantie avec la loi 2026',
    },
    {
      icon: Clock,
      value: '4-10€',
      label: 'Économies',
      description: 'par facture traitée',
    },
    {
      icon: Zap,
      value: '-30%',
      label: 'Délai paiement',
      description: 'grâce à l\'automatisation',
    },
  ]

  const testimonials = [
    {
      name: 'Marie D.',
      role: 'Directrice Administrative, PME industrielle',
      company: 'PME de 15 personnes',
      content: 'La transition s\'est faite en douceur. L\'équipe nous a accompagnés à chaque étape.',
      rating: 5,
    },
    {
      name: 'Pierre L.',
      role: 'DAF, ETI services',
      company: 'ETI de 350 personnes',
      content: 'Nous avons anticipé la réforme et gagné en productivité bien avant l\'obligation.',
      rating: 5,
    },
    {
      name: 'Sophie M.',
      role: 'Gérante, Cabinet de conseil',
      company: 'Cabinet de 15 personnes',
      content: 'Solution simple et efficace. Parfait pour notre structure.',
      rating: 5,
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
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Une solution pour chaque entreprise
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Quelle que soit votre taille, nous avons la solution adaptée à vos besoins
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Cards */}
      <section className="py-20 bg-white dark:bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Une solution pour chaque entreprise
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Quelle que soit votre taille, nous avons la solution adaptée à vos besoins
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-white dark:bg-navy-800 rounded-2xl shadow-xl overflow-hidden ${
                  solution.popular ? 'ring-2 ring-primary-500 dark:ring-primary-400' : ''
                }`}
              >
                {solution.popular && (
                  <div className="absolute top-4 right-4 bg-primary-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    ⭐ POPULAIRE
                  </div>
                )}

                {/* Header with gradient */}
                <div className={`bg-gradient-to-r ${solution.color} p-8 text-white`}>
                  <solution.icon className="h-12 w-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{solution.title}</h3>
                  <p className="text-sm opacity-90">{solution.subtitle}</p>
                </div>

                {/* Body */}
                <div className="p-8">
                  <ul className="space-y-4 mb-8">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-primary-500 flex-shrink-0 mt-0.5 mr-3" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="border-t border-gray-200 dark:border-navy-700 pt-6">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      <strong>Idéal pour :</strong> {solution.ideal}
                    </p>
                    <Link
                      href="/#quiz"
                      className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-all ${
                        solution.popular
                          ? 'bg-primary-500 hover:bg-primary-600 text-white shadow-lg shadow-primary-500/30'
                          : 'bg-gray-100 dark:bg-navy-700 hover:bg-gray-200 dark:hover:bg-navy-600 text-gray-900 dark:text-white'
                      }`}
                    >
                      Demander une démo
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Stats */}
      <section className="py-20 bg-gray-50 dark:bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Les bénéfices concrets
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Des résultats mesurables dès les premiers mois
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-navy-900 rounded-xl p-6 text-center shadow-lg border border-gray-200 dark:border-navy-800"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg mb-4">
                  <benefit.icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {benefit.value}
                </div>
                <div className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                  {benefit.label}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  {benefit.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white dark:bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Ils nous font confiance
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-navy-800 rounded-xl p-6 border border-gray-200 dark:border-navy-700"
              >
                {/* Stars */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 dark:text-gray-300 italic mb-6">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="border-t border-gray-200 dark:border-navy-700 pt-4">
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                    {testimonial.company}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
            <p className="text-xl text-primary-100 mb-8">
              Découvrez quelle solution est faite pour vous en 2 minutes
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/#quiz"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-all shadow-lg"
              >
                Faire mon diagnostic gratuit
              </Link>
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
