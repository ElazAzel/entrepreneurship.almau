import { Partners } from "@/components/Partners";
import { FinalCTA } from "@/components/FinalCTA";
import { SectionBadge } from "@/components/SectionBadge";
import { WHATSAPP_LINK } from "@/lib/constants";
import type { Metadata } from "next";

export const revalidate = 604800;

export const metadata: Metadata = {
  title: "AlmaU Кәсіпкерлік Институты — Алматы, Қазақстан",
  description:
    "AlmaU — Алматыдағы кәсіпкерлік университеті: International Business, Digital Commerce, BAE бакалавриат және Креативті индустриялар магистратура. Кәсіпкерлік білім, стартап экожүйесі, бизнес жобалар, халықаралық тағылымдамалар.",
  alternates: {
    canonical: "/kk",
    languages: { ru: "/", kk: "/kk", en: "/en" },
  },
  openGraph: {
    title: "AlmaU Кәсіпкерлік Институты",
    description: "AlmaU-да бизнесіңізді, жобаларыңызды және мансабыңызды құрыңыз. Алматы, Қазақстан.",
    url: "https://entrepreneurship-almau.vercel.app/kk",
  },
};

export default function KkHome() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 bg-darkBg overflow-hidden">
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-2xl md:rounded-3xl border border-darkBorder bg-darkCard/80 backdrop-blur-sm overflow-hidden">
            <div className="p-6 md:p-14 md:max-w-2xl">
              <h1 className="font-display font-bold text-textPrimary leading-tight" style={{ fontSize: "clamp(28px, 4vw, 52px)", letterSpacing: "-0.02em" }}>
                AlmaU-да бизнес, жоба және болашақ мансабыңды құр
              </h1>
              <p className="mt-4 text-sm md:text-base text-textSecondary leading-relaxed">
                AlmaU Кәсіпкерлік Институты — іс-әрекет арқылы үйренетін, жобаларды іске қосатын және бірінші курстан бастап мансап құратын қауымдастық. International Business, Digital Commerce, BAE және Креативті индустриялар бағдарламаларын таңдаңыз.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-brandOrange px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:brightness-110"
                >
                  WhatsApp-та жазу
                </a>
                <a href="/kk/admission"
                  className="inline-flex items-center gap-2 rounded-full border border-darkBorder px-6 py-3 text-sm font-semibold text-textSecondary transition-all duration-300 hover:bg-darkCard hover:text-textPrimary"
                >
                  Қалай түсуге болады
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-24 md:py-32 bg-darkBg overflow-hidden">
        <div className="mx-auto max-w-5xl px-4">
          <div className="flex flex-col items-center text-center">
            <SectionBadge>Біз туралы</SectionBadge>
            <h2 className="mt-4 font-display font-semibold text-textPrimary leading-tight" style={{ fontSize: "clamp(26px, 3.2vw, 40px)", letterSpacing: "-0.01em" }}>
              Біз басқалар проблемаларды көрген жерде мүмкіндіктерді көруге үйретеміз
            </h2>
          </div>
          <p className="mt-6 max-w-3xl mx-auto text-sm md:text-base text-textSecondary leading-relaxed text-center">
            AlmaU Кәсіпкерлік Институты — бұл студенттер идеяларды іс-әрекетке айналдыруды, жобаларды іске қосуды, бизнес-ойлауды дамытуды және нарық үшін құндылық жасауды үйренетін инновациялық кәсіпкерлер қауымдастығы.
          </p>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24 md:py-32 bg-darkCard/50 border-y border-darkBorder">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col items-center text-center">
            <SectionBadge>Неге біз</SectionBadge>
            <h2 className="mt-4 font-display font-semibold text-textPrimary leading-tight" style={{ fontSize: "clamp(26px, 3.2vw, 40px)", letterSpacing: "-0.01em" }}>
              Кәсіпкерлік Институтын таңдаудың 6 себебі
            </h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {[
              { title: "Тәжірибелі оқытушылар", text: "Нағыз кәсіпкерлер, бизнес негізін қалаушылар, компания иелері және сала менеджерлері." },
              { title: "Learning-by-doing", text: "Жобалар, кейстер, бизнес-таңғы астар, кәсіпорындарға экскурсиялар, стартаптар, нақты тапсырмалар." },
              { title: "Learning-by-creating-value", text: "Құндылық жасау арқылы білім: өнімдер, қызметтер, стартаптар, әлеуметтік жобалар." },
              { title: "Бірінші курстан мансап", text: "Студенттер оқу кезінде бизнесте жұмыс істейді және жобаларын іске қосады." },
              { title: "Күшті кәсіпкерлік орта", text: "Іске қосуға, тырысуға, қателесуге және өсуге дайын адамдар ортасы." },
              { title: "Халықаралық және практикалық бағыт", text: "Тағылымдамалар, халықаралық мүмкіндіктер, серіктестік жобалар." },
            ].map((item, i) => (
              <div key={item.title} className="rounded-2xl border border-darkBorder bg-darkCard p-5 transition-all duration-300 hover:border-brandOrange/20">
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-brandOrange/10 text-brandOrange font-bold text-sm">{i + 1}</div>
                <h3 className="font-display text-sm font-semibold text-textPrimary">{item.title}</h3>
                <p className="mt-1 text-xs text-textSecondary leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="py-24 md:py-32 bg-darkBg">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col items-center text-center">
            <SectionBadge>Бағдарламалар</SectionBadge>
            <h2 className="mt-4 font-display font-semibold text-textPrimary leading-tight" style={{ fontSize: "clamp(26px, 3.2vw, 40px)", letterSpacing: "-0.01em" }}>
              Біздің бағдарламалар
            </h2>
            <p className="mt-2 text-sm text-textSecondary">4 бағдарлама — 3 бакалавриат, 1 магистратура — барлығы практикалық бағытта</p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "International Business", link: "/kk/programs/international-business", desc: "Ғаламдық бизнес, халықаралық нарықтар, консалтинг" },
              { title: "Digital Commerce", link: "/kk/programs/digital-commerce", desc: "E-commerce, маркетплейстер, цифрлық маркетинг" },
              { title: "BAE", link: "/kk/programs/bae", desc: "Кәсіпкерлік, стартаптар, отбасылық бизнес" },
              { title: "Креативті индустриялар", link: "/kk/programs/creative-industries", desc: "Мәдени бизнес, продюсерлік, креативті экономика" },
            ].map((p) => (
              <a key={p.title} href={p.link} className="rounded-2xl border border-darkBorder bg-darkCard p-6 transition-all duration-300 hover:border-brandOrange/20 block">
                <h3 className="font-display text-base font-semibold text-textPrimary">{p.title}</h3>
                <p className="mt-2 text-sm text-textSecondary leading-relaxed">{p.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brandOrange">Толығырақ →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 bg-darkCard/50 border-y border-darkBorder">
        <div className="mx-auto max-w-3xl px-4">
          <div className="flex flex-col items-center text-center">
            <SectionBadge>FAQ</SectionBadge>
            <h2 className="mt-4 font-display font-semibold text-textPrimary leading-tight" style={{ fontSize: "clamp(26px, 3.2vw, 40px)", letterSpacing: "-0.01em" }}>
              Жиі қойылатын сұрақтар
            </h2>
          </div>
          <div className="mt-10 space-y-3">
            {[
              { q: "Институт қандай бағдарламаларды ұсынады?", a: "Біз 3 бакалавриат бағдарламасын — International Business, Digital Commerce, Business Administration in Entrepreneurship (BAE) — және 1 магистратура бағдарламасын ұсынамыз." },
              { q: "Қалай түсуге болады?", a: "AlmaU қабылдау комиссиясына өтініш беріңіз, ЕНТ нәтижелерін немесе халықаралық емтихандарды (SAT, IELTS/TOEFL) ұсыныңыз және сұхбаттан өтіңіз." },
              { q: "Гранттар бар ма?", a: "Иә. AlmaU мемлекеттік гранттарды, дарынды талапкерлерге арналған ішкі шәкіртақыларды, ерте түсу жеңілдіктерін және білім кредиттерін ұсынады." },
              { q: "Бағдарламалар қай тілде өтеді?", a: "International Business толығымен ағылшын тілінде. BAE орыс және ағылшын тілдерінде. Digital Commerce және магистратура орыс тілінде." },
              { q: "Тағылымдама және мансап мүмкіндіктері қандай?", a: "Студенттер CMC, ERG, MOST Ventures, KUSTO Group және басқа компанияларда тағылымдамадан өтеді. Түлектер Google, Salem Social Media, BTS Digital секілді компанияларға орналасады." },
            ].map((item, i) => (
              <details key={i} className="group rounded-2xl border border-darkBorder bg-darkCard transition-all duration-300 hover:border-brandOrange/20">
                <summary className="flex cursor-pointer items-center justify-between p-5 md:p-6 text-sm md:text-base font-semibold text-textPrimary list-none">
                  {item.q}
                  <span className="text-brandOrange text-lg transition-transform duration-300 group-open:rotate-45">+</span>
                </summary>
                <div className="border-t border-darkBorder px-5 md:px-6 pb-5 md:pb-6">
                  <p className="mt-3 text-sm text-textSecondary">{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Partners />
      <FinalCTA />
    </>
  );
}
