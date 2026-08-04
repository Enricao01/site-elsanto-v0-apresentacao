'use client';

import { motion } from 'motion/react';
import { RESTAURANT_INFO } from '@/lib/data';
import { MapPin, Clock, Phone } from 'lucide-react';

export function Location() {
  return (
    <section id="location" className="py-32 bg-brand-surface border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-terracotta tracking-[0.3em] text-xs uppercase mb-4 block"
            >
              Encontre-nos
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-4xl md:text-6xl text-brand-offwhite mb-12"
            >
              Nossa <span className="italic text-brand-offwhite/60">Casa</span>
            </motion.h2>

            <div className="space-y-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex gap-6"
              >
                <div className="text-brand-gold mt-1">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-sans text-sm tracking-widest uppercase text-brand-offwhite/50 mb-2">Endereço</h4>
                  <p className="font-sans font-light text-brand-offwhite text-lg max-w-xs leading-relaxed">
                    R. Saldanha Marinho, 4011<br />
                    Vila Santa Cruz<br />
                    São José do Rio Preto - SP
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex gap-6"
              >
                <div className="text-brand-gold mt-1">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-sans text-sm tracking-widest uppercase text-brand-offwhite/50 mb-2">Horários</h4>
                  <ul className="font-sans font-light text-brand-offwhite space-y-1">
                    <li><span className="inline-block w-24 opacity-60">Seg - Ter</span> Fechado</li>
                    <li><span className="inline-block w-24 opacity-60">Qua - Qui</span> 18:00 – 23:00</li>
                    <li><span className="inline-block w-24 opacity-60">Sex - Sáb</span> 18:00 – 00:00</li>
                    <li><span className="inline-block w-24 opacity-60">Domingo</span> 18:00 – 23:00</li>
                  </ul>
                </div>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-12 pt-12 border-t border-white/10"
            >
              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-brand-offwhite text-brand-black font-sans text-sm tracking-widest hover:bg-brand-gold transition-colors duration-300"
              >
                <Phone size={18} />
                RESERVE SUA MESA
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-[400px] lg:h-full min-h-[500px] relative rounded-sm overflow-hidden border border-white/5"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3729.8407304192135!2d-49.389146!3d-20.817757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bdacdc9f3b14cb%3A0xc6c429c2d1b822d0!2sR.%20Saldanha%20Marinho%2C%204011%20-%20Vila%20Santa%20Cruz%2C%20S%C3%A3o%20Jos%C3%A9%20do%20Rio%20Preto%20-%20SP%2C%2015014-300!5e0!3m2!1spt-BR!2sbr!4v1717000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(1) contrast(1.2) opacity(0.8)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
            {/* Overlay to enforce the cinematic look over the map */}
            <div className="absolute inset-0 pointer-events-none bg-brand-surface/20 mix-blend-multiply" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
