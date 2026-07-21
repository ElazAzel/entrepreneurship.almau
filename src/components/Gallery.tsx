"use client";
import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionBadge } from "@/components/SectionBadge";

const photos = [
  "/images/photoshoot/2S2A2424.jpg",
  "/images/photoshoot/2S2A2481.jpg",
  "/images/photoshoot/2S2A2529.jpg",
  "/images/photoshoot/2S2A2583.jpg",
  "/images/photoshoot/2S2A2654.jpg",
  "/images/photoshoot/2S2A2712.jpg",
  "/images/photoshoot/2S2A2761.jpg",
  "/images/photoshoot/2S2A2807.jpg",
  "/images/photoshoot/2S2A2849.jpg",
  "/images/photoshoot/2S2A2892.jpg",
  "/images/photoshoot/2S2A2925.jpg",
  "/images/photoshoot/2S2A2976.jpg",
  "/images/photoshoot/2S2A3001.jpg",
  "/images/photoshoot/2S2A3028.jpg",
  "/images/photoshoot/2S2A3078.jpg",
  "/images/photoshoot/2S2A3101.jpg",
  "/images/photoshoot/2S2A3122.jpg",
  "/images/photoshoot/2S2A3166.jpg",
  "/images/photoshoot/2S2A3208.jpg",
  "/images/photoshoot/2S2A3248.jpg",
  "/images/photoshoot/2S2A3282.jpg",
  "/images/photoshoot/2S2A3309.jpg",
];

function GalleryImage({ src, index, onSelect }: { src: string; index: number; onSelect: () => void }) {
  return (
    <motion.button
      onClick={onSelect}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4, delay: (index % 6) * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden rounded-2xl border border-darkBorder bg-darkCard outline-none focus-visible:ring-2 focus-visible:ring-brandOrange"
      style={{ aspectRatio: index % 3 === 0 ? "4/3" : index % 3 === 1 ? "1/1" : "3/4" }}
    >
      <Image
        src={src}
        alt=""
        fill
        className="object-cover transition-all duration-500 group-hover:scale-110"
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-darkBg/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute bottom-3 right-3 rounded-full bg-white/10 backdrop-blur-md px-3 py-1 text-[10px] text-white opacity-0 transition-all duration-300 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
        Увеличить
      </div>
    </motion.button>
  );
}

export function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState(0);

  const open = useCallback((i: number) => {
    setDirection(0);
    setSelectedIndex(i);
  }, []);

  const close = useCallback(() => setSelectedIndex(null), []);

  const prev = useCallback(() => {
    setDirection(-1);
    setSelectedIndex((i) => (i !== null ? (i - 1 + photos.length) % photos.length : 0));
  }, []);

  const next = useCallback(() => {
    setDirection(1);
    setSelectedIndex((i) => (i !== null ? (i + 1) % photos.length : 0));
  }, []);

  useEffect(() => {
    if (selectedIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [selectedIndex, close, prev, next]);

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <section id="gallery" className="relative bg-darkCard/50 py-24 md:py-32 overflow-hidden border-y border-darkBorder">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionBadge>Галерея</SectionBadge>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 font-display font-semibold text-textPrimary leading-tight"
            style={{ fontSize: "clamp(26px, 3.2vw, 40px)", letterSpacing: "-0.01em" }}
          >
            Фотогалерея
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-2 text-sm text-textSecondary"
          >
            Жизнь института предпринимательства в фото
          </motion.p>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {photos.map((src, i) => (
            <GalleryImage key={src} src={src} index={i} onSelect={() => open(i)} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-darkBg/95 backdrop-blur-xl"
            onClick={close}
          >
            <button
              onClick={close}
              className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-colors"
              aria-label="Закрыть"
            >
              <X className="h-5 w-5" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-colors"
              aria-label="Предыдущее фото"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-colors"
              aria-label="Следующее фото"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <motion.div
              key={selectedIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-5xl aspect-video mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={photos[selectedIndex]}
                alt="Фото Института предпринимательства AlmaU"
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
            </motion.div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-white/10 backdrop-blur-md px-4 py-2 text-sm text-white">
              {selectedIndex + 1} / {photos.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}