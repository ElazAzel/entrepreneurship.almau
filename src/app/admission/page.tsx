import { SectionBadge } from "@/components/SectionBadge";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import Image from "next/image";
import { ADMISSION_FAQ } from "@/lib/pages";
import { WHATSAPP_LINK, FOOTER_CONTACTS } from "@/lib/constants";

export const revalidate = 604800;

export const metadata = {
  title: "Поступление в Институт предпринимательства AlmaU | Документы, сроки, контакты",
  description:
    "Узнай, как поступить в Институт предпринимательства AlmaU: документы, сроки подачи, этапы зачисления и контакты приёмной комиссии. Бакалавриат и магистратура в Алматы.",
  openGraph: {
    title: "Поступление в Институт предпринимательства AlmaU",
    description:
      "Документы, сроки, этапы поступления и контакты приёмной комиссии.",
  },
};

const steps = [
  { number: "01", title: "Подготовка документов" },
  { number: "02", title: "Подача заявки" },
  { number: "03", title: "Собеседование" },
  { number: "04", title: "Зачисление" },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://entrepreneurship-almau.vercel.app" },
    { "@type": "ListItem", position: 2, name: "Поступление", item: "https://entrepreneurship-almau.vercel.app/admission" },
  ],
};

export default function AdmissionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }}
      />

      <section className="relative flex items-center bg-darkBg overflow-hidden min-h-[500px] md:min-h-[600px] pt-16 pb-10 md:pt-0 md:pb-0">
        <div className="relative z-10 mx-auto w-full max-w-6xl px-4">
          <div className="rounded-2xl md:rounded-3xl border border-darkBorder bg-darkCard/80 backdrop-blur-sm overflow-hidden">
            <div className="grid md:grid-cols-5">
              <div className="md:col-span-3 p-5 md:p-14">
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <h1
                    className="font-display font-bold text-textPrimary leading-tight break-words"
                    style={{ fontSize: "clamp(24px, 4.5vw, 52px)", letterSpacing: "-0.02em" }}
                  >
                    Поступление в Институт предпринимательства AlmaU
                  </h1>
                  <p className="mt-4 max-w-xl text-sm md:text-base text-textSecondary leading-relaxed break-words">
                    Подготовь документы, пройди собеседование и стань частью предпринимательского сообщества. Мы поможем на каждом этапе поступления.
                  </p>
                  <div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-center md:items-start gap-2 md:gap-3 w-full">
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-brandOrange px-6 py-2.5 md:px-7 md:py-3 text-sm font-semibold text-white transition-all duration-300 hover:brightness-110"
                    >
                      Связаться с приёмной комиссией
                    </a>
                  </div>
                </div>
              </div>
              <div className="hidden md:block md:col-span-2 relative min-h-[320px] overflow-hidden">
                <Image
                  src="/images/photoshoot/2S2A3060.jpg"
                  alt="Студенты Института предпринимательства AlmaU"
                  fill
                  className="object-cover"
                  sizes="40vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-darkCard/90" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <SectionBadge>Документы</SectionBadge>
            <h2
              className="mt-4 font-display font-semibold text-textPrimary leading-tight"
              style={{ fontSize: "clamp(26px, 3.2vw, 40px)", letterSpacing: "-0.01em" }}
            >
              Документы для поступления
            </h2>
            <p className="mt-3 max-w-lg text-sm text-textSecondary leading-relaxed break-words">
              Для поступления необходимо подготовить следующий пакет документов
            </p>
          </div>
          <div className="mt-10 mx-auto max-w-2xl">
            <ul className="space-y-3">
              {[
                "Заявление",
                "Удостоверение личности",
                "Аттестат о среднем образовании (или диплом колледжа)",
                "Сертификат ЕНТ",
                "4 фотографии 3×4",
                "Медицинская справка 075/У",
                "Сертификат IELTS/TOEFL (для International Business)",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 rounded-2xl border border-darkBorder bg-darkCard p-4 md:p-5 transition-all duration-300 hover:border-brandOrange/20"
                >
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brandOrange/10 text-xs font-semibold text-brandOrange">
                    {idx + 1}
                  </span>
                  <span className="text-sm md:text-base text-textPrimary break-words">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28 bg-darkBg/50 border-t border-darkBorder">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <SectionBadge>Этапы</SectionBadge>
            <h2
              className="mt-4 font-display font-semibold text-textPrimary leading-tight"
              style={{ fontSize: "clamp(26px, 3.2vw, 40px)", letterSpacing: "-0.01em" }}
            >
              Сроки и этапы
            </h2>
            <p className="mt-3 max-w-lg text-sm text-textSecondary leading-relaxed break-words">
              Поступление проходит в несколько простых шагов
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative rounded-2xl border border-darkBorder bg-darkCard p-5 md:p-6 text-center transition-all duration-300 hover:border-brandOrange/20"
              >
                <span className="font-display text-3xl md:text-4xl font-bold text-brandOrange/30">{step.number}</span>
                <h3 className="mt-2 text-sm md:text-base font-semibold text-textPrimary break-words">{step.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <SectionBadge>Контакты</SectionBadge>
            <h2
              className="mt-4 font-display font-semibold text-textPrimary leading-tight"
              style={{ fontSize: "clamp(26px, 3.2vw, 40px)", letterSpacing: "-0.01em" }}
            >
              Контакты приёмной комиссии
            </h2>
          </div>
          <div className="mt-10 mx-auto max-w-xl">
            <div className="rounded-2xl border border-darkBorder bg-darkCard p-6 md:p-8 space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brandOrange/10">
                  <svg className="h-5 w-5 text-brandOrange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-textMuted uppercase tracking-wider">Телефон</p>
                  <a href={`tel:${FOOTER_CONTACTS.phone.replace(/\s/g, "")}`} className="mt-1 text-sm md:text-base text-textPrimary hover:text-brandOrange transition-colors break-words">
                    {FOOTER_CONTACTS.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brandOrange/10">
                  <svg className="h-5 w-5 text-brandOrange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-textMuted uppercase tracking-wider">Email</p>
                  <a href={`mailto:${FOOTER_CONTACTS.email}`} className="mt-1 text-sm md:text-base text-textPrimary hover:text-brandOrange transition-colors break-words">
                    {FOOTER_CONTACTS.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brandOrange/10">
                  <svg className="h-5 w-5 text-brandOrange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-textMuted uppercase tracking-wider">Адрес</p>
                  <p className="mt-1 text-sm md:text-base text-textPrimary break-words">{FOOTER_CONTACTS.address}</p>
                </div>
              </div>
              <div className="pt-2">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-brandOrange px-6 py-2.5 md:px-7 md:py-3 text-sm font-semibold text-white transition-all duration-300 hover:brightness-110"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Написать в WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection title="Часто задаваемые вопросы о поступлении" items={ADMISSION_FAQ} id="faq" />

      <section className="py-12 md:py-16 bg-darkCard/30 border-y border-darkBorder">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="text-xs text-textMuted">
            Материал подготовил Ильяс Азелханов, руководитель проектов Института предпринимательства AlmaU, сертифицированный бизнес-трекер и организатор студенческих предпринимательских программ.
          </p>
          <p className="mt-2 text-xs text-textMuted">Обновлено: 21 июля 2026 года</p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
