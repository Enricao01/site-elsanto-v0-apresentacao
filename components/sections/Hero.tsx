'use client';

import { motion } from 'motion/react';
import { RESTAURANT_INFO } from '@/lib/data';
import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 40;
const currentFrameUrl = (index: number) =>
  `/image-sequence/ezgif-frame-${(index + 1).toString().padStart(3, '0')}.webp`;

export function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  // Preload images into ref immediately
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = currentFrameUrl(i);
      loadedImages.push(img);
    }
    imagesRef.current = loadedImages;
  }, []);

  useGSAP(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    const imageSeq = { frame: 0 };

    const render = () => {
      const idx = Math.min(FRAME_COUNT - 1, Math.max(0, Math.round(imageSeq.frame)));
      setCurrentFrameIndex(idx);

      const img = imagesRef.current[idx];
      if (!img || !img.complete || img.naturalWidth === 0) return;

      const w = canvas.width;
      const h = canvas.height;
      if (w === 0 || h === 0) return;

      const hRatio = w / img.naturalWidth;
      const vRatio = h / img.naturalHeight;
      const ratio = Math.max(hRatio, vRatio);
      const centerShift_x = (w - img.naturalWidth * ratio) / 2;
      const centerShift_y = (h - img.naturalHeight * ratio) / 2;

      context.clearRect(0, 0, w, h);
      context.drawImage(
        img,
        0,
        0,
        img.naturalWidth,
        img.naturalHeight,
        centerShift_x,
        centerShift_y,
        img.naturalWidth * ratio,
        img.naturalHeight * ratio
      );
    };

    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // Trigger render on first frame load if not already rendered
    if (imagesRef.current[0]) {
      if (imagesRef.current[0].complete) {
        render();
      } else {
        imagesRef.current[0].onload = render;
      }
    }

    gsap.to(imageSeq, {
      frame: FRAME_COUNT - 1,
      snap: 'frame',
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=150%',
        scrub: 0.2,
        pin: true,
        invalidateOnRefresh: true,
      },
      onUpdate: render,
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

    const checkOpen = () => {
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const spTime = new Date(utc + 3600000 * -3);

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
    <section
      ref={containerRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-brand-black"
    >
      {/* Background Image Sequence Canvas & Fallback Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={currentFrameUrl(currentFrameIndex)}
          alt="El Santo Background Animation"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <canvas ref={canvasRef} className="relative z-10 w-full h-full object-cover" />
      </div>
      {/* Crisp Dark Overlay for Text Contrast without heavy blur */}
      <div className="absolute inset-0 z-20 bg-gradient-to-b from-brand-black/80 via-brand-black/40 to-brand-black/90 pointer-events-none" />
      {/* Radial vignette spotlight around text */}
      <div className="absolute inset-0 z-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-black/70 via-transparent to-brand-black/80 pointer-events-none" />

      {/* Content */}
      <div className="relative z-30 text-center px-4 max-w-5xl mx-auto flex flex-col items-center mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 flex items-center space-x-3 bg-brand-black/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 shadow-xl"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span
              className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isOpen ? 'bg-green-400' : 'bg-brand-red'
                }`}
            ></span>
            <span
              className={`relative inline-flex rounded-full h-2.5 w-2.5 ${isOpen ? 'bg-green-500' : 'bg-brand-red'
                }`}
            ></span>
          </span>
          <span className="text-xs font-sans tracking-[0.2em] uppercase text-brand-offwhite/90">
            {isOpen ? 'Aberto Agora' : 'Fechado Agora'}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-brand-offwhite mb-6 leading-tight drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)]"
        >
          Cocina <span className="text-brand-terracotta italic">Contemporánea</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-lg md:text-xl text-brand-offwhite max-w-2xl mx-auto mb-10 font-light drop-shadow-[0_5px_15px_rgba(0,0,0,0.9)]"
        >
          Uma experiência gastronômica imersiva. Sabores autênticos do México reinterpretados com
          sofisticação e alma em São José do Rio Preto.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full max-w-2xl"
        >
          <a
            href="#menu"
            className="px-6 py-4 bg-brand-terracotta text-brand-offwhite font-sans text-sm tracking-widest hover:bg-brand-red transition-all duration-300 w-full sm:w-auto text-center shadow-2xl font-medium"
          >
            VER CARDÁPIO
          </a>
          <a
            href={RESTAURANT_INFO.ifoodLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-4 bg-[#EA1D2C] text-white font-sans text-sm tracking-widest hover:bg-[#c41523] transition-all duration-300 w-full sm:w-auto text-center shadow-2xl font-bold flex items-center justify-center gap-2 group"
          >
            <span>PEDIR NO IFOOD</span>
            <span className="text-xs bg-white/20 px-1.5 py-0.5 rounded font-mono group-hover:bg-white/30">DELIVERY</span>
          </a>
          <a
            href={`https://wa.me/${RESTAURANT_INFO.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-4 border border-brand-offwhite/40 text-brand-offwhite font-sans text-sm tracking-widest hover:border-brand-gold hover:text-brand-gold transition-all duration-300 w-full sm:w-auto text-center shadow-2xl bg-brand-black/40 backdrop-blur-sm font-medium"
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
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30"
      >
        <span className="text-[10px] tracking-[0.3em] font-sans text-brand-offwhite/50 uppercase">
          Scroll para explorar
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-[1px] h-12 bg-gradient-to-b from-brand-gold/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}

