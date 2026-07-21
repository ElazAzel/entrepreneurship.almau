"use client";
import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/constants";
import { SectionBadge } from "@/components/SectionBadge";

const projectImages = [
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80",
  "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
];

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
            className="mt-4 font-display font-bold text-textPrimary leading-tight"
            style={{ fontSize: "clamp(26px, 3.2vw, 40px)" }}
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

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-darkBorder bg-darkCard min-h-[240px] md:min-h-[280px] flex items-end transition-all duration-300 hover:border-brandOrange/20"
            >
              <img
                src={projectImages[i]}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-darkBg via-darkBg/40 to-transparent" />
              <div className="relative z-10 p-6 md:p-7">
                <h3 className="font-display text-lg md:text-xl font-bold text-white">{project.title}</h3>
                <p className="mt-1.5 text-sm text-white/70 max-w-sm leading-relaxed">{project.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
