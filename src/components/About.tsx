"use client";
import { motion } from "framer-motion";
import { ABOUT } from "@/lib/constants";

export function About() {
  return (
    <section id="about" className="relative bg-bgLight py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-bold text-deepBlue leading-tight text-center"
          style={{ fontSize: "clamp(28px, 3.6vw, 44px)" }}
        >
          {ABOUT.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-6 max-w-3xl text-center text-base md:text-lg text-deepBlue/60 leading-relaxed"
        >
          {ABOUT.text}
        </motion.p>

        <div className="mt-16 grid gap-6 md:grid-cols-2 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block motion-reduce:hidden" aria-hidden="true">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="h-[2px] w-16 bg-gradient-to-r from-electric to-orange origin-left"
            />
          </div>

          {ABOUT.tracks.map((track, i) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0, x: i === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.3 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group rounded-2xl border border-deepBlue/10 bg-white p-8 transition-all duration-300 hover:translate-y-[-6px] hover:shadow-[0_12px_40px_rgba(0,59,122,0.12)]"
            >
              <h3 className="font-display text-xl font-bold text-deepBlue">{track.title}</h3>
              <p className="mt-3 text-deepBlue/60 leading-relaxed">{track.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
