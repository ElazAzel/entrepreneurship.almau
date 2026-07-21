"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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

function GalleryImage({ src, index }: { src: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? -30 : 30, index % 2 === 0 ? 30 : -30]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: (index % 6) * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden rounded-2xl border border-darkBorder bg-darkCard"
      style={{ aspectRatio: index % 3 === 0 ? "4/3" : index % 3 === 1 ? "1/1" : "3/4" }}
    >
      <motion.img
        src={src}
        alt=""
        className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
        style={{ y }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-darkBg/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}

export function Gallery() {
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
            className="mt-4 font-display font-bold text-textPrimary leading-tight"
            style={{ fontSize: "clamp(26px, 3.2vw, 40px)" }}
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

        <div className="mt-12 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {photos.map((src, i) => (
            <GalleryImage key={src} src={src} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
