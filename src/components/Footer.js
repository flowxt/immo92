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

