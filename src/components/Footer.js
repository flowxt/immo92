import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const navigation = {
    services: [
      { name: "Estimation immobilière", href: "/nos-services" },
      { name: "Rénovation énergétique", href: "/nos-services" },
      { name: "Division de terrain", href: "/nos-services" },
      { name: "Mise en valeur", href: "/nos-services" },
    ],
    pages: [
      { name: "À propos", href: "/a-propos" },
      { name: "Biens à vendre", href: "/biens-a-vendre" },
      { name: "Carte des biens", href: "/carte-biens" },
      { name: "Calculateur de prêt", href: "/calculateur" },
      { name: "Biens vendus", href: "/biens-vendus" },
      { name: "Contact", href: "/contact" },
    ],
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Section principale du footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* À propos */}
          <div className="space-y-4">
            <div className="mb-4">
              <Image
                src="/photos/eXp_Logo_Black.png"
                alt="eXp France"
                width={120}
                height={40}
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <h3 className="text-lg font-bold text-white">
              eXp France - Mont-Valérien
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Votre partenaire immobilier de confiance pour la vente, l&apos;achat et la valorisation de biens dans le secteur du Mont-Valérien.
            </p>
            <div className="pt-2">
              <a
                href="https://www.expfrance.fr/fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors text-sm font-semibold group"
              >
                <span>Découvrir eXp France</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Nos services */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Nos services</h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <svg
                      className="w-4 h-4 mr-2 text-blue-500 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Liens rapides */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Liens rapides</h3>
            <ul className="space-y-3">
              {navigation.pages.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <svg
                      className="w-4 h-4 mr-2 text-blue-500 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div>
                  <p className="text-sm text-gray-400">
                    Mont-Valérien<br />
                    Hauts-de-Seine (92)
                  </p>
                </div>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="/contact"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Nous contacter
                </a>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-sm text-gray-400">
                  Disponible 7j/7
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Séparateur */}
        <div className="mt-12 border-t border-gray-700 pt-8">
          {/* Zone d'expertise */}
          <div className="mb-6 text-center">
            <p className="text-sm font-semibold text-amber-400 mb-3">
              Zone d&apos;expertise
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Mont-Valérien", "Nanterre", "Puteaux", "Suresnes", "Rueil-Malmaison"].map((ville) => (
                <span
                  key={ville}
                  className="inline-block px-4 py-2 bg-gray-800/50 text-gray-300 text-xs font-medium rounded-full border border-gray-700 hover:border-blue-500 hover:text-white transition-colors"
                >
                  {ville}
                </span>
              ))}
            </div>
          </div>

          {/* Copyright et mentions */}
          <div className="text-center space-y-2">
            <p className="text-xs text-gray-500">
              Cellule indépendante du réseau eXp France spécialisée dans le secteur du Mont-Valérien (92)
            </p>
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} eXp France - Mont-Valérien. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
