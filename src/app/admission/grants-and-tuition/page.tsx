import type { Metadata } from "next";
import { SectionBadge } from "@/components/SectionBadge";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { WHATSAPP_LINK } from "@/lib/constants";

const siteUrl = "https://entrepreneurship-almau.vercel.app";

export const revalidate = 604800;

export const metadata: Metadata = {
  title: "Гранты и стоимость обучения в AlmaU | Цены, скидки, кредиты",
  description: "Университет Алматы стоимость обучения — гранты и цены на программы International Business, Digital Commerce, BAE. Государственные и внутренние гранты, скидки при раннем поступлении, образовательные кредиты и рассрочка в AlmaU.",
  alternates: { canonical: "/admission/grants-and-tuition" },
  openGraph: {
    title: "Гранты и стоимость обучения AlmaU — цены, скидки, гранты 2026",
    description: "Сколько стоит обучение в университете Алматы? Гранты, стоимость, скидки при раннем поступлении, образовательные кредиты и рассрочка в AlmaU.",
    url: `${siteUrl}/admission/grants-and-tuition`,
  },
};

const GRANTS_FAQ = [
  {
    question: "Сколько стоит обучение в Институте предпринимательства AlmaU?",
    answer: "Стоимость обучения зависит от программы и формы обучения. Рекомендуем уточнять актуальные цены в приёмной комиссии AlmaU. Доступна рассрочка оплаты и скидки при раннем поступлении.",
  },
  {
    question: "Есть ли гранты на бизнес-администрирование в 2026 году?",
    answer: "Да, государственные гранты выделяются ежегодно на конкурсной основе по результатам ЕНТ. Также AlmaU предоставляет собственные внутренние гранты для талантливых абитуриентов с высокими баллами и предпринимательским потенциалом.",
  },
  {
    question: "Как получить грант AlmaU?",
    answer: "Для получения гранта необходимо подать заявку, предоставить результаты ЕНТ и пройти собеседование. Внутренние гранты AlmaU присуждаются на основе академических достижений и мотивации к предпринимательству.",
  },
  {
    question: "Можно ли поступить на грант на предпринимательство?",
    answer: "Да, программа Business Administration in Entrepreneurship (BAE) участвует в конкурсе государственных грантов наравне с другими специальностями. Также доступны внутренние гранты AlmaU.",
  },
  {
    question: "Есть ли скидки на обучение?",
    answer: "Да, AlmaU предоставляет скидки при раннем поступлении, для отличников учёбы, а также для определённых категорий абитуриентов. Подробности — в приёмной комиссии.",
  },
  {
    question: "Можно ли оплачивать обучение частями?",
    answer: "AlmaU предлагает возможность рассрочки оплаты обучения. Условия обсуждаются индивидуально при заключении договора.",
  },
  {
    question: "Какие стипендии доступны студентам?",
    answer: "Студенты могут получать государственную стипендию при обучении на гранте, а также внутренние стипендии AlmaU за академические успехи и активную предпринимательскую деятельность.",
  },
  {
    question: "Сколько баллов ЕНТ нужно для гранта на менеджмент?",
    answer: "Проходной балл для получения государственного гранта зависит от конкурса в текущем году. Рекомендуем уточнять актуальные значения в приёмной комиссии AlmaU, а также рассматривать внутренние гранты и скидки университета.",
  },
  {
    question: "Чем отличается платное обучение от гранта?",
    answer: "На гранте обучение бесплатное + выплачивается стипендия. На платном обучении студент оплачивает стоимость семестра, но получает те же академические возможности, доступ к проектам и стажировкам.",
  },
  {
    question: "Есть ли образовательный кредит?",
    answer: "Да, можно оформить образовательный кредит в банках-партнёрах AlmaU. Условия кредитования уточняйте в приёмной комиссии.",
  },
  {
    question: "Какие документы нужны для получения гранта?",
    answer: "Для участия в конкурсе грантов необходимы: заявление, результаты ЕНТ, удостоверение личности, аттестат о среднем образовании. Для внутренних грантов AlmaU дополнительно требуется мотивационное письмо и собеседование.",
  },
  {
    question: "Когда подавать заявку на грант?",
    answer: "Заявки на государственные гранты подаются в установленные сроки приёмной кампании (июнь–август). Внутренние гранты AlmaU имеют отдельные сроки, которые публикуются на сайте. Рекомендуем подавать документы в начале приёма.",
  },
  {
    question: "Можно ли получить несколько грантов одновременно?",
    answer: "Государственный грант и внутренний грант AlmaU не суммируются. Однако можно комбинировать грант со скидками и стипендиями. Уточните условия в приёмной комиссии.",
  },
  {
    question: "Что делать, если не хватило баллов на грант?",
    answer: "Если не удалось получить грант, можно поступить на платное обучение. AlmaU предлагает скидки при раннем поступлении, рассрочку и образовательные кредиты. Также можно улучшить результаты ЕНТ и попробовать в следующем году.",
  },
  {
    question: "Есть ли гранты для магистратуры?",
    answer: "Да, государственные гранты доступны и для магистерских программ. Программа «Управление в креативных индустриях» участвует в конкурсе. Также возможны внутренние гранты AlmaU для магистрантов.",
  },
];

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Поступление", item: `${siteUrl}/admission` },
    { "@type": "ListItem", position: 3, name: "Гранты и стоимость", item: `${siteUrl}/admission/grants-and-tuition` },
  ],
};

