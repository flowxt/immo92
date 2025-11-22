# 📋 Guide d'ajout d'un nouveau bien immobilier

Ce guide explique comment ajouter rapidement un nouveau bien à vendre sur le site.

## 🎯 Vue d'ensemble

Grâce au composant `PropertyDetailPage`, l'ajout d'un bien se fait en 4 étapes :
1. Créer le dossier et le fichier de la page
2. Copier le template et remplir les données
3. Ajouter le bien à la liste (`biens-a-vendre/page.js`)
4. Ajouter le bien sur la carte (`carte-biens/page.js`)

---

## 📝 Étape 1 : Créer la page du bien

### 1.1 Structure de dossier

Créer le dossier dans `src/app/biens-a-vendre/[slug]/` :
- Utiliser un slug descriptif : `maison-ville-caracteristique`
- Exemples : `appartement-nanterre-centre`, `maison-suresnes-jardin`

### 1.2 Créer les fichiers

Deux fichiers à créer :
- `page.js` : La page avec les données
- `layout.js` : Les métadonnées SEO

---

## 🔧 Étape 2 : Template de page.js

Copier ce template dans `page.js` et remplir les données :

```javascript
import PropertyDetailPage from "@/components/PropertyDetailPage";

export default function NomDuBien() {
  const propertyData = {
    // === INFORMATIONS PRINCIPALES ===
    id: 16, // Incrémenter le dernier ID
    slug: "votre-slug",
    title: "Titre du bien",
    breadcrumbTitle: "Titre court", // Optionnel
    location: "Ville",
    postalCode: "92XXX",
    price: 450000, // En nombre
    priceDisplay: "450 000 €", // Optionnel, auto-généré si omis

    // === PHOTOS ===
    images: [
      "/photos/dossier/photo1.jpeg",
      "/photos/dossier/photo2.jpeg",
      // ... autres photos
    ],

    // === CARACTÉRISTIQUES PRINCIPALES ===
    surface: 85, // En nombre (m²)
    rooms: 4,
    terrain: 200, // Optionnel (pour les maisons)

    // === DESCRIPTION ===
    subtitle: "Sous-titre accrocheur", // Optionnel
    description: [
      {
        content: "Paragraphe d'introduction...",
      },
      {
        title: "Titre de section", // Optionnel
        content: "Description de cette section...",
      },
      // ... autres sections
    ],

    // === INFORMATIONS DÉTAILLÉES ===
    // Divisées en 2 colonnes
    details: {
      col1: [
        { label: "Pièces", value: "4" },
        { label: "Chambres", value: "3" },
        { label: "Étage", value: "2" },
        { label: "Taxe foncière", value: "1 200 €/an" },
        // ...
      ],
      col2: [
        { label: "Exposition", value: "Sud" },
        { label: "Chauffage", value: "Gaz individuel" },
        { label: "État", value: "Excellent" },
        // ...
      ],
    },

    // === PRESTATIONS ===
    prestations: [
      "Double vitrage",
      "Balcon",
      "Cave",
      // ...
    ],

    // === PROXIMITÉS ===
    proximites: [
      "RER A",
      "Commerces",
      "Écoles",
      // ...
    ],

    // === DPE ===
    dpe: {
      energyClass: "C",
      energyValue: 170,
      climateClass: "B",
      climateValue: 10,
      estimatedCostMin: 1200, // Optionnel
      estimatedCostMax: 1600, // Optionnel
      finalConsumption: "150 kWhEF/m².an", // Optionnel
      auditDone: true, // Optionnel (si audit énergétique réalisé)
    },

    // === CARTE ET LOCALISATION ===
    map: {
      lat: 48.8915, // Coordonnées GPS
      lng: 2.2065,
      zoom: 15, // Optionnel, par défaut 15
      description: "Quartier, Ville (CP)", // Optionnel
      nearbyPoints: [ // Optionnel
        {
          title: "RER A - Nanterre Ville",
          distance: "5 minutes à pied",
          icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
        },
        // ... autres points
      ],
    },

    // === AGENT ===
    agent: {
      name: "Alexandre NAQUIN", // ou "Vincent LECLERC" ou "Mhamed EL MAMLOUK"
      photo: "/photos/alexandre.jpg", // ou vincent.jpg ou Mhamed.jpg
      rsac: "830744959",
      rsacCity: "Nanterre", // ou "VERSAILLES"
    },

    // === RÉFÉRENCE ===
    reference: "86401234",

    // === MENTIONS LÉGALES ===
    legalNotice: "EXP GLOBAL FRANCE - Non-détention de fonds - SIRET 89071070000018 - ...",
  };

  return <PropertyDetailPage property={propertyData} />;
}
```

