// Réalisations réelles, reprises du portfolio offre.guelichweb.online.
// `family` sert aux filtres de la page portfolio, `category` est l'intitulé affiché.
// `url` et `stack` ne sont renseignés que lorsqu'ils sont vérifiés : ne rien inventer ici.
export const projects = [
  {
    id: 1,
    slug: "buscord-bureau-etudes-controle",
    title: "BUSCORD — Bureau d'Études & Contrôle",
    description:
      "Plateforme web institutionnelle du Bureau de Suivi-Contrôle et de Réalisation pour le Développement au Burkina Faso.",
    category: "Site web institutionnel",
    family: "sites",
    sector: "Bureau d'études, contrôle et développement",
    location: "Burkina Faso",
    image: "https://offre.guelichweb.online/portfolio/buscord.png",
    featured: true,
  },
  {
    id: 2,
    slug: "societe-nutrition-benin",
    title: "Société de Nutrition du Bénin (SNB)",
    description:
      "Plateforme web moderne et interactive de la Société de Nutrition du Bénin, dédiée à la santé, la nutrition et la recherche scientifique.",
    category: "Site web institutionnel & application",
    family: "sites",
    sector: "Santé, nutrition et recherche scientifique",
    location: "Bénin",
    image: "https://offre.guelichweb.online/portfolio/snb-bj.png",
    stack: ["React", "Vite"],
    featured: true,
  },
  {
    id: 3,
    slug: "jsan-conference-scientifique",
    title: "JSAN — Conférence Scientifique Internationale",
    description:
      "Plateforme web complète de gestion de conférence scientifique internationale : inscriptions, billetterie, soumission d'abstracts et espaces participants.",
    category: "Plateforme événementielle & scientifique",
    family: "apps",
    sector: "Événementiel scientifique et recherche",
    location: "Bénin",
    image:
      "https://thnowfeqcbormjmlfunx.supabase.co/storage/v1/object/public/portfolio-images/web-projects/1772404929620_ra924j.jpeg",
    featured: true,
  },
  {
    id: 4,
    slug: "openway-orientation-academique",
    title: "OPENWAY — Centre d'Orientation et d'Accompagnement Académique",
    description:
      "OPENWAY est un centre basé à Abomey-Calavi (Bénin) qui propose des services d'orientation et d'accompagnement académique pour les jeunes à partir de 12 ans.",
    category: "Site institutionnel associatif",
    family: "sites",
    sector: "Éducation et orientation académique",
    location: "Abomey-Calavi, Bénin",
    image:
      "https://thnowfeqcbormjmlfunx.supabase.co/storage/v1/object/public/portfolio-images/web-projects/1772401162746_sp39zv.jpeg",
    featured: true,
  },
  {
    id: 5,
    slug: "spass-mit-deutsch-examens-certificats",
    title: "Spass Mit Deutsch — Plateforme d'examens & certificats",
    description:
      "Application web moderne pour la consultation instantanée des résultats d'examens officiels d'allemand et la délivrance de certificats sécurisés en PDF.",
    category: "Application web & plateforme éducative",
    family: "apps",
    sector: "Éducation et formation linguistique",
    location: "Bénin",
    image: "https://offre.guelichweb.online/portfolio/spass-mit-deutsch.png",
    stack: ["Next.js", "Prisma", "Tailwind CSS", "jsPDF", "Recharts"],
    featured: true,
  },
  {
    id: 6,
    slug: "editeur-video-web-saas",
    title: "Studio d'édition vidéo web",
    description:
      "Suite SaaS complète de montage vidéo, audio et photo professionnelle directement dans le navigateur, sans installation de logiciel.",
    category: "Application web & SaaS multimédia",
    family: "saas",
    sector: "SaaS multimédia",
    image:
      "https://thnowfeqcbormjmlfunx.supabase.co/storage/v1/object/public/portfolio-images/web-projects/1788624853642_qs4gqso.jpeg",
  },
  {
    id: 7,
    slug: "forge-ia-formation",
    title: "FORGE IA — Créez. Vendez. Gagnez avec l'IA",
    description:
      "Plateforme web moderne dédiée à la formation d'élite pour apprendre à concevoir des SaaS, applications web et sites internet avec l'intelligence artificielle.",
    category: "Plateforme EdTech & accompagnement IA",
    family: "saas",
    sector: "Formation, IA et développement",
    image:
      "https://thnowfeqcbormjmlfunx.supabase.co/storage/v1/object/public/portfolio-images/web-projects/1788622984873_k94jkp.jpeg",
  },
  {
    id: 8,
    slug: "spass-mit-deutsch-benin",
    title: "Spass Mit Deutsch Bénin — Centre de formation en allemand",
    description:
      "Centre de formation spécialisé dans l'apprentissage de la langue allemande au Bénin, avec des cours du niveau débutant (A1) à avancé (C1) et une préparation aux certifications internationales.",
    category: "Site institutionnel & centre de formation",
    family: "sites",
    sector: "Formation linguistique",
    location: "Bénin",
    image:
      "https://thnowfeqcbormjmlfunx.supabase.co/storage/v1/object/public/portfolio-images/web-projects/1772403428411_2jdhev.jpeg",
    url: "https://www.spassmitdeutschbenin.com",
    featured: true,
  },
  {
    id: 9,
    slug: "produitdigitaux-marketplace",
    title: "ProduitDigitaux — Marketplace e-commerce digitale",
    description:
      "Boutique e-commerce moderne dédiée à la vente et au téléchargement instantané de produits digitaux : e-books business, formations IA, templates Canva et applications Android.",
    category: "E-commerce & produits digitaux",
    family: "ecommerce",
    sector: "E-commerce de produits digitaux",
    image: "https://produitdigitaux.site/images/promptehub2.png",
    url: "https://produitdigitaux.site",
  },
  {
    id: 10,
    slug: "prompthub-v5",
    title: "PromptHUB V5 — Bibliothèque de 24 908 prompts IA",
    description:
      "Plateforme et tableau de bord interactif de 24 908 prompts ChatGPT professionnels en français, dotée d'un simulateur Excel dynamique en direct.",
    category: "Plateforme SaaS & intelligence artificielle",
    family: "saas",
    sector: "IA et productivité",
    image: "https://prompthub.produitdigitaux.site/prompthub_main_cover.png",
    url: "https://prompthub.produitdigitaux.site",
    stack: ["Next.js", "TypeScript", "Supabase"],
  },
  {
    id: 11,
    slug: "psychologie-viralite-tiktok",
    title: "Psychologie de la Viralité — Tunnel de vente TikTok",
    description:
      "Tunnel de vente haute conversion pour le guide numérique dévoilant les ressorts psychologiques de la viralité TikTok et la conversion de vues en clients.",
    category: "Tunnel de vente & guide marketing",
    family: "ecommerce",
    sector: "Marketing digital et formation",
    image: "https://psychologie.produitdigitaux.site/assets/cover.webp",
    url: "https://psychologie.produitdigitaux.site",
    stack: ["React", "Vite", "Tailwind CSS"],
  },
  {
    id: 12,
    slug: "exceltools-traitement-fichiers",
    title: "ExcelTools — Outils en ligne pour fichiers Excel",
    description:
      "Plateforme web proposant une suite d'outils en ligne pour manipuler, analyser et transformer des fichiers Excel directement dans le navigateur.",
    category: "Application web & outils SaaS",
    family: "apps",
    sector: "Productivité et traitement de données",
    image:
      "https://thnowfeqcbormjmlfunx.supabase.co/storage/v1/object/public/portfolio-images/web-projects/1773760217972_myli88.jpeg",
    stack: ["Next.js", "TypeScript", "Prisma", "Supabase", "Tailwind CSS"],
  },
  {
    id: 13,
    slug: "portfolio-christian-guegueligue",
    title: "Christian Guegueligue — Full-Stack & automatisation IA",
    description:
      "Portfolio du fondateur de Guelichweb : développeur full-stack, consultant tech et spécialiste de l'automatisation IA au Bénin.",
    category: "Portfolio & solutions IA",
    family: "sites",
    sector: "Développement, conseil et IA",
    location: "Abomey-Calavi, Bénin",
    image:
      "https://thnowfeqcbormjmlfunx.supabase.co/storage/v1/object/public/portfolio-images/web-projects/1788631699313_c7owci.jpeg",
  },
]

// Ordre des filtres de la page portfolio.
export const projectFamilies = ["sites", "apps", "saas", "ecommerce"]

export const featuredProjects = projects.filter((project) => project.featured)

export const getProject = (slug) => projects.find((project) => project.slug === slug)
