// ============================================================
// 📋 TEMPLATE POUR NOUVEAU BIEN
// ============================================================
// 
// Instructions :
// 1. Copier ce fichier dans src/app/biens-a-vendre/[VOTRE-SLUG]/page.js
// 2. Remplir toutes les données ci-dessous
// 3. Créer le layout.js (voir GUIDE_AJOUT_BIENS.md)
// 4. Ajouter le bien dans biens-a-vendre/page.js
// 5. Ajouter le bien dans carte-biens/page.js
//
// ============================================================

import PropertyDetailPage from "@/components/PropertyDetailPage";

export default function NomDuBien() {
  const propertyData = {
    // ========================================
    // INFORMATIONS PRINCIPALES (OBLIGATOIRE)
    // ========================================
    id: 99, // ⚠️ IMPORTANT : Incrémenter le dernier ID utilisé
    slug: "votre-slug-ici", // Ex: appartement-nanterre-centre
    title: "Titre complet du bien",
    breadcrumbTitle: "Titre court", // Optionnel - pour le fil d'ariane
    location: "Ville", // Ex: Nanterre, Suresnes
    postalCode: "92XXX", // Ex: 92000
    price: 450000, // ⚠️ EN NOMBRE (sans espaces)
    priceDisplay: "450 000 €", // Optionnel - sera auto-généré si omis

    // ========================================
    // PHOTOS (OBLIGATOIRE)
    // ========================================
    // ⚠️ La première photo = photo principale
    images: [
      "/photos/DOSSIER/photo1.jpeg",
      "/photos/DOSSIER/photo2.jpeg",
      "/photos/DOSSIER/photo3.jpeg",
      // ... ajouter autant de photos que nécessaire
    ],

    // ========================================
    // CARACTÉRISTIQUES PRINCIPALES (OBLIGATOIRE)
    // ========================================
    surface: 85, // En m² (nombre)
    rooms: 4, // Nombre de pièces
    terrain: 200, // Optionnel - uniquement pour les maisons avec jardin

    // ========================================
    // DESCRIPTION (OBLIGATOIRE)
    // ========================================
    subtitle: "Sous-titre accrocheur et court", // Optionnel
    description: [
      {
        // Premier paragraphe (sans titre)
        content:
          "Description d'introduction du bien. Décrire l'emplacement, le type de bien, ses atouts principaux...",
      },
      {
        title: "Rez-de-chaussée", // Optionnel
        content:
          "Description détaillée du rez-de-chaussée : séjour, cuisine, WC...",
      },
      {
        title: "Premier étage",
        content: "Description de l'étage : chambres, salle de bain...",
      },
      {
        title: "Extérieur", // Si applicable
        content: "Description du jardin, terrasse, balcon...",
      },
      {
        // Dernier paragraphe de conclusion
        content: "Phrase de conclusion mettant en avant les atouts du bien.",
      },
    ],

    // ========================================
    // INFORMATIONS DÉTAILLÉES (OBLIGATOIRE)
    // ========================================
    // Divisées en 2 colonnes
    details: {
      col1: [
        { label: "Pièces", value: "4" },
        { label: "Chambres", value: "3" },
        { label: "Étage", value: "2/5" }, // Si appartement
        { label: "Niveaux", value: "2" }, // Si maison
        { label: "Taxe foncière", value: "1 200 €/an" },
        { label: "Charges", value: "150 €/mois" }, // Si copropriété
        { label: "Surface totale", value: "85 m²" },
        // Ajouter d'autres infos pertinentes
      ],
      col2: [
        { label: "Exposition", value: "Sud" },
        { label: "Vue", value: "Dégagée" },
        { label: "Type de chauffage", value: "Radiateur" },
        { label: "Énergie de chauffage", value: "Gaz" },
        { label: "Moyen de chauffage", value: "Individuel" },
        { label: "Eau chaude", value: "Chauffe-eau électrique" },
        { label: "État", value: "Bon état" }, // ou "À rafraîchir", "Excellent"
        // Ajouter d'autres infos pertinentes
      ],
    },

    // ========================================
    // PRESTATIONS (OPTIONNEL)
    // ========================================
    prestations: [
      "Double vitrage",
      "Balcon",
      "Cave",
      "Parking",
      "Ascenseur",
      "Interphone",
      "Digicode",
      // ... ajouter toutes les prestations
    ],

    // ========================================
    // PROXIMITÉS (OPTIONNEL)
    // ========================================
    proximites: [
      "RER A",
      "Bus",
      "Commerces",
      "École primaire",
      "Crèche",
      "Parc",
      "Supermarché",
      // ... ajouter tous les points d'intérêt
    ],

    // ========================================
    // DPE (OBLIGATOIRE)
    // ========================================
    dpe: {
      energyClass: "C", // A, B, C, D, E, F, G
      energyValue: 170, // En kWhEP/m².an
      climateClass: "B", // A, B, C, D, E, F, G
      climateValue: 10, // En kg CO2/m².an
      estimatedCostMin: 1200, // Optionnel
      estimatedCostMax: 1600, // Optionnel
      finalConsumption: "150 kWhEF/m².an", // Optionnel
      auditDone: false, // true si audit énergétique réalisé
    },

    // ========================================
    // CARTE ET LOCALISATION (OBLIGATOIRE)
    // ========================================
    map: {
      lat: 48.8915, // ⚠️ Coordonnées GPS (utiliser Google Maps)
      lng: 2.2065,
      zoom: 15, // Optionnel (par défaut 15)
      description: "Quartier, Ville (Code Postal)", // Optionnel
      nearbyPoints: [
        // Optionnel - Points d'intérêt à proximité
        {
          title: "RER A - Nanterre Ville",
          distance: "5 minutes à pied",
          icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
        },
        {
          title: "Centre-Ville",
          distance: "À proximité immédiate",
          icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
        },
        {
          title: "Écoles & Commerces",
          distance: "Toutes commodités",
          icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
        },
      ],
    },

    // ========================================
    // AGENT (OBLIGATOIRE)
    // ========================================
    // Choisir parmi les 3 agents :
    agent: {
      name: "Alexandre NAQUIN", // ou "Vincent LECLERC" ou "Mhamed EL MAMLOUK"
      photo: "/photos/alexandre.jpg", // ou vincent.jpg ou Mhamed.jpg
      rsac: "830744959", // Alexandre: 830744959 | Vincent: 451 258 438 | Mhamed: 805 060 431
      rsacCity: "Nanterre", // Alexandre: Nanterre | Vincent: VERSAILLES | Mhamed: ?
    },

    // ========================================
    // RÉFÉRENCE (OBLIGATOIRE)
    // ========================================
    reference: "86401234", // Référence unique du bien

    // ========================================
    // MENTIONS LÉGALES (OBLIGATOIRE)
    // ========================================
    legalNotice:
      "EXP GLOBAL FRANCE - Non-détention de fonds - SIRET 89071070000018 - Honoraires à la charge du vendeur - Classe énergie XXX kWhEP/m².an (X) - Classe climat XX kg CO2/m².an (X) - Montant estimé des dépenses annuelles d'énergie pour un usage standard, établi à partir des prix de l'énergie de l'année 2021 : XXXX€ ~ XXXX€ - Les informations sur les risques auxquels ce bien est exposé sont disponibles sur le site Géorisques : www.georisques.gouv.fr - [NOM AGENT] - Agent commercial - EI - RSAC [VILLE] [NUMERO]",
  };

  return <PropertyDetailPage property={propertyData} />;
}

