"use client";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK, INSTAGRAM_LINK } from "@/lib/constants";
import { usePathname } from "next/navigation";
import { getLocaleFromPath } from "@/lib/i18n";

const btnLabels = {
  ru: { whatsapp: "Написать в WhatsApp", instagram: "Смотреть Instagram" },
  kk: { whatsapp: "WhatsApp-та жазу", instagram: "Instagram-ды көру" },
  en: { whatsapp: "Write to WhatsApp", instagram: "View Instagram" },
};

export function CTASection({ title, subtitle }: { title?: string; subtitle?: string }) {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const btn = btnLabels[locale];
  return (
    <section className="relative py-20 md:py-28 bg-darkBg overflow-hidden border-t border-darkBorder">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,58,137,0.15),transparent_60%)] pointer-events-none" />
      <div className="relative z-10 mx-auto max-w-4xl px-4">
        <div className="rounded-3xl border border-darkBorder bg-darkCard/80 backdrop-blur-sm p-8 md:p-14">
          <div className="flex flex-col items-center text-center">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-semibold text-textPrimary leading-tight"
              style={{ fontSize: "clamp(24px, 3vw, 36px)", letterSpacing: "-0.01em" }}
            >
              {title || "Твоё предпринимательское будущее начинается здесь"}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto mt-4 max-w-xl text-sm text-textSecondary leading-relaxed"
            >
              {subtitle || "Выбери программу, задай вопрос и узнай, как поступить в Институт предпринимательства AlmaU."}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
            >
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brandOrange px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:brightness-110"
              >
                <MessageCircle className="h-5 w-5" />
                {btn.whatsapp}
              </a>
              <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-darkBorder px-7 py-3 text-sm font-semibold text-textSecondary transition-all duration-300 hover:bg-darkCard hover:text-textPrimary"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                {btn.instagram}
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
