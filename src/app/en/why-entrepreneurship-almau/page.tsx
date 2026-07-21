import type { Metadata } from "next";
import { SectionBadge } from "@/components/SectionBadge";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { WHATSAPP_LINK } from "@/lib/constants";

const siteUrl = "https://entrepreneurship-almau.vercel.app";

export const revalidate = 604800;

export const metadata: Metadata = {
  title: "Why the Institute for Entrepreneurship at AlmaU? | Business University in Almaty",
  description: "AlmaU — a business university in Almaty with its own Institute for Entrepreneurship. Discover what sets us apart: practice, startups, mentor entrepreneurs, internships, and international programs.",
  alternates: {
    canonical: "/en/why-entrepreneurship-almau",
    languages: { ru: "/why-entrepreneurship-almau", kk: "/kk/why-entrepreneurship-almau", en: "/en/why-entrepreneurship-almau" },
  },
  openGraph: {
    title: "Business and Entrepreneurship University — Why AlmaU?",
    description: "Almaty's only university with a dedicated Institute for Entrepreneurship. International Business, Digital Commerce, BAE — practice, startups, internships.",
    url: `${siteUrl}/en/why-entrepreneurship-almau`,
  },
};

const whyFaq = [
  {
    question: "How is the Institute for Entrepreneurship at AlmaU different from other universities?",
    answer: "The key difference is Learning-by-doing: students work on real projects, launch startups, participate in business cases and pitch sessions from the very first year. Instructors are practicing entrepreneurs and industry experts.",
  },
  {
    question: "Why should I choose AlmaU for business education?",
    answer: "AlmaU is one of the few universities in Kazakhstan with a dedicated Institute for Entrepreneurship. Students gain not theory, but practical skills: launching startups, working with business models, project management, and networking with entrepreneurs.",
  },
  {
    question: "What startup opportunities does AlmaU provide?",
    answer: "Students participate in StartUp Night, Crack IT, Rocket Pitch, and Big Ideas Camp. They work in a startup incubator, receive mentorship from entrepreneurs, and get access to investors. Many projects grow into full-fledged businesses.",
  },
  {
    question: "Are there internships during studies?",
    answer: "Yes, students intern at CMC, ERG, MOST Ventures, KUSTO Group, ChocoFamily, Salem Social Media, and other companies. Many internships lead to full-time offers.",
  },
  {
    question: "What international opportunities are available?",
    answer: "The International Business program includes internships at Babson College (USA), Bangkok University (Thailand), and EAE Business School (Spain). International exchanges and joint projects are also available.",
  },
  {
    question: "Does AlmaU help with job placement?",
    answer: "Yes, the AlmaU career center helps students and graduates find internships and jobs, build resumes, and prepare for interviews. Employers directly reach out to the university for graduates.",
  },
  {
    question: "Can I combine study with work?",
    answer: "Yes, the programs are designed to provide maximum practical experience and flexibility for working. Many students are already employed or running their own projects by year 2–3.",
  },
  {
    question: "What programs does the Institute for Entrepreneurship offer?",
    answer: "Three bachelor's programs: International Business (English), Digital Commerce (Russian), BAE (Russian and English). One Master's program: Management in Creative Industries.",
  },
];

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Why AlmaU", item: `${siteUrl}/en/why-entrepreneurship-almau` },
  ],
};

const criteria = [
  { criterion: "Practice", value: "Projects, business cases, and teamwork from the first year" },
  { criterion: "Entrepreneurship focus", value: "Opportunity to develop your own project and launch a startup" },
  { criterion: "Mentors", value: "Work with active entrepreneurs and industry experts" },
  { criterion: "Networking", value: "Community of students, alumni, and Institute partners" },
  { criterion: "Career preparation", value: "Training for management and product roles, internships" },
  { criterion: "Events", value: "Pitch sessions, hackathons, championships, and acceleration programs" },
  { criterion: "Location (Almaty)", value: "Study in Almaty — the business hub of Kazakhstan" },
  { criterion: "UNT subjects (Math + Geography)", value: "Math and Geography for all bachelor's programs" },
];

