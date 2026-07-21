"use client";
import { motion } from "framer-motion";

export function RollButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  return (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold transition-all duration-300 ${
        variant === "primary"
          ? "bg-brandOrange text-white hover:shadow-[0_0_24px_rgba(235,96,27,0.35)]"
          : "border border-darkBorder bg-darkCard text-textSecondary hover:bg-darkCard/80 hover:text-textPrimary"
      }`}
    >
      {children}
    </motion.a>
  );
}
