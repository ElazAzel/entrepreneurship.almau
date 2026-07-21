import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PROGRAMS_META } from "@/lib/pages";
import { WHATSAPP_LINK } from "@/lib/constants";
import { CTASection } from "@/components/CTASection";

const siteUrl = "https://entrepreneurship-almau.vercel.app";

export const revalidate = 604800;

export function generateStaticParams() {
  return Object.keys(PROGRAMS_META).map((slug) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const prog = PROGRAMS_META[slug];
  if (!prog) return {};
  return {
    title: prog.title + " | AlmaU Институт предпринимательства",
    description: prog.description,
    alternates: { canonical: `/programs/${slug}` },
    openGraph: { title: prog.title, description: prog.description, url: `${siteUrl}/programs/${slug}` },
  };
}

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-zа-яё0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function flattenFaq(faq: { question: string; answer: string }[]) {
  return faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  }));
}

export default async function ProgramPage({ params }: Props) {
  const { slug } = await params;
  const prog = PROGRAMS_META[slug];
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
          { "@type": "ListItem", position: 1, name: "Главная", item: siteUrl },
          { "@type": "ListItem", position: 2, name: prog.title, item: `${siteUrl}/programs/${slug}` },
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
              <h1 className="mt-4 font-display font-bold text-textPrimary leading-tight break-words" style={{ fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "-0.02em" }}>
                {prog.title}
              </h1>
              <p className="mt-2 text-sm text-brandOrange font-medium">{prog.slugan}</p>
              <p className="mt-4 max-w-2xl text-sm md:text-base text-textSecondary leading-relaxed break-words">{prog.longDescription}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-darkBorder bg-darkBg/50 px-3 py-1 text-xs text-textMuted">{prog.duration}</span>
                <span className="rounded-full border border-darkBorder bg-darkBg/50 px-3 py-1 text-xs text-textMuted">{prog.language}</span>
              </div>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brandOrange px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:brightness-110"
                >
                  Хочу поступить
                </a>
                <a href="#faq"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-darkBorder px-7 py-3 text-sm font-semibold text-textSecondary transition-all duration-300 hover:bg-darkCard hover:text-textPrimary"
                >
                  Часто задаваемые вопросы
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-darkCard/50 border-y border-darkBorder">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="font-display font-semibold text-textPrimary leading-tight break-words" style={{ fontSize: "clamp(22px, 2.5vw, 32px)", letterSpacing: "-0.01em" }}>
                Кем ты можешь работать
              </h2>
              <ul className="mt-6 space-y-2">
                {prog.jobs.map((job) => (
                  <li key={slugify(job)} className="flex items-start gap-2 text-sm text-textSecondary">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brandOrange flex-shrink-0" />
                    {job}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display font-semibold text-textPrimary leading-tight break-words" style={{ fontSize: "clamp(22px, 2.5vw, 32px)", letterSpacing: "-0.01em" }}>
                Что ты изучишь
              </h2>
              <ul className="mt-6 space-y-2">
                {prog.skills.map((skill) => (
                  <li key={slugify(skill)} className="flex items-start gap-2 text-sm text-textSecondary">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brandOrange flex-shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-darkBg">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex flex-col items-center text-center">
            <h2 className="font-display font-semibold text-textPrimary leading-tight" style={{ fontSize: "clamp(26px, 3.2vw, 40px)", letterSpacing: "-0.01em" }}>
              FAQ: {prog.title}
            </h2>
          </div>
          <div className="mt-10 space-y-3">
            {prog.faq.map((item, i) => (
              <div key={i} className="group rounded-2xl border border-darkBorder bg-darkCard transition-all duration-300 hover:border-brandOrange/20">
                <details className="group p-5 md:p-6" open={i === 0}>
                  <summary className="cursor-pointer text-sm md:text-base font-semibold text-textPrimary pr-4 marker:text-brandOrange">{item.question}</summary>
                  <p className="mt-3 text-sm text-textSecondary leading-relaxed break-words">{item.answer}</p>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Поступи на ${prog.title}`}
        subtitle={`Узнай подробности о программе, требованиях к поступлению и старте обучения. Напиши нам в WhatsApp.`}
      />
    </>
  );
}
