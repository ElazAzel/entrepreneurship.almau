import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { WhyUs } from "@/components/WhyUs";
import { Programs } from "@/components/Programs";
import { Projects } from "@/components/Projects";
import { Students } from "@/components/Students";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Gallery } from "@/components/Gallery";
import { Partners } from "@/components/Partners";
import { FinalCTA } from "@/components/FinalCTA";
import { SectionBadge } from "@/components/SectionBadge";
import { PROGRAMS, WHATSAPP_LINK } from "@/lib/constants";

const siteUrl = "https://entrepreneurship-almau.vercel.app";

const courseJsonLd = {
  "@context": "https://schema.org",
  "@graph": PROGRAMS.map((p) => ({
    "@type": "Course",
    name: p.title,
    description: p.description,
    educationalLevel: p.level === "Магистратура" ? "Master's degree" : "Bachelor's degree",
    offers: {
      "@type": "Offer",
      category: "Tuition",
    },
    provider: {
      "@type": "EducationalOrganization",
      name: "Institute for Entrepreneurship AlmaU",
      sameAs: siteUrl,
    },
  })),
};

const ENT_SUBJECTS_FAQ = [
  {
    "@type": "Question",
    name: "Какие предметы ЕНТ нужны для поступления в Институт предпринимательства?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Для поступления на программы Института предпринимательства AlmaU необходима комбинация профильных предметов ЕНТ «Математика + География». Это открывает доступ ко всем программам бакалавриата: International Business, Digital Commerce и Business Administration in Entrepreneurship (BAE).",
    },
  },
  {
    "@type": "Question",
    name: "Сколько баллов ЕНТ нужно для поступления?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Минимальный порог для участия в конкурсе — 50-60 баллов. Рекомендуемый балл для гарантированного поступления — 70+. Для государственного гранта требуется от 80 баллов.",
    },
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: ENT_SUBJECTS_FAQ }).replace(/</g, "\\u003c") }}
      />

      <Hero />
      <About />
      <WhyUs />

      {/* Блок: С какими предметами ЕНТ можно поступить */}
      <section className="relative py-24 md:py-32 bg-darkCard/50 border-y border-darkBorder overflow-hidden">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <SectionBadge>Поступление 2026</SectionBadge>
            <h2 className="mt-4 font-display font-semibold text-textPrimary leading-tight" style={{ fontSize: "clamp(26px, 3.2vw, 40px)", letterSpacing: "-0.01em" }}>
              С какими предметами ЕНТ можно поступить
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-textSecondary leading-relaxed break-words">
              Для поступления на все программы бакалавриата Института предпринимательства необходима комбинация профильных предметов ЕНТ <strong className="text-textPrimary">«Математика + География»</strong>.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-3 max-w-4xl mx-auto">
            {[
              { label: "Обязательные предметы", items: ["История Казахстана", "Математическая грамотность", "Грамотность чтения"] },
              { label: "Профильные предметы", items: ["Математика", "География"], highlight: true },
              { label: "Дополнительно", items: ["IELTS / TOEFL (для International Business)"] },
            ].map((group) => (
              <div key={group.label} className={`rounded-2xl border p-6 text-center transition-all duration-300 ${group.highlight ? "border-brandOrange/30 bg-brandOrange/5" : "border-darkBorder bg-darkCard"}`}>
                <h3 className="text-sm font-semibold text-textPrimary">{group.label}</h3>
                <ul className="mt-4 space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className={`text-sm ${group.highlight ? "text-brandOrange font-semibold" : "text-textSecondary"}`}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a href="/ent/matematika-geografiya" className="inline-flex items-center gap-1 text-sm font-semibold text-brandOrange hover:underline">
              Подробнее о поступлении с математикой и географией →
            </a>
          </div>
        </div>
      </section>

      {/* Блок: Выберите направление */}
      <section className="relative py-24 md:py-32 bg-darkBg overflow-hidden">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <SectionBadge>Выбор направления</SectionBadge>
            <h2 className="mt-4 font-display font-semibold text-textPrimary leading-tight" style={{ fontSize: "clamp(26px, 3.2vw, 40px)", letterSpacing: "-0.01em" }}>
              Какую программу выбрать?
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-textSecondary leading-relaxed break-words">
              Каждая программа готовит к разным карьерным траекториям. Если сомневаетесь — сравните направления.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            {[
              { title: "International Business", href: "/programs/international-business", desc: "Глобальный бизнес, международные рынки, консалтинг" },
              { title: "Digital Commerce", href: "/programs/digital-commerce", desc: "E-commerce, маркетплейсы, цифровой маркетинг" },
              { title: "BAE", href: "/programs/bae", desc: "Предпринимательство, стартапы, семейный бизнес" },
              { title: "Креативные индустрии", href: "/programs/creative-industries", desc: "Культурный бизнес, продюсирование, креативная экономика" },
            ].map((prog) => (
              <a key={prog.title} href={prog.href}
                className="rounded-2xl border border-darkBorder bg-darkCard p-6 transition-all duration-300 hover:border-brandOrange/20 block"
              >
                <h3 className="font-display text-base font-semibold text-textPrimary">{prog.title}</h3>
                <p className="mt-2 text-sm text-textSecondary leading-relaxed">{prog.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brandOrange">
                  Подробнее →
                </span>
              </a>
            ))}
          </div>
          <div className="mt-6 text-center">
            <a href="/compare/management-vs-entrepreneurship" className="inline-flex items-center gap-1 text-sm font-semibold text-brandOrange hover:underline">
              Сравнить менеджмент и предпринимательство →
            </a>
          </div>
        </div>
      </section>

      <Programs />

      {/* Блок: Как проходит поступление */}
      <section className="relative py-24 md:py-32 bg-darkCard/50 border-y border-darkBorder overflow-hidden">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <SectionBadge>Поступление</SectionBadge>
            <h2 className="mt-4 font-display font-semibold text-textPrimary leading-tight" style={{ fontSize: "clamp(26px, 3.2vw, 40px)", letterSpacing: "-0.01em" }}>
              Как проходит поступление
            </h2>
            <p className="mt-3 max-w-xl text-sm text-textSecondary leading-relaxed break-words">
              Всего 4 шага от подачи документов до зачисления
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto">
            {[
              { step: "01", title: "Подготовка документов", desc: "Соберите пакет: аттестат, сертификат ЕНТ, удостоверение, фото и медсправка." },
              { step: "02", title: "Подача заявки", desc: "Подайте документы онлайн или лично в приёмной комиссии AlmaU." },
              { step: "03", title: "Собеседование", desc: "Пройдите собеседование с представителями института для определения мотивации." },
              { step: "04", title: "Зачисление", desc: "Получите решение и становитесь частью предпринимательского сообщества." },
            ].map((item) => (
              <div key={item.step} className="rounded-2xl border border-darkBorder bg-darkCard p-6 text-center transition-all duration-300 hover:border-brandOrange/20">
                <span className="font-display text-3xl md:text-4xl font-bold text-brandOrange/30">{item.step}</span>
                <h3 className="mt-2 text-sm md:text-base font-semibold text-textPrimary">{item.title}</h3>
                <p className="mt-1 text-sm text-textSecondary leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a href="/admission" className="inline-flex items-center gap-1 text-sm font-semibold text-brandOrange hover:underline">
              Подробнее о поступлении →
            </a>
          </div>
        </div>
      </section>

      {/* Блок: Стоимость, гранты и скидки */}
      <section className="relative py-24 md:py-32 bg-darkBg overflow-hidden">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <SectionBadge>Финансы</SectionBadge>
            <h2 className="mt-4 font-display font-semibold text-textPrimary leading-tight" style={{ fontSize: "clamp(26px, 3.2vw, 40px)", letterSpacing: "-0.01em" }}>
              Стоимость, гранты и скидки
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-textSecondary leading-relaxed break-words">
              AlmaU предлагает государственные и внутренние гранты, скидки при раннем поступлении и образовательные кредиты
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            {[
              { title: "Государственные гранты", desc: "На конкурсной основе по результатам ЕНТ. Покрывают полную стоимость обучения." },
              { title: "Внутренние гранты AlmaU", desc: "Для талантливых абитуриентов с высокими баллами. Размер определяется индивидуально." },
              { title: "Скидки при раннем поступлении", desc: "Специальные скидки на первый год при подаче в установленные сроки." },
              { title: "Образовательные кредиты", desc: "В банках-партнёрах с отсрочкой платежа на период обучения." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-darkBorder bg-darkCard p-6 text-center transition-all duration-300 hover:border-brandOrange/20">
                <h3 className="text-sm font-semibold text-textPrimary">{item.title}</h3>
                <p className="mt-2 text-sm text-textSecondary leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a href="/admission/grants-and-tuition" className="inline-flex items-center gap-1 text-sm font-semibold text-brandOrange hover:underline">
              Узнать о грантах и стоимости →
            </a>
          </div>
        </div>
      </section>

      <Projects />
      <Students />
      <Testimonials />
      <FAQ />
      <Gallery />
      <Partners />

      <FinalCTA />
    </>
  );
}
