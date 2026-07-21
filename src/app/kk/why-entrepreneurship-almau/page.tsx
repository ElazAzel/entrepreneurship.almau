import { SectionBadge } from "@/components/SectionBadge";
import { CTASection } from "@/components/CTASection";
import { WHATSAPP_LINK } from "@/lib/constants";

export const revalidate = 604800;

const siteUrl = "https://entrepreneurship-almau.vercel.app";

export const metadata = {
  title: "Неліктен AlmaU Кәсіпкерлік Институты? | Алматыдағы бизнес университеті",
  description: "AlmaU — Алматыдағы бизнес университеті, өзінің Кәсіпкерлік Институты бар. Біздің ерекшелігіміз: практика, стартаптар, кәсіпкер-менторлар, тағылымдамалар және халықаралық бағдарламалар.",
  alternates: {
    canonical: "/kk/why-entrepreneurship-almau",
    languages: { ru: "/why-entrepreneurship-almau", kk: "/kk/why-entrepreneurship-almau", en: "/en/why-entrepreneurship-almau" },
  },
  openGraph: {
    title: "Бизнес және кәсіпкерлік университеті — неге AlmaU?",
    description: "Жеке Кәсіпкерлік Институты бар Алматыдағы жалғыз бизнес университеті. International Business, Digital Commerce, BAE — практика, стартаптар, тағылымдамалар.",
    url: `${siteUrl}/kk/why-entrepreneurship-almau`,
  },
};

const faqItems = [
  {
    question: "AlmaU Кәсіпкерлік Институты басқа ЖОО-дан несімен ерекшеленеді?",
    answer: "Басты айырмашылық — Learning-by-doing: студенттер бірінші курстан бастап нақты жобалармен жұмыс істейді, стартаптарды іске қосады, бизнес-кейстерге және питчингтерге қатысады. Оқытушылар — тәжірибелі кәсіпкерлер мен сарапшылар.",
  },
  {
    question: "Неліктен бизнес-білім үшін AlmaU-ды таңдау керек?",
    answer: "AlmaU — жеке Кәсіпкерлік Институты бар Қазақстандағы аз ғана ЖОО-дың бірі. Студенттер теория емес, практикалық дағдылар алады: стартаптарды іске қосу, бизнес-модельдермен жұмыс, жобаларды басқару, кәсіпкерлермен нетворкинг.",
  },
  {
    question: "AlmaU стартаптар үшін қандай мүмкіндіктер береді?",
    answer: "Студенттер StartUp Night, Crack IT, Rocket Pitch, Big Ideas Camp-қа қатысады. Стартап-инкубаторда жұмыс істейді, кәсіпкерлерден менторлық алады және инвесторларға қол жеткізеді. Көптеген жобалар толыққанды бизнеске айналады.",
  },
  {
    question: "Оқу кезінде тағылымдамадан өтуге бола ма?",
    answer: "Иә, студенттер CMC, ERG, MOST Ventures, KUSTO Group, ChocoFamily, Salem Social Media және басқа компанияларда тағылымдамадан өтеді. Көптеген тағылымдамалар толыққанды жұмыс ұсынысына айналады.",
  },
  {
    question: "Студенттерге қандай халықаралық мүмкіндіктер бар?",
    answer: "International Business бағдарламасы Babson College (АҚШ), Bangkok University (Таиланд), EAE Business School (Испания) тағылымдамаларын қамтиды. Сондай-ақ халықаралық алмасулар және бірлескен жобалар қолжетімді.",
  },
  {
    question: "AlmaU жұмысқа орналасуға көмектеседі ме?",
    answer: "Иә, AlmaU мансап орталығы студенттер мен түлектерге тағылымдама және жұмыс іздеуге, түйіндеме жазуға, сұхбаттарға дайындалуға көмектеседі. Жұмыс берушілер түлектер үшін университетке тікелей жүгінеді.",
  },
  {
    question: "Оқуды жұмыспен біріктіруге бола ма?",
    answer: "Иә, бағдарламалар практиканы барынша көп беру және жұмыс істеуге икемділік үшін құрылған. Көптеген студенттер 2-3 курстан бастап компанияларда жұмыс істейді немесе өз жобаларын іске қосады.",
  },
  {
    question: "Кәсіпкерлік Институты қандай бағдарламаларды ұсынады?",
    answer: "Үш бакалавриат бағдарламасы: International Business (ағылшын), Digital Commerce (орыс), BAE (орыс және ағылшын). Бір магистратура бағдарламасы: «Креативті индустрияларды басқару».",
  },
];

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Басты бет", item: siteUrl + "/kk" },
    { "@type": "ListItem", position: 2, name: "Неге AlmaU", item: siteUrl + "/kk/why-entrepreneurship-almau" },
  ],
};

const criteria = [
  { criterion: "Практика", value: "Бірінші курстан бастап жобалар, бизнес-кейстер және командалық жұмыс" },
  { criterion: "Кәсіпкерлік", value: "Өз жобаңызды дамыту және стартапты іске қосу мүмкіндігі" },
  { criterion: "Менторлар", value: "Белсенді кәсіпкерлермен және сарапшылармен жұмыс" },
  { criterion: "Нетворкинг", value: "Институт студенттері, түлектері және серіктестерінің қауымдастығы" },
  { criterion: "Мансап", value: "Басқарушылық және өнімдік рөлдерге дайындық, тағылымдамалар" },
  { criterion: "Іс-шаралар", value: "Питчингтер, хакатондар, чемпионаттар және акселерациялық бағдарламалар" },
  { criterion: "Қала", value: "Оқу Қазақстанның бизнес орталығы — Алматы қаласында өтеді" },
  { criterion: "ҰБТ профильдік пәндері", value: "Барлық бакалавриат бағдарламалары үшін Математика + География" },
];

