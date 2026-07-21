import { SectionBadge } from "@/components/SectionBadge";
import { CTASection } from "@/components/CTASection";
import { WHATSAPP_LINK, PARTNERS_STRATEGIC, PARTNERS_CASES, PARTNERS_EVENTS } from "@/lib/constants";

export const revalidate = 604800;

export const metadata = {
  title: "AlmaU-дан кейінгі мансап: түлектер кім болып жұмыс істейді",
  description:
    "AlmaU Кәсіпкерлік Институты түлектерінің мансаптық тректері, тағылымдамалары және жұмысқа орналасуы. International Business, Digital Commerce, BAE, креативті индустриялар.",
  alternates: {
    canonical: "/kk/career",
    languages: { ru: "/career", kk: "/kk/career", en: "/en/career" },
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Басты бет", item: "https://entrepreneurship-almau.vercel.app/kk" },
    { "@type": "ListItem", position: 2, name: "Мансап", item: "https://entrepreneurship-almau.vercel.app/kk/career" },
  ],
};

const programsCareer = [
  {
    title: "International Business",
    description: "Ғаламдық бизнес-білім ағылшын тілінде. Халықаралық тағылымдамалар мен мансап.",
    careers: [
      "Халықаралық бизнес менеджері",
      "Сыртқы экономикалық қызмет жөніндегі маман",
      "Консалтинг саласындағы кеңесші",
      "Аудит және инвестициялық талдаушы",
      "Банк және қаржы секторының маманы",
      "Халықаралық ұйымдар қызметкері",
    ],
  },
  {
    title: "Digital Commerce",
    description: "E-commerce, маркетплейстер, цифрлық маркетинг және деректерді талдау.",
    careers: [
      "E-commerce менеджері",
      "Маркетплейс менеджері",
      "Цифрлық өнім менеджері",
      "Digital-маркетолог",
      "CRM менеджері",
      "Цифрлық бизнес негізін қалаушы",
    ],
  },
  {
    title: "BAE",
    description: "Кәсіпкерлік, стартаптарды іске қосу, жобаларды басқару және отбасылық бизнес.",
    careers: [
      "Бизнес негізін қалаушы",
      "Отбасылық бизнес иесі",
      "Бизнесті дамыту жөніндегі сарапшы",
      "Қаржылық талдаушы",
      "Топ-менеджер",
      "Product Manager және Project Manager",
    ],
  },
  {
    title: "Креативті индустриялар",
    description: "Магистратура: креативті экономикадағы менеджерлер мен кәсіпкерлер үшін.",
    careers: [
      "Креативті индустриялардағы жоба жетекшісі",
      "Креативті бизнес негізін қалаушы",
      "Продюсер және мәдени іс-шаралар ұйымдастырушы",
      "Бизнес-стратег",
      "Креативті кластерлерді дамыту жөніндегі сарапшы",
      "Мәдени мекемелер менеджері",
    ],
  },
];

const careerFaq = [
  {
    question: "International Business-тен кейін кім болып жұмыс істеуге болады?",
    answer: "International Business түлектері халықаралық компанияларда, консалтингте, аудитте, инвестициялық және банк секторында мансап құрады, сондай-ақ өз стартаптарын іске қосады. Ықтимал лауазымдар: бизнесті дамыту менеджері, кеңесші, талдаушы, сыртқы экономикалық қызмет маманы.",
  },
  {
    question: "Digital Commerce-тен кейін кім болып жұмыс істеуге болады?",
    answer: "Digital Commerce түлектері e-commerce менеджері, маркетплейс менеджері, digital-маркетолог, CRM менеджері, клиенттік тәжірибе (CX) маманы, продакт-менеджер және цифрлық бизнес негізін қалаушы болып жұмыс істейді.",
  },
  {
    question: "BAE-ден кейін кім болып жұмыс істеуге болады?",
    answer: "BAE түлектері бизнес негізін қалаушы, отбасылық бизнес иесі, продакт-менеджер, жоба менеджері, топ-менеджер және инновациялық кәсіпкер болады.",
  },
  {
    question: "Түлектердің жалақысы қандай?",
    answer: "Жалақы лауазымға және компанияға байланысты. AlmaU түлектері Google, Salem Social Media, BTS Digital, ChocoFamily және басқа компаниялардан ұсыныстар алады. Мансап басында Қазақстанда бизнес-мамандықтар бойынша жалақы 250 000-нан 500 000 теңгеге дейін.",
  },
  {
    question: "Университет жұмысқа орналасуға көмектеседі ме?",
    answer: "AlmaU-да студенттер мен түлектерге тағылымдама және жұмыс іздеуге, түйіндеме жазуға және сұхбаттарға дайындалуға көмектесетін мансап орталығы бар. Көптеген жұмыс берушілер түлектер үшін университетке тікелей жүгінеді.",
  },
];

