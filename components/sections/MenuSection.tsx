'use client';

import { motion } from 'motion/react';
import { MENU_CATEGORIES } from '@/lib/data';
import { cn } from '@/lib/utils';
import { useState } from 'react';

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState(MENU_CATEGORIES[0].id);

  return (
    <section id="menu" className="py-32 bg-brand-surface relative">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-terracotta tracking-[0.3em] text-xs uppercase mb-4 block"
          >
            A Experiência
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl md:text-7xl text-brand-offwhite mb-6"
          >
            Cardápio
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 inline-flex flex-col sm:flex-row items-center gap-4 bg-brand-surface border border-[#EA1D2C]/40 p-4 px-6 rounded-lg shadow-2xl"
          >
            <div className="text-left">
              <p className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-[#EA1D2C] rounded-full animate-pulse"></span>
                Receba em Casa com iFood
              </p>
              <p className="text-xs text-brand-offwhite/60 font-light mt-0.5">
                Faça seu pedido diretamente e acompanhe a entrega em tempo real.
              </p>
            </div>
            <a
              href="https://www.ifood.com.br/delivery/sao-jose-do-rio-preto-sp/el-santo-cocina---burritos-quesadilla-e-tacos-vila-santo-antonio/be185ee8-e00d-4990-b2b5-ad72d06b1897"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-[#EA1D2C] hover:bg-[#c41523] text-white font-bold text-xs tracking-widest transition-colors rounded uppercase shadow-lg whitespace-nowrap"
            >
              Fazer Pedido no iFood
            </a>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 relative">
          
          {/* Category Sidebar (Sticky on Desktop) */}
          <div className="lg:w-1/4 relative">
            <div className="sticky top-32 flex flex-col gap-2 overflow-x-auto lg:overflow-visible flex-row lg:flex-col pb-4 lg:pb-0 scrollbar-hide">
              {MENU_CATEGORIES.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={cn(
                    "text-left font-sans text-sm tracking-widest uppercase py-3 px-4 transition-all duration-300 whitespace-nowrap border-l-2",
                    activeCategory === category.id 
                      ? "text-brand-gold border-brand-gold bg-brand-gold/5" 
                      : "text-brand-offwhite/40 border-transparent hover:text-brand-offwhite/80 hover:border-brand-offwhite/20"
                  )}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </div>

          {/* Menu Items List */}
          <div className="lg:w-3/4 min-h-[500px]">
            {MENU_CATEGORIES.map((category) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ 
                  opacity: activeCategory === category.id ? 1 : 0,
                  x: activeCategory === category.id ? 0 : 20,
                  pointerEvents: activeCategory === category.id ? 'auto' : 'none',
                  position: activeCategory === category.id ? 'relative' : 'absolute'
                }}
                transition={{ duration: 0.4 }}
                className={cn("w-full", activeCategory !== category.id && "hidden lg:block lg:opacity-0 lg:invisible")}
              >
                <div className="mb-12">
                  <h3 className="font-serif text-3xl text-brand-offwhite mb-2">{category.title}</h3>
                  {category.description && (
                    <p className="text-brand-offwhite/50 font-sans font-light italic">{category.description}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                  {category.items.map((item, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                      className="group"
                    >
                      <div className="flex justify-between items-baseline mb-2">
                        <h4 className="font-sans font-medium tracking-wide text-brand-offwhite text-lg flex items-center gap-3">
                          {item.name}
                          {item.badge && (
                            <span className="text-[0.6rem] uppercase tracking-widest text-brand-black bg-brand-gold px-2 py-0.5 rounded-sm font-bold">
                              {item.badge}
                            </span>
                          )}
                        </h4>
                        <div className="flex-1 mx-4 border-b border-brand-offwhite/10 group-hover:border-brand-gold/40 transition-colors" />
                        <span className="font-sans font-light text-brand-gold">R$ {item.price}</span>
                      </div>
                      {item.description && (
                        <p className="text-sm font-light text-brand-offwhite/60 mt-1 leading-relaxed pr-8">
                          {item.description}
                        </p>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
