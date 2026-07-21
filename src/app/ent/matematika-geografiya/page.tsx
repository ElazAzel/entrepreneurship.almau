import type { Metadata } from "next";
import { SectionBadge } from "@/components/SectionBadge";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { WHATSAPP_LINK } from "@/lib/constants";

const siteUrl = "https://entrepreneurship-almau.vercel.app";

export const revalidate = 604800;

export const metadata: Metadata = {
  title: "Куда поступить с математикой и географией в Алматы | AlmaU",
  description: "С ЕНТ математика + география можно поступить на программы International Business, Digital Commerce, BAE в Институт предпринимательства AlmaU. Проходные баллы, профильные предметы, сроки.",
  alternates: { canonical: "/ent/matematika-geografiya" },
  openGraph: {
    title: "Куда поступить с математикой и географией в Алматы",
    description: "С профильными предметами математика+география можно поступить на предпринимательские программы Института предпринимательства AlmaU.",
    url: `${siteUrl}/ent/matematika-geografiya`,
  },
};

const ENT_FAQ = [
  {
    question: "Какие профильные предметы ЕНТ нужны для поступления в Институт предпринимательства?",
    answer: "Для поступления на программы Института предпринимательства необходима комбинация профильных предметов ЕНТ «Математика + География». Это открывает доступ ко всем программам бакалавриата: International Business, Digital Commerce и Business Administration in Entrepreneurship (BAE).",
  },
  {
    question: "Куда поступить с ЕНТ по математике и географии в Алматы?",
    answer: "С комбинацией «Математика + География» можно поступить в Институт предпринимательства AlmaU на программы International Business, Digital Commerce, BAE. В AlmaU эта комбинация даёт доступ к самым практико-ориентированным предпринимательским программам в Алматы.",
  },
  {
    question: "Какой проходной балл ЕНТ на бизнес-администрирование?",
    answer: "Проходной балл ЕНТ зависит от конкурса в текущем году. Для гарантированного поступления рекомендуем набрать не менее 70–80 баллов. Минимальный порог для участия в конкурсе — 50–60 баллов. Точные проходные баллы публикуются приёмной комиссией AlmaU перед началом приёма.",
  },
  {
    question: "Какой минимальный балл для поступления на менеджмент?",
    answer: "Минимальный пороговый балл ЕНТ для участия в конкурсе устанавливается государством и составляет 50–60 баллов. Однако фактический проходной балл выше и зависит от количества абитуриентов и грантов. Для поступления на грант требуется от 80 баллов.",
  },
  {
    question: "Какие специальности с математикой по ЕНТ в Алматы?",
    answer: "С математикой по ЕНТ доступны десятки специальностей в вузах Алматы. В Институте предпринимательства AlmaU с математикой и географией можно поступить на International Business, Digital Commerce и BAE.",
  },
  {
    question: "Какие специальности с географией по ЕНТ?",
    answer: "География как профильный предмет открывает специальности в сфере бизнеса, экономики, международных отношений и предпринимательства. В AlmaU комбинация «Математика + География» — прямой путь на предпринимательские программы.",
  },
  {
    question: "Какие профильные предметы для International Business?",
    answer: "Для программы International Business необходимы профильные предметы ЕНТ «Математика + География». Также требуется сертификат IELTS от 5.5 или TOEFL, так как обучение проходит полностью на английском языке.",
  },
  {
    question: "Какие профильные предметы для Digital Commerce?",
    answer: "Для Digital Commerce профильные предметы ЕНТ — «Математика + География». Обучение проходит на русском языке. Дополнительных экзаменов не требуется.",
  },
  {
    question: "Что сдавать на менеджмент ЕНТ?",
    answer: "Для поступления на управленческие и бизнес-специальности, включая менеджмент и предпринимательство, необходимы профильные предметы ЕНТ «Математика + География». Обязательные предметы: история Казахстана, математическая грамотность, грамотность чтения.",
  },
  {
    question: "Можно ли поступить на предпринимательство с низкими баллами ЕНТ?",
    answer: "Да, AlmaU предлагает платное обучение для абитуриентов, не прошедших на грант. Также действуют скидки при раннем поступлении и внутренние гранты на основе академической успеваемости и предпринимательского потенциала.",
  },
  {
    question: "Бизнес-специальности с математикой и географией — какие есть варианты?",
    answer: "С математикой и географией доступны бизнес-администрирование, предпринимательство, международный бизнес, менеджмент и цифровая коммерция. AlmaU предлагает самые практико-ориентированные программы в этой группе с фокусом на запуск стартапов и управление проектами.",
  },
  {
    question: "Можно ли поступить на грант с математикой и географией?",
    answer: "Да, государственные гранты выделяются ежегодно на конкурсной основе по результатам ЕНТ для всех программ. Для получения гранта необходимо набрать проходной балл (обычно от 80) и пройти конкурс. AlmaU также предоставляет собственные внутренние гранты.",
  },
  {
    question: "Какие профессии доступны после обучения с математикой и географией?",
    answer: "Выпускники работают в международных компаниях, e-commerce, консалтинге, управлении проектами и запускают собственные стартапы. Конкретные должности: менеджер ВЭД, e-commerce менеджер, продакт-менеджер, бизнес-аналитик, предприниматель.",
  },
  {
    question: "Сколько лет нужно учиться на программах?",
    answer: "Программы бакалавриата (International Business, Digital Commerce, BAE) рассчитаны на 3 года очного обучения. Магистратура «Управление в креативных индустриях» — 2 года.",
  },
  {
    question: "Нужна ли математика на программах предпринимательства?",
    answer: "Да, математика — один из профильных предметов ЕНТ для поступления. В учебной программе есть дисциплины по финансовой грамотности, аналитике данных и бизнес-статистике, поэтому математические навыки важны для успешного обучения.",
  },
  {
    question: "Есть ли программы на английском с математикой и географией?",
    answer: "Да, программа International Business полностью на английском языке. Для поступления требуется сертификат IELTS от 5.5 или TOEFL. BAE частично на английском. Digital Commerce — на русском.",
  },
  {
    question: "Что лучше: International Business или Digital Commerce?",
    answer: "Выбор зависит от ваших целей. International Business — для карьеры в международных компаниях, консалтинге и финансах. Digital Commerce — для работы в e-commerce, маркетплейсах и цифровом маркетинге. Обе программы требуют ЕНТ «Математика + География».",
  },
  {
    question: "Можно ли перевестись с другой специальности?",
    answer: "Да, возможен перевод из других вузов и с других специальностей при условии перезачёта пройденных дисциплин. Решение принимается индивидуально на основании академической разницы.",
  },
  {
    question: "Какие экзамены кроме ЕНТ нужны для поступления?",
    answer: "Для программы International Business дополнительно требуется сертификат IELTS от 5.5 или TOEFL. Для остальных программ достаточно результатов ЕНТ по обязательным предметам (история Казахстана, математическая грамотность, грамотность чтения) и профильным (математика + география).",
  },
  {
    question: "Есть ли подготовительные курсы по ЕНТ?",
    answer: "Да, AlmaU проводит подготовительные курсы по ЕНТ, включая профильные предметы. Курсы помогают повысить баллы и подготовиться к поступлению. Подробности — в приёмной комиссии.",
  },
  {
    question: "Какие документы нужны для поступления с ЕНТ?",
    answer: "Необходимы: заявление, удостоверение личности, аттестат о среднем образовании, сертификат ЕНТ, 4 фотографии 3×4, медицинская справка 075/У. Для International Business — сертификат IELTS/TOEFL.",
  },
];

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "ЕНТ математика и география", item: `${siteUrl}/ent/matematika-geografiya` },
  ],
};

