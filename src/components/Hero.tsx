"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { WHATSAPP_LINK } from "@/lib/constants";
import { useTheme } from "@/lib/ThemeProvider";

const STUDENT_FACES = [
  { src: "/images/photoshoot/2S2A2424.jpg", alt: "Студент программы International Business" },
  { src: "/images/photoshoot/2S2A2481.jpg", alt: "Студент программы Digital Commerce" },
  { src: "/images/photoshoot/2S2A2529.jpg", alt: "Студент программы BAE" },
  { src: "/images/photoshoot/2S2A2583.jpg", alt: "Студентка Института предпринимательства" },
  { src: "/images/photoshoot/2S2A2654.jpg", alt: "Студент магистратуры креативных индустрий" },
];

export function Hero() {
  const { theme } = useTheme();
  const logoSrc = theme === "dark" ? "/logos/logotype-white.svg" : "/logos/logotype-blue.svg";

  return (
    <section className="relative flex items-center bg-darkBg overflow-hidden min-h-[600px] md:min-h-dvh pt-16 pb-0 md:pt-0 md:pb-0">

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 md:py-0">
        <div className="rounded-2xl md:rounded-3xl border border-darkBorder bg-darkCard/80 backdrop-blur-sm overflow-hidden">
          <div className="grid md:grid-cols-5">
            <div className="md:col-span-3 p-5 md:p-14">
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <motion.img
                  src={logoSrc}
                  alt="Institute for Entrepreneurship AlmaU"
                  className="h-10 md:h-16 w-auto mb-4 md:mb-6"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                />

                <motion.h1
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="font-display font-bold text-textPrimary leading-tight break-words"
                  style={{ fontSize: "clamp(24px, 4.5vw, 52px)", letterSpacing: "-0.02em" }}
                >
                  Создавай бизнес, проекты и&nbsp;карьеру будущего вместе с&nbsp;AlmaU
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="mt-4 max-w-xl text-sm md:text-base text-textSecondary leading-relaxed break-words"
                >
                  Institute for Entrepreneurship AlmaU — сообщество предпринимателей, где ты учишься через действие, запускаешь проекты и строишь карьеру с первого курса.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="mt-5 flex items-center gap-3"
                >
                  <div className="flex -space-x-3">
                    {STUDENT_FACES.map((face) => (
                      <div key={face.src} className="w-9 h-9 md:w-10 md:h-10 rounded-full border-2 border-darkCard overflow-hidden bg-darkBg">
                        <Image src={face.src} width={40} height={40} className="w-full h-full object-cover" alt={face.alt} />
                      </div>
                    ))}
                    <div className="w-9 h-9 md:w-10 md:h-10 rounded-full border-2 border-darkCard bg-brandOrange flex items-center justify-center text-[10px] md:text-xs font-bold text-white">
                      500+
                    </div>
                  </div>
                  <span className="text-xs text-textMuted">студентов уже выбрали AlmaU</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="mt-5 md:mt-6 flex flex-col sm:flex-row items-center md:items-start gap-2 md:gap-3 w-full"
                >
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-brandOrange px-6 py-2.5 md:px-7 md:py-3 text-sm font-semibold text-white transition-all duration-300 hover:brightness-110"
                  >
                    Хочу поступить
                  </a>
                  <a
                    href="/#programs"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-darkBorder px-6 py-2.5 md:px-7 md:py-3 text-sm font-semibold text-textSecondary transition-all duration-300 hover:bg-darkCard hover:text-textPrimary"
                  >
                    Смотреть программы
                  </a>
                </motion.div>
              </div>
            </div>
            <div className="md:col-span-2 relative min-h-[220px] md:min-h-[400px] overflow-hidden">
              <Image
                src="/images/photoshoot/2S2A2892.jpg"
                alt="Студенты Института предпринимательства AlmaU"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-darkCard/90 md:bg-gradient-to-l md:from-transparent md:to-darkCard/90" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
