"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { STUDENT_FACTS, STUDENT_NUMBERS } from "@/lib/constants";
import { SectionBadge } from "@/components/SectionBadge";

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(value);

  useEffect(() => {
    if (!isInView) return;
    setCount(0);
    const duration = 1500;
    const steps = 30;
    const increment = value / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-display font-bold text-brandOrange" style={{ fontSize: "clamp(36px, 4vw, 56px)" }}>
      {count}
      {suffix}
    </span>
  );
}

export function Students() {
  return (
    <section id="students" className="relative bg-darkBg py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none motion-reduce:hidden">
        <div className="absolute top-0 right-0 h-[300px] w-[300px] rounded-full bg-brandBlue/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-brandOrange/5 blur-[140px]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-3xl aspect-[16/9] opacity-[0.04] rounded-3xl overflow-hidden">
          <Image
            src="/images/photoshoot/2S2A2892.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="80vw"
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionBadge>Студенты</SectionBadge>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 font-display font-semibold text-textPrimary leading-tight"
            style={{ fontSize: "clamp(26px, 3.2vw, 40px)", letterSpacing: "-0.01em" }}
          >
            Студенты и выпускники
          </motion.h2>
        </div>

        <div className="mt-10 flex justify-center gap-3">
          {["/images/photoshoot/2S2A2807.jpg", "/images/photoshoot/2S2A3001.jpg", "/images/photoshoot/2S2A3028.jpg", "/images/photoshoot/2S2A3060.jpg", "/images/photoshoot/2S2A3141.jpg"].map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full overflow-hidden border-2 border-darkCard -mr-2 last:mr-0"
              style={{ zIndex: 5 - i }}
            >
              <Image
                src={src}
                alt="Студент AlmaU"
                fill
                className="object-cover"
                sizes="60px"
              />
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full bg-brandOrange/10 border-2 border-brandOrange/30 text-xs font-bold text-brandOrange"
          >
            +500
          </motion.div>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STUDENT_NUMBERS.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <AnimatedCounter value={item.value} suffix={item.suffix} />
              <p className="mt-1 text-sm text-textMuted">{item.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid gap-3 sm:grid-cols-2">
          {STUDENT_FACTS.map((fact, i) => (
            <motion.div
              key={fact}
              initial={{ opacity: 0, x: i % 2 === 0 ? -16 : 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 rounded-2xl border border-darkBorder bg-darkCard px-5 py-4"
            >
              <span className="h-2 w-2 rounded-full bg-brandOrange flex-shrink-0" />
              <span className="text-sm text-textSecondary">{fact}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
