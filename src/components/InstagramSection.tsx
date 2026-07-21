"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { INSTAGRAM_LINK, INSTAGRAM_HANDLE } from "@/lib/constants";
import { SectionBadge } from "@/components/SectionBadge";

const instagramPosts = [
  {
    id: 1,
    label: "Мероприятия",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80",
  },
  {
    id: 2,
    label: "Студенческая жизнь",
    img: "https://images.unsplash.com/photo-1523050854058-8df90110c9a3?w=400&q=80",
  },
  {
    id: 3,
    label: "Проекты",
    img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&q=80",
  },
  {
    id: 4,
    label: "Новости",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&q=80",
  },
];

export function InstagramSection() {
  return (
    <section id="instagram" className="relative bg-darkCard/50 py-24 md:py-32 overflow-hidden border-b border-darkBorder">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionBadge>Instagram</SectionBadge>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 font-display font-bold text-textPrimary leading-tight"
            style={{ fontSize: "clamp(26px, 3.2vw, 40px)" }}
          >
            Мы в Instagram
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-2 text-sm text-textSecondary"
          >
            {INSTAGRAM_HANDLE}
          </motion.p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {instagramPosts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="group relative aspect-square overflow-hidden rounded-2xl border border-darkBorder transition-all duration-300 hover:scale-[1.02] hover:border-brandOrange/20"
            >
              <img
                src={post.img}
                alt={post.label}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-darkBg/60 to-transparent" />
              <div className="absolute top-3 right-3 rounded-full bg-white/10 backdrop-blur-md p-2">
                <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-sm font-medium text-white">{post.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 text-center"
        >
          <a
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-darkBorder px-6 py-2.5 text-sm font-semibold text-textSecondary transition-all duration-300 hover:bg-darkCard hover:text-textPrimary"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            Подписаться
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
