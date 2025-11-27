import PropertyDetailPage from "@/components/PropertyDetailPage";

export default function MaisonSuresnesMontValerienPotentielPage() {
  const propertyData = {
    // Informations principales
    id: 16,
    slug: "maison-suresnes-mont-valerien-potentiel",
    title: "Maison à fort potentiel - Mont-Valérien",
    breadcrumbTitle: "Maison à fort potentiel - Mont-Valérien",
    location: "Suresnes - Mont-Valérien",
    postalCode: "92150",
    price: 849000,
    priceDisplay: "849 000 €",

    // Photos
    images: [
      "/photos/maison-849/ext.jpeg",
      "/photos/maison-849/salon.jpeg",
      "/photos/maison-849/terrasse.jpeg",
      "/photos/maison-849/chambre.jpeg",
      "/photos/maison-849/chambre2.jpeg",
      "/photos/maison-849/sdb.jpeg",
      "/photos/maison-849/terrain.jpeg",
      "/photos/maison-849/cour.jpeg",
    ],

    // Caractéristiques principales
    surface: 110,
    rooms: 4,
    terrain: 446,

    // Description
    subtitle: "Maison de charme sur 446 m² de terrain avec vue dégagée",
    description: [
      {
        content:
          "Au cœur du Mont-Valérien, à la limite de Suresnes, venez découvrir cette maison pleine de charme sur un terrain de 446 m². Elle séduit immédiatement par son emplacement privilégié, son agencement fonctionnel et surtout son potentiel exceptionnel.",
      },
      {
        title: "Rez-de-chaussée",
        content:
          "Un salon/salle à manger lumineux s'ouvre sur une grande terrasse offrant une vue dégagée sur le jardin, idéalement exposé. La cuisine est aménagée, tandis qu'une pièce supplémentaire pleine de cachet laisse libre cours à vos idées.",
      },
      {
        title: "À l'étage",
        content:
          "Trois chambres et une salle de bain complètent ce bien, offrant un confort familial agréable.",
      },
      {
        title: "Le potentiel",
        content:
          "Le véritable atout réside dans les nombreuses possibilités d'agrandissement et de réaménagement : extension, optimisation des espaces ou création de nouveaux volumes habitables, cette maison est une véritable toile blanche pour concrétiser vos projets.",
      },
      {
        content:
          "🏡 Un lieu de vie à fort potentiel, dans un secteur recherché, pour construire la maison dont vous rêvez.",
      },
    ],

    // Informations détaillées (divisées en 2 colonnes)
    details: {
      col1: [
        { label: "Pièces", value: "4" },
        { label: "Chambres", value: "3" },
        { label: "Niveaux", value: "2" },
        { label: "Surface habitable", value: "110 m²" },
        { label: "Surface terrain", value: "446 m²" },
        { label: "État", value: "À rafraîchir" },
        { label: "Année construction", value: "1940" },
      ],
      col2: [
        { label: "Exposition", value: "Ouest, Nord-ouest" },
        { label: "Vue", value: "Jardin, vue dégagée" },
        { label: "Type de chauffage", value: "Radiateur" },
        { label: "Énergie de chauffage", value: "Gaz" },
        { label: "Moyen de chauffage", value: "Individuel" },
        { label: "Eau chaude", value: "Chaudière individuelle" },
        { label: "Eaux usées", value: "Tout à l'égout" },
        { label: "Disponibilité", value: "Libre" },
      ],
    },

    // Prestations
    prestations: [
      "Internet",
      "Fibre optique",
      "Éclairage extérieur",
      "Grande terrasse",
      "Vue dégagée",
      "Abri de jardin",
    ],

    // Proximités
    proximites: [
      "Bus",
      "Cinéma",
      "Commerces",
      "Crèche",
      "École secondaire",
      "Garderie",
      "Hôpital/clinique",
      "Médecin",
      "Parc",
      "Salle de sport",
      "Supermarché",
      "Taxi",
      "Tennis",
    ],

    // DPE
    dpe: {
      energyClass: "G",
      energyValue: 578,
      climateClass: "G",
      climateValue: 127,
      estimatedCostMin: 5360,
      estimatedCostMax: 7270,
      finalConsumption: null,
      auditDone: false,
    },

    // Carte
    map: {
      lat: 48.8750,
      lng: 2.2180,
      center: [48.8750, 2.2180],
      zoom: 15,
    },

    // Agent
    agent: {
      name: "Vincent LECLERC",
      photo: "/photos/vincent.jpg",
      rsac: "451 258 438",
      rsacCity: "VERSAILLES",
    },

    // Référence et mentions
    reference: "86464501",
    legalNotice:
      "EXP GLOBAL FRANCE - Non-détention de fonds - SIRET 89071070000018 - Honoraires à la charge du vendeur - Classe énergie 578 kWhEP/m².an (G) - Classe climat 127 kg CO2/m².an (G) - Montant estimé des dépenses annuelles d'énergie pour un usage standard, établi à partir des prix de l'énergie de l'année 2021 : 5 360€ ~ 7 270€ - Logement à consommation énergétique excessive : classe G - Les informations sur les risques auxquels ce bien est exposé sont disponibles sur le site Géorisques : www.georisques.gouv.fr - Vincent LECLERC - Agent commercial - EI - RSAC VERSAILLES 451 258 438",
  };

  return <PropertyDetailPage property={propertyData} />;
}

