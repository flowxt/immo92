import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const navigation = {
    main: [
      { name: 'Accueil', href: '/' },
      { name: 'À propos', href: '/a-propos' },
      { name: 'Nos services', href: '/nos-services' },
      { name: 'Biens à vendre', href: '/biens-a-vendre' },
      { name: 'Biens vendus', href: '/biens-vendus' },
      { name: 'Contact', href: '/contact' },
    ],
  };

  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <div className="mb-8 flex justify-center">
          <Image
            src="/photos/eXp_Logo_Black.png"
            alt="eXp France"
            width={150}
            height={50}
            className="h-12 w-auto brightness-0 invert"
          />
        </div>
        
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <Link
                href={item.href}
                className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        
        <div className="mt-10 border-t border-gray-700 pt-8">
          <div className="mb-6 text-center">
            <p className="text-sm font-semibold text-amber-400 mb-2">Membre du réseau</p>
            <a 
              href="https://www.expfrance.fr/fr/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors group"
            >
              <span className="text-lg font-bold">eXp France</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <p className="text-xs text-gray-500 mt-2 max-w-2xl mx-auto">
              Cellule indépendante du réseau eXp France spécialisée dans le secteur du Mont-Valérien (92)
            </p>
          </div>
          <p className="text-center text-sm leading-5 text-gray-400">
            Secteur d'expertise : Mont-Valérien, Nanterre, Puteaux, Suresnes, Rueil-Malmaison
          </p>
          <p className="mt-4 text-center text-xs leading-5 text-gray-500">
            &copy; {new Date().getFullYear()} eXp France - Mont-Valérien. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}

