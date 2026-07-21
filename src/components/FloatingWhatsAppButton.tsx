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
      className="fixed bottom-20 right-4 z-50 flex items-center gap-2 rounded-full bg-brandOrange p-3 text-white shadow-lg transition-all duration-300 hover:brightness-110 md:bottom-5 md:right-5 md:px-5 md:py-3"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden md:inline text-sm font-semibold whitespace-nowrap">
        Написать в WhatsApp
      </span>
    </a>
  );
}
