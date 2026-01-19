'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'

interface FAQItem {
  question: string
  answer: string
}

interface FAQCategory {
  title: string
  items: FAQItem[]
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null)

  const faqCategories: FAQCategory[] = [
    {
      title: 'Comprendre la réforme',
      items: [
        {
          question: 'Qu\'est-ce que la facturation électronique obligatoire ?',
          answer: 'La facturation électronique obligatoire est une réforme imposant à toutes les entreprises assujetties à la TVA en France d\'émettre et de recevoir leurs factures sous format électronique structuré (Factur-X, UBL ou CII). Cette mesure vise à moderniser les échanges commerciaux et lutter contre la fraude à la TVA.',
        },
        {
          question: 'Qui est concerné par cette obligation ?',
          answer: 'Toutes les entreprises françaises assujetties à la TVA sont concernées, quelle que soit leur taille. Les auto-entrepreneurs, micro-entreprises, PME, ETI et grandes entreprises devront se conformer selon un calendrier progressif de 2026 à 2028.',
        },
        {
          question: 'Quelles sont les dates d\'application ?',
          answer: 'Le déploiement se fera progressivement : 1er septembre 2026 pour les grandes entreprises (5000+ employés ou CA > 1,5 Md€), 1er septembre 2027 pour les ETI (250-5000 employés), et 1er septembre 2028 pour les PME et micro-entreprises.',
        },
        {
          question: 'Cette réforme s\'applique-t-elle aux transactions internationales ?',
          answer: 'L\'obligation d\'émission de factures électroniques ne s\'applique qu\'aux transactions B2B domestiques (entre entreprises françaises). Cependant, l\'e-reporting (transmission des données à l\'administration) concerne aussi les opérations internationales et B2C.',
        },
      ],
    },
    {
      title: 'Aspects techniques',
      items: [
        {
          question: 'Quels formats de facture sont acceptés ?',
          answer: 'Trois formats structurés sont acceptés : Factur-X (PDF/A-3 avec XML intégré), UBL (Universal Business Language) et CII (Cross Industry Invoice). Les PDF simples et factures papier ne seront plus acceptés pour les transactions B2B.',
        },
        {
          question: 'Qu\'est-ce que le PPF et les PDP ?',
          answer: 'Le PPF (Portail Public de Facturation) est la plateforme gouvernementale gratuite accessible à toutes les entreprises. Les PDP (Plateformes de Dématérialisation Partenaires) sont des solutions certifiées offrant des services additionnels comme l\'intégration avec vos outils existants.',
        },
        {
          question: 'Puis-je continuer à utiliser mon logiciel de facturation actuel ?',
          answer: 'Oui, si votre logiciel est compatible ou peut être mis à jour pour générer des factures aux formats acceptés et se connecter au PPF ou à un PDP. Nous pouvons auditer votre solution actuelle et vous accompagner dans sa mise en conformité ou sa migration si nécessaire.',
        },
        {
          question: 'Combien de temps dois-je conserver mes factures électroniques ?',
          answer: 'L\'obligation de conservation électronique est de 10 ans minimum, dans le respect des normes d\'archivage électronique. Votre solution de facturation doit donc inclure un système d\'archivage conforme.',
        },
      ],
    },
    {
      title: 'Mise en conformité',
      items: [
        {
          question: 'Comment savoir si mon entreprise est prête ?',
          answer: 'Utilisez notre outil de diagnostic gratuit qui évalue en 2 minutes votre niveau de préparation. Nous analysons votre situation actuelle, vos outils, et vous proposons un plan d\'action personnalisé avec un calendrier adapté à votre échéance.',
        },
        {
          question: 'Dois-je changer mon logiciel de facturation ?',
          answer: 'Pas nécessairement. De nombreux logiciels existants seront mis à jour par leurs éditeurs pour être conformes. Nous pouvons vérifier si votre solution actuelle pourra évoluer ou s\'il est plus pertinent de migrer vers une nouvelle solution.',
        },
        {
          question: 'Combien coûte la mise en conformité ?',
          answer: 'Le coût varie selon la taille de votre entreprise et votre situation actuelle. Pour les micro-entreprises, le PPF est gratuit. Pour les PME et ETI, nos solutions sont conçues pour que les économies générées (réduction des coûts de traitement) compensent largement l\'investissement initial.',
        },
        {
          question: 'Combien de temps faut-il pour se mettre en conformité ?',
          answer: 'En moyenne, comptez 2 à 6 mois selon la complexité de votre structure. Pour les micro-entreprises avec le PPF, quelques jours suffisent. Pour les grandes structures avec intégration ERP, prévoir 3 à 6 mois. C\'est pourquoi il est crucial d\'anticiper.',
        },
      ],
    },
    {
      title: 'Sanctions et risques',
      items: [
        {
          question: 'Quelles sont les sanctions en cas de non-conformité ?',
          answer: 'Les sanctions sont de 15€ par facture non conforme (plafonné à 15 000€/an) et 250€ par défaut d\'e-reporting (plafonné à 15 000€/an). S\'ajoutent des risques de contrôles fiscaux renforcés et d\'amendes TVA en cas d\'anomalies détectées.',
        },
        {
          question: 'Que se passe-t-il si je ne suis pas prêt à temps ?',
          answer: 'À partir de votre date d\'obligation, vous ne pourrez légalement plus émettre de factures papier ou PDF simple à vos clients B2B. Vous risquez des sanctions financières, des contrôles fiscaux renforcés, et une impossibilité de facturer qui peut paralyser votre activité.',
        },
        {
          question: 'Y a-t-il une période de tolérance ?',
          answer: 'Aucune période de tolérance n\'a été annoncée officiellement. Les sanctions s\'appliqueront dès le premier jour de votre obligation. Il est donc crucial de se préparer bien en amont de votre échéance légale.',
        },
      ],
    },
  ]

  const toggleFAQ = (categoryIndex: number, itemIndex: number) => {
    const key = `${categoryIndex}-${itemIndex}`
    setOpenIndex(openIndex === key ? null : key)
  }

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
              Questions Fréquentes
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Toutes les réponses à vos questions sur la facturation électronique 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white dark:bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="mb-12"
            >
              {/* Category Title */}
              <div className="mb-6">
                <div className="h-1 w-16 bg-primary-500 rounded mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h2>
              </div>

              {/* FAQ Items */}
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => {
                  const key = `${categoryIndex}-${itemIndex}`
                  const isOpen = openIndex === key

                  return (
                    <div
                      key={itemIndex}
                      className="bg-gray-50 dark:bg-navy-800 rounded-xl border border-gray-200 dark:border-navy-700 overflow-hidden"
                    >
                      {/* Question */}
                      <button
                        onClick={() => toggleFAQ(categoryIndex, itemIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 dark:hover:bg-navy-750 transition-colors"
                      >
                        <span className="font-semibold text-gray-900 dark:text-white pr-4">
                          {item.question}
                        </span>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                        </motion.div>
                      </button>

                      {/* Answer */}
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="px-6 pb-4 pt-2 text-gray-600 dark:text-gray-300 border-t border-gray-200 dark:border-navy-700">
                              {item.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          ))}

          {/* Still have questions? */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-900/10 rounded-2xl p-8 text-center border border-primary-200 dark:border-primary-800"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Vous avez encore des questions ?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Notre équipe d'experts est là pour vous aider
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-all shadow-lg shadow-primary-500/30"
              >
                Nous contacter
              </Link>
              <Link
                href="/#quiz"
                className="inline-flex items-center justify-center px-8 py-3 bg-white dark:bg-navy-800 hover:bg-gray-100 dark:hover:bg-navy-700 text-gray-900 dark:text-white font-semibold rounded-lg transition-all border border-gray-300 dark:border-navy-700"
              >
                Faire mon diagnostic
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
