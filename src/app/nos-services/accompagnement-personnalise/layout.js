export const metadata = {
  title:
    "Accompagnement Personnalisé | Rénovation Énergétique & Division Terrain | Ener Immo 92",
  description:
    "Accompagnement sur-mesure pour vos projets immobiliers : rénovation énergétique (DPE), division de terrain, valorisation de patrimoine. Success story : DPE G → C. Expert Mont-Valérien.",
  keywords:
    "rénovation énergétique, amélioration DPE, division terrain, accompagnement immobilier, MaPrimeRénov, artisans RGE, Nanterre, Rueil, Suresnes",
  alternates: {
    canonical: "https://ener-immo92.fr/nos-services/accompagnement-personnalise",
  },
  openGraph: {
    title:
      "Accompagnement Personnalisé | Rénovation Énergétique & Division Terrain",
    description:
      "Accompagnement sur-mesure : rénovation énergétique, division terrain, valorisation patrimoine. Success story DPE G → C.",
    url: "https://ener-immo92.fr/nos-services/accompagnement-personnalise",
    type: "website",
    images: [
      {
        url: "/photos/autret/facade-avant.jpeg",
        width: 1200,
        height: 630,
        alt: "Accompagnement rénovation énergétique - Ener Immo 92",
      },
    ],
  },
};

export default function AccompagnementLayout({ children }) {
  return children;
}