export default function KkCareerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }}
      />

      <section className="relative flex items-center bg-darkBg overflow-hidden min-h-[500px] md:min-h-[600px] pt-16 pb-10 md:pt-0 md:pb-0">
        <div className="relative z-10 mx-auto w-full max-w-6xl px-4">
          <div className="rounded-2xl md:rounded-3xl border border-darkBorder bg-darkCard/80 backdrop-blur-sm p-8 md:p-14">
            <div className="flex flex-col items-center text-center">
              <h1
                className="font-display font-bold text-textPrimary leading-tight break-words"
                style={{ fontSize: "clamp(24px, 4.5vw, 52px)", letterSpacing: "-0.02em" }}
              >
                AlmaU-дан кейінгі мансап: түлектер кім болып жұмыс істейді
              </h1>
              <p className="mt-4 max-w-2xl text-sm md:text-base text-textSecondary leading-relaxed break-words">
                AlmaU Кәсіпкерлік Институтының түлектері халықаралық компанияларда мансап құрады,
                өз стартаптарын іске қосады және Қазақстан мен әлемнің жетекші бизнес ұйымдарында
                басшылық лауазымдарды атқарады.
              </p>
              <div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-center gap-2 md:gap-3">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brandOrange px-6 py-2.5 md:px-7 md:py-3 text-sm font-semibold text-white transition-all duration-300 hover:brightness-110"
                >
                  Мансаптық мүмкіндіктер туралы білу
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <SectionBadge>Мансаптық тректер</SectionBadge>
            <h2
              className="mt-4 font-display font-semibold text-textPrimary leading-tight"
              style={{ fontSize: "clamp(26px, 3.2vw, 40px)", letterSpacing: "-0.01em" }}
            >
              Бағдарламалар бойынша мансаптық тректер
            </h2>
            <p className="mt-3 max-w-lg text-sm text-textSecondary leading-relaxed break-words">
              Әр бағдарлама өз мансаптық мүмкіндіктерін ашады
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
            {programsCareer.map((program) => (
              <div
                key={program.title}
                className="rounded-2xl border border-darkBorder bg-darkCard p-6 md:p-7 transition-all duration-300 hover:border-brandOrange/20"
              >
                <h3 className="font-display text-lg md:text-xl font-semibold text-textPrimary break-words">
                  {program.title}
                </h3>
                <p className="mt-2 text-sm text-textSecondary leading-relaxed break-words">
                  {program.description}
                </p>
                <h4 className="mt-5 text-sm font-semibold text-textPrimary">
                  Ықтимал мансап жолдары
                </h4>
                <ul className="mt-3 space-y-1.5">
                  {program.careers.map((career) => (
                    <li key={career} className="flex items-start gap-2 text-sm text-textSecondary">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brandOrange" />
                      {career}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28 bg-darkBg/50 border-t border-darkBorder">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <SectionBadge>Серіктестер</SectionBadge>
            <h2
              className="mt-4 font-display font-semibold text-textPrimary leading-tight"
              style={{ fontSize: "clamp(26px, 3.2vw, 40px)", letterSpacing: "-0.01em" }}
            >
              Тағылымдама өтетін орындар
            </h2>
            <p className="mt-3 max-w-lg text-sm text-textSecondary leading-relaxed break-words">
              Студенттер жетекші қазақстандық және халықаралық компанияларда тәжірибеден өтеді
            </p>
          </div>
          <div className="mt-8 space-y-6">
            {[
              { label: "Стратегиялық серіктестер", items: PARTNERS_STRATEGIC },
              { label: "Кейс компаниялары", items: PARTNERS_CASES },
              { label: "Іс-шара серіктестері", items: PARTNERS_EVENTS },
            ].map((group) => (
              <div key={group.label}>
                <h3 className="text-xs font-semibold text-textMuted uppercase tracking-wider mb-3 text-center">{group.label}</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {group.items.map((partner) => (
                    <span
                      key={partner}
                      className="rounded-xl border border-darkBorder bg-darkCard px-5 py-3 text-sm font-semibold text-textSecondary tracking-wider uppercase whitespace-nowrap transition-all duration-300 hover:border-brandOrange/20"
                    >
                      {partner}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-darkCard/50 border-y border-darkBorder">
        <div className="mx-auto max-w-3xl px-4">
          <div className="flex flex-col items-center text-center">
            <SectionBadge>FAQ</SectionBadge>
            <h2
              className="font-display font-semibold text-textPrimary leading-tight"
              style={{ fontSize: "clamp(26px, 3.2vw, 40px)", letterSpacing: "-0.01em" }}
            >
              FAQ: Мансап және жұмысқа орналасу
            </h2>
          </div>
          <div className="mt-10 space-y-3">
            {careerFaq.map((item, i) => (
              <details key={i} className="group rounded-2xl border border-darkBorder bg-darkCard transition-all duration-300 hover:border-brandOrange/20">
                <summary className="flex cursor-pointer items-center justify-between p-5 md:p-6 text-sm md:text-base font-semibold text-textPrimary list-none">
                  {item.question}
                  <span className="text-brandOrange text-lg transition-transform duration-300 group-open:rotate-45">+</span>
                </summary>
                <div className="border-t border-darkBorder px-5 md:px-6 pb-5 md:pb-6">
                  <p className="mt-3 text-sm text-textSecondary">{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Мансаптық мүмкіндіктер туралы білгіңіз келе ме?"
        subtitle="WhatsApp-қа жазыңыз — бағдарламалар, тағылымдамалар және жұмысқа орналасу туралы айтып береміз."
      />
    </>
  );
}
