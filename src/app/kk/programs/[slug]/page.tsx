import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/CTASection";
import { WHATSAPP_LINK } from "@/lib/constants";

const siteUrl = "https://entrepreneurship-almau.vercel.app";

export const revalidate = 604800;

type ProgramEntry = {
  title: string;
  description: string;
  slug: string;
  longDescription: string;
  duration: string;
  language: string;
  format: string;
  jobs: string[];
  skills: string[];
  faq: { question: string; answer: string }[];
};

const PROGRAMS_KK: Record<string, ProgramEntry> = {
  "international-business": {
    title: "International Business",
    description: "AlmaU-дағы International Business бакалавриаты — Алматы, ағылшын тілінде. ҰБТ пәндері: Математика + География. Халықаралық тағылымдамалар, ғаламдық компанияларда мансап.",
    slug: "international-business",
    longDescription: "International Business бағдарламасы жаһандық ойлау қабілеті бар, халықаралық компанияларды басқару стратегияларын түсінетін, мәдениетаралық коммуникация дағдылары бар мамандарды дайындайды. Студенттер халықаралық қаржы, стратегиялық менеджмент, кросс-мәдени маркетинг және жаһандық логистиканы оқиды.",
    duration: "3 жыл",
    language: "Ағылшын",
    format: "Күндізгі, бакалавриат",
    jobs: [
      "Халықаралық бизнесті дамыту менеджері",
      "Халықаралық нарықтар жөніндегі кеңесші",
      "Сыртқы экономикалық қызмет аналитигі",
      "Инвестициялық аналитик",
      "Экспорт/импорт менеджері",
      "Бизнес-кеңесші",
      "Халықаралық жобалар маманы",
    ],
    skills: [
      "Халықаралық бизнес және нарыққа шығу стратегиялары",
      "Мәдениетаралық коммуникация және келіссөздер",
      "Қаржылық талдау және халықаралық инвестициялау",
      "Жаһандық жеткізу тізбегін басқару",
      "Бизнесті цифрлық трансформациялау",
    ],
    faq: [
      { question: "International Business қай тілде оқытылады?", answer: "Толығымен ағылшын тілінде. Қабылдау үшін IELTS 5.5 немесе TOEFL сертификаты қажет." },
      { question: "International Business үшін қандай ҰБТ пәндері қажет?", answer: "Математика + География пәндерінің комбинациясы қажет." },
      { question: "International Business-тен кейін қайда жұмыс істеуге болады?", answer: "Түлектер халықаралық компанияларда, консалтингте, аудитте, банктерде және стартаптарда жұмыс істейді." },
      { question: "Халықаралық тағылымдамалар бар ма?", answer: "Иә, Babson College (АҚШ), Bangkok University (Тайланд), EAE Business School (Испания) және қазақстандық халықаралық компанияларда тағылымдамалар қарастырылған." },
      { question: "Оқу ұзақтығы қанша?", answer: "3 жыл күндізгі оқу." },
      { question: "Ағылшын тілі қажет пе?", answer: "Иә, IELTS 5.5 немесе TOEFL қажет. Барлық сабақтар ағылшын тілінде." },
    ],
  },
  "digital-commerce": {
    title: "Digital Commerce",
    description: "AlmaU-дағы Digital Commerce бакалавриаты — Алматы. E-commerce, маркетплейстер, цифрлық маркетинг және деректер аналитикасы. ҰБТ: Математика + География.",
    slug: "digital-commerce",
    longDescription: "Digital Commerce — e-commerce, маркетплейстер, цифрлық маркетинг, деректер аналитикасы, бизнестегі жасанды интеллект, логистика және клиенттік тәжірибені біріктіретін заманауи бағдарлама.",
    duration: "3 жыл",
    language: "Орыс",
    format: "Күндізгі, бакалавриат",
    jobs: [
      "E-commerce менеджері",
      "Маркетплейсті дамыту менеджері",
      "Цифрлық өнім менеджері",
      "Цифрлық маркетинг менеджері",
      "E-commerce аналитигі",
      "CRM менеджері",
      "Цифрлық бизнес негізін қалаушы",
    ],
    skills: [
      "E-commerce және маркетплейстерді басқару",
      "Цифрлық маркетинг және аналитика",
      "Деректерге негізделген шешімдер қабылдау",
      "CRM және клиенттік тәжірибе",
      "Бизнестегі жасанды интеллект",
      "Цифрлық өнімдерді басқару",
    ],
    faq: [
      { question: "Digital Commerce қай тілде оқытылады?", answer: "Орыс тілінде." },
      { question: "Қандай ҰБТ пәндері қажет?", answer: "Математика + География." },
      { question: "Digital Commerce-тен кейін кім болып жұмыс істеуге болады?", answer: "E-commerce менеджері, өнім менеджері, цифрлық маркетолог, CRM маманы, аналитик және цифрлық бизнес негізін қалаушы." },
      { question: "Оқу ұзақтығы қанша?", answer: "3 жыл күндізгі оқу." },
      { question: "Оқу кезінде өз стартапыңды іске қосуға бола ма?", answer: "Иә, бағдарлама жеке жобалар мен стартаптарды іске қосуды қолдайды." },
    ],
  },
  "bae": {
    title: "Business Administration in Entrepreneurship (BAE)",
    description: "AlmaU-дағы BAE — кәсіпкерлікке бағытталған бизнес-әкімшілендіру бакалавриаты. ҰБТ: Математика + География. Стартаптар, жобаларды басқару, отбасылық бизнес.",
    slug: "bae",
    longDescription: "BAE (Business Administration in Entrepreneurship) — кәсіпкерлік ойлауды қалыптастыратын бағдарлама. Студенттер стартаптарды іске қосуды, жобаларды басқаруды, отбасылық бизнесті дамытуды және нарық үшін құндылық жасауды үйренеді.",
    duration: "3 жыл",
    language: "Орыс және ағылшын",
    format: "Күндізгі, бакалавриат",
    jobs: [
      "Бизнес негізін қалаушы және CEO",
      "Отбасылық бизнес иесі",
      "Өнім менеджері",
      "Жоба менеджері",
      "Бизнесті дамыту жөніндегі маман",
      "Қаржылық аналитик",
      "Топ-менеджер",
    ],
    skills: [
      "Кәсіпкерлік ойлау және стартаптарды іске қосу",
      "Жобаларды және өнімдерді басқару",
      "Бизнес-жоспарлау және стратегия",
      "Отбасылық бизнесті басқару",
      "Қаржылық сауаттылық және аналитика",
      "Көшбасшылық және команданы басқару",
    ],
    faq: [
      { question: "BAE дегеніміз не?", answer: "BAE (Business Administration in Entrepreneurship) — кәсіпкерлікке бағытталған бизнес-әкімшілендіру бакалавриаты." },
      { question: "BAE қай тілде оқытылады?", answer: "Орыс және ағылшын тілдерінде." },
      { question: "Қандай ҰБТ пәндері қажет?", answer: "Математика + География." },
      { question: "BAE-ден кейін кім болып жұмыс істеуге болады?", answer: "Түлектер бизнес негізін қалаушылар, өнім менеджерлері, жоба менеджерлері, отбасылық бизнес иелері және инновациялық кәсіпкерлер болады." },
      { question: "BAE отбасылық бизнес үшін жарамды ма?", answer: "Иә, бағдарламада «Отбасылық бизнес» арнайы трегі бар." },
      { question: "Бизнес тәжірибесіз түсуге бола ма?", answer: "Иә, бағдарлама тәжірибесіз талапкерлерге арналған. Ең бастысы — мотивация және кәсіпкерлік ойлауды дамытуға деген ұмтылыс." },
    ],
  },
  "creative-industries": {
    title: "Креативті индустрияларды басқару",
    description: "AlmaU-дағы магистратура — Алматыда креативті индустрияларды басқару. Мәдени жоба менеджерлері, продюсерлер және кәсіпкерлер үшін. MA in Business and Management дипломы.",
    slug: "creative-industries",
    longDescription: "Магистратура бағдарламасы басқару құзыреттерін креативті индустриялардағы сараптамамен біріктіреді. Студенттер мәдени бизнесті, креативті кәсіпкерлікті, мәдени жобаларды басқаруды және продюсерлікті зерттейді.",
    duration: "2 жыл",
    language: "Орыс",
    format: "Күндізгі, магистратура",
    jobs: [
      "Креативті индустриялардағы жоба менеджері",
      "Креативті бизнес негізін қалаушы",
      "Мәдени жобалар продюсері",
      "Мәдени мекеме менеджері",
      "Креативті экономикадағы бизнес-стратег",
      "Креативті кластерлерді дамыту жөніндегі сарапшы",
    ],
    skills: [
      "Креативті жобаларды және командаларды басқару",
      "Мәдени кәсіпкерлік",
      "Оқиғалар мен жобаларды продюсерлеу",
      "Креативті кластерлерді стратегиялық дамыту",
      "Өнер және мәдениет менеджменті",
    ],
    faq: [
      { question: "Түлектер қандай дәреже алады?", answer: "MA in Business and Management «Креативті индустрияларды басқару» дәрежесі." },
      { question: "Оқу ұзақтығы қанша?", answer: "2 жыл күндізгі оқу." },
      { question: "Қай тілде оқытылады?", answer: "Орыс тілінде." },
      { question: "Магистратурадан кейін кім болып жұмыс істеуге болады?", answer: "Креативті индустриялардағы жоба менеджері, продюсер, мәдени мекеме менеджері, креативті бизнес негізін қалаушы." },
      { question: "Профильді бакалавриат қажет пе?", answer: "Жоқ, магистратура кез келген бағыт түлектеріне ашық. Қабылдау сұхбат бойынша жүргізіледі." },
    ],
  },
};

