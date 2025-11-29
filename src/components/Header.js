'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [0.95, 1]);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Notre histoire', href: '/a-propos' },
    { name: 'Nos services', href: '/nos-services' },
    { name: 'Biens à vendre', href: '/biens-a-vendre' },
    { name: 'Biens vendus', href: '/biens-vendus' },
    { name: 'Calculateur', href: '/calculateur' },
  ];

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
      style={{ opacity: headerOpacity }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">eXp France - Mont-Valérien</span>
            <Image
              src="/photos/eXp_Logo_Black.png"
              alt="eXp France"
              width={120}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Ouvrir le menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => {
            const isActive = pathname === item.href || 
              (item.href !== '/' && pathname.startsWith(item.href));
            return (
              <motion.div key={item.name} whileHover={{ scale: 1.05 }}>
                <Link
                  href={item.href}
                  className={`text-sm font-semibold leading-6 transition-colors relative ${
                    isActive 
                      ? 'text-[#2998a6]' 
                      : 'text-gray-900 hover:text-[#2998a6]'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#2998a6] rounded-full"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/contact"
            className="rounded-md bg-[#2998a6] px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#0d6c8a] transition-colors"
          >
            Nous contacter
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href || 
                (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block rounded-md px-3 py-2 text-base font-medium ${
                    isActive 
                      ? 'bg-[#2998a6]/10 text-[#2998a6] border-l-4 border-[#2998a6]' 
                      : 'text-gray-900 hover:bg-gray-50'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className={`block rounded-md px-3 py-2 text-base font-semibold text-center mt-4 ${
                pathname === '/contact'
                  ? 'bg-[#0d6c8a] text-white'
                  : 'bg-[#2998a6] text-white'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Nous contacter
            </Link>
          </div>
        </div>
      )}
    </motion.header>
  );
}

