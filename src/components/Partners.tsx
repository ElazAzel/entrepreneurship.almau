"use client";
import { motion } from "framer-motion";
import {
  PARTNERS_STRATEGIC,
  PARTNERS_CASES,
  PARTNERS_EVENTS,
  PARTNERS_NETWORKS,
} from "@/lib/constants";
import { SectionBadge } from "@/components/SectionBadge";

const blocks = [
  {
    badge: "Стратегические партнёры",
    title: "Стратегические и академические",
    items: PARTNERS_STRATEGIC,
  },
  {
    badge: "Бизнес-кейсы",
    title: "Компании, с которыми студенты решали реальные кейсы",
    items: PARTNERS_CASES,
  },
  {
    badge: "Мероприятия",
    title: "Партнёры мероприятий",
    items: PARTNERS_EVENTS,
  },
  {
    badge: "Аккредитации",
    title: "Международные сети и аккредитации",
    items: PARTNERS_NETWORKS,
  },
];

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
            Партнёры и индустриальные связи
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3 max-w-2xl text-sm text-textSecondary leading-relaxed"
          >
            Институт предпринимательства сотрудничает с ведущими компаниями, вузами и международными организациями. Студенты решают реальные бизнес-кейсы, проходят стажировки и участвуют в предпринимательских проектах.
          </motion.p>
        </div>

        <div className="mt-16 space-y-14">
          {blocks.map((block, idx) => (
            <motion.div
              key={block.badge}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex flex-col items-center text-center mb-6">
                <span className="inline-block rounded-full border border-brandOrange/30 bg-brandOrange/10 px-4 py-1 text-xs font-medium uppercase text-brandOrange" style={{ letterSpacing: "0.08em" }}>
                  {block.badge}
                </span>
                <h3 className="mt-3 font-display font-semibold text-textPrimary" style={{ fontSize: "clamp(18px, 2vw, 24px)", letterSpacing: "-0.01em" }}>
                  {block.title}
                </h3>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {block.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-xl border border-darkBorder bg-darkCard px-5 py-3 text-sm font-semibold text-textSecondary tracking-wider uppercase whitespace-nowrap transition-all duration-300 hover:border-brandOrange/20 hover:text-textPrimary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
