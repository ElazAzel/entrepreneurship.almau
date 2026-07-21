import { Partners } from "@/components/Partners";
import { FinalCTA } from "@/components/FinalCTA";
import { SectionBadge } from "@/components/SectionBadge";
import { WHATSAPP_LINK } from "@/lib/constants";
import type { Metadata } from "next";

export const revalidate = 604800;

export const metadata: Metadata = {
  title: "Institute for Entrepreneurship AlmaU — Almaty, Kazakhstan",
  description:
    "AlmaU — Almaty university with International Business, Digital Commerce, BAE bachelor programs and Creative Industries master. Entrepreneurship education, startup ecosystem, business projects, global internships.",
  alternates: {
    canonical: "/en",
    languages: { ru: "/", kk: "/kk", en: "/en" },
  },
  openGraph: {
    title: "Institute for Entrepreneurship AlmaU",
    description: "Build your business, projects and career at AlmaU. Entrepreneurship education in Almaty, Kazakhstan.",
    url: "https://entrepreneurship-almau.vercel.app/en",
  },
};

const siteUrl = "https://entrepreneurship-almau.vercel.app";

const enProgramsJsonLd = [
  { title: "International Business", level: "Bachelor's degree", desc: "Global business, international markets, consulting" },
  { title: "Digital Commerce", level: "Bachelor's degree", desc: "E-commerce, marketplaces, digital marketing" },
  { title: "BAE", level: "Bachelor's degree", desc: "Entrepreneurship, startups, family business" },
  { title: "Creative Industries", level: "Master's degree", desc: "Cultural business, producing, creative economy" },
];

const enCourseJsonLd = {
  "@context": "https://schema.org",
  "@graph": enProgramsJsonLd.map((p) => ({
    "@type": "Course",
    name: p.title,
    description: p.desc,
    educationalLevel: p.level,
    offers: { "@type": "Offer", category: "Tuition" },
    provider: { "@type": "EducationalOrganization", name: "Institute for Entrepreneurship AlmaU", sameAs: siteUrl },
  })),
};

const enFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What programs does the Institute offer?",
      acceptedAnswer: { "@type": "Answer", text: "We offer 3 bachelor programs — International Business, Digital Commerce, Business Administration in Entrepreneurship (BAE) — and 1 master program in Creative Industries Management. All programs are practice-oriented." },
    },
    {
      "@type": "Question",
      name: "How to apply?",
      acceptedAnswer: { "@type": "Answer", text: "Submit your application through the AlmaU admissions office, provide your UNT (ENT) scores or international exam results (SAT, IELTS/TOEFL), and pass an interview." },
    },
    {
      "@type": "Question",
      name: "Are there scholarships?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. AlmaU offers state grants, internal university scholarships for talented applicants, early admission discounts, and educational loans." },
    },
    {
      "@type": "Question",
      name: "What language are programs taught in?",
      acceptedAnswer: { "@type": "Answer", text: "International Business is fully in English. BAE is in Russian and English. Digital Commerce and the master program are in Russian." },
    },
    {
      "@type": "Question",
      name: "What internship and career opportunities exist?",
      acceptedAnswer: { "@type": "Answer", text: "Students intern at CMC, ERG, MOST Ventures, KUSTO Group, Kazakhyuvelir and others. Graduates receive offers from Google, Salem Social Media, BTS Digital." },
    },
  ],
};

