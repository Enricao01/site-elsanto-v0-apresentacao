'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export function About() {
  return (
    <section id="about" className="py-32 md:py-48 bg-brand-black relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Images Grid */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-[500px] md:h-[700px] w-full lg:w-[90%] overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?q=80&w=2670"
                alt="Gourmet Tacos"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-10 -right-4 lg:-right-10 w-48 md:w-72 h-64 md:h-96 overflow-hidden border-4 border-brand-black z-20 hidden sm:block"
            >
              <Image
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2670"
                alt="Craft Cocktail"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col justify-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-brand-gold tracking-[0.3em] text-xs uppercase mb-6"
            >
              Nossa História
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-offwhite mb-8 leading-tight"
            >
              Autenticidade,<br/>
              <span className="italic text-brand-offwhite/50">reimaginada.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 text-brand-offwhite/70 font-sans font-light text-lg"
            >
              <p>
                No <strong className="text-brand-offwhite font-normal">El Santo</strong>, não fazemos apenas comida. Nós projetamos experiências sensoriais que transportam nossos convidados diretamente para as ruas e cozinhas de alta gastronomia do México.
              </p>
              <p>
                Cada detalhe é intencional. Desde os cortes premium defumados com madeiras selecionadas até o calor de nossos chiles e o frescor dos ingredientes. Tudo é criado em um ambiente quente, acolhedor e profundamente sofisticado.
              </p>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
