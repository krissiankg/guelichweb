// Source content for the blog seed script.
// Deliberately free of invented figures: no fake client results, no made-up price tags.

const SITE = 'https://www.guelichweb.online'

export const categories = [
    { title: 'Automatisation', description: "Automatiser les tâches répétitives d'une entreprise." },
    { title: 'Intelligence artificielle', description: "L'IA appliquée aux processus métiers." },
    { title: 'Transformation digitale', description: 'Structurer une entreprise pour la croissance.' },
    { title: 'WhatsApp Business', description: 'Vendre et suivre ses clients sur WhatsApp.' },
    { title: 'Site web', description: 'Conception, performance et référencement de sites web.' },
]

export const author = {
    name: 'Christian Guegueligue',
    slug: 'christian-guegueligue',
    bio: "Fondateur de Guelichweb, agence de transformation digitale et d'intelligence artificielle basée à Abomey-Calavi, au Bénin.",
}

export const posts = [
    {
        slug: 'combien-coute-une-automatisation-ia-au-benin',
        language: 'fr',
        title: "Combien coûte une automatisation IA au Bénin ? Comment construire votre budget",
        categories: ['Automatisation', 'Intelligence artificielle'],
        excerpt:
            "Aucun prestataire sérieux ne peut vous donner un prix au téléphone. En revanche, la structure des coûts est toujours la même. Voici les deux budgets à distinguer, les six facteurs qui font varier un devis, les frais récurrents que l'on oublie, et la méthode pour chiffrer ce que vous coûte l'inaction.",
        body: [
            {
                p: "« Combien ça coûte ? » est la première question qu'on nous pose, et c'est légitime. Le problème, c'est qu'une réponse unique n'existe pas : brancher une réponse automatique sur WhatsApp et reconstruire toute la chaîne commerciale d'une entreprise de quarante personnes n'ont rien à voir. Plutôt que d'annoncer un chiffre qui ne voudrait rien dire, voici comment un budget d'automatisation se construit réellement, afin que vous puissiez lire n'importe quel devis et savoir ce que vous payez.",
            },
            { h2: 'Les deux budgets à ne jamais confondre' },
            {
                p: "La première erreur consiste à ne regarder que le prix affiché en bas du devis. Un projet d'automatisation comporte toujours deux budgets distincts, et celui qu'on oublie est souvent celui qui fait mal au bout d'un an.",
            },
            { h3: '1. La mise en place, payée une fois' },
            {
                p: "C'est le travail de conception et de construction : comprendre vos processus, écrire les scénarios, connecter les outils, tester, documenter et former votre équipe. C'est un coût ponctuel, proportionnel à la complexité de ce que vous automatisez.",
            },
            { h3: '2. Le fonctionnement, payé chaque mois' },
            {
                p: "C'est ce que coûtent les outils pour continuer à tourner. Cette partie est presque toujours sous-estimée. Les postes récurrents à prévoir :",
            },
            {
                ul: [
                    "**WhatsApp Business API** : facturé selon le type et le volume de conversations. Plus vous recevez de messages, plus cette ligne augmente.",
                    "**La plateforme d'automatisation** : Make facture à l'opération, donc proportionnellement à votre activité. n8n auto-hébergé coûte le prix d'un serveur, quel que soit le volume.",
                    "**Les modèles d'IA** : si un assistant rédige ou analyse, chaque échange consomme des jetons facturés à l'usage.",
                    "**L'hébergement du site** et le nom de domaine, renouvelés chaque année.",
                    "**Les licences CRM**, souvent facturées par utilisateur et par mois.",
                    "**La maintenance** : une automatisation n'est pas un meuble. Les outils qu'elle connecte évoluent, et il faut prévoir du temps d'ajustement.",
                ],
            },
            {
                p: "Un devis qui ne détaille pas ce second budget est un devis incomplet. Demandez systématiquement une estimation du coût mensuel à votre volume actuel, puis à deux fois ce volume.",
            },
            { h2: 'Les six facteurs qui font vraiment varier le devis' },
            {
                ol: [
                    "**Le nombre de processus automatisés.** Répondre aux messages entrants est un processus. Générer un devis en est un autre. Relancer un client, un troisième. Chacun ajoute du travail de conception.",
                    "**L'état de vos données.** Si vos contacts sont déjà dans un fichier propre, on avance vite. S'ils sont répartis entre trois téléphones, un cahier et deux classeurs Excel avec des doublons, il faut d'abord les rassembler.",
                    "**Le nombre d'outils à connecter.** Deux outils, c'est simple. Six outils dont un logiciel de gestion ancien sans interface de connexion, c'est un autre métier.",
                    "**Le niveau d'intelligence attendu.** Un assistant qui pose quatre questions fixes coûte moins cher qu'un assistant qui comprend une demande formulée librement et sait quand passer la main à un humain.",
                    "**Vos contraintes de confidentialité.** Si vos données ne doivent pas quitter votre infrastructure, il faut auto-héberger, ce qui ajoute du travail d'installation et de sécurisation.",
                    "**Le besoin de formation.** Une équipe qui n'a jamais utilisé de CRM demande un accompagnement plus long. C'est un investissement, pas une ligne à couper : un outil que personne ne sait utiliser ne sert à rien.",
                ],
            },
            { h2: "Avant de demander un prix, chiffrez ce que vous coûte l'inaction" },
            {
                p: "C'est le calcul qui manque dans la plupart des décisions, et il est à votre portée. Prenez un mois de votre activité et répondez à quatre questions :",
            },
            {
                ol: [
                    "Combien de demandes avez-vous reçues, tous canaux confondus ?",
                    "Combien sont restées sans réponse, ou ont reçu une réponse après plus de vingt-quatre heures ?",
                    "Quel est votre panier moyen, et quelle proportion des demandes traitées se transforme en vente ?",
                    "Combien d'heures par semaine votre équipe passe-t-elle à recopier des informations d'un outil à un autre ?",
                ],
            },
            {
                p: "Multipliez les demandes perdues par votre taux de conversion et par votre panier moyen : vous obtenez le chiffre d'affaires qui vous échappe chaque mois. Ajoutez le coût des heures de ressaisie. Ce montant est votre véritable point de comparaison. Si le coût de mise en place représente quelques mois de ces pertes, la question n'est plus le prix mais le délai.",
            },
            { h2: 'Les questions à poser à tout prestataire' },
            {
                ul: [
                    "Quel est le coût mensuel de fonctionnement à mon volume actuel, et si mon volume double ?",
                    "Les comptes et les données seront-ils à mon nom ? Que se passe-t-il si nous arrêtons de travailler ensemble ?",
                    "Quelle documentation me livrez-vous, et mon équipe pourra-t-elle modifier un scénario sans vous ?",
                    "Que se passe-t-il si une automatisation tombe en panne un samedi ? Suis-je alerté ? Les messages sont-ils perdus ?",
                    "Pouvez-vous commencer par un seul processus, pour que je juge sur un résultat avant d'engager la suite ?",
                ],
            },
            {
                p: "Un prestataire qui refuse de répondre précisément à la première et à la deuxième question vous enferme. Ce sont les deux plus importantes.",
            },
            { h2: 'Par où commencer sans se tromper' },
            {
                p: "Nous recommandons toujours de commencer petit et mesurable : un seul processus, celui qui vous fait perdre le plus d'argent aujourd'hui. Dans la majorité des entreprises que nous voyons au Bénin, c'est le premier contact, parce que les messages WhatsApp arrivent plus vite qu'on ne peut y répondre. On automatise ce point, on mesure pendant un mois, et on décide de la suite avec des chiffres réels plutôt qu'avec des promesses.",
            },
            {
                p: "C'est l'objet de notre diagnostic : nous cartographions vos processus, nous chiffrons vos pertes actuelles, puis nous remettons un devis détaillé en FCFA séparant clairement la mise en place du fonctionnement. Le diagnostic est gratuit et sans engagement. Vous pouvez [en savoir plus sur nos automatisations WhatsApp et n8n](URL_WHATSAPP) ou [nous décrire votre situation directement](URL_CONTACT).",
            },
        ],
    },
    {
        slug: 'site-web-whatsapp-crm-pme-cotonou',
        language: 'fr',
        title: "Site web, WhatsApp et CRM : le trio qui change les ventes d'une PME à Cotonou",
        categories: ['Transformation digitale', 'WhatsApp Business'],
        excerpt:
            "La plupart des PME béninoises n'ont pas un problème de visibilité, mais un problème de suivi. Voici comment un site, un canal WhatsApp structuré et un CRM simple s'articulent pour qu'aucune demande ne se perde, et dans quel ordre les mettre en place.",
        body: [
            {
                p: "Quand une PME de Cotonou nous dit « nous avons besoin d'un site web », la vraie demande est presque toujours autre chose : elle veut plus de clients. Or dans neuf cas sur dix, les clients arrivent déjà. Ils envoient un message, personne ne répond assez vite, et ils vont ailleurs. Un site supplémentaire ne corrige pas cela. Ce qui le corrige, c'est une chaîne complète, et elle repose sur trois pièces.",
            },
            { h2: "Pièce 1 : le site, votre pièce d'identité commerciale" },
            {
                p: "Le rôle d'un site au Bénin n'est pas de vendre tout seul. Il est de répondre en trente secondes à trois questions que se pose un inconnu : qu'est-ce que vous faites exactement, est-ce que vous êtes une vraie entreprise, et comment je vous joins maintenant.",
            },
            {
                ul: [
                    "Une phrase claire en haut de page qui dit ce que vous faites et pour qui, sans jargon.",
                    "Des preuves visibles : réalisations, photos réelles, adresse, numéro qui fonctionne.",
                    "Un bouton WhatsApp présent sur toutes les pages, pas seulement sur la page contact.",
                    "Un chargement rapide en 4G faible, parce que c'est ainsi que vos visiteurs arrivent.",
                ],
            },
            {
                p: "Un site qui met huit secondes à s'afficher perd la moitié de ses visiteurs avant même d'avoir parlé. La performance n'est pas un détail technique, c'est du chiffre d'affaires.",
            },
            { h2: 'Pièce 2 : WhatsApp, votre véritable accueil' },
            {
                p: "Au Bénin, un prospect ne remplit pas de formulaire : il écrit sur WhatsApp. C'est donc là que se joue la vente, et c'est souvent l'endroit le moins organisé de l'entreprise — un numéro personnel, des messages mélangés avec la famille, et aucune trace de qui a dit quoi.",
            },
            {
                p: "Structurer ce canal veut dire quatre choses concrètes :",
            },
            {
                ol: [
                    "Séparer le numéro professionnel du numéro personnel.",
                    "Envoyer un accusé de réception immédiat, même la nuit, pour que le client sache qu'il a été vu.",
                    "Poser les questions utiles dès le premier échange : besoin, quantité, délai, localisation. C'est ce qu'un assistant automatique fait très bien.",
                    "Faire remonter les demandes qualifiées à la bonne personne, au lieu de les laisser dormir dans un téléphone.",
                ],
            },
            {
                p: "Un assistant ne remplace pas votre commercial. Il gagne le temps de réponse, qui est le seul terrain sur lequel vous battez un concurrent mieux installé que vous.",
            },
            { h2: 'Pièce 3 : le CRM, la mémoire de votre entreprise' },
            {
                p: "Le CRM est la pièce que tout le monde repousse, et c'est celle qui crée le plus de valeur à long terme. Sans lui, votre entreprise oublie. Le commercial qui part emporte ses contacts. Le client qui a demandé un devis en mars n'est jamais relancé. Personne ne sait combien de devis sont en attente.",
            },
            {
                p: "Un CRM n'a pas besoin d'être un logiciel imposant. Pour une PME qui démarre, une base bien structurée suffit, à condition qu'elle réponde à trois exigences : elle se remplit automatiquement depuis le site et WhatsApp, elle est accessible à toute l'équipe, et elle affiche clairement ce qui attend une action.",
            },
            { h2: 'Comment les trois pièces se parlent' },
            {
                p: "Prises séparément, ces pièces produisent peu. Assemblées, elles forment une chaîne dans laquelle rien ne tombe : le prospect trouve le site, clique sur WhatsApp, l'assistant qualifie sa demande, une fiche se crée automatiquement dans le CRM, le devis part, les relances se déclenchent seules, et vous voyez le tout dans un tableau de bord.",
            },
            {
                p: "Le point important est que chaque étape est mesurable. Vous savez combien de demandes arrivent, combien sont qualifiées, combien se transforment. À partir de là, améliorer votre commerce devient un travail de chiffres et non d'intuition.",
            },
            { h2: 'Dans quel ordre mettre tout cela en place' },
            {
                p: "L'ordre compte plus que les outils. Nous conseillons celui-ci, parce qu'il produit un résultat visible dès la première étape :",
            },
            {
                ol: [
                    "**Organiser WhatsApp.** C'est le moins cher, le plus rapide, et le gain se voit en quelques jours.",
                    "**Mettre en place la base clients.** Même simple, elle arrête l'hémorragie d'informations.",
                    "**Construire ou reprendre le site**, en le branchant dès le départ sur WhatsApp et sur la base.",
                    "**Ajouter les automatisations** : devis, relances, notifications, puis tableaux de bord.",
                ],
            },
            {
                p: "Commencer par le site, comme on le fait habituellement, revient à installer une vitrine avant d'avoir une caisse. Cela fonctionne, mais l'argent arrive plus tard.",
            },
            {
                p: "Nous déployons cet enchaînement pour des entreprises de Cotonou et d'Abomey-Calavi. Si vous voulez savoir par quelle étape commencer dans votre cas, regardez notre page [création de site web et automatisation à Cotonou](URL_COTONOU), ou [demandez un diagnostic gratuit](URL_CONTACT) : nous suivons le trajet d'une demande client chez vous et nous vous montrons où elle se perd.",
            },
        ],
    },
    {
        slug: 'n8n-ou-make-quel-outil-automatisation-choisir',
        language: 'fr',
        title: "n8n ou Make : quel outil d'automatisation choisir pour votre entreprise ?",
        categories: ['Automatisation'],
        excerpt:
            "Les deux plateformes font le même travail, mais pas au même prix ni avec les mêmes contraintes. Comparaison honnête sur sept critères, avec les trois situations où le choix est évident et les erreurs qui coûtent cher.",
        body: [
            {
                p: "Dès qu'on parle d'automatisation, deux noms reviennent : Make et n8n. Les deux relient vos outils entre eux et exécutent des scénarios sans intervention humaine. Le débat « lequel est le meilleur » n'a pas de réponse, parce que la bonne question est différente : lequel correspond à votre volume, à votre budget et à la sensibilité de vos données ?",
            },
            { h2: 'La différence de fond : où tourne le logiciel' },
            {
                p: "Make est un service en ligne. Vous ouvrez un compte, vous construisez votre scénario dans le navigateur, l'éditeur s'occupe du reste. Vous ne gérez aucun serveur, et vos données transitent par sa plateforme.",
            },
            {
                p: "n8n existe aussi en version hébergée, mais son intérêt principal est ailleurs : vous pouvez l'installer sur votre propre serveur. Le logiciel tourne alors chez vous, et vos données ne sortent pas de votre infrastructure. En échange, quelqu'un doit s'occuper de ce serveur.",
            },
            {
                p: "Presque toutes les autres différences découlent de ce choix initial.",
            },
            { h2: 'Comparaison sur sept critères' },
            { h3: 'Le modèle de coût' },
            {
                p: "Make facture à l'opération : chaque étape exécutée dans un scénario est comptée. Le coût suit donc votre activité, ce qui est confortable au début et devient pénalisant quand le volume monte. n8n auto-hébergé coûte le prix du serveur, que vous traitiez cent ou cent mille opérations. C'est le critère qui fait basculer la plupart des décisions à moyen terme.",
            },
            { h3: 'La confidentialité' },
            {
                p: "Si vous traitez des données de santé, des dossiers d'usagers, des informations bancaires ou des données que vos bailleurs exigent de garder localement, l'auto-hébergement n'est pas un luxe mais une condition. n8n répond à ce besoin, Make non.",
            },
            { h3: 'La rapidité de mise en place' },
            {
                p: "Make gagne largement. Pour connecter un formulaire à une feuille de calcul et à un e-mail, vous êtes opérationnel dans l'heure. Une installation n8n auto-hébergée demande de la configuration, de la sécurisation et des sauvegardes.",
            },
            { h3: 'La souplesse technique' },
            {
                p: "n8n permet d'insérer du code quand la logique devient inhabituelle, ce qui évite les contournements acrobatiques. Make couvre très bien les cas courants mais montre ses limites sur les traitements complexes.",
            },
            { h3: "Le nombre d'intégrations prêtes à l'emploi" },
            {
                p: "Make dispose d'un catalogue plus large de connecteurs officiels, souvent mieux finis. n8n en propose beaucoup et sait interroger n'importe quelle interface web, mais cela demande parfois de mettre les mains dedans.",
            },
            { h3: 'La reprise par votre équipe' },
            {
                p: "Make est plus accessible à une personne non technique : l'interface est claire et la documentation abondante. n8n suppose un profil un peu plus à l'aise techniquement pour modifier un scénario en autonomie.",
            },
            { h3: 'La dépendance au prestataire' },
            {
                p: "Sur ce point les deux sont corrects, à une condition : que les comptes soient créés à votre nom et non à celui de votre agence. Vérifiez-le systématiquement, quel que soit l'outil.",
            },
            { h2: 'Les trois situations où le choix est évident' },
            {
                ol: [
                    "**Vous testez une idée, le volume est faible, vos données ne sont pas sensibles.** Prenez Make. Vous verrez si l'automatisation vous apporte quelque chose avant d'investir dans une infrastructure.",
                    "**Vos données ne doivent pas quitter votre infrastructure.** Prenez n8n auto-hébergé. Il n'y a pas d'arbitrage à faire.",
                    "**Votre volume est important et régulier.** Prenez n8n. La facturation à l'opération devient rapidement le premier poste de dépense d'un scénario actif.",
                ],
            },
            { h2: 'Les erreurs que nous voyons le plus souvent' },
            {
                ul: [
                    "**Choisir l'outil avant d'avoir décrit le processus.** Tant que le trajet d'une demande dans votre entreprise n'est pas posé sur papier, aucun outil ne vous aidera.",
                    "**Ignorer le coût à douze mois.** Un scénario confortable à trois cents opérations par mois peut devenir déraisonnable à trente mille.",
                    "**Auto-héberger sans personne pour s'en occuper.** Un n8n installé et jamais mis à jour est un risque, pas une économie.",
                    "**Tout automatiser d'un coup.** Un seul processus bien choisi, mesuré pendant un mois, vaut mieux que dix scénarios fragiles.",
                ],
            },
            { h2: 'Notre position' },
            {
                p: "En pratique, nous démarrons souvent sur Make pour valider rapidement qu'un scénario apporte de la valeur, puis nous migrons vers n8n quand le volume grimpe ou quand la confidentialité l'impose. Les deux outils peuvent aussi coexister : Make pour les connexions simples entre logiciels courants, n8n pour les traitements sensibles ou volumineux.",
            },
            {
                p: "Nous détaillons cette comparaison, avec les cas d'usage WhatsApp, sur notre page [chatbot WhatsApp et automatisation n8n au Bénin](URL_WHATSAPP). Si vous hésitez pour votre propre situation, [demandez un diagnostic](URL_CONTACT) : nous tranchons à partir de vos volumes réels, pas d'une préférence d'outil.",
            },
        ],
    },
    {
        slug: 'chatbot-whatsapp-ce-quil-fait-vraiment',
        language: 'fr',
        title: "Chatbot WhatsApp : ce qu'il fait vraiment, et ce qu'il ne fera pas",
        categories: ['WhatsApp Business', 'Intelligence artificielle'],
        excerpt:
            "Entre la promesse marketing et la réalité, l'écart est large. Ce qu'un assistant WhatsApp traite effectivement, ce qu'il faut absolument laisser à un humain, et les six règles à respecter pour qu'il ne fasse pas fuir vos clients.",
        body: [
            {
                p: "On vend le chatbot WhatsApp comme un commercial qui ne dort jamais. La réalité est plus modeste et plus utile : c'est un très bon standardiste, et un mauvais négociateur. Savoir où se situe la frontière évite deux échecs classiques — celui qui n'automatise rien par méfiance, et celui qui automatise tout et perd ses clients.",
            },
            { h2: 'Ce qu\'un assistant WhatsApp fait bien' },
            { h3: 'Accuser réception immédiatement' },
            {
                p: "C'est son apport le plus sous-estimé. Un client qui écrit à vingt-deux heures et reçoit une réponse dans la minute, même automatique, sait qu'il a été vu. Le silence est ce qui le pousse à écrire à votre concurrent.",
            },
            { h3: 'Poser les questions de qualification' },
            {
                p: "Besoin, quantité, délai, localisation, budget approximatif. Ce sont des questions mécaniques, identiques pour tous les clients, et pourtant elles prennent un temps considérable à votre équipe. L'assistant les pose sans se lasser et sans en oublier une.",
            },
            { h3: 'Répondre aux questions répétitives' },
            {
                p: "Horaires, adresse, moyens de paiement, délais de livraison, documents à fournir. Dans la plupart des entreprises, ces questions représentent la majorité des messages reçus.",
            },
            { h3: 'Trier et router' },
            {
                p: "Un fournisseur, un candidat à l'embauche et un client prêt à acheter n'ont pas à finir dans la même conversation. L'assistant les sépare et envoie chacun vers la bonne personne.",
            },
            { h3: 'Ne rien perdre' },
            {
                p: "Chaque échange crée une trace : une fiche dans votre base, avec la demande et la date. C'est ce qui permet de relancer trois semaines plus tard, ce que personne ne fait à la main.",
            },
            { h2: "Ce qu'il ne faut pas lui confier" },
            {
                ul: [
                    "**La négociation d'un prix.** Un client qui discute veut une personne en face. Laisser un robot marchander, c'est perdre la vente et le respect.",
                    "**Un client mécontent.** Une réclamation doit arriver à un humain immédiatement. Une réponse automatique sur un litige transforme un mécontentement en conflit public.",
                    "**Les dossiers sensibles ou réglementés.** Santé, juridique, finances personnelles : l'assistant peut recueillir la demande, jamais donner l'avis.",
                    "**Les cas ambigus.** Si la demande sort du cadre prévu, la bonne réponse de l'assistant est de passer la main, pas d'improviser.",
                    "**Faire semblant d'être humain.** Un client qui découvre la supercherie après dix messages se sent trompé.",
                ],
            },
            { h2: 'Les six règles qui font la différence' },
            {
                ol: [
                    "**Annoncez-le dès le premier message.** « Je suis l'assistant de [votre entreprise], je prépare votre demande avant qu'un conseiller prenne le relais. » C'est mieux accepté que l'inverse.",
                    "**Offrez toujours une sortie.** « Parler à un conseiller » doit fonctionner à tout moment, en un mot.",
                    "**Limitez le nombre de questions.** Quatre questions maximum avant de passer la main. Au-delà, le client abandonne.",
                    "**Écrivez comme vos clients parlent.** Phrases courtes, pas de jargon, et le registre linguistique réellement utilisé par votre clientèle.",
                    "**Prévoyez l'échec.** Si l'assistant ne comprend pas deux fois de suite, il transfère à un humain au lieu de boucler.",
                    "**Mesurez.** Combien de conversations aboutissent seules, combien sont transférées, combien de clients abandonnent en cours. Sans ces chiffres, vous ne pouvez rien améliorer.",
                ],
            },
            { h2: 'Ce que cela demande côté technique' },
            {
                p: "Pour un usage professionnel fiable, il faut un compte WhatsApp Business API : c'est ce qui autorise l'envoi automatisé et évite le blocage de votre numéro. L'assistant s'appuie ensuite sur un modèle de langage pour comprendre les messages, et sur une plateforme d'automatisation comme n8n ou Make pour créer les fiches, envoyer les devis et déclencher les relances.",
            },
            {
                p: "Le point de vigilance est le coût récurrent : les conversations WhatsApp et les appels au modèle sont facturés à l'usage. Ce n'est pas un obstacle, mais cela doit figurer dans votre budget dès le départ, comme nous l'expliquons dans notre article sur [le budget d'une automatisation IA](URL_ARTICLE_BUDGET).",
            },
            { h2: 'Par quoi commencer' },
            {
                p: "Commencez par le plus simple : un accusé de réception automatique et trois réponses aux questions les plus fréquentes. Vous mesurerez immédiatement l'effet sur votre délai de réponse. La qualification, la génération de devis et les relances viennent ensuite, une brique à la fois.",
            },
            {
                p: "Nous installons ces assistants pour des entreprises du Bénin depuis Abomey-Calavi et Cotonou. Notre page [chatbot WhatsApp et automatisation n8n](URL_WHATSAPP) détaille ce que nous mettons en place, et le [diagnostic](URL_CONTACT) vous dira si c'est rentable dans votre cas.",
            },
        ],
    },
    {
        slug: 'pourquoi-votre-site-web-ne-rapporte-rien',
        language: 'fr',
        title: "Pourquoi votre site web ne vous rapporte rien (et comment le corriger)",
        categories: ['Site web', 'Transformation digitale'],
        excerpt:
            "Un site peut être joli et ne produire aucun client. Les sept causes que nous rencontrons systématiquement lors de nos audits, comment les vérifier vous-même en vingt minutes, et dans quel ordre les corriger.",
        body: [
            {
                p: "Beaucoup d'entreprises ont payé un site, en sont satisfaites visuellement, et n'en tirent aucun client. Ce n'est presque jamais un problème de design. C'est un problème de fonction : le site n'a pas été conçu pour transformer un visiteur en conversation. Voici les sept causes que nous retrouvons dans presque chaque audit.",
            },
            { h2: '1. Personne ne le trouve' },
            {
                p: "Un site n'apporte pas de visiteurs par sa seule existence. S'il n'est pas déclaré aux moteurs de recherche, s'il n'a pas de pages correspondant à ce que les gens tapent réellement, et s'il n'est cité nulle part, il reste invisible.",
            },
            {
                p: "Vérification immédiate : tapez le nom de votre entreprise dans Google, puis tapez ce que ferait un client qui ne vous connaît pas — par exemple votre métier suivi de votre ville. Si vous n'apparaissez pas dans le second cas, c'est là que se situe le problème.",
            },
            { h2: '2. Il ne dit pas ce que vous faites' },
            {
                p: "« Solutions innovantes au service de votre performance » ne veut rien dire. Un visiteur doit comprendre en une phrase votre métier, pour qui vous travaillez et où. La formulation la plus efficace est aussi la plus simple : ce que vous faites, pour qui, dans quelle ville.",
            },
            { h2: '3. Il est trop lent' },
            {
                p: "C'est la cause la plus fréquente et la plus silencieuse. Vos visiteurs arrivent en mobile, souvent sur une connexion instable. Un site lourd d'images non compressées perd une grande partie d'entre eux avant le premier affichage, et ces visiteurs ne vous écriront jamais pour s'en plaindre.",
            },
            {
                p: "Vérification : ouvrez votre site depuis votre téléphone en données mobiles, pas en wifi, et comptez les secondes jusqu'à ce que le texte soit lisible.",
            },
            { h2: '4. Il ne propose pas de passer à l\'action' },
            {
                p: "Un numéro de téléphone en petit dans le pied de page n'est pas un appel à l'action. Sur chaque page, le visiteur doit pouvoir engager la conversation en un geste, sur le canal qu'il utilise déjà — c'est-à-dire WhatsApp dans le contexte béninois.",
            },
            { h2: '5. Personne ne répond derrière' },
            {
                p: "C'est le point le plus douloureux, parce qu'il annule tout le reste. Un site qui génère dix demandes par mois dont sept restent sans réponse ne rapporte rien. Le problème n'est plus le site : c'est l'absence de chaîne de traitement derrière lui.",
            },
            { h2: '6. Il n\'inspire pas confiance' },
            {
                p: "Photos de banque d'images, aucune adresse, aucune réalisation, un formulaire qui ne confirme rien après l'envoi. Un visiteur qui doute ne vous le dira pas, il partira. La confiance se construit avec des éléments vérifiables : adresse réelle, visages réels, travaux réels, mentions légales complètes.",
            },
            { h2: '7. Personne ne mesure rien' },
            {
                p: "Sans outil de mesure, vous ne savez pas combien de personnes visitent votre site, par quelle page elles entrent, ni à quel endroit elles abandonnent. Vous prenez donc toutes vos décisions à l'aveugle, y compris celle de refaire le site — souvent avec les mêmes erreurs.",
            },
            { h2: 'Votre audit en vingt minutes' },
            {
                ol: [
                    "Cherchez votre métier suivi de votre ville dans Google. Apparaissez-vous ?",
                    "Ouvrez votre site sur votre téléphone en données mobiles. Combien de secondes avant de pouvoir lire ?",
                    "Montrez la page d'accueil à quelqu'un d'extérieur pendant dix secondes, puis demandez-lui ce que vous faites.",
                    "Comptez le nombre de clics nécessaires pour vous écrire depuis n'importe quelle page. Plus de un, c'est trop.",
                    "Envoyez-vous une demande via votre propre formulaire, et chronométrez le temps de réponse réel.",
                    "Vérifiez que vous avez un outil de mesure installé et que quelqu'un le regarde.",
                ],
            },
            { h2: 'Dans quel ordre corriger' },
            {
                p: "L'ordre compte, parce que certaines corrections sont gratuites et immédiates :",
            },
            {
                ol: [
                    "**Le traitement des demandes.** Inutile d'attirer plus de monde si vous ne répondez pas. Commencez par là, c'est le moins coûteux.",
                    "**La vitesse et le bouton WhatsApp.** Corrections techniques rapides, effet immédiat sur les contacts reçus.",
                    "**Le message d'accueil et les preuves.** Du travail de rédaction, pas de développement.",
                    "**La mesure.** Pour arrêter de décider à l'aveugle.",
                    "**Les pages de contenu et le référencement.** C'est le travail de fond, celui qui produit des résultats sur plusieurs mois.",
                ],
            },
            {
                p: "Notez que refaire le site n'apparaît pas dans cette liste. Dans la majorité des cas, ce n'est pas nécessaire : une base saine peut être corrigée et complétée pour bien moins cher qu'une refonte. La refonte se justifie quand la technique est bloquante, pas quand le design a trois ans.",
            },
            {
                p: "C'est exactement ce que nous regardons pendant notre diagnostic : nous mesurons, nous listons ce qui bloque et nous vous disons ce qui se corrige sans reconstruire. Vous pouvez [voir nos offres](URL_OFFRES) ou [demander un diagnostic gratuit](URL_CONTACT).",
            },
        ],
    },
]

// Internal link targets, resolved at seed time so URLs live in one place.
export const linkTargets = {
    URL_CONTACT: `${SITE}/fr/contact`,
    URL_OFFRES: `${SITE}/fr/offres`,
    URL_WHATSAPP: `${SITE}/fr/chatbot-whatsapp-n8n-benin`,
    URL_COTONOU: `${SITE}/fr/creation-site-web-cotonou`,
    URL_ABOMEY: `${SITE}/fr/agence-web-abomey-calavi`,
    URL_ARTICLE_BUDGET: `${SITE}/fr/blog/combien-coute-une-automatisation-ia-au-benin`,
}