---

## 📄 Template de layout.js

Créer `layout.js` avec les métadonnées SEO :

```javascript
export const metadata = {
  title: "Titre du bien - Ville | Détails | Prix",
  description: "Description optimisée pour SEO (150-160 caractères)",
  openGraph: {
    title: "Titre du bien - Ville | Prix",
    description: "Description pour partage sur réseaux sociaux",
    images: [
      {
        url: "/photos/dossier/photo-principale.jpeg",
        width: 1200,
        height: 630,
        alt: "Description de l'image",
      },
    ],
  },
  alternates: {
    canonical: "/biens-a-vendre/votre-slug",
  },
};

export default function Layout({ children }) {
  return children;
}
```

---

## 📍 Étape 3 : Ajouter à la liste des biens

Dans `src/app/biens-a-vendre/page.js`, ajouter le bien dans le tableau `allProperties` :

```javascript
{
  id: 16, // Même ID que dans la page
  title: "Titre du bien",
  subtitle: "Sous-titre court",
  location: "Ville",
  surface: "85 m²",
  rooms: 4,
  roomsLabel: "4 pièces - 3 chambres",
  image: "/photos/dossier/photo-principale.jpeg",
  price: "450 000 €",
  priceValue: 450000,
  slug: "votre-slug",
  type: "appartement", // ou "maison"
  featured: false, // true seulement pour le loft industriel
  available: true,
  agent: "Alexandre NAQUIN", // ou autre agent
  rsac: "830744959",
  exclusive: false, // true si exclusivité
  terrain: "200 m²", // Optionnel pour maisons
},
```

---

## 🗺️ Étape 4 : Ajouter sur la carte

Dans `src/app/carte-biens/page.js`, ajouter dans `allProperties` :

```javascript
{
  id: 16, // Même ID
  title: "Titre du bien",
  location: "Ville",
  price: "450 000 €",
  image: "/photos/dossier/photo-principale.jpeg",
  slug: "votre-slug",
  lat: 48.8915, // Coordonnées GPS
  lng: 2.2065,
},
```

---

## 🎨 Icônes SVG pour nearbyPoints

Voici quelques icônes courantes (attribut `icon`) :

```javascript
// Transport en commun
"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"

// Immeubles / La Défense
"M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"

// Écoles / Commerces
"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"

// Maison / Centre-ville
"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
```

---

## ✅ Checklist avant mise en ligne

- [ ] Photos optimisées et placées dans `/public/photos/`
- [ ] Page créée avec toutes les données
- [ ] Layout.js avec métadonnées SEO
- [ ] Bien ajouté à la liste (`biens-a-vendre/page.js`)
- [ ] Bien ajouté sur la carte (`carte-biens/page.js`)
- [ ] Build réussi : `npm run build`
- [ ] Test en local : `npm run dev`
- [ ] Coordonnées GPS correctes
- [ ] Tous les champs obligatoires remplis

---

## 🚀 Commandes utiles

```bash
# Build pour vérifier
npm run build

# Lancer en local
npm run dev

# Nettoyer le cache si problème
rm -rf .next && npm run dev
```

---

## 💡 Conseils

1. **Photos** : Toujours mettre la photo principale en premier dans le tableau `images`
2. **Coordonnées GPS** : Utiliser Google Maps pour trouver les coordonnées exactes
3. **Description** : Structurer en sections pour une meilleure lisibilité
4. **DPE** : Les valeurs doivent correspondre au diagnostic officiel
5. **Prix** : Utiliser le format nombre pour `price` et string pour `priceDisplay`

---

## 🆘 En cas de problème

1. Vérifier qu'il n'y a pas d'apostrophes non échappées (`'` → `&apos;`)
2. Nettoyer le cache `.next` : `rm -rf .next`
3. Vérifier que l'ID est unique
4. Vérifier que le slug est unique
5. S'assurer que toutes les photos existent

---

**🎉 C'est tout ! L'ajout d'un bien prend maintenant 5-10 minutes au lieu de 30+ minutes !**

