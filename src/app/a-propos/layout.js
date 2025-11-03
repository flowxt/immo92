export const metadata = {
  title: "À propos | Ener Immo 92 - Experts du Mont-Valérien",
  description:
    "Découvrez notre équipe d'agents immobiliers experts du Mont-Valérien. Plus de 10 ans d'expérience au service de vos projets immobiliers dans les Hauts-de-Seine.",
  alternates: {
    canonical: "https://ener-immo92.fr/a-propos",
  },
  openGraph: {
    title: "À propos | Ener Immo 92 - Experts du Mont-Valérien",
    description:
      "Découvrez notre équipe d'agents immobiliers experts du Mont-Valérien. Plus de 10 ans d'expérience au service de vos projets immobiliers.",
    url: "https://ener-immo92.fr/a-propos",
    type: "website",
    images: [
      {
        url: "/photos/mont-valerien.jpg",
        width: 1200,
        height: 630,
        alt: "Équipe Ener Immo 92",
      },
    ],
  },
};

export default function AProposLayout({ children }) {
  return children;
}

