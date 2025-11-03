export const metadata = {
  title: "Biens à vendre | Maisons & Appartements Mont-Valérien (92)",
  description:
    "Découvrez nos maisons et appartements à vendre à Nanterre, Suresnes, Rueil-Malmaison et Puteaux. Sélection de biens d'exception autour du Mont-Valérien.",
  alternates: {
    canonical: "https://ener-immo92.fr/biens-a-vendre",
  },
  openGraph: {
    title: "Biens à vendre | Maisons & Appartements Mont-Valérien",
    description:
      "Découvrez nos maisons et appartements à vendre autour du Mont-Valérien. Sélection de biens d'exception dans les Hauts-de-Seine.",
    url: "https://ener-immo92.fr/biens-a-vendre",
    type: "website",
    images: [
      {
        url: "/photos/mont-valerien.jpg",
        width: 1200,
        height: 630,
        alt: "Biens immobiliers Mont-Valérien",
      },
    ],
  },
};

export default function BiensAVendreLayout({ children }) {
  return children;
}

