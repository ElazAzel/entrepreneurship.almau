"use client";
import { motion } from "framer-motion";
import { ABOUT } from "@/lib/constants";
import { SectionBadge } from "@/components/SectionBadge";

export function About() {
  return (
    <section id="about" className="relative bg-darkBg py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionBadge>О нас</SectionBadge>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 font-display font-bold text-textPrimary leading-tight"
            style={{ fontSize: "clamp(26px, 3.2vw, 40px)" }}
          >
            {ABOUT.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 max-w-3xl text-sm md:text-base text-textSecondary leading-relaxed"
          >
            {ABOUT.text}
          </motion.p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {ABOUT.tracks.map((track, i) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.25 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="group rounded-2xl border border-darkBorder bg-darkCard p-7 transition-all duration-300 hover:border-brandOrange/30 hover:shadow-[0_0_30px_rgba(235,96,27,0.06)]"
            >
              <span className="inline-block rounded-full bg-brandOrange/10 px-3 py-0.5 text-[11px] font-medium text-brandOrange uppercase tracking-wider">
                {i === 0 ? "Track 01" : "Track 02"}
              </span>
              <h3 className="mt-3 font-display text-lg font-bold text-textPrimary">{track.title}</h3>
              <p className="mt-2 text-sm text-textSecondary leading-relaxed">{track.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
