'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [0.95, 1]);
  const pathname = usePathname();
  const servicesRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer le menu services quand on clique ailleurs
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setServicesMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Notre histoire', href: '/a-propos' },
    { name: 'Biens à vendre', href: '/biens-a-vendre' },
    { name: 'Biens vendus', href: '/biens-vendus' },
    { name: 'Calculateur', href: '/calculateur' },
  ];

  const servicesSubmenu = [
    { name: 'Tous nos services', href: '/nos-services', icon: '🏠' },
    { name: 'Accompagnement personnalisé', href: '/nos-services/accompagnement-personnalise', icon: '⚡', highlight: true },
  ];

  const isServicesActive = pathname === '/nos-services' || pathname.startsWith('/nos-services/');

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
          {navigation.slice(0, 2).map((item) => {
            const isActive = pathname === item.href;
            return (
              <motion.div key={item.name} whileHover={{ scale: 1.05 }}>
                <Link
                  href={item.href}
                  className={`text-sm font-semibold leading-6 transition-colors relative ${
                    isActive ? 'text-[#2998a6]' : 'text-gray-900 hover:text-[#2998a6]'
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

          {/* Menu déroulant Nos services */}
          <div className="relative" ref={servicesRef}>
            <button
              onClick={() => setServicesMenuOpen(!servicesMenuOpen)}
              onMouseEnter={() => setServicesMenuOpen(true)}
              className={`text-sm font-semibold leading-6 transition-colors relative flex items-center gap-1 ${
                isServicesActive ? 'text-[#2998a6]' : 'text-gray-900 hover:text-[#2998a6]'
              }`}
            >
              Nos services
              <svg 
                className={`w-4 h-4 transition-transform duration-200 ${servicesMenuOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              {isServicesActive && (
                <motion.span
                  layoutId="activeIndicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#2998a6] rounded-full"
                  initial={false}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>

            {/* Dropdown */}
            <AnimatePresence>
              {servicesMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  onMouseLeave={() => setServicesMenuOpen(false)}
                  className="absolute left-0 mt-3 w-72 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50"
                >
                  <div className="py-2">
                    {servicesSubmenu.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setServicesMenuOpen(false)}
                        className={`flex items-center gap-3 px-4 py-3 text-sm transition-colors ${
                          item.highlight 
                            ? 'bg-gradient-to-r from-[#2998a6]/10 to-[#0d6c8a]/10 hover:from-[#2998a6]/20 hover:to-[#0d6c8a]/20 border-l-4 border-[#2998a6]'
                            : 'hover:bg-gray-50'
                        } ${pathname === item.href ? 'text-[#2998a6] font-semibold' : 'text-gray-700'}`}
                      >
                        <span className="text-lg">{item.icon}</span>
                        <div>
                          <span className="font-medium">{item.name}</span>
                          {item.highlight && (
                            <p className="text-xs text-[#0d6c8a] mt-0.5">Rénovation & Division de terrain</p>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navigation.slice(2).map((item) => {
            const isActive = pathname === item.href || 
              (item.href !== '/' && pathname.startsWith(item.href));
            return (
              <motion.div key={item.name} whileHover={{ scale: 1.05 }}>
                <Link
                  href={item.href}
                  className={`text-sm font-semibold leading-6 transition-colors relative ${
                    isActive ? 'text-[#2998a6]' : 'text-gray-900 hover:text-[#2998a6]'
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
        <div className="lg:hidden bg-white border-t">
          <div className="space-y-1 px-4 pb-4 pt-3">
            {navigation.slice(0, 2).map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block rounded-lg px-3 py-3 text-base font-medium ${
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

            {/* Nos services avec sous-menu mobile */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className={`w-full flex items-center justify-between rounded-lg px-3 py-3 text-base font-medium ${
                  isServicesActive 
                    ? 'bg-[#2998a6]/10 text-[#2998a6] border-l-4 border-[#2998a6]' 
                    : 'text-gray-900 hover:bg-gray-50'
                }`}
              >
                <span>Nos services</span>
                <svg 
                  className={`w-5 h-5 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {mobileServicesOpen && (
                <div className="ml-4 mt-1 space-y-1 border-l-2 border-gray-200">
                  {servicesSubmenu.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm ${
                        item.highlight 
                          ? 'bg-[#2998a6]/5 text-[#0d6c8a] font-medium'
                          : pathname === item.href 
                            ? 'text-[#2998a6] font-medium' 
                            : 'text-gray-700 hover:bg-gray-50'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span>{item.icon}</span>
                      <span>{item.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navigation.slice(2).map((item) => {
              const isActive = pathname === item.href || 
                (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block rounded-lg px-3 py-3 text-base font-medium ${
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
              className={`block rounded-lg px-3 py-3 text-base font-semibold text-center mt-4 ${
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
