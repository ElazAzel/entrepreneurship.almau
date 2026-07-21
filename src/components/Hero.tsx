"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { WHATSAPP_LINK, HERO_BADGES } from "@/lib/constants";

function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const particles: { x: number; y: number; speed: number; size: number; opacity: number }[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 25; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: 0.15 + Math.random() * 0.35,
        size: 1 + Math.random() * 2,
        opacity: 0.15 + Math.random() * 0.35,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.y -= p.speed;
        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.fill();
      }
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none motion-reduce:hidden"
      aria-hidden="true"
    />
  );
}

function BlurBlobs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none motion-reduce:hidden" aria-hidden="true">
      <div className="absolute -top-1/3 -left-1/4 h-[500px] w-[500px] rounded-full bg-brandBlue/20 blur-[120px] animate-[blob1_18s_ease-in-out_infinite]" />
      <div className="absolute top-1/3 -right-1/4 h-[400px] w-[400px] rounded-full bg-brandOrange/10 blur-[100px] animate-[blob2_20s_ease-in-out_infinite]" />
      <div className="absolute -bottom-1/4 left-1/3 h-[450px] w-[450px] rounded-full bg-brandBlue/10 blur-[110px] animate-[blob1_16s_ease-in-out_infinite]" />
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-dvh flex items-center bg-darkBg overflow-hidden pt-4 pb-20 md:pb-0 md:pt-0">
      <BlurBlobs />
      <Particles />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4">
        <div className="rounded-3xl border border-darkBorder bg-darkCard/80 backdrop-blur-sm p-8 md:p-14">
          <div className="flex flex-col items-center text-center">
            <motion.img
              src="/logos/logotype-white.svg"
              alt="Institute for Entrepreneurship"
              className="h-12 md:h-16 w-auto mb-6"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            />

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-black text-textPrimary leading-tight"
              style={{ fontSize: "clamp(28px, 4vw, 52px)", letterSpacing: "-0.02em" }}
            >
              Создавай бизнес, проекты и&nbsp;карьеру будущего вместе с AlmaU
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto mt-4 max-w-2xl text-sm md:text-base text-textSecondary leading-relaxed"
            >
              Institute for Entrepreneurship AlmaU — это сообщество предпринимателей, студентов, экспертов и наставников, где ты учишься через действие, запускаешь проекты, работаешь с реальными кейсами и строишь карьеру с первого курса.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
            >
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brandOrange px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_0_30px_rgba(235,96,27,0.35)]"
              >
                Хочу поступить
              </a>
              <a
                href="#programs"
                className="inline-flex items-center gap-2 rounded-full border border-darkBorder px-7 py-3 text-sm font-semibold text-textSecondary transition-all duration-300 hover:bg-darkCard hover:text-textPrimary"
              >
                Смотреть программы
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 flex flex-wrap justify-center gap-2"
            >
              {HERO_BADGES.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-darkBorder bg-darkBg/50 px-3 py-1 text-[11px] font-medium text-textMuted"
                >
                  {badge}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 motion-reduce:hidden hidden md:block" aria-hidden="true">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] text-textMuted tracking-widest uppercase">Scroll</span>
          <div className="h-8 w-[1px] bg-white/10 relative overflow-hidden">
            <div className="absolute top-0 left-0 h-3 w-full bg-brandOrange rounded-full animate-[scroll-cue_2s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>
    </section>
  );
}
