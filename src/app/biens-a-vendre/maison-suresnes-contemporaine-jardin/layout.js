export const metadata = {
  title:
    "Maison Familiale Contemporaine - Suresnes Mont-Valérien | 4 chambres, Jardin 165 m²",
  description:
    "Découvrez cette maison d'architecte récente (2015) de 120 m² avec jardin de 165 m² à Suresnes, Mont-Valérien. 4 chambres, triple exposition, sous-sol aménageable. Standing et modernité aux portes de Paris.",
  openGraph: {
    title:
      "Maison Familiale Contemporaine - Suresnes Mont-Valérien | 830 000 €",
    description:
      "Maison d'architecte 2015, 120 m² + jardin 165 m². 4 chambres, triple exposition, sous-sol 50 m². Alliance parfaite entre modernité, calme et verdure.",
    images: [
      {
        url: "/photos/maison-jardin/exterieur.jpeg",
        width: 1200,
        height: 630,
        alt: "Maison familiale contemporaine Suresnes Mont-Valérien",
      },
    ],
  },
  alternates: {
    canonical: "/biens-a-vendre/maison-suresnes-contemporaine-jardin",
  },
};

export default function Layout({ children }) {
  return children;
}

