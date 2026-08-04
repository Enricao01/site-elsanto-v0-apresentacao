'use client';

import { motion } from 'motion/react';
import { RESTAURANT_INFO } from '@/lib/data';
import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const context = canvas.getContext('2d');
    if (!context) return;

    const frameCount = 40;
    const currentFrame = (index: number) => `/image-sequence/ezgif-frame-${(index + 1).toString().padStart(3, '0')}.jpg`;
    
    const imageSeq = { frame: 0 };
    const images: HTMLImageElement[] = [];
    
    const render = () => {
      const frameIndex = Math.min(frameCount - 1, Math.max(0, Math.round(imageSeq.frame)));
      const img = images[frameIndex];
      if (!img || !img.complete || img.naturalWidth === 0) return;
      
      const hRatio = canvas.width / img.naturalWidth;
      const vRatio = canvas.height / img.naturalHeight;
      const ratio = Math.max(hRatio, vRatio); // object-cover approach
      const centerShift_x = (canvas.width - img.naturalWidth * ratio) / 2;
      const centerShift_y = (canvas.height - img.naturalHeight * ratio) / 2;
      
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight,
                        centerShift_x, centerShift_y, img.naturalWidth * ratio, img.naturalHeight * ratio);
    };

    // Load images inside the effect to ensure they are available
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.onload = () => {
        if (i === Math.round(imageSeq.frame)) {
          render();
        }
      };
      img.src = currentFrame(i);
      images.push(img);
    }

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();

    // Re-render when images are already complete (from cache)
    images.forEach((img, i) => {
      if (img.complete && i === Math.round(imageSeq.frame)) {
        render();
      }
    });

    gsap.to(imageSeq, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=150%",
        scrub: 0.5,
        pin: true
      },
      onUpdate: render
    });

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, { scope: containerRef });

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    // Basic logic to check if open (GMT-3 São José do Rio Preto)
    const checkOpen = () => {
      const now = new Date();
      // UTC to GMT-3 offset
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      const spTime = new Date(utc + (3600000 * -3)); 
      
      const day = spTime.getDay();
      const hour = spTime.getHours();
      
      const todayHours = (RESTAURANT_INFO.hours as any)[day];
      if (todayHours && todayHours.isOpen) {
        if (hour >= todayHours.open && hour < todayHours.close) {
          setIsOpen(true);
          return;
        }
      }
      setIsOpen(false);
    };

    checkOpen();
    const interval = setInterval(checkOpen, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-brand-black">
      {/* Background Image Sequence Canvas */}
      <div className="absolute inset-0 z-0">
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover"
        />
        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/60 via-brand-black/40 to-brand-black/95 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 flex items-center space-x-3 bg-brand-black/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/5"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isOpen ? 'bg-green-400' : 'bg-brand-red'}`}></span>
            <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${isOpen ? 'bg-green-500' : 'bg-brand-red'}`}></span>
          </span>
          <span className="text-xs font-sans tracking-[0.2em] uppercase text-brand-offwhite/80">
            {isOpen ? 'Aberto Agora' : 'Fechado Agora'}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-brand-offwhite mb-6 leading-tight drop-shadow-2xl"
        >
          Cocina <span className="text-brand-terracotta italic">Contemporánea</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-lg md:text-xl text-brand-offwhite/90 max-w-2xl mx-auto mb-10 font-light drop-shadow-lg"
        >
          Uma experiência gastronômica imersiva. Sabores autênticos do México reinterpretados com sofisticação e alma em São José do Rio Preto.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="#menu"
            className="px-8 py-4 bg-brand-terracotta text-brand-offwhite font-sans text-sm tracking-widest hover:bg-brand-red transition-all duration-300 w-full sm:w-auto text-center shadow-lg"
          >
            VER CARDÁPIO
          </a>
          <a
            href={`https://wa.me/${RESTAURANT_INFO.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-brand-offwhite/40 text-brand-offwhite font-sans text-sm tracking-widest hover:border-brand-gold hover:text-brand-gold transition-all duration-300 w-full sm:w-auto text-center shadow-lg bg-brand-black/20 backdrop-blur-sm"
          >
            RESERVAR MESA
          </a>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-[10px] tracking-[0.3em] font-sans text-brand-offwhite/50 uppercase">Scroll para explorar</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-brand-gold/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
