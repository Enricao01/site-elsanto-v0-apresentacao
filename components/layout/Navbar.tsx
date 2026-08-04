'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { RESTAURANT_INFO } from '@/lib/data';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'História', href: '#about' },
    { name: 'Cardápio', href: '#menu' },
    { name: 'Avaliações', href: '#reviews' },
    { name: 'Localização', href: '#location' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled ? 'glass-panel py-4' : 'bg-transparent py-6'
        )}
      >
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
          <Link href="/" className="group relative z-50">
            <h1 className="font-serif text-2xl font-bold tracking-widest text-brand-offwhite uppercase flex flex-col">
              El Santo
              <span className="text-[0.55rem] tracking-[0.3em] font-sans font-light text-brand-gold opacity-80 group-hover:opacity-100 transition-opacity">
                Cocina Mexicana
              </span>
            </h1>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-sans tracking-widest text-brand-offwhite/70 hover:text-brand-offwhite transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-brand-gold after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-right hover:after:origin-left"
              >
                {link.name.toUpperCase()}
              </Link>
            ))}
            <a
              href={RESTAURANT_INFO.ifoodLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-[#EA1D2C] text-white text-xs font-bold tracking-widest hover:bg-[#c41523] transition-all duration-300 shadow-md flex items-center gap-1.5"
            >
              <span>IFOOD</span>
            </a>
            <a
              href={`https://wa.me/${RESTAURANT_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 border border-brand-gold/30 text-brand-gold text-xs tracking-widest hover:bg-brand-gold hover:text-brand-black transition-all duration-300"
            >
              RESERVAR
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden relative z-50 text-brand-offwhite"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-brand-black flex flex-col items-center justify-center space-y-8"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.2 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-serif text-3xl text-brand-offwhite hover:text-brand-gold transition-colors"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="pt-8"
            >
              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-brand-terracotta text-brand-offwhite font-sans tracking-widest hover:bg-brand-red transition-colors"
              >
                FAZER PEDIDO
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
