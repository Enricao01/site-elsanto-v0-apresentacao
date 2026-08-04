'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-brand-black border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <h1 className="font-serif text-3xl font-bold tracking-widest text-brand-offwhite uppercase flex flex-col">
                El Santo
                <span className="text-xs tracking-[0.3em] font-sans font-light text-brand-gold opacity-80 mt-1">
                  Cocina Mexicana
                </span>
              </h1>
            </Link>
            <p className="font-sans font-light text-brand-offwhite/60 max-w-sm leading-relaxed">
              Autenticidade mexicana reinterpretada com padrão contemporâneo. Uma experiência sensorial, do ambiente à mesa.
            </p>
          </div>

          <div>
            <h4 className="font-sans text-sm tracking-widest uppercase text-brand-offwhite mb-6">Menu</h4>
            <ul className="space-y-4 font-sans font-light text-brand-offwhite/60">
              <li><Link href="#about" className="hover:text-brand-gold transition-colors">História</Link></li>
              <li><Link href="#menu" className="hover:text-brand-gold transition-colors">Cardápio</Link></li>
              <li><Link href="#reviews" className="hover:text-brand-gold transition-colors">Avaliações</Link></li>
              <li><Link href="#location" className="hover:text-brand-gold transition-colors">Localização</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-sm tracking-widest uppercase text-brand-offwhite mb-6">Social</h4>
            <ul className="space-y-4 font-sans font-light text-brand-offwhite/60">
              <li>
                <a
                  href="https://www.instagram.com/elsantorp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-gold transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Facebook</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans tracking-widest uppercase text-brand-offwhite/40">
          <p>© {new Date().getFullYear()} El Santo. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
