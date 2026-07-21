"use client";
import { motion } from "framer-motion";
import { PARTNERS_COUNT } from "@/lib/constants";

export function Partners() {
  return (
    <section className="relative bg-white py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-bold text-deepBlue leading-tight text-center"
          style={{ fontSize: "clamp(28px, 3.6vw, 44px)" }}
        >
          Партнёры
        </motion.h2>

        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {Array.from({ length: PARTNERS_COUNT }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="flex aspect-[3/2] items-center justify-center rounded-xl border border-deepBlue/10 bg-bgLight grayscale transition-all duration-300 hover:grayscale-0 hover:border-deepBlue/30 hover:translate-y-[-4px]"
            >
              <span className="text-sm font-bold text-deepBlue/30 tracking-widest">LOGO</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
