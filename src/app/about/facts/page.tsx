import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { WHATSAPP_LINK, FOOTER_CONTACTS, SOCIAL_LINKS } from "@/lib/constants";

const siteUrl = "https://entrepreneurship-almau.vercel.app";

export const revalidate = 604800;

export const metadata: Metadata = {
  title: "Официальная информация | Институт предпринимательства AlmaU",
  description: "Полное название, адрес, контакты, направления подготовки, руководство и официальные данные Института предпринимательства AlmaU.",
  alternates: { canonical: "/about/facts" },
  openGraph: { title: "Официальная информация об Институте предпринимательства AlmaU", url: `${siteUrl}/about/facts` },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Официальная информация", item: `${siteUrl}/about/facts` },
  ],
};

export default function FactsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd).replace(/</g, "\\u003c") }} />

      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 bg-darkBg overflow-hidden">
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-2xl md:rounded-3xl border border-darkBorder bg-darkCard/80 backdrop-blur-sm overflow-hidden">
            <div className="p-6 md:p-14">
              <h1 className="font-display font-bold text-textPrimary leading-tight break-words" style={{ fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "-0.02em" }}>
                Официальная информация
              </h1>
              <p className="mt-4 max-w-2xl text-sm md:text-base text-textSecondary leading-relaxed break-words">
                Проверенные данные об Институте предпринимательства AlmaU для абитуриентов, студентов, партнёров и поисковых систем.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-darkCard/50 border-y border-darkBorder">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="font-display font-semibold text-textPrimary leading-tight" style={{ fontSize: "clamp(26px, 3.2vw, 40px)", letterSpacing: "-0.01em" }}>
            Об организации
          </h2>
          <dl className="mt-10 space-y-6">
            {[
              { term: "Полное название", def: "Institute for Entrepreneurship AlmaU (Институт предпринимательства AlmaU)" },
              { term: "Принадлежность", def: "Almaty Management University (AlmaU)" },
              { term: "Город", def: "Алматы, Казахстан" },
              { term: "Адрес", def: "ул. Розыбакиева, 227" },
              { term: "Телефон", def: FOOTER_CONTACTS.phone },
              { term: "Email", def: FOOTER_CONTACTS.email },
              { term: "Направления подготовки", def: "International Business, Digital Commerce, Business Administration in Entrepreneurship (BAE), Управление в креативных индустриях" },
              { term: "Профильные предметы ЕНТ", def: "Математика + География" },
              { term: "Языки обучения", def: "Русский, английский (в зависимости от программы)" },
              { term: "Форма обучения", def: "Очная" },
              { term: "Сроки обучения", def: "Бакалавриат — 3 года, магистратура — 2 года" },
            ].map((item) => (
              <div key={item.term} className="flex flex-col sm:flex-row gap-1 sm:gap-4">
                <dt className="sm:w-64 text-sm font-semibold text-textPrimary flex-shrink-0">{item.term}</dt>
                <dd className="text-sm text-textSecondary">{item.def}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-darkBg">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="font-display font-semibold text-textPrimary leading-tight" style={{ fontSize: "clamp(26px, 3.2vw, 40px)", letterSpacing: "-0.01em" }}>
            Студенческие проекты и мероприятия
          </h2>
          <ul className="mt-10 space-y-4">
            {[
              { name: "StartUp Night AlmaU", desc: "Университетский projectathon: 12 часов, команда, наставники, готовый проект" },
              { name: "Crack It", desc: "Городской кейс-чемпионат: команды решают бизнес-задачи казахстанских и международных компаний" },
              { name: "Big Ideas Camp", desc: "Интенсив по генерации идей и запуску стартапов" },
              { name: "Rocket Pitch", desc: "Конкурс питчей студенческих проектов перед инвесторами" },
              { name: "Startup Incubator", desc: "Акселерационная программа для студенческих стартапов" },
              { name: "Бизнес-завтраки", desc: "Неформальные встречи с предпринимателями, инфлюенсерами и экспертами" },
              { name: "Экскурсии в компании", desc: "Студенты видят бизнес изнутри, получают практический опыт" },
            ].map((project) => (
              <li key={project.name} className="rounded-2xl border border-darkBorder bg-darkCard p-5">
                <h3 className="text-sm font-semibold text-textPrimary">{project.name}</h3>
                <p className="mt-1 text-sm text-textSecondary">{project.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-darkCard/50 border-y border-darkBorder">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="font-display font-semibold text-textPrimary leading-tight" style={{ fontSize: "clamp(26px, 3.2vw, 40px)", letterSpacing: "-0.01em" }}>
            Компании-партнёры
          </h2>
          <p className="mt-3 text-sm text-textSecondary">Студенты проходят стажировки и практику в ведущих казахстанских и международных компаниях</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {["CMC", "ERG", "MOST Ventures", "KUSTO Group", "ChocoFamily", "Salem Social Media", "BTS Digital", "Казахювелир", "Google"].map((partner) => (
              <span key={partner} className="rounded-xl border border-darkBorder bg-darkCard px-5 py-3 text-sm font-semibold text-textSecondary tracking-wider uppercase">
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-darkBg">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="font-display font-semibold text-textPrimary leading-tight" style={{ fontSize: "clamp(26px, 3.2vw, 40px)", letterSpacing: "-0.01em" }}>
            Ссылки и официальные страницы
          </h2>
          <ul className="mt-8 space-y-3">
            <li><a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-sm text-brandOrange hover:underline">Instagram</a></li>
            <li><a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="text-sm text-brandOrange hover:underline">YouTube</a></li>
            <li><a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-brandOrange hover:underline">LinkedIn</a></li>
            <li><a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer" className="text-sm text-brandOrange hover:underline">TikTok</a></li>
            <li><a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="text-sm text-brandOrange hover:underline">Facebook</a></li>
          </ul>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-darkCard/30 border-y border-darkBorder">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="text-xs text-textMuted">
            Обновлено: 21 июля 2026 года. Информация проверена и соответствует официальным данным Института предпринимательства AlmaU.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
