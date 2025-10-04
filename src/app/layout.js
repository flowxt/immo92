import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "eXp France - Mont-Valérien | Immobilier Nanterre, Puteaux, Suresnes, Rueil",
  description: "Spécialistes du secteur du Mont-Valérien, nous vous accompagnons dans la vente, l'achat et la valorisation de votre bien immobilier à Nanterre, Puteaux, Suresnes et Rueil-Malmaison.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
