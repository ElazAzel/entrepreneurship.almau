"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { SectionBadge } from "@/components/SectionBadge";

const testimonialPhotos = [
  "/images/photoshoot/2S2A2817.jpg",
  "/images/photoshoot/2S2A3001.jpg",
  "/images/photoshoot/2S2A3028.jpg",
  "/images/photoshoot/2S2A3060.jpg",
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative bg-darkCard/50 py-24 md:py-32 overflow-hidden border-y border-darkBorder">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionBadge>Отзывы</SectionBadge>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 font-display font-semibold text-textPrimary leading-tight"
            style={{ fontSize: "clamp(26px, 3.2vw, 40px)", letterSpacing: "-0.01em" }}
          >
            Отзывы студентов
          </motion.h2>
        </div>

        <div className="mt-12 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl border border-darkBorder bg-darkCard p-5 md:p-10"
            >
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="hidden sm:block relative flex-shrink-0 w-16 h-16 rounded-full overflow-hidden border-2 border-darkBorder mt-1">
                  <Image
                    src={testimonialPhotos[current % testimonialPhotos.length]}
                    alt={TESTIMONIALS[current].name}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div>
                  <Quote className="h-7 w-7 text-brandOrange/30 mb-2" />
                  <p className="text-sm md:text-base text-textSecondary leading-relaxed break-words">
                    {TESTIMONIALS[current].text}
                  </p>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative sm:hidden w-8 h-8 rounded-full overflow-hidden border border-darkBorder flex-shrink-0">
                    <Image
                      src={testimonialPhotos[current % testimonialPhotos.length]}
                      alt={TESTIMONIALS[current].name}
                      fill
                      className="object-cover"
                      sizes="32px"
                    />
                  </div>
                  <p className="font-display font-bold text-textPrimary">
                    {TESTIMONIALS[current].name}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={prev}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-darkBorder text-textMuted hover:bg-darkCard hover:text-textPrimary transition-colors"
                    aria-label="Предыдущий отзыв"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={next}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-darkBorder text-textMuted hover:bg-darkCard hover:text-textPrimary transition-colors"
                    aria-label="Следующий отзыв"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? "w-8 bg-brandOrange" : "w-2 bg-darkBorder"
              }`}
              aria-label={`Отзыв ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
