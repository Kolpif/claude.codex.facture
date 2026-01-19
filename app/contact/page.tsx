'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'
import { useState } from 'react'
import LeadForm from '../components/LeadForm'

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'contact@facturepro.fr',
      link: 'mailto:contact@facturepro.fr',
    },
    {
      icon: Phone,
      label: 'Téléphone',
      value: '01 23 45 67 89',
      link: 'tel:+33123456789',
    },
    {
      icon: MapPin,
      label: 'Adresse',
      value: 'Paris, France',
      link: null,
    },
    {
      icon: Clock,
      label: 'Horaires',
      value: 'Lun-Ven 9h-18h',
      link: null,
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
              Contactez-nous
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Notre équipe d'experts est à votre écoute pour vous accompagner dans votre mise en conformité
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white dark:bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Parlons de votre projet
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Que vous soyez une micro-entreprise ou un grand groupe, nous avons la solution adaptée à vos besoins. Contactez-nous pour un diagnostic personnalisé gratuit.
              </p>

              {/* Contact Cards */}
              <div className="space-y-4 mb-12">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-navy-800 rounded-xl border border-gray-200 dark:border-navy-700"
                  >
                    <div className="flex-shrink-0">
                      <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                        <info.icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                        {info.label}
                      </div>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-lg font-semibold text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-lg font-semibold text-gray-900 dark:text-white">
                          {info.value}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Why contact us */}
              <div className="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-6 border border-primary-200 dark:border-primary-800">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  Pourquoi nous choisir ?
                </h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="mr-2 text-primary-600 dark:text-primary-400">✓</span>
                    <span><strong>Expertise reconnue</strong> en facturation électronique</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary-600 dark:text-primary-400">✓</span>
                    <span><strong>Accompagnement personnalisé</strong> de A à Z</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary-600 dark:text-primary-400">✓</span>
                    <span><strong>500+ entreprises</strong> déjà accompagnées</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary-600 dark:text-primary-400">✓</span>
                    <span><strong>Support réactif</strong> et disponible</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <LeadForm />

              <div className="mt-6 p-4 bg-gray-50 dark:bg-navy-800 rounded-xl border border-gray-200 dark:border-navy-700">
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                  <strong>Réponse sous 24h</strong> • Diagnostic gratuit • Sans engagement
                </p>
              </div>
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
              Besoin d'un conseil immédiat ?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Appelez-nous directement pour échanger avec un expert
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:+33123456789"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-all shadow-lg"
              >
                <Phone className="mr-2 h-5 w-5" />
                01 23 45 67 89
              </a>
              <a
                href="mailto:contact@facturepro.fr"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-700 text-white font-semibold rounded-lg hover:bg-primary-800 transition-all border-2 border-white/20"
              >
                <Mail className="mr-2 h-5 w-5" />
                contact@facturepro.fr
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
