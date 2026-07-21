"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Check } from "lucide-react";
import { PROGRAMS, WHATSAPP_LINK } from "@/lib/constants";
import { SectionBadge } from "@/components/SectionBadge";

function ProgramCard({ program, isOpen, onToggle, index }: {
  program: typeof PROGRAMS[number];
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className="group rounded-2xl border border-darkBorder bg-darkCard transition-all duration-300 hover:border-brandOrange/20 hover:shadow-[0_0_30px_rgba(235,96,27,0.08)] hover:scale-[1.01]"
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between p-6 md:p-7 text-left"
        aria-expanded={isOpen}
      >
        <div className="flex-1 pr-4">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="rounded-full bg-brandOrange/10 px-3 py-0.5 text-[11px] font-medium text-brandOrange" style={{ letterSpacing: "0.06em" }}>
              {program.level}
            </span>
          </div>
          <h3 className="mt-2 font-display text-lg md:text-xl font-semibold text-textPrimary">{program.title}</h3>
          <p className="mt-0.5 text-sm text-textMuted">{program.slugan}</p>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full transition-colors ${
            isOpen ? "bg-brandOrange text-white" : "bg-darkBorder text-textMuted"
          }`}
        >
          <Plus className="h-5 w-5" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="border-t border-darkBorder px-6 md:px-7 pb-7">
              <p className="mt-4 text-sm text-textSecondary leading-relaxed">{program.description}</p>
              <p className="mt-3 text-[11px] text-textMuted break-words">{program.degree}</p>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="text-sm font-semibold text-textPrimary">Траектории</h4>
                  <ul className="mt-2 space-y-1.5">
                    {program.tracks.map((t) => (
                      <li key={t} className="flex items-start gap-2 text-sm text-textSecondary">
                        <Check className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-brandOrange" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-textPrimary">Карьера</h4>
                  <ul className="mt-2 space-y-1.5">
                    {program.careers.map((c) => (
                      <li key={c} className="flex items-start gap-2 text-sm text-textSecondary">
                        <Check className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-textMuted" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {program.advantages.length > 0 && (
                <div className="mt-5">
                  <h4 className="text-sm font-semibold text-textPrimary">Преимущества</h4>
                  <ul className="mt-2 space-y-1.5">
                    {program.advantages.map((a) => (
                      <li key={a} className="flex items-start gap-2 text-sm text-textSecondary">
                        <Check className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-brandOrange" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function Programs() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="programs" className="relative bg-darkBg py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionBadge>Программы</SectionBadge>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 font-display font-semibold text-textPrimary leading-tight"
            style={{ fontSize: "clamp(26px, 3.2vw, 40px)", letterSpacing: "-0.01em" }}
          >
            Наши программы
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-2 text-sm text-textSecondary"
          >
            Выбери свой путь в предпринимательстве
          </motion.p>
        </div>

        <div className="mt-12 space-y-4">
          {PROGRAMS.map((program, i) => (
            <ProgramCard
              key={program.id}
              program={program}
              isOpen={openId === program.id}
              onToggle={() => setOpenId(openId === program.id ? null : program.id)}
              index={i}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 text-center"
        >
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brandOrange px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:shadow-[0_0_24px_rgba(235,96,27,0.35)]"
          >
            Узнать о поступлении
          </a>
        </motion.div>
      </div>
    </section>
  );
}