export default function GrantsTuitionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: GRANTS_FAQ.map((item) => ({
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
                Гранты и стоимость обучения в AlmaU
              </h1>
              <p className="mt-4 max-w-2xl mx-auto text-sm md:text-base text-textSecondary leading-relaxed break-words">
                Стоимость обучения в университете Алматы и условия получения грантов — главные вопросы абитуриентов. AlmaU предлагает: государственные и внутренние гранты, скидки при раннем поступлении, образовательные кредиты и рассрочку. Узнайте цены на программы International Business, Digital Commerce, BAE.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-brandOrange px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:brightness-110"
                >
                  Узнать о грантах
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
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col items-center text-center">
            <SectionBadge>Финансовая поддержка</SectionBadge>
            <h2 className="mt-4 font-display font-semibold text-textPrimary leading-tight" style={{ fontSize: "clamp(26px, 3.2vw, 40px)", letterSpacing: "-0.01em" }}>
              Виды грантов и финансовой поддержки
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 max-w-4xl mx-auto">
            {[
              { title: "Государственные гранты", text: "Предоставляются по результатам ЕНТ на конкурсной основе. Покрывают полную стоимость обучения на весь период. Для участия необходимо набрать проходной балл." },
              { title: "Внутренние гранты AlmaU", text: "Для талантливых абитуриентов с высокими баллами ЕНТ, победителей олимпиад и конкурсов. Размер гранта определяется индивидуально по результатам собеседования." },
              { title: "Скидки при раннем поступлении", text: "При подаче документов в установленные сроки действуют специальные скидки на первый год обучения. Размер скидки уточняйте в приёмной комиссии." },
              { title: "Образовательные кредиты", text: "Возможность оформления кредита на обучение в банках-партнёрах AlmaU на выгодных условиях с отсрочкой платежа на период обучения." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-darkBorder bg-darkCard p-6 transition-all duration-300 hover:border-brandOrange/20">
                <h3 className="font-display text-base font-semibold text-textPrimary">{item.title}</h3>
                <p className="mt-2 text-sm text-textSecondary leading-relaxed break-words">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-darkBg">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex flex-col items-center text-center">
            <SectionBadge>Цены</SectionBadge>
            <h2 className="mt-4 font-display font-semibold text-textPrimary leading-tight" style={{ fontSize: "clamp(26px, 3.2vw, 40px)", letterSpacing: "-0.01em" }}>
              Стоимость обучения в AlmaU
            </h2>
            <p className="mt-4 max-w-2xl text-sm text-textSecondary leading-relaxed break-words">
              Цены на обучение в AlmaU зависят от выбранной программы и формы. Стоимость университета Алматы для программ International Business, Digital Commerce и BAE уточняйте в приёмной комиссии. Для студентов предусмотрена гибкая система рассрочки, скидки при раннем поступлении и образовательные кредиты.
            </p>
            <div className="mt-8">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brandOrange px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:brightness-110"
              >
                Узнать стоимость
              </a>
            </div>
          </div>
        </div>
      </section>

      <FAQSection items={GRANTS_FAQ} title="FAQ: Гранты, скидки и оплата обучения" id="faq" />

      <CTASection
        title="Хотите узнать о скидках и грантах?"
        subtitle="Уточните условия поступления, гранты и стоимость обучения в WhatsApp."
      />
    </>
  );
}
