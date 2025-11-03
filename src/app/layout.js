import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title:
    "Ener Immo 92 | Agent Immobilier Mont-Valérien, Nanterre, Suresnes, Rueil | eXp France",
  description:
    "Agent immobilier expert du Mont-Valérien (92) : vente, achat, estimation gratuite à Nanterre, Suresnes, Rueil-Malmaison, Puteaux, Bezons, Chatou. Rénovation énergétique, accompagnement personnalisé. Réseau eXp France.",
  keywords:
    "agent immobilier Mont-Valérien, immobilier Nanterre, vente maison Suresnes, appartement Rueil-Malmaison, estimation immobilière 92, rénovation énergétique, agent immobilier Puteaux, immobilier Bezons, eXp France, Hauts-de-Seine",
  authors: [{ name: "Ener Immo 92 - eXp France" }],
  creator: "Ener Immo 92",
  publisher: "eXp France",
  metadataBase: new URL("https://ener-immo92.fr"),
  alternates: {
    canonical: "https://ener-immo92.fr",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://ener-immo92.fr",
    siteName: "Ener Immo 92 - Agent Immobilier Mont-Valérien",
    title:
      "Ener Immo 92 | Expert Immobilier Mont-Valérien & Hauts-de-Seine (92)",
    description:
      "Agent immobilier spécialisé Mont-Valérien : vente, achat, estimation gratuite. Nanterre, Suresnes, Rueil, Puteaux, Bezons, Chatou. Rénovation énergétique & accompagnement sur-mesure.",
    images: [
      {
        url: "/photos/mont-valerien.jpg",
        width: 1200,
        height: 630,
        alt: "Ener Immo 92 - Agent Immobilier Mont-Valérien",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ener Immo 92 | Agent Immobilier Mont-Valérien (92)",
    description:
      "Expert immobilier Mont-Valérien : vente, achat, estimation gratuite. Nanterre, Suresnes, Rueil, Puteaux. Réseau eXp France.",
    images: ["/photos/mont-valerien.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "kd7jQdY-bMg5FdxOyZkU6LR1hnJ5iAN0wwteiq_XkRA",
  },
};

export default function RootLayout({ children }) {
  // Schema.org JSON-LD pour le SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "Ener Immo 92",
    image: "https://ener-immo92.fr/photos/mont-valerien.jpg",
    url: "https://ener-immo92.fr",
    telephone: "+33662155757",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Hauts-de-Seine",
      addressCountry: "FR",
      postalCode: "92000",
      addressLocality: "Mont-Valérien",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "48.8774",
      longitude: "2.2142",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Nanterre",
      },
      {
        "@type": "City",
        name: "Suresnes",
      },
      {
        "@type": "City",
        name: "Rueil-Malmaison",
      },
      {
        "@type": "City",
        name: "Puteaux",
      },
      {
        "@type": "City",
        name: "Bezons",
      },
      {
        "@type": "City",
        name: "Chatou",
      },
      {
        "@type": "City",
        name: "Garches",
      },
      {
        "@type": "City",
        name: "Colombes",
      },
    ],
    priceRange: "€€",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00",
      closes: "19:00",
    },
    memberOf: {
      "@type": "Organization",
      name: "eXp France",
    },
    sameAs: ["https://www.expfrance.fr"],
  };

  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