const programsData = [
  { title: "International Business", href: "/kk/programs/international-business", desc: "Ғаламдық бизнес-білім ағылшын тілінде. Халықаралық тағылымдамалар және мансап." },
  { title: "Digital Commerce", href: "/kk/programs/digital-commerce", desc: "E-commerce, маркетплейстер, цифрлық маркетинг және деректерді талдау." },
  { title: "BAE", href: "/kk/programs/bae", desc: "Кәсіпкерлік, стартаптарды іске қосу, жобаларды басқару және отбасылық бизнес." },
  { title: "Креативті индустриялар", href: "/kk/programs/creative-industries", desc: "Магистратура: креативті экономикадағы менеджерлер мен кәсіпкерлер үшін." },
];

const statsData = [
  { value: "4+", label: "Бағдарлама" },
  { value: "15+", label: "Жоба/жыл" },
  { value: "500+", label: "Студент" },
  { value: "30+", label: "Серіктес" },
];

export default function KkWhyAlmaUPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
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
                Неліктен AlmaU Кәсіпкерлік Институты?
              </h1>
              <p className="mt-4 max-w-2xl mx-auto text-sm md:text-base text-textSecondary leading-relaxed break-words">
                AlmaU — Алматыдағы бизнес университеті, өзінің Кәсіпкерлік Институты бар. International Business, Digital Commerce және BAE бағдарламалары — бұл практикалық оқыту, стартаптарды іске қосу, кәсіпкерлер қауымдастығы және бірінші курстан бастап мансап.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-brandOrange px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:brightness-110"
                >
                  WhatsApp-та жазу
                </a>
                <a href="/kk/admission"
                  className="inline-flex items-center gap-2 rounded-full border border-darkBorder px-7 py-3 text-sm font-semibold text-textSecondary transition-all duration-300 hover:bg-darkCard hover:text-textPrimary"
                >
                  Қалай түсуге болады
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-darkCard/50 border-y border-darkBorder">
        <div className="mx-auto max-w-5xl px-4">
          <div className="flex flex-col items-center text-center">
            <SectionBadge>Таңдау критерийлері</SectionBadge>
            <h2 className="mt-4 font-display font-semibold text-textPrimary leading-tight" style={{ fontSize: "clamp(26px, 3.2vw, 40px)", letterSpacing: "-0.01em" }}>
              AlmaU Кәсіпкерлік Институты не ұсынады
            </h2>
          </div>
          <div className="mt-10 overflow-hidden rounded-2xl border border-darkBorder bg-darkCard">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-darkBorder bg-darkCard">
                  <th className="px-6 py-4 text-left font-semibold text-textPrimary">Критерий</th>
                  <th className="px-6 py-4 text-left font-semibold text-textPrimary">Институт не ұсынады</th>
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
            <SectionBadge>Бағдарламалар</SectionBadge>
            <h2 className="mt-4 font-display font-semibold text-textPrimary leading-tight" style={{ fontSize: "clamp(26px, 3.2vw, 40px)", letterSpacing: "-0.01em" }}>
              Кәсіпкерлік Институтының бағдарламалары
            </h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 max-w-3xl mx-auto">
            {programsData.map((prog) => (
              <a key={prog.title} href={prog.href}
                className="rounded-2xl border border-darkBorder bg-darkCard p-6 transition-all duration-300 hover:border-brandOrange/20 block"
              >
                <h3 className="font-display text-base font-semibold text-textPrimary">{prog.title}</h3>
                <p className="mt-2 text-sm text-textSecondary leading-relaxed">{prog.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brandOrange">
                  Толығырақ →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-darkCard/50 border-y border-darkBorder">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex flex-col items-center text-center">
            <SectionBadge>Фактілер</SectionBadge>
            <h2 className="mt-4 font-display font-semibold text-textPrimary leading-tight" style={{ fontSize: "clamp(26px, 3.2vw, 40px)", letterSpacing: "-0.01em" }}>
              Сандар мен фактілер
            </h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto">
            {statsData.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-darkBorder bg-darkCard p-6 text-center">
                <span className="font-display text-3xl md:text-4xl font-bold text-brandOrange">{stat.value}</span>
                <p className="mt-2 text-sm text-textSecondary">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a href="/kk/about/facts" className="text-sm text-brandOrange hover:underline">Барлық ресми ақпарат →</a>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-darkBg">
        <div className="mx-auto max-w-3xl px-4">
          <div className="flex flex-col items-center text-center">
            <SectionBadge>FAQ</SectionBadge>
            <h2 className="font-display font-semibold text-textPrimary leading-tight" style={{ fontSize: "clamp(26px, 3.2vw, 40px)", letterSpacing: "-0.01em" }}>
              FAQ: Неге AlmaU
            </h2>
          </div>
          <div className="mt-10 space-y-3">
            {faqItems.map((item, i) => (
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
        title="Көбірек білгіңіз келе ме?"
        subtitle="WhatsApp-қа жазыңыз — бағдарламалар, қабылдау және оқу артықшылықтары туралы айтып береміз."
      />
    </>
  );
}
