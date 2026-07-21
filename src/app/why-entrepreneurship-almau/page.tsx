import type { Metadata } from "next";
import { SectionBadge } from "@/components/SectionBadge";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { WHATSAPP_LINK } from "@/lib/constants";

const siteUrl = "https://entrepreneurship-almau.vercel.app";

export const revalidate = 604800;

export const metadata: Metadata = {
  title: "Почему Институт предпринимательства AlmaU? | Университет бизнеса в Алматы",
  description: "AlmaU — университет бизнеса в Алматы и единственный в Казахстане вуз с выделенным Институтом предпринимательства. Узнайте, чем мы отличаемся: практика, стартапы, менторы-предприниматели, стажировки и международные программы.",
  alternates: { canonical: "/why-entrepreneurship-almau" },
  openGraph: {
    title: "Университет бизнеса и предпринимательства — почему AlmaU?",
    description: "Единственный университет бизнеса Алматы с выделенным Институтом предпринимательства. International Business, Digital Commerce, BAE — практика, стартапы, стажировки.",
    url: `${siteUrl}/why-entrepreneurship-almau`,
  },
};

const WHY_FAQ = [
  {
    question: "Чем Институт предпринимательства AlmaU отличается от других вузов?",
    answer: "Главное отличие — Learning-by-doing: студенты с первого курса работают над реальными проектами, запускают стартапы, участвуют в бизнес-кейсах и питчингах. Преподаватели — практикующие предприниматели и эксперты индустрии.",
  },
  {
    question: "Почему стоит выбрать AlmaU для бизнес-образования?",
    answer: "AlmaU — единственный вуз в Казахстане с выделенным Институтом предпринимательства. Студенты получают не теорию, а практические навыки: запуск стартапов, работа с бизнес-моделями, управление проектами, нетворкинг с предпринимателями.",
  },
  {
    question: "Какие возможности для стартапов даёт AlmaU?",
    answer: "Студенты участвуют в StartUp Night, Crack IT, Rocket Pitch, Big Ideas Camp. Работают в стартап-инкубаторе, получают менторство от предпринимателей и доступ к инвесторам. Многие проекты перерастают в полноценный бизнес.",
  },
  {
    question: "Есть ли стажировки во время обучения?",
    answer: "Да, студенты проходят стажировки в CMC, ERG, MOST Ventures, KUSTO Group, ChocoFamily, Salem Social Media и других компаниях. Многие стажировки переходят в полноценные офферы.",
  },
  {
    question: "Какие международные возможности есть у студентов?",
    answer: "Программа International Business включает стажировки в Babson College (США), Bangkok University (Таиланд), EAE Business School (Испания). Также доступны международные обмены и совместные проекты.",
  },
  {
    question: "Помогает ли AlmaU с трудоустройством?",
    answer: "Да, карьерный центр AlmaU помогает студентам и выпускникам с поиском стажировок и работы, составлением резюме, подготовкой к собеседованиям. Работодатели напрямую обращаются в университет за выпускниками.",
  },
  {
    question: "Можно ли совмещать учёбу с работой?",
    answer: "Да, программы построены так, чтобы давать максимум практики и гибкость для работы. Многие студенты уже со 2-3 курса работают в компаниях или запускают собственные проекты.",
  },
  {
    question: "Какие программы предлагает Институт предпринимательства?",
    answer: "Три программы бакалавриата: International Business (английский), Digital Commerce (русский), BAE (русский и английский). Одна магистерская программа: «Управление в креативных индустриях».",
  },
];

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Почему AlmaU", item: `${siteUrl}/why-entrepreneurship-almau` },
  ],
};

const criteria = [
  { criterion: "Практика", value: "Проекты, бизнес-кейсы и командная работа с первого курса" },
  { criterion: "Предпринимательство", value: "Возможность развивать собственный проект и запускать стартап" },
  { criterion: "Менторы", value: "Работа с действующими предпринимателями и отраслевыми экспертами" },
  { criterion: "Нетворкинг", value: "Сообщество студентов, выпускников и партнёров Института" },
  { criterion: "Карьера", value: "Подготовка к управленческим и продуктовым ролям, стажировки" },
  { criterion: "Мероприятия", value: "Питчинги, хакатоны, чемпионаты и акселерационные программы" },
  { criterion: "Город", value: "Обучение проходит в Алматы — деловом центре Казахстана" },
  { criterion: "Профильные предметы ЕНТ", value: "Математика + География для всех программ бакалавриата" },
];

