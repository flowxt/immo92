import PropertyDetailPage from "@/components/PropertyDetailPage";

export default function MaisonNanterreMontValerienARenoverPage() {
  const propertyData = {
    // Informations principales
    id: 17,
    slug: "maison-nanterre-mont-valerien-a-renover",
    title: "Maison à fort potentiel - Nanterre Mont Valérien",
    breadcrumbTitle: "Maison à fort potentiel - Nanterre Mont Valérien",
    location: "Nanterre - Mont-Valérien",
    postalCode: "92000",
    price: 449000,
    priceDisplay: "449 000 €",

    // Photos
    images: [
      "/photos/bonniec/ext.jpeg",
      "/photos/bonniec/ext-2.jpeg",
      "/photos/bonniec/ext-3.jpeg",
      "/photos/bonniec/facade.jpeg",
      "/photos/bonniec/interieur.jpeg",
      "/photos/bonniec/cuisine.jpeg",
      "/photos/bonniec/chambre.jpeg",
      "/photos/bonniec/piece2.jpeg",
      "/photos/bonniec/piece3.jpeg",
      "/photos/bonniec/comble.jpeg",
      "/photos/bonniec/veranda.jpeg",
    ],

    // Caractéristiques principales
    surface: 93.47,
    rooms: 4,
    terrain: 429,

    // Description
    subtitle: "Terrain généreux de 429 m² dans un secteur recherché",
    description: [
      {
        content:
          "Située à Nanterre, dans le très recherché secteur du Mont-Valérien, cette maison offre une opportunité rare sur le marché. Implantée dans un environnement calme et résidentiel, elle bénéficie d'un terrain généreux de 429 m², un atout précieux dans le quartier.",
      },
      {
        title: "Des volumes à exploiter",
        content:
          "Vous serez séduit par ses volumes et par la configuration permettant d'envisager de multiples possibilités d'aménagement. Ce bien se prête parfaitement à un projet de rénovation ou de transformation complète : extension, réorganisation des espaces, modernisation… Laissez libre cours à votre imagination pour créer le lieu de vie qui vous ressemble.",
      },
      {
        title: "Configuration actuelle",
        content:
          "La maison comprend 4 pièces principales dont 3 chambres, réparties sur 2 niveaux. Le grenier aménageable de 43 m² offre un potentiel d'extension supplémentaire. Une véranda de 17,74 m² complète cet ensemble et apporte luminosité et volume.",
      },
      {
        title: "Un potentiel exceptionnel",
        content:
          "Les biens à fort potentiel dans ce secteur sont peu fréquents. Si vous recherchez une maison à repenser selon vos envies tout en profitant d'un emplacement privilégié, ne passez pas à côté de cette opportunité. Venez découvrir tout le potentiel qu'elle offre et projetez-vous dans votre futur projet immobilier.",
      },
    ],

    // Informations détaillées (divisées en 2 colonnes)
    details: {
      col1: [
        { label: "Pièces", value: "4" },
        { label: "Chambres", value: "3" },
        { label: "Niveaux", value: "2" },
        { label: "Surface habitable", value: "93.47 m²" },
        { label: "Surface totale", value: "157.21 m²" },
        { label: "Surface terrain", value: "429 m²" },
        { label: "État", value: "À rénover" },
        { label: "Année construction", value: "1940" },
      ],
      col2: [
        { label: "Exposition", value: "Sud" },
        { label: "Vue", value: "Dégagée" },
        { label: "Type de chauffage", value: "Radiateur" },
        { label: "Énergie de chauffage", value: "Fioul / Mazout" },
        { label: "Moyen de chauffage", value: "Individuel" },
        { label: "Eau chaude", value: "Individuelle" },
        { label: "Eaux usées", value: "Tout à l'égout" },
        { label: "Disponibilité", value: "Libre" },
      ],
    },

    // Composition des pièces
    rooms_details: [
      { type: "Chambre", surface: "11.3 m²" },
      { type: "Véranda", surface: "17.74 m²" },
      { type: "Dégagement", surface: "12.2 m²" },
      { type: "Chambre", surface: "24.2 m²" },
      { type: "Chambre", surface: "10.73 m²" },
      { type: "Grenier", surface: "43 m²" },
      { type: "Terrain", surface: "429 m²" },
      { type: "Cave", surface: "-" },
      { type: "Abri de jardin", surface: "-" },
    ],

    // Prestations
    prestations: [
      "Grenier aménageable 43 m²",
      "Véranda",
      "Cave",
      "Abri de jardin",
      "Terrain 429 m²",
      "Exposition Sud",
      "Vue dégagée",
    ],

    // Proximités
    proximites: [
      "Autoroute",
      "Bus",
      "Centre ville",
      "Cinéma",
      "Commerces",
      "Crèche",
      "Hôpital/clinique",
      "Médecin",
      "Supermarché",
    ],

    // DPE
    dpe: {
      energyClass: "G",
      energyValue: 370,
      climateClass: "G",
      climateValue: 115,
      estimatedCostMin: 4360,
      estimatedCostMax: 5910,
      finalConsumption: null,
      auditDone: false,
    },

    // Carte
    map: {
      lat: 48.8774,
      lng: 2.2142,
      center: [48.8774, 2.2142],
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
    reference: "86482749",
    legalNotice:
      "EXP GLOBAL FRANCE - Non-détention de fonds - SIRET 89071070000018 - 424 000 € honoraires exclus - Honoraires de 5.9%TTC à charge acquéreur - Classe énergie 370 kWhEP/m².an (G) - Classe climat 115 kg CO2/m².an (G) - Montant estimé des dépenses annuelles d'énergie pour un usage standard, établi à partir des prix de l'énergie de l'année 2021 : 4 360€ ~ 5 910€ - Logement à consommation énergétique excessive : classe G - Les informations sur les risques auxquels ce bien est exposé sont disponibles sur le site Géorisques : www.georisques.gouv.fr - Vincent LECLERC - Agent commercial - EI - RSAC VERSAILLES 451 258 438",
  };

  return <PropertyDetailPage property={propertyData} />;
}

