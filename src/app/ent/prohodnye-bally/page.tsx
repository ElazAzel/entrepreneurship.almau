import type { Metadata } from "next";
import { SectionBadge } from "@/components/SectionBadge";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { WHATSAPP_LINK } from "@/lib/constants";

const siteUrl = "https://entrepreneurship-almau.vercel.app";

export const revalidate = 604800;

export const metadata: Metadata = {
  title: "Проходные баллы в университеты Алматы — ЕНТ 2026 | AlmaU",
  description: "Узнайте проходные баллы ЕНТ в университеты Алматы 2026: КазНУ, КазНИТУ, КБТУ, AlmaU, Нархоз, Туран. Таблицы баллов для гранта и платного. Рекомендации по поступлению.",
  alternates: { canonical: "/ent/prohodnye-bally" },
  openGraph: {
    title: "Проходные баллы в университеты Алматы — ЕНТ 2026",
    description: "Самые актуальные проходные баллы ЕНТ в вузы Алматы. Таблица баллов для гранта и платного отделения. Советы по поступлению.",
    url: `${siteUrl}/ent/prohodnye-bally`,
  },
};

const PROHODNOY_FAQ = [
  {
    question: "Какие проходные баллы в университетах Алматы в 2026 году?",
    answer: "Проходные баллы в вузах Алматы зависят от специальности, конкурса и количества грантов. В среднем для поступления на грант требуется 80+ баллов ЕНТ, на платное — от 50–70 баллов. Точные проходные баллы устанавливаются приёмными комиссиями после завершения приёма заявок.",
  },
  {
    question: "Какой минимальный проходной балл ЕНТ для поступления в вуз?",
    answer: "Минимальный пороговый балл ЕНТ для участия в конкурсе составляет 50 баллов для большинства специальностей. Для творческих и спортивных специальностей порог может быть снижен. Однако фактический проходной балл всегда выше минимального порога.",
  },
  {
    question: "Сколько баллов ЕНТ нужно для гранта в 2026 году?",
    answer: "Для получения государственного образовательного гранта рекомендуется набрать не менее 80 баллов ЕНТ. На востребованные специальности в топовых вузах Алматы проходной балл на грант может достигать 100–120 баллов.",
  },
  {
    question: "Какой проходной балл в КазНУ им. аль-Фараби?",
    answer: "КазНУ им. аль-Фараби — ведущий вуз Казахстана. Проходные баллы на грант: от 90–110 баллов в зависимости от специальности. На платное отделение — от 60–75 баллов. Самые высокие баллы требуются на IT, экономику и международные отношения.",
  },
  {
    question: "Какой проходной балл в КазНИТУ им. Сатпаева (Satbayev University)?",
    answer: "Satbayev University (КазНИТУ) — технический вуз Алматы. Проходные баллы на грант: от 80–100 баллов. На платное: от 55–70 баллов. Самые высокие баллы на IT, нефтегазовое дело и машиностроение.",
  },
  {
    question: "Какой проходной балл в КБТУ (Казахстанско-Британский технический университет)?",
    answer: "КБТУ — один из сильнейших технических вузов Алматы. Проходные баллы на грант: от 85–110 баллов. На платное: от 60–75 баллов. Высокий конкурс на IT, робототехнику и нефтегазовое дело.",
  },
  {
    question: "Какой проходной балл в AlmaU (Алматы Менеджмент Университет)?",
    answer: "AlmaU предлагает программы бизнеса, предпринимательства и менеджмента. Рекомендуемый балл для гарантированного поступления: 70–80+. Для получения гранта: от 80 баллов. На платное отделение можно поступить от 50–60 баллов.",
  },
  {
    question: "Какой проходной балл в Нархоз (Университет Нархоз)?",
    answer: "Нархоз — экономический вуз Алматы. Проходные баллы на грант: от 80–100 баллов. На платное: от 55–70 баллов. Конкурс выше на специальности «Финансы», «Экономика» и «Менеджмент».",
  },
  {
    question: "Какой проходной балл в Университет Туран?",
    answer: "Туран — многопрофильный вуз Алматы. Проходные баллы на грант: от 75–95 баллов. На платное: от 50–65 баллов. Высокий конкурс на юридические и экономические специальности.",
  },
  {
    question: "Какой проходной балл в КазНПУ им. Абая?",
    answer: "КазНПУ им. Абая — педагогический университет. Проходные баллы на грант: от 70–90 баллов. На платное: от 50–60 баллов. Самые высокие баллы на иностранные языки и информатику.",
  },
  {
    question: "Какой проходной балл в КазГАСА (Казахская головная архитектурно-строительная академия)?",
    answer: "КазГАСА — ведущий архитектурно-строительный вуз Алматы. Проходные баллы на грант: от 75–95 баллов. На платное: от 55–70 баллов. Творческие специальности требуют дополнительных экзаменов.",
  },
  {
    question: "Какой проходной балл в SDU (Suleyman Demirel University)?",
    answer: "SDU — частный университет в Алматы. Проходные баллы на грант: от 75–95 баллов. На платное: от 50–65 баллов. Высокий конкурс на IT, педагогику и экономику.",
  },
  {
    question: "Какой проходной балл в КазНМУ им. Асфендиярова (медицинский)?",
    answer: "КазНМУ — главный медицинский вуз Алматы. Проходные баллы на грант: от 85–110 баллов. На платное: от 65–80 баллов. Конкурс традиционно высокий на специальности «Общая медицина» и «Стоматология».",
  },
  {
    question: "Какой проходной балл ЕНТ на бизнес-специальности в Алматы?",
    answer: "На бизнес-специальности (менеджмент, предпринимательство, международный бизнес, маркетинг) проходные баллы: грант от 80+, платное от 50–65. В AlmaU рекомендуемый балл для гарантированного поступления — 70–80+.",
  },
  {
    question: "Какой проходной балл ЕНТ на IT-специальности в Алматы?",
    answer: "На IT-специальности конкурс самый высокий. Проходные баллы на грант: от 90–120 баллов. На платное: от 60–75 баллов. Самые высокие баллы требуют КБТУ, КазНУ и КазНИТУ.",
  },
  {
    question: "Влияет ли профильный предмет на проходной балл?",
    answer: "Да, от выбора профильных предметов зависит доступный пул специальностей и проходной балл. Комбинация «Математика + География» даёт доступ к бизнес-программам. Комбинация «Математика + Физика» — к техническим. Проходные баллы различаются в зависимости от группы специальностей.",
  },
  {
    question: "Можно ли поступить в вуз Алматы с 60 баллами ЕНТ?",
    answer: "Да, с 60 баллами можно поступить на платное отделение в большинство вузов Алматы. Однако для гранта этого недостаточно — требуется от 80 баллов. Рекомендуем рассмотреть программы AlmaU, где можно получить скидки и внутренние гранты.",
  },
  {
    question: "Где посмотреть точные проходные баллы в вузы Алматы?",
    answer: "Точные проходные баллы публикуются на официальных сайтах приёмных комиссий каждого вуза после завершения приёма. Также можно обратиться в приёмную комиссию AlmaU для индивидуальной консультации.",
  },
  {
    question: "Повышаются ли проходные баллы каждый год?",
    answer: "Проходные баллы могут меняться в зависимости от демографической ситуации, количества выпускников, числа грантов и популярности специальностей. В среднем проходные баллы в вузах Алматы растут на 2–5 баллов ежегодно.",
  },
  {
    question: "Какие проходные баллы в AlmaU на программы Института предпринимательства?",
    answer: "В Институте предпринимательства AlmaU (International Business, Digital Commerce, BAE) рекомендуемый балл для поступления — 70–80+. Для гранта — от 80 баллов. Программы ориентированы на практику, предпринимательство и запуск стартапов.",
  },
];

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "ЕНТ", item: `${siteUrl}/ent/matematika-geografiya` },
    { "@type": "ListItem", position: 3, name: "Проходные баллы в университеты Алматы", item: `${siteUrl}/ent/prohodnye-bally` },
  ],
};

