# 🚀 Broxi Agency - Site Web Officiel (Guelichweb)

Bienvenue sur le dépôt officiel de **Broxi Agency**, une solution web moderne, performante et esthétique conçue pour les agences et entreprises B2B.

Ce projet est construit avec **Next.js 14**, **Sanity CMS**, et **Framer Motion** pour offrir une expérience utilisateur fluide et une gestion de contenu simplifiée.

---

## ✨ Fonctionnalités

- 🌐 **Multilingue** : Support complet du Français et de l'Anglais via le système de routage dynamique de Next.js.
- 🎨 **Design Premium** : Interface moderne avec un mode sombre élégant et des animations interactives propulsées par Framer Motion.
- 📝 **Gestion de Contenu (CMS)** : Intégration profonde avec **Sanity** pour gérer facilement les projets, services et articles de blog.
- 📧 **Formulaire de Contact** : Système de contact intégré utilisant l'API **Resend** pour un envoi d'emails fiable.
- 📱 **Responsive Design** : Entièrement optimisé pour tous les écrans (Mobile, Tablette, Desktop).
- ⚡ **Performance & SEO** : Core Web Vitals optimisés pour un référencement maximal.

---

## 🛠️ Stack Technique

- **Framework** : [Next.js 14](https://nextjs.org/) (App Router)
- **Styling** : [Tailwind CSS](https://tailwindcss.com/)
- **Animations** : [Framer Motion](https://www.framer.com/motion/)
- **CMS** : [Sanity.io](https://www.sanity.io/)
- **Emails** : [Resend](https://resend.com/)
- **Icônes** : Lucide React & React Icons

---

## 🚀 Installation & Développement

### 1. Cloner le projet
```bash
git clone https://github.com/krissiankg/guelichweb.git
cd guelichweb
```

### 2. Installer les dépendances
```bash
npm install
```

### 3. Configurer l'environnement
Copiez le fichier `.env.example` vers `.env.local` et remplissez vos clés API :
```bash
cp .env.example .env.local
```

### 4. Lancer le serveur de développement
```bash
npm run dev
```
Le site sera accessible sur [http://localhost:3000](http://localhost:3000).

---

## 🏗️ Déploiement

### Option 1 : Vercel / Netlify (Recommandé)
Connectez simplement votre dépôt GitHub à Vercel ou Netlify. Les variables d'environnement doivent être configurées dans l'interface du service choisi.

### Option 2 : Hébergement cPanel (Traditionnel)
Un guide détaillé est disponible dans le fichier [cpanel-deployment-guide.md](./cpanel-deployment-guide.md) pour les déploiements sur des serveurs mutualisés utilisant Node.js ou l'exportation statique.

---

## 📝 Structure du projet

- `/app` : Pages et routes API de l'application (Next.js App Router).
- `/components` : Composants UI réutilisables.
- `/sanity` : Schémas et configuration du studio Sanity.
- `/dictionaries` : Fichiers de traduction JSON pour le multilingue.
- `/public` : Assets statiques (images, logo).

---

## 📄 Licence

Ce projet est privé. Toute reproduction ou utilisation commerciale sans autorisation préalable est interdite.

---
*Développé avec ❤️ par l'équipe Broxi Agency.*
