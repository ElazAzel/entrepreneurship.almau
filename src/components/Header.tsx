"use client";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_ITEMS, WHATSAPP_LINK, ALMAU_LINK } from "@/lib/constants";
import { useTheme } from "@/lib/ThemeProvider";
import { LangSwitcher } from "@/components/LangSwitcher";
import { getLocaleFromPath } from "@/lib/i18n";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const emblemTheme = theme === "dark" ? "white" : "orange";
  const pathname = usePathname();
  const currentLocale = getLocaleFromPath(pathname);
  const ctaLabel = currentLocale === "kk" ? "Түсу" : currentLocale === "en" ? "Apply" : "Поступить";

  const t = {
    navLabels: currentLocale === "kk"
      ? { "О нас": "Біз туралы", "Программы": "Бағдарламалар", "Поступление": "Қабылдау", "Гранты": "Гранттар", "Карьера": "Мансап", "ЕНТ": "ҰБТ" }
      : currentLocale === "en"
        ? { "О нас": "About", "Программы": "Programs", "Поступление": "Admission", "Гранты": "Grants", "Карьера": "Career", "ЕНТ": "UNT" }
        : {},
    navLabel: (ru: string) => (t.navLabels as Record<string, string>)[ru] || ru,
    menuMore: { ru: "Ещё", kk: "Тағы", en: "More" }[currentLocale]!,
    lightTheme: { ru: "Светлая тема", kk: "Ашық тақырып", en: "Light theme" }[currentLocale]!,
    darkTheme: { ru: "Тёмная тема", kk: "Қараңғы тақырып", en: "Dark theme" }[currentLocale]!,
    openMenu: { ru: "Открыть меню", kk: "Мәзірді ашу", en: "Open menu" }[currentLocale]!,
    closeMenu: { ru: "Закрыть меню", kk: "Мәзірді жабу", en: "Close menu" }[currentLocale]!,
    mainSite: { ru: "Основной сайт AlmaU", kk: "AlmaU негізгі сайты", en: "AlmaU main site" }[currentLocale]!,
  };

  return (
    <>
      <header
        className={`fixed top-0 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 hidden md:block ${
          scrolled ? "top-3" : "top-5"
        }`}
      >
        <div
          className={`rounded-full border border-darkBorder transition-all duration-300 ${
            scrolled
              ? "bg-darkBg/90 backdrop-blur-xl shadow-lg"
              : "bg-darkBg/50 backdrop-blur-sm"
          }`}
        >
          <div className="flex items-center gap-1 px-2">
            <a href={currentLocale === "ru" ? "/" : `/${currentLocale}`} className="px-3 py-2">
              <Image
                src={`/logos/emblem-${emblemTheme}.svg`}
                alt="Institute for Entrepreneurship"
                width={28}
                height={28}
                className="h-7 w-auto"
              />
            </a>
            <nav className="flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-3 py-2 text-sm font-medium text-textSecondary whitespace-nowrap transition-colors hover:text-textPrimary hover:bg-white/5"
                >
                  {t.navLabel(item.label)}
                </a>
              ))}
            </nav>
            <a
              href={ALMAU_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 rounded-full px-3 py-2 text-xs font-medium text-textMuted hover:text-textPrimary hover:bg-white/5 transition-colors"
            >
              AlmaU
            </a>
            <button
              onClick={toggle}
              className="rounded-full p-2 text-textMuted hover:text-textPrimary hover:bg-white/5 transition-colors"
              aria-label={theme === "dark" ? t.lightTheme : t.darkTheme}
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <LangSwitcher />
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 rounded-full bg-brandOrange px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:brightness-110"
            >
              {ctaLabel}
            </a>
          </div>
        </div>
      </header>

      <header className="fixed bottom-0 left-0 right-0 z-50 border-t border-darkBorder bg-darkBg/95 backdrop-blur-xl md:hidden" style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}>
        <nav className="flex items-center justify-around px-2 py-2">
          <a href={currentLocale === "ru" ? "/" : `/${currentLocale}`} className="flex flex-col items-center gap-0.5 px-2 py-1">
            <Image
              src={`/logos/emblem-${emblemTheme}.svg`}
              alt="Institute for Entrepreneurship"
              width={20}
              height={20}
              className="h-5 w-auto"
            />
          </a>
          {NAV_ITEMS.slice(0, 3).map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="flex flex-col items-center gap-0.5 px-2 py-1 text-[10px] font-medium text-textSecondary"
            >
              {t.navLabel(item.label)}
            </a>
          ))}
          <button
            onClick={() => setMenuOpen(true)}
            className="flex flex-col items-center gap-0.5 px-2 py-1 text-[10px] font-medium text-brandOrange"
            aria-label={t.openMenu}
          >
            <Menu className="h-5 w-5" />
            {t.menuMore}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-darkBg/95 backdrop-blur-lg md:hidden"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-5 right-5 p-2 text-textPrimary"
              aria-label={t.closeMenu}
            >
              <X className="h-7 w-7" />
            </button>
            <nav className="flex flex-col items-center gap-6">
              <button
                onClick={toggle}
                className="flex items-center gap-2 text-sm text-textSecondary hover:text-textPrimary transition-colors"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                {theme === "dark" ? t.lightTheme : t.darkTheme}
              </button>
              <motion.a
                href={ALMAU_LINK}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 }}
                className="text-sm text-textSecondary hover:text-brandOrange transition-colors"
              >
                {t.mainSite}
              </motion.a>
              <div className="flex items-center gap-4 text-sm">
                <LangSwitcher />
              </div>
              {NAV_ITEMS.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="text-2xl font-semibold text-textPrimary transition-colors hover:text-brandOrange"
                >
                  {t.navLabel(item.label)}
                </motion.a>
              ))}
              <motion.a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_ITEMS.length * 0.08 }}
                className="mt-4 rounded-full bg-brandOrange px-8 py-3 text-lg font-semibold text-white"
              >
                {ctaLabel}
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
