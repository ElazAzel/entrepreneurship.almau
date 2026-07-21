"use client";
import { motion } from "framer-motion";
import { PARTNERS_LIST } from "@/lib/constants";
import { SectionBadge } from "@/components/SectionBadge";

export function Partners() {
  return (
    <section className="relative bg-darkBg py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionBadge>Партнёры</SectionBadge>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 font-display font-semibold text-textPrimary leading-tight"
            style={{ fontSize: "clamp(26px, 3.2vw, 40px)", letterSpacing: "-0.01em" }}
          >
            Партнёры
          </motion.h2>
        </div>
      </div>

      <div className="mt-12 relative overflow-hidden">
        <div className="flex gap-10 animate-[marquee_30s_linear_infinite] w-max motion-reduce:animate-none motion-reduce:justify-center motion-reduce:w-full">
          {[...PARTNERS_LIST, ...PARTNERS_LIST].map((partner, i) => (
            <div
              key={`${partner}-${i}`}
              className="flex items-center justify-center rounded-xl border border-darkBorder bg-darkCard px-8 py-5 min-w-[140px] transition-all duration-300 hover:border-brandOrange/20"
            >
              <span className="text-sm font-bold text-textMuted tracking-wider uppercase whitespace-nowrap">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
