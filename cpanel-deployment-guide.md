# Guide de Déploiement : GUELICHWEB sur cPanel

Votre site web Guelichweb est développé avec **Next.js**. Le déploiement sur un hébergement mutualisé classique (comme Hostinger, O2Switch, LWS via cPanel) nécessite une étape d'exportation ou de configuration Node.js spécifique, car Next.js n'est pas un simple site HTML/PHP classique.

Voici les DEUX méthodes possibles selon votre type d'hébergement cPanel.

---

## MÉTHODE 1 : L'Exportation Statique (Recommandée & Plus Simple)

Si votre site ne nécessite pas de base de données complexe ou d'exécution serveur (SSR) de la part de Next.js (ce qui semble être le cas pour une agence vitrine B2B), c'est la meilleure méthode.

1. **Préparez votre code local :**
   Dans le fichier `next.config.js` de votre projet, ajoutez `output: 'export'` :
   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export', // <-- Ajoutez cette ligne
     images: {
       unoptimized: true, // Requis pour l'export statique
       domains: ['images.unsplash.com', 'picsum.photos'],
     },
   }
   module.exports = nextConfig
   ```

2. **Générez les fichiers HTML :**
   Dans votre terminal, tapez :
   ```bash
   npm run build
   ```
   > Cela créera un dossier nommé `out` à la racine de votre projet.

3. **Uploadez sur cPanel :**
   - Connectez-vous à votre **cPanel**.
   - Ouvrez le **Gestionnaire de fichiers**.
   - Allez dans le dossier `public_html` (ou le dossier racine de votre domaine).
   - Prenez **tout le contenu** du dossier `out` généré à l'étape 2 (les fichiers index.html, le dossier _next, etc.) et zippez-le.
   - Uploadez ce fichier ZIP dans `public_html` via cPanel.
   - Extrayez le ZIP.
   - Visitez votre site en ligne !

*(Note : Si vous utilisez l'API de formulaire de contact `/api/contact`, l'export statique bloquera cette API. Dans ce cas, il FAUT utiliser la Méthode 2 ou passer par un service externe comme Netlify/Vercel).*

---

## MÉTHODE 2 : Serveur Node.js sur cPanel (Requis si vous avez une API ou Supabase)

Si votre cPanel possède l'outil **"Setup Node.js App"** (très courant chez Hostinger/O2Switch) :

1. **Clonez votre projet depuis GitHub vers cPanel :**
   - Dans cPanel, utilisez l'outil **Git Version Control**.
   - Ajoutez le lien de votre repo : `https://github.com/krissiankg/guelichweb.git`.
   - Clonez-le dans un dossier hors de `public_html` (par exemple : `/home/nom-utilisateur/guelichweb`).

2. **Créez l'Application Node.js :**
   - Dans cPanel, cherchez **"Setup Node.js App"** ou **"Applications Node.js"**.
   - Créez une nouvelle application.
   - Choisissez la version **Node 18.x** ou supérieure.
   - **Application root :** le chemin vers votre clone (ex: `guelichweb`).
   - **Application URL :** votre nom de domaine.
   - **Application startup file :** Mettez `server.js` (il faudra créer ce fichier à la racine de votre projet, voir ci-dessous).

3. **Le fichier server.js (à ajouter à votre code) :**
   Pour lier Next.js à cPanel, créez un fichier `server.js` à la racine :
   ```javascript
   const { createServer } = require('http')
   const { parse } = require('url')
   const next = require('next')

   const dev = process.env.NODE_ENV !== 'production'
   const hostname = 'localhost'
   const port = process.env.PORT || 3000
   const app = next({ dev, hostname, port })
   const handle = app.getRequestHandler()

   app.prepare().then(() => {
     createServer(async (req, res) => {
       try {
         const parsedUrl = parse(req.url, true)
         await handle(req, res, parsedUrl)
       } catch (err) {
         console.error('Error occurred handling', req.url, err)
         res.statusCode = 500
         res.end('internal server error')
       }
     })
       .once('error', (err) => {
         console.error(err)
         process.exit(1)
       })
       .listen(port, () => {
         console.log(`> Ready on http://${hostname}:${port}`)
       })
   })
   ```

4. **Installez et Lancez :**
   - Retournez sur l'interface "Setup Node.js App" de cPanel.
   - Cliquez sur **Run NPM Install**.
   - Une fois terminé, cliquez sur **Start App**.
   - N'oubliez pas d'ajouter vos variables d'environnement (`CONTACT_EMAIL`, `RESEND_API_KEY`) directement dans cette même interface cPanel.

---
**💡 Conseil d'Expert Guelichweb :** 
Pour des projets React/Next.js comme le vôtre, utiliser **Vercel** ou **Netlify** (gratuits) est infiniment plus simple et performant, en connectant juste votre GitHub, plutôt que de batailler avec les configurations serveurs cPanel traditionnelles prévues pour WordPress/PHP.
