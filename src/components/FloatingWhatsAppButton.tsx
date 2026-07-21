"use client";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";
import { usePathname } from "next/navigation";
import { getLocaleFromPath } from "@/lib/i18n";

const labels = { ru: "Написать в WhatsApp", kk: "WhatsApp-та жазу", en: "Write to WhatsApp" };

export function FloatingWhatsAppButton() {
  const pathname = usePathname();
  const label = labels[getLocaleFromPath(pathname)];

  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="fixed bottom-24 right-4 z-50 flex items-center justify-center rounded-full bg-brandOrange p-3 text-white shadow-lg transition-all duration-300 hover:brightness-110 md:bottom-5 md:right-5 md:px-5 md:py-3"
      style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom, 0px))" }}
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden md:inline ml-2 text-sm font-semibold whitespace-nowrap">
        {label}
      </span>
    </a>
  );
}
