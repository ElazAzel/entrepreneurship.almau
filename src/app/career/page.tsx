import {SectionBadge} from "@/components/SectionBadge"
import {FAQSection} from "@/components/FAQSection"
import {CTASection} from "@/components/CTASection"
import {CAREER_FAQ} from "@/lib/pages"
import {PROGRAMS, WHATSAPP_LINK, PARTNERS_STRATEGIC, PARTNERS_CASES, PARTNERS_EVENTS} from "@/lib/constants"
import type {Metadata} from "next"

export const revalidate = 604800

export const metadata: Metadata = {
  title: "Карьера после AlmaU: кем работают выпускники",
  description:
    "Узнайте о карьерных треках, стажировках и трудоустройстве выпускников Института предпринимательства AlmaU. International Business, Digital Commerce, BAE, креативные индустрии.",
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {"@type": "ListItem", position: 1, name: "Главная", item: "https://entrepreneurship-almau.vercel.app"},
    {"@type": "ListItem", position: 2, name: "Карьера", item: "https://entrepreneurship-almau.vercel.app/career"},
  ],
}

export default function CareerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c")}}
      />

      <section className="relative flex items-center bg-darkBg overflow-hidden min-h-[500px] md:min-h-[600px] pt-16 pb-10 md:pt-0 md:pb-0">
        <div className="relative z-10 mx-auto w-full max-w-6xl px-4">
          <div className="rounded-2xl md:rounded-3xl border border-darkBorder bg-darkCard/80 backdrop-blur-sm p-8 md:p-14">
            <div className="flex flex-col items-center text-center">
              <h1
                className="font-display font-bold text-textPrimary leading-tight break-words"
                style={{fontSize: "clamp(24px, 4.5vw, 52px)", letterSpacing: "-0.02em"}}
              >
                Карьера после AlmaU: кем работают выпускники
              </h1>
              <p className="mt-4 max-w-2xl text-sm md:text-base text-textSecondary leading-relaxed break-words">
                Выпускники Института предпринимательства AlmaU строят карьеру в международных компаниях,
                запускают собственные стартапы и занимают руководящие позиции в ведущих бизнесах
                Казахстана и мира.
              </p>
              <div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-center gap-2 md:gap-3">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brandOrange px-6 py-2.5 md:px-7 md:py-3 text-sm font-semibold text-white transition-all duration-300 hover:brightness-110"
                >
                  Узнать о карьерных возможностях
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <SectionBadge>Карьерные треки</SectionBadge>
            <h2
              className="mt-4 font-display font-semibold text-textPrimary leading-tight"
              style={{fontSize: "clamp(26px, 3.2vw, 40px)", letterSpacing: "-0.01em"}}
            >
              Карьерные треки по программам
            </h2>
            <p className="mt-3 max-w-lg text-sm text-textSecondary leading-relaxed break-words">
              Каждая программа открывает свои карьерные возможности
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
            {PROGRAMS.map((program) => (
              <div
                key={program.id}
                className="rounded-2xl border border-darkBorder bg-darkCard p-6 md:p-7 transition-all duration-300 hover:border-brandOrange/20"
              >
                <h3 className="font-display text-lg md:text-xl font-semibold text-textPrimary break-words">
                  {program.title}
                </h3>
                <p className="mt-2 text-sm text-textSecondary leading-relaxed break-words">
                  {program.description}
                </p>
                <h4 className="mt-5 text-sm font-semibold text-textPrimary">
                  Возможные карьерные пути
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
            <SectionBadge>Партнёры</SectionBadge>
            <h2
              className="mt-4 font-display font-semibold text-textPrimary leading-tight"
              style={{fontSize: "clamp(26px, 3.2vw, 40px)", letterSpacing: "-0.01em"}}
            >
              Где проходят стажировки
            </h2>
            <p className="mt-3 max-w-lg text-sm text-textSecondary leading-relaxed break-words">
              Студенты проходят практику в ведущих казахстанских и международных компаниях
            </p>
          </div>
          <div className="mt-8 space-y-6">
            {[
              { label: "Стратегические партнёры", items: PARTNERS_STRATEGIC },
              { label: "Компании с кейсами", items: PARTNERS_CASES },
              { label: "Партнёры мероприятий", items: PARTNERS_EVENTS },
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

      <FAQSection items={CAREER_FAQ} title="FAQ: Карьера и трудоустройство" id="faq" />

      <CTASection />
    </>
  )
}
