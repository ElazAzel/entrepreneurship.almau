"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { WHATSAPP_LINK, HERO_BADGES, HERO_FLOATING_CARDS } from "@/lib/constants";

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

    for (let i = 0; i < 22; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: 0.2 + Math.random() * 0.4,
        size: 1.5 + Math.random() * 2,
        opacity: 0.2 + Math.random() * 0.4,
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
      <div className="absolute -top-1/4 -left-1/4 h-[500px] w-[500px] rounded-full bg-electric/20 blur-[120px] animate-[blob1_18s_ease-in-out_infinite]" />
      <div className="absolute top-1/3 -right-1/4 h-[400px] w-[400px] rounded-full bg-orange/15 blur-[100px] animate-[blob2_20s_ease-in-out_infinite]" />
      <div className="absolute -bottom-1/4 left-1/3 h-[450px] w-[450px] rounded-full bg-violet/15 blur-[110px] animate-[blob3_16s_ease-in-out_infinite]" />
    </div>
  );
}

function FloatingCard({ label, index }: { label: string; index: number }) {
  return (
    <motion.div
      className="absolute rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 px-4 py-2 text-sm font-medium text-white/90 whitespace-nowrap motion-reduce:hidden"
      style={{
        top: `${20 + index * 18}%`,
        left: `${index % 2 === 0 ? 5 : 75}%`,
      }}
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay: index * 0.8,
      }}
    >
      {label}
    </motion.div>
  );
}

function ConicCore() {
  return (
    <div className="relative flex items-center justify-center motion-reduce:hidden" aria-hidden="true">
      <div className="h-28 w-28 rounded-full animate-[core-spin_12s_linear_infinite]" style={{
        background: "conic-gradient(from 0deg, #0057FF, #FF6B00, #7C3AED, #FFD166, #0057FF)",
      }} />
      <div className="absolute h-20 w-20 rounded-full bg-darkBg flex items-center justify-center">
        <span className="font-display text-lg font-bold text-white">AlmaU</span>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-dvh flex items-center bg-darkBg overflow-hidden">
      <BlurBlobs />
      <Particles />
      <ConicCore />

      <div className="hidden lg:block" aria-hidden="true">
        {HERO_FLOATING_CARDS.map((card, i) => (
          <FloatingCard key={card} label={card} index={i} />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 pt-24 pb-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-extrabold text-white leading-tight"
          style={{ fontSize: "clamp(32px, 5.4vw, 68px)", letterSpacing: "-0.02em" }}
        >
          Создавай бизнес, проекты и карьеру будущего вместе с AlmaU
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-6 max-w-3xl text-base md:text-lg text-white/60 leading-relaxed"
        >
          Institute for Entrepreneurship AlmaU — это сообщество предпринимателей, студентов, экспертов и наставников, где ты учишься через действие, запускаешь проекты, работаешь с реальными кейсами и строишь карьеру с первого курса.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-orange px-8 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:translate-y-[-3px] hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,107,0,0.4)]"
          >
            Хочу поступить
          </a>
          <a
            href="#programs"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-semibold text-white/80 transition-all duration-300 hover:bg-white/10 hover:text-white"
          >
            Смотреть программы
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-8 flex flex-wrap justify-center gap-2"
        >
          {HERO_BADGES.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/70"
            >
              {badge}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 motion-reduce:hidden" aria-hidden="true">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-white/30">Scroll</span>
          <div className="h-8 w-[1px] bg-white/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 h-3 w-full bg-orange rounded-full animate-[scroll-cue_2s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>
    </section>
  );
}
