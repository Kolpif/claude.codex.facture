# Facture France 2026 - Site Lead Generation

Site professionnel pour la génération de leads dans le domaine de la facturation électronique obligatoire 2026.

## 🚀 Fonctionnalités

- ✅ **Dark/Light Mode** avec toggle et persistance
- ✅ **5 Pages complètes** : Accueil, La Loi 2026, Solutions, FAQ, Contact
- ✅ **Formulaire de lead** avec validation
- ✅ **Design responsive** optimisé mobile
- ✅ **Animations fluides** avec Framer Motion
- ✅ **SEO optimisé**
- ✅ **Performance maximale** avec Next.js 14
- ✅ **Structure API-ready** pour intégrations futures

## 📋 Stack Technique

- **Framework** : Next.js 14 (App Router)
- **Language** : TypeScript
- **Styling** : Tailwind CSS
- **Animations** : Framer Motion
- **Icons** : Lucide React
- **Déploiement** : Vercel / Google Cloud Run

## 🛠️ Installation

```bash
# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Build pour production
npm run build

# Lancer en production
npm start
```

## 📦 Déploiement sur Vercel (RECOMMANDÉ)

1. **Créer un compte Vercel** : https://vercel.com/signup

2. **Déployer depuis la CLI** :
```bash
npm i -g vercel
vercel login
vercel
```

3. **Ou déployer depuis GitHub** :
   - Push votre code sur GitHub
   - Connectez votre repo sur Vercel
   - Déploiement automatique à chaque push

## 🐳 Déploiement sur Google Cloud Run

1. **Créer un Dockerfile** :
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

2. **Build et déployer** :
```bash
gcloud builds submit --tag gcr.io/[PROJECT-ID]/facture-2026
gcloud run deploy facture-2026 --image gcr.io/[PROJECT-ID]/facture-2026 --platform managed
```

## 📁 Structure du Projet

```
facture-2026/
├── app/
│   ├── components/       # Composants réutilisables
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── LeadForm.tsx
│   ├── context/         # Contexte React (Theme)
│   │   └── ThemeContext.tsx
│   ├── page.tsx         # Page d'accueil
│   ├── loi-2026/        # Page La Loi 2026
│   ├── solutions/       # Page Solutions
│   ├── faq/            # Page FAQ
│   ├── contact/        # Page Contact
│   ├── layout.tsx      # Layout principal
│   └── globals.css     # Styles globaux
├── public/             # Assets statiques
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.js
```

## 🎨 Personnalisation

### Couleurs
Modifiez les couleurs dans `tailwind.config.js` :
```js
colors: {
  primary: { ... },  // Vert principal
  navy: { ... },     // Bleu marine
}
```

### Contenu
- **Header/Footer** : `app/components/Header.tsx` et `Footer.tsx`
- **Pages** : Chaque page dans son dossier respectif
- **Formulaire** : `app/components/LeadForm.tsx`

## 🔌 Intégration API

Le formulaire est prêt pour l'intégration d'API. Modifiez `LeadForm.tsx` :

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  
  // Votre appel API ici
  const response = await fetch('/api/leads', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  })
  
  // ...
}
```

## 🎯 À faire après déploiement

- [ ] Configurer Google Analytics
- [ ] Ajouter Meta Pixel (Facebook)
- [ ] Configurer les routes API pour l'envoi de leads
- [ ] Ajouter l'intégration CRM
- [ ] Configurer le domaine personnalisé
- [ ] Activer HTTPS
- [ ] Tester les formulaires en production

## 📊 Analytics & SEO

Le site est pré-optimisé pour le SEO avec :
- Meta tags dans `layout.tsx`
- Structure HTML sémantique
- Images optimisées
- Temps de chargement rapides

Ajoutez Google Analytics dans `layout.tsx` :
```typescript
<Script src="https://www.googletagmanager.com/gtag/js?id=GA_ID" />
```

## 🆘 Support

Pour toute question ou problème :
- Email : contact@facturepro.fr
- Documentation Next.js : https://nextjs.org/docs

## 📝 Licence

© 2026 Facture Pro Conseil. Tous droits réservés.
