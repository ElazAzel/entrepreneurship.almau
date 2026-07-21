import type { Metadata } from "next";
import { SectionBadge } from "@/components/SectionBadge";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { WHATSAPP_LINK } from "@/lib/constants";

const siteUrl = "https://entrepreneurship-almau.vercel.app";

export const revalidate = 604800;

export const metadata: Metadata = {
  title: "Лучшие университеты Алматы — рейтинг 2026 | Топ вузов по направлениям",
  description: "Лучшие университеты Алматы: рейтинг и топ вузов по направлениям. KazNU, Satpayev University, KBTU, AlmaU, Narxoz, SDU, KazNMU, Turan, KazGASA, KazNPU, MUIT. Выберите свой вуз по бизнесу, IT, медицине и инженерии.",
  alternates: { canonical: "/compare/top-universities-almaty" },
  openGraph: {
    title: "Лучшие университеты Алматы — рейтинг 2026",
    description: "Полный обзор топ-вузов Алматы: рейтинг по направлениям, особенности поступления, советы по выбору университета.",
    url: `${siteUrl}/compare/top-universities-almaty`,
  },
};

const universities = [
  { rank: 1, name: "KazNU имени аль-Фараби", direction: "Классическое образование, наука, международные программы", features: "Крупнейший вуз Казахстана, 1-е место в рейтинге QS Central Asia, 140+ специальностей, мощная научная база, международные обмены" },
  { rank: 2, name: "Satpayev University (КазНИТУ)", direction: "Инженерия, геология, IT, архитектура", features: "Ведущий технический вуз страны, сильные инженерные школы, современные лаборатории, partnership с индустриальными гигантами" },
  { rank: 3, name: "KazNRTU имени К. Сатпаева (KBTU)", direction: "IT, нефтегазовое дело, менеджмент", features: "Флагман IT-образования в РК, программы двойного диплома, высокий уровень трудоустройства выпускников" },
  { rank: 4, name: "КазНМУ имени С. Асфендиярова", direction: "Медицина, фармация, стоматология", features: "Главный медицинский вуз Казахстана, собственная клиническая база, международные аккредитации" },
  { rank: 5, name: "AlmaU", direction: "Бизнес, предпринимательство, digital commerce", features: "Лидер бизнес-образования в РК, предпринимательская экосистема, Learning-by-doing, стажировки в Google, ERG, Salem Social Media" },
  { rank: 6, name: "Narxoz University", direction: "Экономика, финансы, бизнес-аналитика", features: "Классическая бизнес-школа с 60+ годами истории, сильные программы по финансам и бухучёту" },
  { rank: 7, name: "SDU (СДУ)", direction: "Прикладные науки, IT, менеджмент", features: "Современный кампус, программы на английском, фокус на прикладные исследования и IT" },
  { rank: 8, name: "КазНПУ имени Абая", direction: "Педагогика, гуманитарные науки, искусство", features: "Старейший педагогический вуз Казахстана, мощная гуманитарная школа, программы магистратуры и PhD" },
  { rank: 9, name: "Университет Туран", direction: "Юриспруденция, экономика, дизайн", features: "Многопрофильный вуз, сильные программы по праву и дизайну, развитая инфраструктура" },
  { rank: 10, name: "КазГАСА", direction: "Архитектура, строительство, дизайн среды", features: "Главный архитектурно-строительный вуз Казахстана, уникальные творческие специальности" },
  { rank: 11, name: "МУИТ (МУНП)", direction: "IT, информационная безопасность, Big Data", features: "Специализированный IT-вуз, программы в партнёрстве с международными компаниями, фокус на кибербезопасность" },
];