export default function WhyAlmaUPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: whyFaq.map((item) => ({
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
                Why the Institute for Entrepreneurship at AlmaU?
              </h1>
              <p className="mt-4 max-w-2xl mx-auto text-sm md:text-base text-textSecondary leading-relaxed break-words">
                AlmaU — a business university in Almaty with its own Institute for Entrepreneurship. Programs in International Business, Digital Commerce, and BAE offer practical learning, startup launches, an entrepreneurial community, and career development from year one.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-brandOrange px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:brightness-110"
                >
                  Chat on WhatsApp
                </a>
                <a href="/en/admission"
                  className="inline-flex items-center gap-2 rounded-full border border-darkBorder px-7 py-3 text-sm font-semibold text-textSecondary transition-all duration-300 hover:bg-darkCard hover:text-textPrimary"
                >
                  How to apply
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-darkCard/50 border-y border-darkBorder">
        <div className="mx-auto max-w-5xl px-4">
          <div className="flex flex-col items-center text-center">
            <SectionBadge>Selection Criteria</SectionBadge>
            <h2 className="mt-4 font-display font-semibold text-textPrimary leading-tight" style={{ fontSize: "clamp(26px, 3.2vw, 40px)", letterSpacing: "-0.01em" }}>
              What the Institute for Entrepreneurship Offers
            </h2>
          </div>
          <div className="mt-10 overflow-hidden rounded-2xl border border-darkBorder bg-darkCard">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-darkBorder bg-darkCard">
                  <th className="px-6 py-4 text-left font-semibold text-textPrimary">Criteria</th>
                  <th className="px-6 py-4 text-left font-semibold text-textPrimary">What the Institute Offers</th>
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
            <SectionBadge>Programs</SectionBadge>
            <h2 className="mt-4 font-display font-semibold text-textPrimary leading-tight" style={{ fontSize: "clamp(26px, 3.2vw, 40px)", letterSpacing: "-0.01em" }}>
              Institute for Entrepreneurship Programs
            </h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 max-w-3xl mx-auto">
            {[
              { title: "International Business", href: "/en/programs/international-business", desc: "Global business education in English. International internships and global career." },
              { title: "Digital Commerce", href: "/en/programs/digital-commerce", desc: "E-commerce, marketplaces, digital marketing, and data analytics." },
              { title: "BAE", href: "/en/programs/bae", desc: "Entrepreneurship, startup launching, project management, and family business." },
              { title: "Creative Industries", href: "/en/programs/creative-industries", desc: "Master's program for managers and entrepreneurs in the creative economy." },
            ].map((prog) => (
              <a key={prog.title} href={prog.href}
                className="rounded-2xl border border-darkBorder bg-darkCard p-6 transition-all duration-300 hover:border-brandOrange/20 block"
              >
                <h3 className="font-display text-base font-semibold text-textPrimary">{prog.title}</h3>
                <p className="mt-2 text-sm text-textSecondary leading-relaxed">{prog.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brandOrange">
                  Learn more →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-darkCard/50 border-y border-darkBorder">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex flex-col items-center text-center">
            <SectionBadge>Facts</SectionBadge>
            <h2 className="mt-4 font-display font-semibold text-textPrimary leading-tight" style={{ fontSize: "clamp(26px, 3.2vw, 40px)", letterSpacing: "-0.01em" }}>
              Numbers and Facts
            </h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto">
            {[
              { value: "4+", label: "Programs" },
              { value: "15+", label: "Projects per year" },
              { value: "500+", label: "Students" },
              { value: "30+", label: "Partners" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-darkBorder bg-darkCard p-6 text-center">
                <span className="font-display text-3xl md:text-4xl font-bold text-brandOrange">{stat.value}</span>
                <p className="mt-2 text-sm text-textSecondary">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a href="/en/about/facts" className="text-sm text-brandOrange hover:underline">View all official information →</a>
          </div>
        </div>
      </section>

      <FAQSection items={whyFaq} title="FAQ: Why AlmaU" id="faq" />

      <CTASection
        title="Want to learn more?"
        subtitle="Contact us on WhatsApp — we will tell you about programs, admission, and the benefits of studying at AlmaU."
      />
    </>
  );
}
