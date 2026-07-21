"use client";
import { motion } from "framer-motion";
import { WHY_US } from "@/lib/constants";

export function WhyUs() {
  return (
    <section className="relative bg-white py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-bold text-deepBlue leading-tight text-center"
          style={{ fontSize: "clamp(28px, 3.6vw, 44px)" }}
        >
          Почему Институт предпринимательства AlmaU
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-4 max-w-2xl text-center text-deepBlue/60"
        >
          6 причин выбрать нас
        </motion.p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_US.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="group rounded-2xl border border-deepBlue/10 bg-bgLight p-6 transition-all duration-300 hover:translate-y-[-6px] hover:shadow-[0_12px_40px_rgba(0,59,122,0.1)] hover:border-transparent"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-electric/10 text-electric font-display font-bold text-sm">
                {i + 1}
              </div>
              <h3 className="font-display text-lg font-bold text-deepBlue">{item.title}</h3>
              <p className="mt-2 text-sm text-deepBlue/60 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
