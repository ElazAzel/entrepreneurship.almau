"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { STUDENT_FACTS, STUDENT_NUMBERS } from "@/lib/constants";

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <span ref={ref} className="font-display font-bold" style={{ fontSize: "clamp(36px, 4vw, 56px)" }}>
      {isInView ? value : 0}
      {suffix}
    </span>
  );
}

export function Students() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      id="students"
      ref={sectionRef}
      className="relative bg-darkBg py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute top-0 right-0 h-[300px] w-[300px] rounded-full bg-electric/10 blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-bold text-white leading-tight text-center"
          style={{ fontSize: "clamp(28px, 3.6vw, 44px)" }}
        >
          Студенты и выпускники
        </motion.h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STUDENT_NUMBERS.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <div className="text-orange">
                <AnimatedCounter value={item.value} suffix={item.suffix} />
              </div>
              <p className="mt-1 text-sm text-white/50">{item.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2">
          {STUDENT_FACTS.map((fact, i) => (
            <motion.div
              key={fact}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
            >
              <span className="h-2 w-2 rounded-full bg-orange flex-shrink-0" />
              <span className="text-sm text-white/70">{fact}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