const programs = [
  { title: "International Business", href: "/programs/international-business", desc: "Международный бизнес на английском языке. Глобальное мышление, международные стажировки, карьера в международных компаниях и стартапах." },
  { title: "Digital Commerce", href: "/programs/digital-commerce", desc: "E-commerce, маркетплейсы, цифровой маркетинг и аналитика данных. Управление цифровыми каналами продаж и запуск цифровых стартапов." },
  { title: "Business Administration in Entrepreneurship (BAE)", href: "/programs/bae", desc: "Предпринимательское мышление и запуск стартапов. Управление проектами, семейный бизнес и создание ценности для рынка." },
];

const subjects = [
  { program: "International Business", subjects: "Математика + География + Английский (IELTS/TOEFL)" },
  { program: "Digital Commerce", subjects: "Математика + География" },
  { program: "BAE", subjects: "Математика + География" },
  { program: "Управление в креативных индустриях (магистратура)", subjects: "Собеседование" },
];

export default function EntPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: ENT_FAQ.map((item) => ({
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
                Куда поступить с математикой и географией в Алматы
              </h1>
              <p className="mt-4 max-w-3xl mx-auto text-sm md:text-base text-textSecondary leading-relaxed break-words">
                С профильными предметами ЕНТ «Математика + География» можно поступить на программы в области менеджмента, предпринимательства и управления бизнесом. В Институте предпринимательства AlmaU обучение проходит в Алматы и строится вокруг практических проектов, запуска стартапов, работы с бизнес-кейсами и развития управленческих навыков.
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
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col items-center text-center">
            <SectionBadge>Программы</SectionBadge>
            <h2 className="mt-4 font-display font-semibold text-textPrimary leading-tight" style={{ fontSize: "clamp(26px, 3.2vw, 40px)", letterSpacing: "-0.01em" }}>
              Какие специальности открыты с математикой и географией
            </h2>
            <p className="mt-3 max-w-xl text-sm text-textSecondary leading-relaxed break-words">
              С комбинацией «Математика + География» доступны три программы бакалавриата. Каждая готовит к разным карьерным траекториям.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {programs.map((p) => (
              <a key={p.title} href={p.href}
                className="rounded-2xl border border-darkBorder bg-darkCard p-6 transition-all duration-300 hover:border-brandOrange/20 block"
              >
                <h3 className="font-display text-base font-semibold text-textPrimary">{p.title}</h3>
                <p className="mt-2 text-sm text-textSecondary leading-relaxed break-words">{p.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brandOrange">
                  Подробнее о программе →
                </span>
              </a>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-sm text-textMuted">Не знаете, какую программу выбрать? <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-brandOrange hover:underline">Получите консультацию</a></p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-darkBg">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex flex-col items-center text-center">
            <SectionBadge>Баллы</SectionBadge>
            <h2 className="mt-4 font-display font-semibold text-textPrimary leading-tight" style={{ fontSize: "clamp(26px, 3.2vw, 40px)", letterSpacing: "-0.01em" }}>
              Проходные баллы ЕНТ для поступления
            </h2>
            <p className="mt-3 max-w-lg text-sm text-textSecondary leading-relaxed break-words">
              Для поступления на программы Института предпринимательства необходима комбинация профильных предметов ЕНТ «Математика + География»
            </p>
          </div>
          <div className="mt-10 max-w-2xl mx-auto">
            <div className="rounded-2xl border border-darkBorder bg-darkCard overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-darkBorder bg-darkCard">
                    <th className="px-6 py-4 text-left font-semibold text-textPrimary">Уровень</th>
                    <th className="px-6 py-4 text-left font-semibold text-textPrimary">Баллы ЕНТ</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { level: "Минимальный порог для участия в конкурсе", score: "50–60" },
                    { level: "Рекомендуемый для гарантированного поступления", score: "70+" },
                    { level: "Для получения государственного гранта", score: "80+" },
                  ].map((row) => (
                    <tr key={row.level} className="border-b border-darkBorder last:border-0">
                      <td className="px-6 py-4 text-textSecondary">{row.level}</td>
                      <td className="px-6 py-4 text-textSecondary">{row.score}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-6 text-center">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-sm text-brandOrange hover:underline">
              Уточнить проходные баллы в этом году
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-darkCard/50 border-y border-darkBorder">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex flex-col items-center text-center">
            <SectionBadge>Профильные предметы</SectionBadge>
            <h2 className="mt-4 font-display font-semibold text-textPrimary leading-tight" style={{ fontSize: "clamp(26px, 3.2vw, 40px)", letterSpacing: "-0.01em" }}>
              Профильные предметы по программам
            </h2>
          </div>
          <div className="mt-10 max-w-3xl mx-auto">
            <div className="rounded-2xl border border-darkBorder bg-darkCard overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-darkBorder bg-darkCard">
                    <th className="px-6 py-4 text-left font-semibold text-textPrimary">Программа</th>
                    <th className="px-6 py-4 text-left font-semibold text-textPrimary">Профильные предметы ЕНТ</th>
                  </tr>
                </thead>
                <tbody>
                  {subjects.map((row) => (
                    <tr key={row.program} className="border-b border-darkBorder last:border-0">
                      <td className="px-6 py-4 font-medium text-textPrimary">{row.program}</td>
                      <td className="px-6 py-4 text-textSecondary">{row.subjects}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <FAQSection items={ENT_FAQ} title="FAQ: ЕНТ математика и география — поступление в AlmaU" id="faq" />

      <CTASection
        title="Сдаёте математику и географию?"
        subtitle="Посмотрите доступные программы и получите консультацию по поступлению в WhatsApp."
      />
    </>
  );
}
