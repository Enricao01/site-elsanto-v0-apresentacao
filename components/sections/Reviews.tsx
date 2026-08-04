'use client';

import { motion } from 'motion/react';
import { REVIEWS } from '@/lib/data';
import { Star } from 'lucide-react';

export function Reviews() {
  return (
    <section id="reviews" className="py-32 bg-brand-black relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-brand-olive/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center gap-1 mb-6 text-brand-gold"
          >
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} fill="currentColor" />
            ))}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-offwhite mb-6"
          >
            A Voz dos Nossos <span className="italic text-brand-offwhite/60">Convidados</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-brand-offwhite/60 uppercase tracking-widest text-sm"
          >
            Mais de 80 avaliações excepcionais
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel p-8 flex flex-col justify-between hover:-translate-y-2 transition-transform duration-500"
            >
              <div>
                <div className="flex gap-1 text-brand-gold/70 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="font-serif text-lg text-brand-offwhite/90 leading-relaxed mb-8 italic">
                  &quot;{review.text}&quot;
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-surface border border-white/5 flex items-center justify-center">
                  <span className="font-sans font-medium text-brand-offwhite/50 text-sm">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-sans text-sm tracking-wide text-brand-offwhite uppercase">
                    {review.name}
                  </h4>
                  <span className="text-xs font-light text-brand-offwhite/40">Google Review</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
