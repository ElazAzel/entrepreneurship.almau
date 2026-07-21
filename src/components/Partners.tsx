"use client";
import { motion } from "framer-motion";
import {
  PARTNERS_STRATEGIC,
  PARTNERS_CASES,
  PARTNERS_EVENTS,
  PARTNERS_NETWORKS,
} from "@/lib/constants";
import { SectionBadge } from "@/components/SectionBadge";

const ALL_PARTNERS = [
  ...PARTNERS_STRATEGIC,
  ...PARTNERS_CASES,
  ...PARTNERS_EVENTS,
  ...PARTNERS_NETWORKS,
];

const COLORS = [
  "#eb601b", "#223a89", "#e8eaed", "#9aa0a8", "#6b7280",
  "#eb601b", "#223a89", "#e8eaed", "#9aa0a8", "#6b7280",
];

export function Partners() {
  return (
    <section className="relative bg-darkCard/50 py-24 md:py-32 overflow-hidden border-y border-darkBorder">
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
            Партнёры и индустриальные связи
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3 max-w-2xl text-sm text-textSecondary leading-relaxed"
          >
            Институт предпринимательства сотрудничает с ведущими компаниями, вузами и международными организациями.
          </motion.p>
        </div>

        <div className="mt-14 space-y-6">
          <div className="overflow-hidden mask-fade-x">
            <motion.div
              className="flex gap-4 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
            >
              {[...ALL_PARTNERS, ...ALL_PARTNERS].map((item, i) => (
                <div
                  key={`${item}-${i}`}
                  className="flex items-center gap-3 flex-shrink-0 rounded-2xl border border-darkBorder bg-darkBg/80 backdrop-blur-sm px-5 py-3 transition-all duration-300 hover:border-brandOrange/20"
                >
                  <div
                    className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg text-xs font-bold"
                    style={{ backgroundColor: `${COLORS[i % COLORS.length]}20`, color: COLORS[i % COLORS.length] }}
                  >
                    {item.charAt(0)}
                  </div>
                  <span className="text-sm font-semibold text-textSecondary whitespace-nowrap">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="overflow-hidden mask-fade-x">
            <motion.div
              className="flex gap-4 w-max"
              animate={{ x: ["-50%", "0%"] }}
              transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
            >
              {[...ALL_PARTNERS].reverse().concat([...ALL_PARTNERS].reverse()).map((item, i) => (
                <div
                  key={`rev-${item}-${i}`}
                  className="flex items-center gap-3 flex-shrink-0 rounded-2xl border border-darkBorder bg-darkBg/80 backdrop-blur-sm px-5 py-3 transition-all duration-300 hover:border-brandOrange/20"
                >
                  <div
                    className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg text-xs font-bold"
                    style={{ backgroundColor: `${COLORS[(i + 3) % COLORS.length]}20`, color: COLORS[(i + 3) % COLORS.length] }}
                  >
                    {item.charAt(0)}
                  </div>
                  <span className="text-sm font-semibold text-textSecondary whitespace-nowrap">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
