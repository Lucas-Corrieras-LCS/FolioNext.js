export const projets = [
  {
    id: "mon-vps",
    titre: "Mon VPS",
    description:
      "C’est la seconde version de mon serveur VPS, dédiée à l’hébergement de mes projets réalisés en cours. Nous avions carte blanche sur la présentation, ce qui m’a permis de créer une interface qui reflète pleinement mon univers graphique.\n\nJ’ai utilisé Tailwind CSS pour concevoir un design moderne et immersif, en expérimentant notamment avec un background personnalisé et un menu hamburger que j’ai réutilisé et optimisé. L’objectif était aussi de progresser en front-end tout en gardant une structure claire pour faciliter la navigation entre les différents travaux.\n\nCette version repose toujours sur une configuration VPS avec Apache, que j’ai entièrement gérée moi-même, du déploiement à la mise en ligne. Elle témoigne à la fois de mon autonomie technique et de mon sens du détail visuel.",
    descriptionCourte: "Interface personnalisée pour mes projets hébergés",
    image: "/VPS.jpg",
    technologies: ["Linux", "Apache", "Tailwind CSS", "SSH"],
    lien: "http://193.168.147.179/",
  },
  {
    id: "site-ferrari",
    titre: "Site Ferrari",
    description:
      "Ce projet a été réalisé dans un cadre scolaire, mais j’ai décidé de le pousser plus loin en y ajoutant des éléments d’apprentissage personnel. Initialement axé sur une simple interface front-end, j’en ai profité pour approfondir Tailwind CSS, ce qui m’a permis de gagner en fluidité dans la création d’interfaces réactives et épurées. Le design reprend les codes du luxe pour coller à l’image de Ferrari.\n\nDans un second temps, le projet a évolué vers un développement complet avec une architecture front-end/back-end. J’ai intégré PHP pour gérer la logique serveur ainsi qu'une base de données MySQL (via MariaDB). L’objectif était de relier le site à une interface d’administration permettant d’ajouter, modifier ou supprimer des entrées dans la base de données.\n\nCe travail m’a donné une solide introduction aux concepts de CRUD (Create, Read, Update, Delete) et à la communication entre un site web dynamique et sa base de données. Il représente l’un de mes premiers projets complets mêlant front-end moderne et back-end fonctionnel.",
    descriptionCourte: "Plateforme front/back avec gestion de base de données",
    image: "/Ferrarie.jpg",
    technologies: ["HTML", "Tailwind CSS", "JavaScript", "PHP", "MySQL"],
    lien: "https://mmi24b11.sae203.ovh",
  },
  {
    id: "site-bmw-motorsport",
    titre: "Site BMW Motorsport",
    description:
      "Ce site représente mon tout premier projet réalisé dans le cadre de ma formation en MMI. L'objectif était de concevoir un site web sur le thème de notre choix, avec quelques fonctionnalités imposées. J’ai opté pour l’univers de BMW Motorsport afin de travailler autour d’une image dynamique et haut de gamme.\n\nLe front-end a été développé en HTML, CSS et JavaScript pour créer une interface claire et fluide. J’ai intégré divers éléments visuels interactifs pour renforcer l’expérience utilisateur. Côté back-end, le site utilise PHP pour gérer un formulaire de contact totalement fonctionnel. Les messages sont envoyés à une boîte mail dédiée, et les mails reçus sont stylisés en HTML et CSS pour un rendu professionnel.\n\nUne autre exigence du projet était la création d’une photothèque. J’ai donc intégré un système permettant d’ajouter des images directement depuis le site. Chaque image est automatiquement placée dans la galerie grâce à un script PHP, sans devoir modifier manuellement le code. Cela m’a permis de comprendre le fonctionnement des fichiers envoyés via formulaire, du stockage sur le serveur et de l’affichage dynamique côté client.",
    descriptionCourte:
      "Premier site complet avec formulaire et galerie dynamique",
    image: "/BMW.jpeg",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    lien: "https://mmi24b11.sae105.ovh",
  },
  {
    id: "mon-premier-portfolio",
    titre: "Mon Premier Portfolio",
    description:
      "Ce portfolio a été conçu pour présenter mes compétences et réalisations afin d’intégrer la formation MMI. Il constitue l’une de mes premières expériences dans la création d’un site web personnel.\n\nLe site a été développé avec Astro, un framework statique moderne, et repose principalement sur des balises HTML simples. J’ai appris à structurer une page de manière claire et fonctionnelle, tout en intégrant des composants Astro pour mieux organiser le contenu.\n\nLe déploiement a été effectué via GitHub, me permettant de découvrir les bases de la mise en ligne d’un projet. Bien que minimaliste, ce portfolio marque un point de départ concret dans mon apprentissage du développement web.",
    descriptionCourte:
      "Premier portfolio personnel développé avec Astro et HTML",
    image: "/portfolio1.jpeg",
    technologies: ["Astro", "HTML", "GitHub Pages"],
    lien: "https://cool-naiad-01f700.netlify.app",
  },
  {
    id: "interview-professionnelle",
    titre: "Interview Professionnelle",
    description:
      "Ce projet audiovisuel consistait à réaliser une interview professionnelle complète : de la pré-production jusqu’à la diffusion finale.\n\nJ’ai pris en charge l’écriture des questions, le tournage avec du matériel semi-professionnel, puis le montage avec Adobe Premiere Pro et After Effects. La colorimétrie et le traitement sonore ont été peaufinés pour garantir un rendu propre et immersif.\n\nL’expérience m’a permis de comprendre les enjeux d’un tournage pro, de gérer les imprévus sur le terrain, et d’optimiser un rendu fluide à travers des transitions, des sous-titres et une mise en scène claire.",
    descriptionCourte: "Interview professionnelle montée et diffusée",
    image: "/vid.jpg",
    technologies: ["Premiere Pro", "After Effects", "Colorimétrie"],
    lien: "https://youtu.be/K-AbsV_LgO0",
  },
  {
    id: "charte-graphique-utopia",
    titre: "Charte Graphique Utopia",
    description:
      "Dans le cadre d’un projet de communication visuelle, j’ai conçu une charte graphique complète pour le cinéma indépendant Utopia.\n\nCela inclut la création d’un logo, la définition des couleurs, typographies, et déclinaisons sur plusieurs supports (affiches, flyers, réseaux sociaux). Le tout a été structuré dans un document PDF professionnel avec InDesign.\n\nJ’ai appris à créer une identité cohérente et à la décliner sur des supports divers, tout en respectant les contraintes de lisibilité, d’impression et d’esthétique propres à un cinéma d’auteur.",
    descriptionCourte: "Création d’une identité visuelle complète",
    image: "/charte.jpeg",
    technologies: ["Photoshop", "Illustrator", "InDesign"],
    lien: "/pdf/Charte-Graphique-Corrieras-Lucas.pdf",
  },
  {
    id: "projet-declassement",
    titre: "Projet de Déclassement",
    description:
      "Ce projet est personnel et avait pour objectif de préparer une présentation destinée à la mairie dans le but de faire déclasser un terrain agricole en zone constructible.\n\nJ’ai conçu l’ensemble du dossier sous PowerPoint, en y intégrant des visuels clairs, des données contextuelles et une argumentation structurée. Le tout visait à convaincre les autorités locales du potentiel de requalification du terrain.\n\nCe projet m’a permis de travailler sur la clarté de la communication, la structuration logique d’un discours, et l’utilisation de supports visuels percutants pour un public institutionnel.",
    descriptionCourte: "Présentation pour déclasser un terrain agricole",
    image: "/declass.jpeg",
    technologies: ["PowerPoint"],
    lien: "/pdf/Projet_airbnb.pdf",
  },
  {
    id: "strategie-marketing-revive",
    titre: "Stratégie Marketing ReVive",
    description:
      "Développement d’une stratégie de communication pour la marque fictive ReVive, spécialisée dans le luxe éco-responsable.\n\nNous avons réfléchi au positionnement, à l’identité visuelle et à une campagne d’affichage cohérente. J’ai produit l’ensemble des visuels et supports à l’aide de Photoshop et InDesign, en cohérence avec une stratégie marketing digitale.\n\nCe projet m’a permis de mieux comprendre la relation entre le branding, la psychologie des couleurs et la narration visuelle dans une campagne.",
    descriptionCourte: "Campagne marketing pour une marque éthique",
    image: "/revive.jpeg",
    technologies: ["Photoshop", "InDesign", "Marketing stratégique"],
    lien: "/pdf/SAE 102.pdf",
  },
  {
    id: "projet-robotik",
    titre: "Projet Robotik",
    description:
      "Ce projet ambitieux consistait à développer un robot autonome capable de suivre une ligne, de déposer des balles, et d'afficher des données en temps réel.\n\nJ’ai programmé l’ensemble du robot en C++ sur Arduino Uno, intégré des capteurs de ligne, un servo-moteur, une télécommande Bluetooth, et un écran LCD. Une pièce a aussi été modélisée et imprimée en 3D pour le système de largage des balles.\n\nLe robot proposait deux modes : manuel et automatique. Le mode automatique gérait l’itinéraire de façon autonome. J’ai optimisé la gestion d’énergie et la vitesse de réaction du robot pour remporter une course en classe.",
    descriptionCourte: "Robot Arduino avec mode autonome et manuel",
    image: "/robotik.jpg",
    technologies: ["C++", "Arduino Uno", "Électronique", "3D Printing"],
    lien: "#",
  },
];
