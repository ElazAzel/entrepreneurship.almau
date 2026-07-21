"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

function FAQItem({ item, isOpen, onToggle, index }: { item: { question: string; answer: string }; isOpen: boolean; onToggle: () => void; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="group rounded-2xl border border-darkBorder bg-darkCard transition-all duration-300 hover:border-brandOrange/20"
    >
      <button onClick={onToggle} className="flex w-full items-center justify-between p-5 md:p-6 text-left" aria-expanded={isOpen}>
        <span className="text-sm md:text-base font-semibold text-textPrimary pr-4">{item.question}</span>
        <motion.div animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.3 }}
          className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-colors ${isOpen ? "bg-brandOrange text-white" : "bg-darkBorder text-textMuted"}`}
        >
          <Plus className="h-4 w-4" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }} className="overflow-hidden"
          >
            <div className="border-t border-darkBorder px-5 md:px-6 pb-5 md:pb-6">
              <p className="mt-3 text-sm text-textSecondary leading-relaxed">{item.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQSection({ items, title, id }: { items: { question: string; answer: string }[]; title: string; id?: string }) {
  const [openId, setOpenId] = useState<number | null>(0);

  return (
    <section id={id} className="relative py-20 md:py-28" itemScope itemType="https://schema.org/FAQPage">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-display font-semibold text-textPrimary leading-tight" style={{ fontSize: "clamp(26px, 3.2vw, 40px)", letterSpacing: "-0.01em" }}>
            {title}
          </h2>
        </div>
        <div className="mt-10 space-y-3">
          {items.map((item, i) => (
            <div key={i} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <FAQItem item={item} isOpen={openId === i} onToggle={() => setOpenId(openId === i ? null : i)} index={i} />
              <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer" className="hidden">
                <span itemProp="text">{item.answer}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
