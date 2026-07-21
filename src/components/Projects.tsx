"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PROJECTS } from "@/lib/constants";

function ProjectCard({ project, index }: { project: typeof PROJECTS[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? 30 : -30, index % 2 === 0 ? -30 : 30]);
  const scale = useTransform(scrollYProgress, [0.3, 0.7], [0.95, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ y, scale }}
      className="group relative overflow-hidden rounded-2xl min-h-[220px] md:min-h-[260px] flex items-end"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-all duration-500 group-hover:scale-[1.08]`} />
      <div className="absolute inset-0 bg-gradient-to-t from-darkBg/70 to-transparent" />
      <div className="relative z-10 p-6 md:p-8">
        <h3 className="font-display text-lg md:text-xl font-bold text-white">{project.title}</h3>
        <p className="mt-2 text-sm text-white/70 max-w-sm leading-relaxed">{project.text}</p>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative bg-white py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-bold text-deepBlue leading-tight text-center"
          style={{ fontSize: "clamp(28px, 3.6vw, 44px)" }}
        >
          Наши проекты
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-4 max-w-2xl text-center text-deepBlue/60"
        >
          Практика, которая формирует предпринимателя
        </motion.p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
