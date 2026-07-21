"use client";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";

export function FloatingWhatsAppButton() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Написать в WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-orange p-3 text-white shadow-lg transition-transform duration-300 hover:scale-105 md:px-5 md:py-3 motion-safe:animate-[pulse-shadow_2.4s_ease-in-out_infinite]"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden md:inline text-sm font-semibold whitespace-nowrap">
        Написать в WhatsApp
      </span>
    </a>
  );
}
