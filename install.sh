#!/bin/bash

echo "🚀 Installation de Facture France 2026..."

# Vérifier si Node.js est installé
if ! command -v node &> /dev/null
then
    echo "❌ Node.js n'est pas installé. Installez-le depuis https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js trouvé : $(node --version)"

# Installer les dépendances
echo "📦 Installation des dépendances..."
npm install

# Build du projet
echo "🏗️  Build du projet..."
npm run build

echo ""
echo "✅ Installation terminée !"
echo ""
echo "🎉 Démarrer le serveur de développement :"
echo "   npm run dev"
echo ""
echo "🚀 Ou démarrer en production :"
echo "   npm start"
echo ""
echo "📖 Voir le README.md pour plus d'informations"
