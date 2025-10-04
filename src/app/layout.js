import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
  title: "eXp France - Mont-Valérien | Immobilier Nanterre, Puteaux, Suresnes, Rueil",
  description: "Spécialistes du secteur du Mont-Valérien, nous vous accompagnons dans la vente, l'achat et la valorisation de votre bien immobilier à Nanterre, Puteaux, Suresnes et Rueil-Malmaison.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
