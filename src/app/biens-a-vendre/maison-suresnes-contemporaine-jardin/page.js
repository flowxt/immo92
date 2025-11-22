import PropertyDetailPage from "@/components/PropertyDetailPage";

export default function MaisonContemporaineJardin() {
  const propertyData = {
    // Informations principales
    id: 15,
    slug: "maison-suresnes-contemporaine-jardin",
    title: "Maison Familiale Contemporaine",
    breadcrumbTitle: "Maison Familiale Contemporaine",
    location: "Suresnes - Mont-Valérien",
    postalCode: "92150",
    price: 830000,
    priceDisplay: "830 000 €",

    // Photos
    images: [
      "/photos/maison-jardin/exterieur.jpeg",
      "/photos/maison-jardin/salon.jpeg",
      "/photos/maison-jardin/cuisine.jpeg",
      "/photos/maison-jardin/terrasse.jpeg",
      "/photos/maison-jardin/chambre.jpeg",
      "/photos/maison-jardin/chambre2.jpeg",
      "/photos/maison-jardin/hauteur.jpeg",
      "/photos/maison-jardin/salle.jpeg",
    ],

    // Caractéristiques principales
    surface: 120,
    rooms: 5,
    terrain: 165,

    // Description
    subtitle: "Alliance parfaite entre modernité, calme et verdure",
    description: [
      {
        content:
          "Dans un environnement résidentiel prisé du Mont-Valérien, découvrez cette maison d'architecte récente (2015), à la fois moderne, lumineuse et conçue pour un confort de vie optimal. Édifiée sur une parcelle de 165 m², elle bénéficie d'une triple exposition et de volumes généreux, au calme absolu, à quelques minutes seulement de La Défense et de Paris.",
      },
      {
        title: "Rez-de-chaussée",
        content:
          "Dès l'entrée, une pièce de vie magistrale d'environ 50 m² s'ouvre sur le jardin : espaces salon & salle à manger, cuisine haut de gamme entièrement équipée, WC invités. La baie vitrée plein sud offre un prolongement naturel sur la terrasse et son jardin paysager, invitant à la détente et à la convivialité.",
      },
      {
        title: "Premier étage",
        content:
          "Deux chambres spacieuses, salle d'eau élégante, WC indépendant, mezzanine ouverte pouvant accueillir un bureau, un espace lecture ou être aisément transformée en 4ᵉ chambre.",
      },
      {
        title: "Dernier niveau",
        content:
          "La suite parentale séduit par sa générosité : dressing sur mesure, salle d'eau privative et belles hauteurs sous plafond.",
      },
      {
        title: "Sous-sol aménageable",
        content:
          "Un sous-sol de 50 m², parfaitement sain, offre de multiples possibilités : salle de sport, home cinéma, salle de jeux, buanderie.",
      },
      {
        content:
          "✨ Un bien rare, alliant standing, modernité et emplacement stratégique, pour une vie aux portes de Paris.",
      },
    ],

    // Informations détaillées (divisées en 2 colonnes)
    details: {
      col1: [
        { label: "Pièces", value: "5" },
        { label: "Chambres", value: "4" },
        { label: "Niveaux", value: "3" },
        { label: "Surface habitable", value: "120 m²" },
        { label: "Surface jardin", value: "165 m²" },
        { label: "Taxe foncière", value: "1 404 €/an" },
        { label: "État", value: "Excellent état" },
      ],
      col2: [
        { label: "Style", value: "Moderne" },
        { label: "Année construction", value: "2015" },
        { label: "Exposition", value: "Sud-est, Sud-ouest" },
        { label: "Vue", value: "Dégagée, Ciel" },
        { label: "Type de chauffage", value: "Radiateur" },
        { label: "Énergie de chauffage", value: "Gaz" },
        { label: "Eau chaude", value: "Pompe à chaleur Individuelle" },
      ],
    },

    // Prestations
    prestations: [
      "Double vitrage",
      "Fenêtre PVC",
      "Internet",
      "Stores électriques",
      "Alarme",
      "Vidéo surveillance",
      "Barbecue",
      "Clôture",
      "Éclairage extérieur",
      "Fibre optique",
    ],

    // Proximités
    proximites: [
      "Centre ville",
      "Commerces",
      "Tennis",
      "Université",
      "École primaire",
      "Hôpital/clinique",
      "Médecin",
      "Parc",
      "Supermarché",
      "Taxi",
      "Crèche",
      "La Défense",
      "Paris",
    ],

    // DPE
    dpe: {
      energyClass: "C",
      energyValue: 170,
      climateClass: "C",
      climateValue: 27,
      estimatedCostMin: 1650,
      estimatedCostMax: 2240,
      finalConsumption: "147 kWhEF/m².an",
    },

    // Carte et localisation
    map: {
      lat: 48.8686,
      lng: 2.2208,
      zoom: 15,
      description: "Mont-Valérien, Suresnes (92150)",
      nearbyPoints: [
        {
          title: "Métro 15 Mont Valérien",
          distance: "À quelques minutes",
          icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
        },
        {
          title: "La Défense",
          distance: "Quelques minutes",
          icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
        },
        {
          title: "Écoles & Commerces",
          distance: "Toutes commodités",
          icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
        },
      ],
    },

    // Agent
    agent: {
      name: "Vincent LECLERC",
      photo: "/photos/vincent.jpg",
      rsac: "451 258 438",
      rsacCity: "VERSAILLES",
    },

    // Référence
    reference: "86405175",

    // Mentions légales
    legalNotice:
      "EXP GLOBAL FRANCE - Non-détention de fonds - SIRET 89071070000018 - Honoraires à la charge du vendeur - Classe énergie 170 kWhEP/m².an (C) - Classe climat 27 kg CO2/m².an (C) - Montant estimé des dépenses annuelles d'énergie pour un usage standard, établi à partir des prix de l'énergie de l'année 2021 : 1650€ ~ 2240€ - Les informations sur les risques auxquels ce bien est exposé sont disponibles sur le site Géorisques : www.georisques.gouv.fr - Vincent LECLERC - Agent commercial - EI - RSAC VERSAILLES 451 258 438",
  };

  return <PropertyDetailPage property={propertyData} />;
}
