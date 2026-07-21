"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const itemsPerView = 1;

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative bg-bgLight py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-bold text-deepBlue leading-tight text-center"
          style={{ fontSize: "clamp(28px, 3.6vw, 44px)" }}
        >
          Отзывы студентов
        </motion.h2>

        <div className="mt-12 relative min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto max-w-3xl rounded-2xl bg-white p-8 md:p-10 shadow-[0_8px_30px_rgba(0,59,122,0.08)]"
            >
              <Quote className="h-8 w-8 text-orange/30 mb-4" />
              <p className="text-base md:text-lg text-deepBlue/80 leading-relaxed">
                {TESTIMONIALS[current].text}
              </p>
              <p className="mt-6 font-display font-bold text-deepBlue">
                {TESTIMONIALS[current].name}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? "w-8 bg-orange" : "w-2 bg-deepBlue/20"
              }`}
              aria-label={`Отзыв ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