export default function EnHome() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(enCourseJsonLd).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(enFaqJsonLd).replace(/</g, "\\u003c") }}
      />
      {/* Hero */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 bg-darkBg overflow-hidden">
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-2xl md:rounded-3xl border border-darkBorder bg-darkCard/80 backdrop-blur-sm overflow-hidden">
            <div className="p-6 md:p-14 md:max-w-2xl">
              <h1 className="font-display font-bold text-textPrimary leading-tight" style={{ fontSize: "clamp(28px, 4vw, 52px)", letterSpacing: "-0.02em" }}>
                Build your business, projects and career of the future at AlmaU
              </h1>
              <p className="mt-4 text-sm md:text-base text-textSecondary leading-relaxed">
                Institute for Entrepreneurship AlmaU — a community where you learn through action, launch projects, and build your career from year one. Choose from International Business, Digital Commerce, BAE, and Creative Industries.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-brandOrange px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:brightness-110"
                >
                  Chat on WhatsApp
                </a>
                <a href="/en/admission"
                  className="inline-flex items-center gap-2 rounded-full border border-darkBorder px-6 py-3 text-sm font-semibold text-textSecondary transition-all duration-300 hover:bg-darkCard hover:text-textPrimary"
                >
                  How to apply
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-24 md:py-32 bg-darkBg overflow-hidden">
        <div className="mx-auto max-w-5xl px-4">
          <div className="flex flex-col items-center text-center">
            <SectionBadge>About</SectionBadge>
            <h2 className="mt-4 font-display font-semibold text-textPrimary leading-tight" style={{ fontSize: "clamp(26px, 3.2vw, 40px)", letterSpacing: "-0.01em" }}>
              We teach you to see opportunities where others see problems
            </h2>
          </div>
          <p className="mt-6 max-w-3xl mx-auto text-sm md:text-base text-textSecondary leading-relaxed text-center">
            Institute for Entrepreneurship AlmaU is a community of innovative entrepreneurs where students learn to turn ideas into action, launch projects, develop business thinking, and create value for the market.
          </p>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24 md:py-32 bg-darkCard/50 border-y border-darkBorder">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col items-center text-center">
            <SectionBadge>Why Us</SectionBadge>
            <h2 className="mt-4 font-display font-semibold text-textPrimary leading-tight" style={{ fontSize: "clamp(26px, 3.2vw, 40px)", letterSpacing: "-0.01em" }}>
              6 reasons to choose the Institute for Entrepreneurship
            </h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {[
              { title: "Practitioner teachers", text: "Real entrepreneurs, business founders, company owners, and industry managers." },
              { title: "Learning-by-doing", text: "Projects, case studies, business breakfasts, company visits, startups, real-world tasks." },
              { title: "Learning-by-creating-value", text: "Education centered on creating value: products, services, startups, social projects." },
              { title: "Career from year one", text: "Students work in businesses and launch their own projects while studying." },
              { title: "Strong entrepreneurial environment", text: "Surrounded by people ready to launch, try, fail, and grow." },
              { title: "International and practical focus", text: "Internships, global opportunities, partner projects." },
            ].map((item, i) => (
              <div key={item.title} className="rounded-2xl border border-darkBorder bg-darkCard p-5 transition-all duration-300 hover:border-brandOrange/20">
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-brandOrange/10 text-brandOrange font-bold text-sm">{i + 1}</div>
                <h3 className="font-display text-sm font-semibold text-textPrimary">{item.title}</h3>
                <p className="mt-1 text-xs text-textSecondary leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="py-24 md:py-32 bg-darkBg">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col items-center text-center">
            <SectionBadge>Programs</SectionBadge>
            <h2 className="mt-4 font-display font-semibold text-textPrimary leading-tight" style={{ fontSize: "clamp(26px, 3.2vw, 40px)", letterSpacing: "-0.01em" }}>
              Our programs
            </h2>
            <p className="mt-2 text-sm text-textSecondary">4 programs — 3 bachelor, 1 master — all with a practical focus</p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "International Business", link: "/en/programs/international-business", desc: "Global business, international markets, consulting" },
              { title: "Digital Commerce", link: "/en/programs/digital-commerce", desc: "E-commerce, marketplaces, digital marketing" },
              { title: "BAE", link: "/en/programs/bae", desc: "Entrepreneurship, startups, family business" },
              { title: "Creative Industries", link: "/en/programs/creative-industries", desc: "Cultural business, producing, creative economy" },
            ].map((p) => (
              <a key={p.title} href={p.link} className="rounded-2xl border border-darkBorder bg-darkCard p-6 transition-all duration-300 hover:border-brandOrange/20 block">
                <h3 className="font-display text-base font-semibold text-textPrimary">{p.title}</h3>
                <p className="mt-2 text-sm text-textSecondary leading-relaxed">{p.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brandOrange">Learn more →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 bg-darkCard/50 border-y border-darkBorder">
        <div className="mx-auto max-w-3xl px-4">
          <div className="flex flex-col items-center text-center">
            <SectionBadge>FAQ</SectionBadge>
            <h2 className="mt-4 font-display font-semibold text-textPrimary leading-tight" style={{ fontSize: "clamp(26px, 3.2vw, 40px)", letterSpacing: "-0.01em" }}>
              Frequently asked questions
            </h2>
          </div>
          <div className="mt-10 space-y-3">
            {[
              { q: "What programs does the Institute offer?", a: "We offer 3 bachelor programs — International Business, Digital Commerce, Business Administration in Entrepreneurship (BAE) — and 1 master program in Creative Industries Management. All programs are practice-oriented." },
              { q: "How to apply?", a: "Submit your application through the AlmaU admissions office, provide your UNT (ENT) scores or international exam results (SAT, IELTS/TOEFL), and pass an interview." },
              { q: "Are there scholarships?", a: "Yes. AlmaU offers state grants, internal university scholarships for talented applicants, early admission discounts, and educational loans." },
              { q: "What language are programs taught in?", a: "International Business is fully in English. BAE is in Russian and English. Digital Commerce and the master program are in Russian." },
              { q: "What internship and career opportunities exist?", a: "Students intern at CMC, ERG, MOST Ventures, KUSTO Group and others. Graduates receive offers from Google, Salem Social Media, BTS Digital." },
            ].map((item, i) => (
              <details key={i} className="group rounded-2xl border border-darkBorder bg-darkCard transition-all duration-300 hover:border-brandOrange/20">
                <summary className="flex cursor-pointer items-center justify-between p-5 md:p-6 text-sm md:text-base font-semibold text-textPrimary list-none">
                  {item.q}
                  <span className="text-brandOrange text-lg transition-transform duration-300 group-open:rotate-45">+</span>
                </summary>
                <div className="border-t border-darkBorder px-5 md:px-6 pb-5 md:pb-6">
                  <p className="mt-3 text-sm text-textSecondary">{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Partners />
      <FinalCTA />
    </>
  );
}