const slugs = Object.keys(PROGRAMS_KK);

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

function flattenFaq(faq: { question: string; answer: string }[]) {
  return faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const prog = PROGRAMS_KK[slug];
  if (!prog) return {};
  return {
    title: prog.title + " | AlmaU Кәсіпкерлік Институты",
    description: prog.description,
    alternates: {
      canonical: `/kk/programs/${slug}`,
      languages: { ru: `/programs/${slug}`, kk: `/kk/programs/${slug}`, en: `/en/programs/${slug}` },
    },
    openGraph: { title: prog.title, description: prog.description, url: `${siteUrl}/kk/programs/${slug}` },
  };
}

export default async function KkProgramPage({ params }: Props) {
  const { slug } = await params;
  const prog = PROGRAMS_KK[slug];
  if (!prog) notFound();

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        name: prog.title,
        description: prog.description,
        educationalLevel: slug === "creative-industries" ? "Master's degree" : "Bachelor's degree",
        offers: { "@type": "Offer", category: "Tuition" },
        provider: { "@type": "EducationalOrganization", name: "Institute for Entrepreneurship AlmaU", sameAs: siteUrl },
      },
      {
        "@type": "FAQPage",
        mainEntity: flattenFaq(prog.faq),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Басты бет", item: siteUrl + "/kk" },
          { "@type": "ListItem", position: 2, name: prog.title, item: `${siteUrl}/kk/programs/${slug}` },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd).replace(/</g, "\\u003c") }} />

      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 bg-darkBg overflow-hidden">
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-2xl md:rounded-3xl border border-darkBorder bg-darkCard/80 backdrop-blur-sm overflow-hidden">
            <div className="p-6 md:p-14">
              <span className="inline-block rounded-full border border-brandOrange/30 bg-brandOrange/10 px-4 py-1 text-xs font-medium uppercase text-textMuted" style={{ letterSpacing: "0.08em" }}>
                {prog.format}
              </span>
              <h1 className="mt-4 font-display font-bold text-textPrimary leading-tight" style={{ fontSize: "clamp(28px, 4.5vw, 48px)", letterSpacing: "-0.02em" }}>
                {prog.title}
              </h1>
              <p className="mt-4 max-w-2xl text-sm md:text-base text-textSecondary leading-relaxed">
                {prog.longDescription}
              </p>
              <div className="mt-6 flex flex-wrap gap-4 text-sm text-textMuted">
                <span>Мерзімі: <strong className="text-textPrimary">{prog.duration}</strong></span>
                <span>Тілі: <strong className="text-textPrimary">{prog.language}</strong></span>
              </div>
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

      <section className="py-20 md:py-28 bg-darkCard/50 border-y border-darkBorder">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="font-display text-lg font-semibold text-textPrimary">Мансап жолдары</h2>
              <ul className="mt-4 space-y-2">
                {prog.jobs.map((job) => (
                  <li key={job} className="flex items-start gap-2 text-sm text-textSecondary">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brandOrange" />
                    {job}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-lg font-semibold text-textPrimary">Негізгі дағдылар</h2>
              <ul className="mt-4 space-y-2">
                {prog.skills.map((skill) => (
                  <li key={skill} className="flex items-start gap-2 text-sm text-textSecondary">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brandOrange" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-darkBg">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="font-display text-lg font-semibold text-textPrimary text-center">Жиі қойылатын сұрақтар</h2>
          <div className="mt-8 space-y-3">
            {prog.faq.map((item, i) => (
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

      <CTASection />
    </>
  );
}
