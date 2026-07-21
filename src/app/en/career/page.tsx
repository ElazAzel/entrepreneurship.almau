import { SectionBadge } from "@/components/SectionBadge";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { WHATSAPP_LINK } from "@/lib/constants";
import type { Metadata } from "next";

export const revalidate = 604800;

export const metadata: Metadata = {
  title: "Career After AlmaU: Where Graduates Work",
  description:
    "Discover career tracks, internships, and employment opportunities for graduates of the Institute for Entrepreneurship at AlmaU. International Business, Digital Commerce, BAE, Creative Industries.",
  alternates: {
    canonical: "/en/career",
    languages: { ru: "/career", kk: "/kk/career", en: "/en/career" },
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://entrepreneurship-almau.vercel.app" },
    { "@type": "ListItem", position: 2, name: "Career", item: "https://entrepreneurship-almau.vercel.app/en/career" },
  ],
};

const programs = [
  {
    id: "international-business",
    title: "International Business",
    description:
      "Global business education in English. International internships and global career opportunities.",
    careers: [
      "International business consultant",
      "Export manager",
      "Business development manager",
      "Strategy analyst",
    ],
  },
  {
    id: "digital-commerce",
    title: "Digital Commerce",
    description:
      "E-commerce, marketplaces, digital marketing, and data analytics.",
    careers: [
      "E-commerce manager",
      "Digital marketing specialist",
      "Marketplace analyst",
      "Product manager",
    ],
  },
  {
    id: "bae",
    title: "Business Administration in Entrepreneurship (BAE)",
    description:
      "Entrepreneurship, startup launching, project management, and family business.",
    careers: [
      "Startup founder",
      "Project manager",
      "Business consultant",
      "Family business successor",
    ],
  },
  {
    id: "creative-industries",
    title: "Creative Industries",
    description:
      "Master's program for managers and entrepreneurs in the creative economy.",
    careers: [
      "Creative producer",
      "Cultural project manager",
      "Event director",
      "Media manager",
    ],
  },
];

const careerFaq = [
  {
    question: "Where do students go for internships?",
    answer: "Students intern at CMC, ERG, MOST Ventures, KUSTO Group, ChocoFamily, Salem Social Media, and other leading companies. Many internships turn into full-time job offers.",
  },
  {
    question: "Does the university provide career support?",
    answer: "Yes, AlmaU has a career center that helps students and graduates with job placement, resume writing, and interview preparation. Employers regularly reach out to the university for graduates.",
  },
  {
    question: "Can I start my own business while studying?",
    answer: "Absolutely. Our Learning-by-doing approach encourages students to work on real projects and launch startups from the first year. Many students run their own businesses by year 2–3.",
  },
  {
    question: "Are there alumni success stories?",
    answer: "Yes, our graduates have received offers from Google, Salem Social Media, BTS Digital, and ChocoFamily. Many have launched successful startups and social projects in Kazakhstan and beyond.",
  },
  {
    question: "What is the typical salary for graduates?",
    answer: "Starting salaries for business graduates in Kazakhstan range from 250,000 to 500,000 KZT. With experience, especially in international companies, earnings grow significantly.",
  },
];

export default function CareerPage() {
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
                Career Paths After AlmaU: Where Graduates Work
              </h1>
              <p className="mt-4 max-w-2xl text-sm md:text-base text-textSecondary leading-relaxed break-words">
                Graduates of the Institute for Entrepreneurship at AlmaU build careers in international companies,
                launch their own startups, and take leadership positions in leading businesses
                across Kazakhstan and the world.
              </p>
              <div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-center gap-2 md:gap-3">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brandOrange px-6 py-2.5 md:px-7 md:py-3 text-sm font-semibold text-white transition-all duration-300 hover:brightness-110"
                >
                  Explore career opportunities
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <SectionBadge>Career Tracks</SectionBadge>
            <h2
              className="mt-4 font-display font-semibold text-textPrimary leading-tight"
              style={{ fontSize: "clamp(26px, 3.2vw, 40px)", letterSpacing: "-0.01em" }}
            >
              Career Tracks by Program
            </h2>
            <p className="mt-3 max-w-lg text-sm text-textSecondary leading-relaxed break-words">
              Each program opens up its own career opportunities
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
            {programs.map((program) => (
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
                  Possible career paths
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
            <SectionBadge>Partners</SectionBadge>
            <h2
              className="mt-4 font-display font-semibold text-textPrimary leading-tight"
              style={{ fontSize: "clamp(26px, 3.2vw, 40px)", letterSpacing: "-0.01em" }}
            >
              Where Internships Take Place
            </h2>
            <p className="mt-3 max-w-lg text-sm text-textSecondary leading-relaxed break-words">
              Students gain practical experience at leading Kazakh and international companies
            </p>
          </div>
          <div className="mt-8 space-y-6">
            {[
              { label: "Strategic Partners", items: ["CMC", "ERG", "MOST Ventures", "KUSTO Group"] },
              { label: "Case Companies", items: ["ChocoFamily", "Salem Social Media", "BTS Digital", "Kolesa"] },
              { label: "Event Partners", items: ["StartUp Night", "Crack IT", "Rocket Pitch", "Big Ideas Camp"] },
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

      <FAQSection items={careerFaq} title="FAQ: Career and Employment" id="faq" />

      <CTASection
        title="Ready to build your career?"
        subtitle="Contact us to learn about career opportunities and how AlmaU can help you succeed."
      />
    </>
  );
}