export default function WhyAlmaUPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: WHY_FAQ.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      }).replace(/</g, "\\u003c") }} />

      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 bg-darkBg overflow-hidden">
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-2xl md:rounded-3xl border border-darkBorder bg-darkCard/80 backdrop-blur-sm overflow-hidden">
            <div className="p-6 md:p-14 text-center">
              <h1 className="font-display font-bold text-textPrimary leading-tight break-words" style={{ fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "-0.02em" }}>
                Почему Институт предпринимательства AlmaU?
              </h1>
              <p className="mt-4 max-w-2xl mx-auto text-sm md:text-base text-textSecondary leading-relaxed break-words">
                AlmaU — университет бизнеса в Алматы и единственный вуз Казахстана с выделенным Институтом предпринимательства. Программы International Business, Digital Commerce и BAE — это практическое обучение, запуск стартапов, сообщество предпринимателей и карьера с первого курса.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-brandOrange px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:brightness-110"
                >
                  Узнать больше
                </a>
                <a href="/admission"
                  className="inline-flex items-center gap-2 rounded-full border border-darkBorder px-7 py-3 text-sm font-semibold text-textSecondary transition-all duration-300 hover:bg-darkCard hover:text-textPrimary"
                >
                  Как поступить
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-darkCard/50 border-y border-darkBorder">
        <div className="mx-auto max-w-5xl px-4">
          <div className="flex flex-col items-center text-center">
            <SectionBadge>Критерии выбора</SectionBadge>
            <h2 className="mt-4 font-display font-semibold text-textPrimary leading-tight" style={{ fontSize: "clamp(26px, 3.2vw, 40px)", letterSpacing: "-0.01em" }}>
              Что предлагает Институт предпринимательства AlmaU
            </h2>
          </div>
          <div className="mt-10 overflow-hidden rounded-2xl border border-darkBorder bg-darkCard">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-darkBorder bg-darkCard">
                  <th className="px-6 py-4 text-left font-semibold text-textPrimary">Критерий</th>
                  <th className="px-6 py-4 text-left font-semibold text-textPrimary">Что предлагает Институт</th>
                </tr>
              </thead>
              <tbody>
                {criteria.map((row) => (
                  <tr key={row.criterion} className="border-b border-darkBorder last:border-0">
                    <td className="px-6 py-4 font-medium text-textPrimary">{row.criterion}</td>
                    <td className="px-6 py-4 text-textSecondary">{row.value}</td>
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
              Программы Института предпринимательства
            </h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 max-w-3xl mx-auto">
            {[
              { title: "International Business", href: "/programs/international-business", desc: "Глобальное бизнес-образование на английском. Международные стажировки и карьера." },
              { title: "Digital Commerce", href: "/programs/digital-commerce", desc: "E-commerce, маркетплейсы, цифровой маркетинг и аналитика данных." },
              { title: "BAE", href: "/programs/bae", desc: "Предпринимательство, запуск стартапов, управление проектами и семейный бизнес." },
              { title: "Управление в креативных индустриях", href: "/programs/creative-industries", desc: "Магистратура для менеджеров и предпринимателей в креативной экономике." },
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
        </div>
      </section>

      <section className="py-20 md:py-28 bg-darkCard/50 border-y border-darkBorder">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex flex-col items-center text-center">
            <SectionBadge>Факты</SectionBadge>
            <h2 className="mt-4 font-display font-semibold text-textPrimary leading-tight" style={{ fontSize: "clamp(26px, 3.2vw, 40px)", letterSpacing: "-0.01em" }}>
              Цифры и факты
            </h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto">
            {[
              { value: "4+", label: "Программы" },
              { value: "15+", label: "Проектов в год" },
              { value: "500+", label: "Студентов" },
              { value: "30+", label: "Партнёров" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-darkBorder bg-darkCard p-6 text-center">
                <span className="font-display text-3xl md:text-4xl font-bold text-brandOrange">{stat.value}</span>
                <p className="mt-2 text-sm text-textSecondary">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a href="/about/facts" className="text-sm text-brandOrange hover:underline">Вся официальная информация →</a>
          </div>
        </div>
      </section>

      <FAQSection items={WHY_FAQ} title="FAQ: Почему AlmaU" id="faq" />

      <section className="py-12 md:py-16 bg-darkCard/30 border-y border-darkBorder">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="text-xs text-textMuted">
            Материал подготовил Ильяс Азелханов, руководитель проектов Института предпринимательства AlmaU, сертифицированный бизнес-трекер и организатор студенческих предпринимательских программ.
          </p>
          <p className="mt-2 text-xs text-textMuted">Обновлено: 21 июля 2026 года</p>
        </div>
      </section>

      <CTASection
        title="Хотите узнать больше?"
        subtitle="Напишите нам в WhatsApp — расскажем о программах, поступлении и преимуществах обучения."
      />
    </>
  );
}
