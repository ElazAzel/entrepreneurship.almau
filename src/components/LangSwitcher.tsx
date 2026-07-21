"use client";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { locales, getLocaleFromPath, getLocalizedPath } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { Globe } from "lucide-react";

const labels: Record<Locale, string> = { ru: "RU", kk: "ҚАЗ", en: "EN" };

export function LangSwitcher() {
  const pathname = usePathname();
  const currentLocale = getLocaleFromPath(pathname);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const others = locales.filter((l) => l !== currentLocale);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 rounded-full px-3 py-2 text-xs font-semibold text-textMuted hover:text-textPrimary hover:bg-white/5 transition-colors"
        aria-label="Switch language"
      >
        <Globe className="h-3.5 w-3.5" />
        {labels[currentLocale]}
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-1 min-w-[80px] rounded-xl border border-darkBorder bg-darkCard shadow-xl overflow-hidden">
          {others.map((locale) => (
            <a
              key={locale}
              href={getLocalizedPath(pathname, locale)}
              onClick={() => setOpen(false)}
              className="block px-4 py-2 text-xs font-semibold text-textSecondary hover:text-textPrimary hover:bg-white/5 transition-colors"
            >
              {labels[locale]}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