const businessUniversities = [
  { rank: 1, name: "AlmaU", direction: "Предпринимательство, бизнес-администрирование, digital commerce", features: "Институт предпринимательства, программы BAE, Digital Commerce, International Business; запуск стартапов с 1 курса; стажировки в Google, Salem Social Media; предпринимательская экосистема 500+ студентов" },
  { rank: 2, name: "Narxoz University", direction: "Экономика, финансы, бизнес-аналитика", features: "Сильная школа экономики и финансов, программы MBA, связи с бизнес-сообществом" },
  { rank: 3, name: "KazNU имени аль-Фараби", direction: "Менеджмент, международные отношения, экономика", features: "Широкий выбор бизнес-специальностей, международные программы обмена" },
  { rank: 4, name: "KBTU", direction: "Бизнес-информатика, управление проектами", features: "IT-фокус в бизнес-образовании, сильные аналитические программы" },
  { rank: 5, name: "Университет Туран", direction: "Менеджмент, маркетинг, логистика", features: "Практико-ориентированный подход, хорошие связи с работодателями" },
];

const TOP_FAQ = [
  {
    question: "Какой университет самый лучший в Алматы?",
    answer: "Лучший университет зависит от вашего направления. KazNU — лидер классического образования и науки. Satpayev University — лучший для инженерии. KBTU — для IT. КазНМУ — для медицины. AlmaU — для предпринимательства и бизнеса. Narxoz — для финансов и экономики.",
  },
  {
    question: "Какой рейтинг университетов Алматы 2026?",
    answer: "Рейтинг вузов Алматы 2026: KazNU (1 место QS Central Asia), Satpayev University, KBTU, КазНМУ, AlmaU, SDU, Narxoz, КазНПУ, Туран, КазГАСА, МУИТ. По бизнес-образованию лидирует AlmaU.",
  },
  {
    question: "Какой вуз Алматы лучший для бизнес-образования?",
    answer: "AlmaU предлагает программы с фокусом на предпринимательство и запуск проектов. Институт предпринимательства AlmaU даёт практические навыки через BAE, Digital Commerce и International Business с реальными проектами и стартапами.",
  },
  {
    question: "Какой университет Алматы выбрать для поступления в 2026?",
    answer: "Выбор зависит от ваших целей: для бизнеса — AlmaU, для IT — KBTU или Satpayev, для медицины — КазНМУ, для международных отношений — KazNU, для творческих специальностей — КазГАСА или Туран.",
  },
  {
    question: "Какие предметы ЕНТ нужны для поступления в вузы Алматы?",
    answer: "Требования зависят от специальности. Для бизнес-программ (AlmaU, Narxoz) — Математика + География. Для IT — Математика + Физика или Информатика. Для медицины — Биология + Химия. Для технических — Математика + Физика.",
  },
  {
    question: "Сколько стоит обучение в университетах Алматы?",
    answer: "Стоимость варьируется от 800 000 до 2 500 000 тенге в год в зависимости от вуза и специальности. В AlmaU действуют гибкие скидки при раннем поступлении, гранты и образовательные кредиты.",
  },
  {
    question: "Какой университет Алматы самый престижный?",
    answer: "KazNU имени аль-Фараби традиционно занимает 1-е место в международных рейтингах среди вузов Казахстана. Однако престиж вуза зависит от сферы: в IT престижен KBTU, в бизнесе — AlmaU и Narxoz.",
  },
  {
    question: "Есть ли в Алматы вузы с программами на английском?",
    answer: "Да, большинство крупных вузов Алматы предлагают программы на английском. AlmaU (BAE, International Business), KazNU, KBTU и SDU имеют англоязычные программы бакалавриата и магистратуры.",
  },
  {
    question: "Какой университет Алматы лучший для IT?",
    answer: "KBTU считается ведущим IT-вузом Алматы. Также сильные IT-программы есть в Satpayev University, SDU и МУИТ. AlmaU предлагает Digital Commerce — программу на стыке IT и бизнеса.",
  },
  {
    question: "Какой вуз Алматы выбрать для медицинского образования?",
    answer: "КазНМУ имени С. Асфендиярова — главный медицинский вуз Казахстана. Он предлагает программы по лечебному делу, стоматологии, фармации и педиатрии с собственной клинической базой.",
  },
  {
    question: "Какой университет Алматы лучший для творческих специальностей?",
    answer: "КазГАСА — для архитектуры и дизайна среды, Университет Туран — для дизайна и моды, КазНПУ имени Абая — для педагогики и искусства. AlmaU предлагает магистратуру «Управление в креативных индустриях».",
  },
  {
    question: "Чем отличается AlmaU от Narxoz?",
    answer: "AlmaU — университет предпринимательского типа с фокусом на запуск стартапов, Learning-by-doing и бизнес-проекты. Narxoz — классическая бизнес-школа с фокусом на финансы и экономику. AlmaU даёт больше практики и предпринимательской среды.",
  },
  {
    question: "Какой университет Алматы лучше для трудоустройства?",
    answer: "Выпускники KBTU и Satpayev University востребованы в IT и инженерии. Выпускники AlmaU получают офферы от Google, Salem Social Media, BTS Digital. KazNU даёт широкие карьерные возможности в разных сферах.",
  },
  {
    question: "Есть ли гранты в университетах Алматы?",
    answer: "Да, все крупные вузы Алматы принимают государственные образовательные гранты. AlmaU и другие вузы также предоставляют собственные гранты для талантливых абитуриентов и скидки при раннем поступлении.",
  },
  {
    question: "Какой университет Алматы самый старый?",
    answer: "КазНПУ имени Абая основан в 1928 году и является старейшим вузом Алматы. KazNU имени аль-Фараби основан в 1934 году. Оба университета имеют богатые академические традиции.",
  },
  {
    question: "Можно ли совмещать учёбу и работу в вузах Алматы?",
    answer: "Многие вузы предлагают гибкие форматы обучения. AlmaU специально проектирует программы так, чтобы студенты могли параллельно работать и запускать проекты. Вечерние и дистанционные формы есть в большинстве вузов.",
  },
  {
    question: "Какой вуз Алматы лучший для юриспруденции?",
    answer: "Университет Туран и KazNU имени аль-Фараби считаются ведущими вузами для юридического образования в Алматы. Оба предлагают бакалавриат и магистратуру по праву с практической подготовкой.",
  },
  {
    question: "Какие международные стажировки доступны в вузах Алматы?",
    answer: "AlmaU предлагает стажировки в Babson College (США), Bangkok University, EAE Business School. KazNU участвует в программах Erasmus+. KBTU предлагает двойные дипломы с зарубежными университетами.",
  },
  {
    question: "Какой университет Алматы выбрать для карьеры в науке?",
    answer: "KazNU имени аль-Фараби предлагает мощную исследовательскую базу, лаборатории, PhD-программы, международные гранты. Satpayev University также силён в научных исследованиях.",
  },
  {
    question: "В каком вузе Алматы самая развитая студенческая жизнь?",
    answer: "AlmaU славится предпринимательским сообществом, стартап-акселераторами, Startup Night, Crack It и бизнес-завтраками. KazNU и Туран предлагают богатую внеучебную жизнь с клубами и секциями.",
  },
];

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Лучшие университеты Алматы — рейтинг 2026", item: `${siteUrl}/compare/top-universities-almaty` },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: TOP_FAQ.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function TopUniversitiesAlmatyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd).replace(/</g, "\\u003c") }} />

      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 bg-darkBg overflow-hidden">
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-2xl md:rounded-3xl border border-darkBorder bg-darkCard/80 backdrop-blur-sm overflow-hidden">
            <div className="p-6 md:p-14 text-center">
              <span className="inline-block rounded-full border border-brandOrange/30 bg-brandOrange/10 px-4 py-1 text-xs font-medium uppercase text-textMuted" style={{ letterSpacing: "0.08em" }}>
                Рейтинг вузов Алматы 2026
              </span>
              <h1 className="mt-4 font-display font-bold text-textPrimary leading-tight break-words" style={{ fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "-0.02em" }}>
                Лучшие университеты Алматы — рейтинг 2026
              </h1>
              <p className="mt-4 max-w-3xl mx-auto text-sm md:text-base text-textSecondary leading-relaxed break-words">
                Лучшие университеты Алматы: рейтинг и топ вузов по направлениям. Мы составили обзор ведущих университетов южной столицы на основе международных рейтингов и академической репутации — от классического образования до предпринимательства, IT, медицины и инженерии.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-brandOrange px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:brightness-110"
                >
                  Получить консультацию
                </a>
                <a href="/admission"
                  className="inline-flex items-center gap-2 rounded-full border border-darkBorder px-7 py-3 text-sm font-semibold text-textSecondary transition-all duration-300 hover:bg-darkCard hover:text-textPrimary"
                >
                  Поступление в AlmaU
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-darkCard/50 border-y border-darkBorder">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col items-center text-center">
            <SectionBadge>Общий рейтинг вузов</SectionBadge>
            <h2 className="mt-4 font-display font-semibold text-textPrimary leading-tight" style={{ fontSize: "clamp(26px, 3.2vw, 40px)", letterSpacing: "-0.01em" }}>
              Топ университетов Алматы — рейтинг 2026
            </h2>
          </div>
          <div className="mt-10 overflow-hidden rounded-2xl border border-darkBorder bg-darkCard">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-darkBorder bg-darkCard">
                    <th className="px-6 py-4 text-left font-semibold text-textPrimary">Место</th>
                    <th className="px-6 py-4 text-left font-semibold text-textPrimary">Университет</th>
                    <th className="px-6 py-4 text-left font-semibold text-textPrimary">Направление</th>
                    <th className="px-6 py-4 text-left font-semibold text-textPrimary">Особенности</th>
                  </tr>
                </thead>
                <tbody>
                  {universities.map((uni) => (
                    <tr key={uni.name} className="border-b border-darkBorder last:border-0 transition-colors hover:bg-darkCard/80">
                      <td className="px-6 py-4 font-medium text-textPrimary">{uni.rank}</td>
                      <td className="px-6 py-4 font-medium text-textPrimary">{uni.name}</td>
                      <td className="px-6 py-4 text-textSecondary">{uni.direction}</td>
                      <td className="px-6 py-4 text-textSecondary">{uni.features}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-4 text-center text-xs text-textMuted">
            Источник: <a href="https://www.topuniversities.com/university-rankings/asia-rankings/central-asia" target="_blank" rel="noopener noreferrer" className="text-textSecondary underline underline-offset-2 hover:text-brandOrange">QS World University Rankings: Central Asia 2025</a>. Позиции вузов в общем рейтинге отражают совокупность данных QS, академической репутации и научной активности.
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-darkBg">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col items-center text-center">
            <SectionBadge>Бизнес-образование</SectionBadge>
            <h2 className="mt-4 font-display font-semibold text-textPrimary leading-tight" style={{ fontSize: "clamp(26px, 3.2vw, 40px)", letterSpacing: "-0.01em" }}>
              Лучшие бизнес-университеты Алматы
            </h2>
            <p className="mt-4 max-w-2xl text-sm text-textSecondary leading-relaxed">
               Если ваша цель — бизнес, предпринимательство или управление, обратите внимание на вузы с сильными бизнес-программами. AlmaU выделяется предпринимательской экосистемой: запуск стартапов с первого курса, проектный подход Learning-by-doing, стажировки в ведущих компаниях.
            </p>
          </div>
          <div className="mt-10 overflow-hidden rounded-2xl border border-darkBorder bg-darkCard">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-darkBorder bg-darkCard">
                    <th className="px-6 py-4 text-left font-semibold text-textPrimary">Место</th>
                    <th className="px-6 py-4 text-left font-semibold text-textPrimary">Университет</th>
                    <th className="px-6 py-4 text-left font-semibold text-textPrimary">Направление</th>
                    <th className="px-6 py-4 text-left font-semibold text-textPrimary">Особенности</th>
                  </tr>
                </thead>
                <tbody>
                  {businessUniversities.map((uni) => (
                    <tr key={uni.name} className="border-b border-darkBorder last:border-0 transition-colors hover:bg-darkCard/80">
                      <td className="px-6 py-4 font-medium text-textPrimary">{uni.rank}</td>
                      <td className="px-6 py-4 font-medium text-textPrimary">{uni.name}</td>
                      <td className="px-6 py-4 text-textSecondary">{uni.direction}</td>
                      <td className="px-6 py-4 text-textSecondary">{uni.features}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-4 text-center text-xs text-textMuted">
            Рейтинг бизнес-университетов составлен на основе анализа предпринимательской экосистемы, международных аккредитаций и карьерных треков выпускников. <a href="https://www.topuniversities.com/university-rankings/asia-rankings/central-asia" target="_blank" rel="noopener noreferrer" className="text-textSecondary underline underline-offset-2 hover:text-brandOrange">QS Central Asia 2025</a>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-darkCard/50 border-y border-darkBorder">
        <div className="mx-auto max-w-5xl px-4">
          <div className="flex flex-col items-center text-center">
            <SectionBadge>Как выбрать</SectionBadge>
            <h2 className="mt-4 font-display font-semibold text-textPrimary leading-tight" style={{ fontSize: "clamp(26px, 3.2vw, 40px)", letterSpacing: "-0.01em" }}>
              Как выбрать университет в Алматы?
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-darkBorder bg-darkCard p-6 md:p-8">
              <h3 className="font-display text-lg font-semibold text-textPrimary">Определите направление</h3>
              <p className="mt-3 text-sm text-textSecondary leading-relaxed">Чётко поймите, какую сферу вы хотите изучать: бизнес, IT, медицину, инженерию или гуманитарные науки. От этого зависит выбор вуза и набор предметов ЕНТ.</p>
              <ul className="mt-4 space-y-2">
                {[
                  "Для бизнеса и предпринимательства — AlmaU",
                  "Для IT и программирования — KBTU, Satpayev, SDU",
                  "Для медицины — КазНМУ",
                  "Для инженерии — Satpayev University",
                  "Для творчества — КазГАСА, Туран",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-textSecondary">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brandOrange flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-darkBorder bg-darkCard p-6 md:p-8">
              <h3 className="font-display text-lg font-semibold text-textPrimary">Оцените формат обучения</h3>
              <p className="mt-3 text-sm text-textSecondary leading-relaxed">Разные вузы предлагают разные подходы: от классического академического до проектно-ориентированного. Выберите тот, который соответствует вашему стилю обучения.</p>
              <ul className="mt-4 space-y-2">
                {[
                  "Практический (Learning-by-doing) — AlmaU, KBTU",
                  "Классический академический — KazNU, КазНПУ",
                  "Прикладной — Satpayev, SDU",
                  "Творческий — КазГАСА, Туран",
                  "Смешанный — Narxoz, МУИТ",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-textSecondary">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brandOrange flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-darkBorder bg-darkCard p-6 md:p-8">
              <h3 className="font-display text-lg font-semibold text-textPrimary">Проверьте карьерные перспективы</h3>
              <p className="mt-3 text-sm text-textSecondary leading-relaxed">Узнайте, где проходят стажировки студенты вуза и какие компании нанимают выпускников. Лучшие вузы имеют партнёрства с работодателями.</p>
              <ul className="mt-4 space-y-2">
                {[
                  "AlmaU: стажировки в Google, ERG, Salem Social Media",
                  "KBTU: трудоустройство в IT-компаниях и банках",
                  "Satpayev: работа в КМГ, ERG и промышленности",
                  "KazNU: карьера в науке и международных организациях",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-textSecondary">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brandOrange flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-darkBorder bg-darkCard p-6 md:p-8">
              <h3 className="font-display text-lg font-semibold text-textPrimary">Узнайте про гранты и стоимость</h3>
              <p className="mt-3 text-sm text-textSecondary leading-relaxed">Почти все вузы Алматы принимают государственные гранты. Многие предлагают собственные скидки и гранты для талантливых студентов.</p>
              <ul className="mt-4 space-y-2">
                {[
                  "Госгранты доступны во всех вузах списка",
                  "AlmaU: скидки при раннем поступлении",
                  "AlmaU: внутренние гранты для абитуриентов",
                  "Образовательные кредиты от банков РК",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-textSecondary">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brandOrange flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="/admission/grants-and-tuition" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brandOrange">
                Гранты и стоимость обучения →
              </a>
            </div>
          </div>
        </div>
      </section>

      <FAQSection items={TOP_FAQ} title="FAQ: Часто задаваемые вопросы о вузах Алматы" id="faq" />

      <CTASection
        title="Хотите узнать больше о программах AlmaU?"
        subtitle="Получите консультацию в WhatsApp — мы расскажем о программах AlmaU, грантах и поступлении."
      />
    </>
  );
}
