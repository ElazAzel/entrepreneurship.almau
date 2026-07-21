"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { WHY_US } from "@/lib/constants";
import { SectionBadge } from "@/components/SectionBadge";

const PHOTOS = [
  "/images/photoshoot/2S2A2761.jpg",
  "/images/photoshoot/2S2A3028.jpg",
  "/images/photoshoot/2S2A3001.jpg",
];

export function WhyUs() {
  return (
    <section className="relative bg-darkCard/50 py-24 md:py-32 overflow-hidden border-y border-darkBorder">
      <div className="absolute inset-0 pointer-events-none motion-reduce:hidden">
        <div className="absolute top-10 right-10 w-48 h-48 rounded-full bg-brandOrange/5 blur-[80px]" />
        <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-brandBlue/5 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <SectionBadge>Почему мы</SectionBadge>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="mt-4 font-display font-semibold text-textPrimary leading-tight"
                style={{ fontSize: "clamp(26px, 3.2vw, 40px)", letterSpacing: "-0.01em" }}
              >
                Почему Институт предпринимательства AlmaU
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="mt-2 text-sm text-textSecondary"
              >
                6 причин выбрать нас
              </motion.p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {WHY_US.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="group rounded-2xl border border-darkBorder bg-darkCard p-5 transition-all duration-300 hover:border-brandOrange/20 hover:shadow-[0_0_24px_rgba(235,96,27,0.04)]"
                >
                  <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-brandOrange/10 text-brandOrange font-bold text-sm">
                    {i + 1}
                  </div>
                  <h3 className="font-display text-sm font-semibold text-textPrimary">{item.title}</h3>
                  <p className="mt-1 text-xs text-textSecondary leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden md:block"
          >
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-darkBorder">
              <Image
                src={PHOTOS[0]}
                alt="Студенты Института предпринимательства AlmaU"
                fill
                className="object-cover"
                sizes="40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-darkCard/60 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-2/3 aspect-square rounded-2xl overflow-hidden border border-darkBorder shadow-xl">
              <Image
                src={PHOTOS[1]}
                alt="Студенты AlmaU на мероприятии"
                fill
                className="object-cover"
                sizes="20vw"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-1/3 aspect-square rounded-2xl overflow-hidden border border-darkBorder shadow-xl">
              <Image
                src={PHOTOS[2]}
                alt="Студенческий проект AlmaU"
                fill
                className="object-cover"
                sizes="15vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