const universityScores = [
  { name: "КазНУ им. аль-Фараби", grant: "90–110", paid: "60–75", profile: "Многопрофильный" },
  { name: "КазНИТУ им. Сатпаева (Satbayev University)", grant: "80–100", paid: "55–70", profile: "Технический" },
  { name: "КБТУ", grant: "85–110", paid: "60–75", profile: "Технический / IT" },
  { name: "AlmaU", grant: "80+", paid: "50–65", profile: "Бизнес / Предпринимательство" },
  { name: "Нархоз", grant: "80–100", paid: "55–70", profile: "Экономический" },
  { name: "Университет Туран", grant: "75–95", paid: "50–65", profile: "Многопрофильный" },
  { name: "КазНПУ им. Абая", grant: "70–90", paid: "50–60", profile: "Педагогический" },
  { name: "КазГАСА", grant: "75–95", paid: "55–70", profile: "Архитектура / Строительство" },
  { name: "SDU", grant: "75–95", paid: "50–65", profile: "Многопрофильный" },
  { name: "КазНМУ им. Асфендиярова", grant: "85–110", paid: "65–80", profile: "Медицинский" },
];

const entScores = [
  { level: "Минимальный порог для участия в конкурсе", grant: "—", paid: "50" },
  { level: "Платное отделение (большинство вузов)", grant: "—", paid: "55–70" },
  { level: "Рекомендуемый для гарантированного поступления", grant: "—", paid: "70+" },
  { level: "Государственный грант (гуманитарные)", grant: "80+", paid: "—" },
  { level: "Государственный грант (технические / IT)", grant: "90–110", paid: "—" },
  { level: "Государственный грант (топ-вузы)", grant: "100–120", paid: "—" },
];

