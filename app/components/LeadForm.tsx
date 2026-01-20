'use client'

import { useState } from 'react'
import { Rocket, Loader2 } from 'lucide-react'

export default function LeadForm() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    entreprise: '',
    taille: '',
    solution: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const tailleOptions = [
    { value: '', label: 'Sélectionner...' },
    { value: '1-9', label: '1-9 employés (Micro-entreprise)' },
    { value: '10-49', label: '10-49 employés (Petite entreprise)' },
    { value: '50-249', label: '50-249 employés (Entreprise moyenne)' },
    { value: '250+', label: '250+ employés (Grande entreprise)' },
  ]

  const solutionOptions = [
    { value: '', label: 'Sélectionner...' },
    { value: 'Aucune', label: 'Aucune solution' },
    { value: 'Excel', label: 'Excel / Tableur' },
    { value: 'Logiciel comptable', label: 'Logiciel comptable' },
    { value: 'ERP', label: 'ERP' },
    { value: 'Autre', label: 'Autre' },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // ✅ ENVOYER À FORMSPREE
      const response = await fetch('https://formspree.io/f/xjggozay', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nom_complet: formData.nom,
          email: formData.email,
          telephone: formData.telephone,
          entreprise: formData.entreprise,
          taille_entreprise: formData.taille,
          solution_actuelle: formData.solution,
          message: formData.message,
          date_soumission: new Date().toISOString(),
        }),
      })

      if (response.ok) {
        // ✅ SUCCÈS !
        console.log('Lead envoyé avec succès!')
        setSubmitted(true)

        // Réinitialiser après 5 secondes
        setTimeout(() => {
          setSubmitted(false)
          setFormData({
            nom: '',
            email: '',
            telephone: '',
            entreprise: '',
            taille: '',
            solution: '',
            message: '',
          })
        }, 5000)
      } else {
        alert('Erreur lors de l\'envoi. Veuillez réessayer.')
      }
    } catch (error) {
      console.error('Erreur:', error)
      alert('Erreur de connexion. Veuillez réessayer.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (submitted) {
    return (
      <div className="bg-white dark:bg-navy-800 rounded-2xl shadow-xl p-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-6">
          <Rocket className="h-8 w-8 text-primary-600 dark:text-primary-400" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Merci pour votre demande !
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Votre diagnostic personnalisé sera envoyé sous 24h à l'adresse <strong>{formData.email}</strong>
        </p>
        <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <svg className="h-5 w-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Données sécurisées • Sans engagement</span>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white dark:bg-navy-800 rounded-2xl shadow-xl p-8">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Votre diagnostic en 24h
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          Rejoignez les <strong>500+ entreprises</strong> déjà accompagnées
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          {/* Nom */}
          <div>
            <label htmlFor="nom" className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Nom complet *
            </label>
            <input
              type="text"
              id="nom"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              required
              placeholder="Jean Dupont"
              className="w-full px-4 py-3 border border-gray-300 dark:border-navy-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-navy-900 dark:text-white"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email professionnel *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="jean@entreprise.fr"
              className="w-full px-4 py-3 border border-gray-300 dark:border-navy-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-navy-900 dark:text-white"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Téléphone */}
          <div>
            <label htmlFor="telephone" className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Téléphone
            </label>
            <input
              type="tel"
              id="telephone"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              placeholder="06 12 34 56 78"
              className="w-full px-4 py-3 border border-gray-300 dark:border-navy-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-navy-900 dark:text-white"
            />
          </div>

          {/* Entreprise */}
          <div>
            <label htmlFor="entreprise" className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Nom de l'entreprise *
            </label>
            <input
              type="text"
              id="entreprise"
              name="entreprise"
              value={formData.entreprise}
              onChange={handleChange}
              required
              placeholder="Mon Entreprise SAS"
              className="w-full px-4 py-3 border border-gray-300 dark:border-navy-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-navy-900 dark:text-white"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Taille */}
          <div>
            <label htmlFor="taille" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Taille de l'entreprise
            </label>
            <select
              id="taille"
              name="taille"
              value={formData.taille}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 dark:border-navy-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-navy-900 dark:text-white appearance-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236B7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 0.75rem center',
                backgroundSize: '1.5em 1.5em',
              }}
            >
              {tailleOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Solution actuelle */}
          <div>
            <label htmlFor="solution" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Solution actuelle
            </label>
            <select
              id="solution"
              name="solution"
              value={formData.solution}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 dark:border-navy-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-navy-900 dark:text-white appearance-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236B7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 0.75rem center',
                backgroundSize: '1.5em 1.5em',
              }}
            >
              {solutionOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Message ou question (optionnel)
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            placeholder="Décrivez votre situation actuelle ou posez vos questions..."
            className="w-full px-4 py-3 border border-gray-300 dark:border-navy-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-navy-900 dark:text-white resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center px-8 py-4 bg-primary-500 hover:bg-primary-600 disabled:bg-gray-400 text-white font-semibold rounded-lg transition-all shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 disabled:shadow-none"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Envoi en cours...
            </>
          ) : (
            <>
              <Rocket className="mr-2 h-5 w-5" />
              Découvrez si vous êtes prêt en 2 min
            </>
          )}
        </button>

        <p className="text-xs text-center text-gray-500 dark:text-gray-400">
          <svg className="inline h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          Données sécurisées • Sans engagement
        </p>
      </form>
    </div>
  )
}
