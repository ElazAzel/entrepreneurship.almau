"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Check } from "lucide-react";
import { PROGRAMS, WHATSAPP_LINK } from "@/lib/constants";

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
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-2xl border border-deepBlue/10 bg-white transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,59,122,0.08)]"
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between p-6 text-left"
        aria-expanded={isOpen}
      >
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-orange/10 px-3 py-0.5 text-xs font-medium text-orange">
              {program.level}
            </span>
          </div>
          <h3 className="mt-2 font-display text-xl font-bold text-deepBlue">{program.title}</h3>
          <p className="mt-0.5 text-sm text-deepBlue/50">{program.slugan}</p>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full transition-colors ${
            isOpen ? "bg-orange text-white" : "bg-deepBlue/10 text-deepBlue"
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
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="border-t border-deepBlue/10 px-6 pb-6">
              <p className="mt-4 text-sm text-deepBlue/70 leading-relaxed">{program.description}</p>

              <p className="mt-4 text-xs text-deepBlue/50">{program.degree}</p>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="text-sm font-semibold text-deepBlue">Траектории</h4>
                  <ul className="mt-2 space-y-1">
                    {program.tracks.map((t) => (
                      <li key={t} className="flex items-start gap-2 text-sm text-deepBlue/60">
                        <Check className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-electric" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-deepBlue">Карьера</h4>
                  <ul className="mt-2 space-y-1">
                    {program.careers.slice(0, 5).map((c) => (
                      <li key={c} className="flex items-start gap-2 text-sm text-deepBlue/60">
                        <Check className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-orange" />
                        {c}
                      </li>
                    ))}
                  </ul>
                  {program.careers.length > 5 && (
                    <p className="mt-1 text-xs text-deepBlue/40">и ещё {program.careers.length - 5}</p>
                  )}
                </div>
              </div>

              {program.advantages.length > 0 && (
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-deepBlue">Преимущества</h4>
                  <ul className="mt-2 space-y-1">
                    {program.advantages.map((a) => (
                      <li key={a} className="flex items-start gap-2 text-sm text-deepBlue/60">
                        <Check className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-gold" />
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
    <section id="programs" className="relative bg-bgLight py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-bold text-deepBlue leading-tight text-center"
          style={{ fontSize: "clamp(28px, 3.6vw, 44px)" }}
        >
          Наши программы
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-4 max-w-2xl text-center text-deepBlue/60"
        >
          Выбери свой путь в предпринимательстве
        </motion.p>

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
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 text-center"
        >
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-orange px-8 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_0_30px_rgba(255,107,0,0.3)]"
          >
            Узнать о поступлении
          </a>
        </motion.div>
      </div>
    </section>
  );
}
