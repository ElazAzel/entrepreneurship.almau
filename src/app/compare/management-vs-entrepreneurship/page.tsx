import type { Metadata } from "next";
import { SectionBadge } from "@/components/SectionBadge";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { WHATSAPP_LINK } from "@/lib/constants";

const siteUrl = "https://entrepreneurship-almau.vercel.app";

export const revalidate = 604800;

export const metadata: Metadata = {
  title: "Менеджмент или предпринимательство — что выбрать? | AlmaU",
  description: "Сравнение специальностей менеджмент и предпринимательство: фокус, карьерные роли, формат мышления, кому что подходит. Выберите правильную программу в Институте предпринимательства AlmaU.",
  alternates: { canonical: "/compare/management-vs-entrepreneurship" },
  openGraph: {
    title: "Менеджмент или предпринимательство — что выбрать?",
    description: "Сравнение двух направлений: управление командами и компаниями против создания собственного бизнеса и запуска стартапов.",
    url: `${siteUrl}/compare/management-vs-entrepreneurship`,
  },
};

const COMPARE_FAQ = [
  {
    question: "Что лучше выбрать: менеджмент или предпринимательство?",
    answer: "Нет однозначного ответа — всё зависит от ваших целей. Менеджмент подходит тем, кто хочет управлять командами и проектами в крупных компаниях. Предпринимательство — тем, кто хочет создавать собственный бизнес, запускать стартапы и развивать новые направления. В Институте предпринимательства AlmaU программа BAE сочетает оба подхода.",
  },
  {
    question: "Можно ли после менеджмента стать предпринимателем?",
    answer: "Да, менеджмент даёт хорошую базу для предпринимательства: управление проектами, финансами, командами. Однако программа предпринимательства (BAE) даёт больше практики по запуску стартапов, работе с бизнес-моделями и развитию предпринимательского мышления с первого курса.",
  },
  {
    question: "Чем отличается BAE от менеджмента в других вузах?",
    answer: "BAE — не академическая специальность, а образ жизни. В центре программы — предпринимательское мышление, запуск реальных проектов, работа с бизнес-кейсами и создание собственного стартапа. Это практическая подготовка к роли предпринимателя, а не теоретический менеджмент.",
  },
  {
    question: "Какая зарплата выше: менеджмент или предпринимательство?",
    answer: "На старте карьеры зарплаты сопоставимы — от 250 000 до 500 000 тенге. В долгосрочной перспективе предприниматели имеют неограниченный потенциал дохода, но и больший риск. Менеджеры получают стабильный рост до уровня топ-менеджмента.",
  },
  {
    question: "Какие предметы ЕНТ нужны для обеих программ?",
    answer: "И для менеджмента, и для предпринимательства в AlmaU необходима комбинация профильных предметов ЕНТ «Математика + География».",
  },
  {
    question: "Где больше практики: на менеджменте или предпринимательстве?",
    answer: "Программа предпринимательства (BAE) даёт больше практики по запуску и управлению бизнесом: студенты работают над реальными проектами с первого курса. Менеджмент тоже включает кейсы и стажировки, но с фокусом на управленческие процессы в корпорациях.",
  },
  {
    question: "Что лучше для семейного бизнеса?",
    answer: "Для семейного бизнеса лучше подходит предпринимательство — в программе BAE есть специальный трек «Семейный бизнес». Менеджмент тоже полезен, но не даёт такой глубины.",
  },
  {
    question: "Кого больше ценят работодатели?",
    answer: "Зависит от позиции. Для управленческих ролей (project manager, product manager) ценят менеджмент. Для ролей в развитии бизнеса, стартапах и инновациях — предпринимательское образование. Выпускники AlmaU получают офферы от Google, Salem Social Media, BTS Digital.",
  },
];

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Сравнение: менеджмент или предпринимательство", item: `${siteUrl}/compare/management-vs-entrepreneurship` },
  ],
};

export default function ManagementVsEntrepreneurshipPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: COMPARE_FAQ.map((item) => ({
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
                Сравнение программ
              </span>
              <h1 className="mt-4 font-display font-bold text-textPrimary leading-tight break-words" style={{ fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "-0.02em" }}>
                Менеджмент или предпринимательство — что выбрать?
              </h1>
              <p className="mt-4 max-w-3xl mx-auto text-sm md:text-base text-textSecondary leading-relaxed break-words">
                Выбирайте менеджмент, если хотите управлять командами, проектами и компаниями. Предпринимательство больше подходит тем, кто хочет создавать собственный бизнес или запускать новые продукты. В Институте предпринимательства AlmaU программа BAE сочетает оба направления.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-brandOrange px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:brightness-110"
                >
                  Получить консультацию
                </a>
                <a href="/programs/bae"
                  className="inline-flex items-center gap-2 rounded-full border border-darkBorder px-7 py-3 text-sm font-semibold text-textSecondary transition-all duration-300 hover:bg-darkCard hover:text-textPrimary"
                >
                  О программе BAE
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-darkCard/50 border-y border-darkBorder">
        <div className="mx-auto max-w-5xl px-4">
          <div className="flex flex-col items-center text-center">
            <SectionBadge>Сравнение</SectionBadge>
            <h2 className="mt-4 font-display font-semibold text-textPrimary leading-tight" style={{ fontSize: "clamp(26px, 3.2vw, 40px)", letterSpacing: "-0.01em" }}>
              Сравнительная таблица: менеджмент vs предпринимательство
            </h2>
          </div>
          <div className="mt-10 overflow-hidden rounded-2xl border border-darkBorder bg-darkCard">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-darkBorder bg-darkCard">
                  <th className="px-6 py-4 text-left font-semibold text-textPrimary">Параметр</th>
                  <th className="px-6 py-4 text-left font-semibold text-textPrimary">Менеджмент</th>
                  <th className="px-6 py-4 text-left font-semibold text-textPrimary">Предпринимательство (BAE)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { param: "Основной фокус", mgmt: "Управление организациями и командами", ent: "Создание и развитие бизнеса" },
                  { param: "Кому подходит", mgmt: "Тем, кто хочет стать руководителем или менеджером", ent: "Тем, кто хочет создавать проекты и компании" },
                  { param: "Типичные роли", mgmt: "Project Manager, Product Manager, руководитель отдела", ent: "Предприниматель, CEO, business developer" },
                  { param: "Формат мышления", mgmt: "Системное управление, оптимизация процессов", ent: "Поиск возможностей, запуск решений" },
                  { param: "Отношение к риску", mgmt: "Управление рисками, минимизация", ent: "Принятие риска как части бизнеса" },
                  { param: "Карьерный путь", mgmt: "По карьерной лестнице в компаниях", ent: "Создание собственного дела или стартапа" },
                  { param: "Практика", mgmt: "Бизнес-кейсы, стажировки в компаниях", ent: "Запуск стартапов, реальные проекты с 1 курса" },
                  { param: "Профильные предметы ЕНТ", mgmt: "Математика + География", ent: "Математика + География" },
                  { param: "Длительность", mgmt: "3 года (бакалавриат)", ent: "3 года (бакалавриат)" },
                  { param: "Язык обучения", mgmt: "Русский / английский", ent: "Русский и английский" },
                ].map((row) => (
                  <tr key={row.param} className="border-b border-darkBorder last:border-0">
                    <td className="px-6 py-4 font-medium text-textPrimary">{row.param}</td>
                    <td className="px-6 py-4 text-textSecondary">{row.mgmt}</td>
                    <td className="px-6 py-4 text-textSecondary">{row.ent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-darkBg">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex flex-col items-center text-center">
            <SectionBadge>Программы</SectionBadge>
            <h2 className="mt-4 font-display font-semibold text-textPrimary leading-tight" style={{ fontSize: "clamp(26px, 3.2vw, 40px)", letterSpacing: "-0.01em" }}>
              Какая программа вам подходит?
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-darkBorder bg-darkCard p-6 md:p-8">
              <h3 className="font-display text-lg font-semibold text-textPrimary">Выбирайте менеджмент, если:</h3>
              <ul className="mt-4 space-y-2">
                {[
                  "Хотите строить карьеру в крупных компаниях",
                  "Стремитесь к управленческим позициям",
                  "Предпочитаете стабильность и структуру",
                  "Хотите управлять командами и проектами",
                  "Вас привлекает работа в международных корпорациях",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-textSecondary">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brandOrange flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="/programs/international-business" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brandOrange">
                Программа International Business →
              </a>
            </div>
            <div className="rounded-2xl border border-darkBorder bg-darkCard p-6 md:p-8">
              <h3 className="font-display text-lg font-semibold text-textPrimary">Выбирайте предпринимательство, если:</h3>
              <ul className="mt-4 space-y-2">
                {[
                  "Хотите создавать собственный бизнес",
                  "Готовы рисковать и пробовать новое",
                  "Мечтаете запустить стартап",
                  "Хотите развивать семейный бизнес",
                  "Вас вдохновляет создание продуктов и решений",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-textSecondary">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brandOrange flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="/programs/bae" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brandOrange">
                Программа BAE →
              </a>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-sm text-textMuted">Не можете определиться? <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-brandOrange hover:underline">Получите консультацию в WhatsApp</a></p>
          </div>
        </div>
      </section>

      <FAQSection items={COMPARE_FAQ} title="FAQ: Менеджмент или предпринимательство" id="faq" />

      <CTASection
        title="Не знаете, какую программу выбрать?"
        subtitle="Получите консультацию в WhatsApp — мы поможем определиться с направлением."
      />
    </>
  );
}
