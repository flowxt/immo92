export const metadata = {
  title: "Maison vendue après rénovation énergétique Nanterre | Ener Immo 92",
  description:
    "Maison vendue à Nanterre après rénovation énergétique. Amélioration DPE F vers C, valorisation maximale. Exemple de notre accompagnement en rénovation.",
  alternates: {
    canonical: "https://ener-immo92.fr/biens-vendus/maison-nanterre-renovation-energetique",
  },
  openGraph: {
    title: "Maison vendue après rénovation énergétique Nanterre",
    description:
      "Maison vendue à Nanterre après rénovation énergétique. Amélioration DPE F vers C, valorisation maximale.",
    url: "https://ener-immo92.fr/biens-vendus/maison-nanterre-renovation-energetique",
    type: "website",
    images: [
      {
        url: "/photos/moitie-renov.png",
        width: 1200,
        height: 630,
        alt: "Maison rénovée Nanterre",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MaisonNanterreRenovationEnergetiqueLayout({ children }) {
  return children;
}