export default function ProhodnyeBallyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: PROHODNOY_FAQ.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      }).replace(/</g, "\\u003c") }} />

      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 bg-darkBg overflow-hidden">
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-2xl md:rounded-3xl border border-darkBorder bg-darkCard/80 backdrop-blur-sm overflow-hidden">
            <div className="p-6 md:p-14 text-center">
              <span className="inline-block rounded-full border border-brandOrange/30 bg-brandOrange/10 px-4 py-1 text-xs font-medium uppercase text-textMuted" style={{ letterSpacing: "0.08em" }}>
                Поступление 2026
              </span>
              <h1 className="mt-4 font-display font-bold text-textPrimary leading-tight break-words" style={{ fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "-0.02em" }}>
                Проходные баллы в университеты Алматы — ЕНТ 2026
              </h1>
              <p className="mt-4 max-w-3xl mx-auto text-sm md:text-base text-textSecondary leading-relaxed break-words">
                Проходные баллы в университетах Алматы зависят от выбранного вуза, специальности и формы обучения. В среднем для получения государственного гранта требуется набрать от 80 баллов ЕНТ, а для поступления на платное отделение — от 50 до 70 баллов. В этой статье мы собрали актуальные данные по проходным баллам ведущих вузов Алматы, включая AlmaU, КазНУ, КазНИТУ, КБТУ, Нархоз, Туран и другие.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-brandOrange px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:brightness-110"
                >
                  Узнать о поступлении
                </a>
                <a href="#faq"
                  className="inline-flex items-center gap-2 rounded-full border border-darkBorder px-7 py-3 text-sm font-semibold text-textSecondary transition-all duration-300 hover:bg-darkCard hover:text-textPrimary"
                >
                  Частые вопросы
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-darkCard/50 border-y border-darkBorder">
        <div className="mx-auto max-w-5xl px-4">
          <div className="flex flex-col items-center text-center">
            <SectionBadge>Проходные баллы вузов</SectionBadge>
            <h2 className="mt-4 font-display font-semibold text-textPrimary leading-tight" style={{ fontSize: "clamp(26px, 3.2vw, 40px)", letterSpacing: "-0.01em" }}>
              Проходные баллы ЕНТ в университетах Алматы
            </h2>
            <p className="mt-3 max-w-xl text-sm text-textSecondary leading-relaxed break-words">
              Ориентировочные проходные баллы в ведущих вузах Алматы для поступления на грант и платное отделение в 2026 году.
            </p>
          </div>
          <div className="mt-10 overflow-x-auto">
            <div className="rounded-2xl border border-darkBorder bg-darkCard overflow-hidden min-w-[640px]">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-darkBorder bg-darkCard">
                    <th className="px-6 py-4 text-left font-semibold text-textPrimary">Университет</th>
                    <th className="px-6 py-4 text-left font-semibold text-textPrimary">Грант (баллы)</th>
                    <th className="px-6 py-4 text-left font-semibold text-textPrimary">Платное (баллы)</th>
                    <th className="px-6 py-4 text-left font-semibold text-textPrimary">Профиль</th>
                  </tr>
                </thead>
                <tbody>
                  {universityScores.map((row) => (
                    <tr key={row.name} className="border-b border-darkBorder last:border-0">
                      <td className="px-6 py-4 font-medium text-textPrimary">{row.name}</td>
                      <td className="px-6 py-4 text-textSecondary">{row.grant}</td>
                      <td className="px-6 py-4 text-textSecondary">{row.paid}</td>
                      <td className="px-6 py-4 text-textSecondary">{row.profile}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm text-textMuted">Данные основаны на результатах прошлых лет. Точные проходные баллы уточняйте в приёмной комиссии.</p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-darkBg">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex flex-col items-center text-center">
            <SectionBadge>Баллы ЕНТ</SectionBadge>
            <h2 className="mt-4 font-display font-semibold text-textPrimary leading-tight" style={{ fontSize: "clamp(26px, 3.2vw, 40px)", letterSpacing: "-0.01em" }}>
              Проходные баллы ЕНТ: грант и платное обучение
            </h2>
            <p className="mt-3 max-w-lg text-sm text-textSecondary leading-relaxed break-words">
              Таблица ориентировочных баллов ЕНТ для разных уровней поступления в вузы Алматы.
            </p>
          </div>
          <div className="mt-10 max-w-2xl mx-auto overflow-x-auto">
            <div className="rounded-2xl border border-darkBorder bg-darkCard overflow-hidden min-w-[400px]">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-darkBorder bg-darkCard">
                    <th className="px-6 py-4 text-left font-semibold text-textPrimary">Уровень</th>
                    <th className="px-6 py-4 text-left font-semibold text-textPrimary">Грант</th>
                    <th className="px-6 py-4 text-left font-semibold text-textPrimary">Платное</th>
                  </tr>
                </thead>
                <tbody>
                  {entScores.map((row) => (
                    <tr key={row.level} className="border-b border-darkBorder last:border-0">
                      <td className="px-6 py-4 text-textSecondary">{row.level}</td>
                      <td className="px-6 py-4 text-textSecondary">{row.grant}</td>
                      <td className="px-6 py-4 text-textSecondary">{row.paid}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-darkCard/50 border-y border-darkBorder">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex flex-col items-center text-center">
            <SectionBadge>AlmaU</SectionBadge>
            <h2 className="mt-4 font-display font-semibold text-textPrimary leading-tight" style={{ fontSize: "clamp(26px, 3.2vw, 40px)", letterSpacing: "-0.01em" }}>
              Проходные баллы в AlmaU
            </h2>
            <p className="mt-3 max-w-lg text-sm text-textSecondary leading-relaxed break-words">
              AlmaU (Алматы Менеджмент Университет) — ведущий бизнес-вуз Казахстана. Проходные баллы зависят от программы и формы обучения.
            </p>
          </div>
          <div className="mt-10 max-w-2xl mx-auto">
            <div className="rounded-2xl border border-darkBorder bg-darkCard p-6 md:p-8">
              <h3 className="font-display text-base font-semibold text-textPrimary">Рекомендуемые баллы для поступления в AlmaU</h3>
              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between rounded-xl border border-darkBorder bg-darkBg p-4">
                  <span className="text-sm text-textSecondary">Платное отделение</span>
                  <span className="text-sm font-semibold text-brandOrange">от 50–60 баллов</span>
                </div>
                <div className="flex items-center justify-between rounded-xl border border-darkBorder bg-darkBg p-4">
                  <span className="text-sm text-textSecondary">Рекомендуемый для гарантированного поступления</span>
                  <span className="text-sm font-semibold text-brandOrange">70–80+ баллов</span>
                </div>
                <div className="flex items-center justify-between rounded-xl border border-darkBorder bg-darkBg p-4">
                  <span className="text-sm text-textSecondary">Государственный грант</span>
                  <span className="text-sm font-semibold text-brandOrange">от 80+ баллов</span>
                </div>
                <div className="flex items-center justify-between rounded-xl border border-darkBorder bg-darkBg p-4">
                  <span className="text-sm text-textSecondary">Внутренние гранты и скидки AlmaU</span>
                  <span className="text-sm font-semibold text-brandOrange">от 60–70 баллов</span>
                </div>
              </div>
              <p className="mt-4 text-sm text-textSecondary leading-relaxed">
                AlmaU предлагает не только государственные гранты, но и собственные внутренние гранты и скидки при раннем поступлении. Программы Института предпринимательства (International Business, Digital Commerce, BAE) ориентированы на практику и запуск стартапов.
              </p>
              <div className="mt-6">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-brandOrange px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:brightness-110"
                >
                  Узнать проходной балл в AlmaU
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection items={PROHODNOY_FAQ} title="FAQ: проходные баллы в университеты Алматы" id="faq" />

      <section className="py-12 md:py-16 bg-darkCard/30 border-y border-darkBorder">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="text-xs text-textMuted">
            Материал подготовил Ильяс Азелханов, руководитель проектов Института предпринимательства AlmaU, сертифицированный бизнес-трекер и организатор студенческих предпринимательских программ.
          </p>
          <p className="mt-2 text-xs text-textMuted">Обновлено: 21 июля 2026 года</p>
        </div>
      </section>

      <CTASection
        title="Хотите поступить в AlmaU?"
        subtitle="Узнайте точные проходные баллы на вашу программу и получите консультацию по поступлению в WhatsApp."
      />
    </>
  );
}
