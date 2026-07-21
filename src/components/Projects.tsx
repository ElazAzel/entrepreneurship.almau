"use client";
import { motion } from "framer-motion";
import { SectionBadge } from "@/components/SectionBadge";

export function Projects() {
  return (
    <section id="projects" className="relative bg-darkCard/50 py-24 md:py-32 overflow-hidden border-b border-darkBorder">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionBadge>Проекты</SectionBadge>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 font-display font-semibold text-textPrimary leading-tight"
            style={{ fontSize: "clamp(26px, 3.2vw, 40px)", letterSpacing: "-0.01em" }}
          >
            Наши проекты
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-2 text-sm text-textSecondary"
          >
            Практика, которая формирует предпринимателя
          </motion.p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0, ease: [0.16, 1, 0.3, 1] }}
            className="group relative overflow-hidden rounded-2xl border border-darkBorder bg-darkCard"
          >
            <div className="aspect-video relative">
              <iframe
                src="https://www.youtube.com/embed/dEuiBNCW8F4"
                title="StartUp Night AlmaU"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
            <div className="p-5">
              <span className="inline-block rounded-full bg-brandOrange/10 px-3 py-0.5 text-[11px] font-medium text-brandOrange uppercase" style={{ letterSpacing: "0.08em" }}>
                Projectathon
              </span>
              <h3 className="mt-2 font-display text-lg font-semibold text-textPrimary">StartUp Night AlmaU</h3>
              <p className="mt-1 text-sm text-textSecondary">12 часов, команда, наставники, готовый проект</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative overflow-hidden rounded-2xl border border-darkBorder bg-darkCard"
          >
            <div className="aspect-video relative">
              <iframe
                src="https://www.youtube.com/embed/sL-7IfplHAE"
                title="Crack It AlmaU"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
            <div className="p-5">
              <span className="inline-block rounded-full bg-brandOrange/10 px-3 py-0.5 text-[11px] font-medium text-brandOrange uppercase" style={{ letterSpacing: "0.08em" }}>
                Case Championship
              </span>
              <h3 className="mt-2 font-display text-lg font-semibold text-textPrimary">Crack It</h3>
              <p className="mt-1 text-sm text-textSecondary">Кейс-чемпионат: команды решают бизнес-задачи компаний</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
