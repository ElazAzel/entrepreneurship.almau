"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK, INSTAGRAM_LINK } from "@/lib/constants";

export function FinalCTA() {
  return (
    <section className="relative py-24 md:py-32 bg-darkBg overflow-hidden">
      <div className="absolute inset-0 pointer-events-none motion-reduce:hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl aspect-video opacity-[0.04] rounded-3xl overflow-hidden">
          <Image
            src="/images/photoshoot/2S2A2849.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="80vw"
          />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,58,137,0.15),transparent_60%)]" />
      </div>
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-brandOrange/10 blur-[100px] motion-safe:animate-[pulse-glow_6s_ease-in-out_infinite] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="rounded-3xl border border-darkBorder bg-darkCard/80 backdrop-blur-sm p-8 md:p-14">
          <div className="flex flex-col items-center text-center">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-semibold text-textPrimary leading-tight"
              style={{ fontSize: "clamp(26px, 3.2vw, 40px)", letterSpacing: "-0.01em" }}
            >
              Твоё предпринимательское будущее начинается здесь
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto mt-4 max-w-xl text-sm text-textSecondary leading-relaxed break-words"
            >
              Выбери программу, задай вопрос и узнай, как поступить в Институт предпринимательства AlmaU.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
            >
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brandOrange px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_0_30px_rgba(235,96,27,0.35)]"
              >
                <MessageCircle className="h-5 w-5" />
                Написать в WhatsApp
              </a>
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-darkBorder px-7 py-3 text-sm font-semibold text-textSecondary transition-all duration-300 hover:bg-darkCard hover:text-textPrimary"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                Смотреть Instagram
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
