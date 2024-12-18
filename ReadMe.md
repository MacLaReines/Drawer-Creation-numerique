# Projet Drawer
Inventory management has never been easier with Drawer \
\
[![](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![](https://img.shields.io/badge/Vue.js-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)](https://vuejs.org/)
[![](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)

## Installation

Ce projet Drawer est constitué de deux parties distinctes :
- Le back-end, développé en Node.js, qui sert d'API et utilise une base de données MongoDB.
- Le front-end, développé avec Vue.js, qui est le site web statique interagissant avec l'API.

### Déploiement du back-end

Assurez-vous d'avoir Node.js installés sur votre machine avant de commencer.

**Étape 1 : Cloner le dépôt GitHub**
1. Ouvrez une ligne de commande ou un terminal.
2. Naviguez vers le répertoire où vous souhaitez cloner le projet.
3. Exécutez la commande suivante pour cloner le dépôt depuis GitHub :
```bash
git clone https://github.com/MacLaReines/Drawer.git
```

**Étape 2 : Configuration du back-end**
1. Accédez au répertoire du back-end :
```bash
cd Drawer/Backend
```

**Étape 3 : Installation des dépendances et exécution du back-end**
1. Exécutez la commande suivante pour installer les dépendances :
```bash
npm install
```
2. Exécutez la commande suivante pour démarrer le back-end :
```bash
npm start
```
Le serveur back-end est désormais en cours d'exécution.
Vous pouvez tester l'API en accédant à l'URL suivante : http://localhost:3000

### Déploiement du front-end

Assurez-vous d'avoir Vue.js installé sur votre machine avant de commencer. Si le déploiement est fait sur la même machine que le back-end, commencez directement à l'étape 2.

**Étape 1 : Configuration du front-end**
1. Accédez au répertoire du front-end :
```bash
cd Drawer/Frontend
```
2. Exécutez la commande suivante pour installer les dépendances :
```bash
npm install
```

**Étape 2 : Compilation du front-end**

1. Si vous souhaitez exécuter une version de développement du front-end avec rechargement automatique, vous pouvez également utiliser la commande suivante :
```bash
npm run serve
```
La commande `npm run serve` démarrera un serveur de développement local pour le front-end, ce qui facilitera le développement et le test de votre application.
Vous pouvez tester le front-end en accédant à l'URL suivante : http://localhost:8080

2. Exécutez la commande suivante pour compiler le front-end en un site web statique :
```bash
npm run build
```
Le résultat de cette compilation sera disponible dans le dossier "dist". Le contenu de ce dossier peut ensuite être déployé comme un site internet statique sur le fournisseur d’hébergement web de votre choix.
