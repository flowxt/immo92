export const metadata = {
  title: "Calculateur de prêt immobilier | Simulez votre financement",
  description:
    "Calculez votre capacité d'emprunt et vos mensualités de prêt immobilier. Simulateur gratuit et sans engagement pour votre projet immobilier dans le 92.",
  alternates: {
    canonical: "https://ener-immo92.fr/calculateur",
  },
  openGraph: {
    title: "Calculateur de prêt immobilier | Ener Immo 92",
    description:
      "Calculez votre capacité d'emprunt et vos mensualités de prêt immobilier. Simulateur gratuit et sans engagement.",
    url: "https://ener-immo92.fr/calculateur",
    type: "website",
    images: [
      {
        url: "/photos/mont-valerien.jpg",
        width: 1200,
        height: 630,
        alt: "Calculateur de prêt immobilier - Ener Immo 92",
      },
    ],
  },
};

export default function CalculateurLayout({ children }) {
  return children;
}

