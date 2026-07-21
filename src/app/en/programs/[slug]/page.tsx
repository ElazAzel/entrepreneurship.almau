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

const PROGRAMS_EN: Record<string, ProgramEntry> = {
  "international-business": {
    title: "International Business",
    description: "International Business bachelor at AlmaU in Almaty, fully in English. UNT subjects: Math + Geography. Global internships, career in international companies.",
    slug: "international-business",
    longDescription: "The International Business program prepares experts with global thinking, understanding of international management strategies, cross-cultural communication and negotiation skills. Students study international finance, strategic management, cross-cultural marketing and global logistics with a focus on practical projects and internships.",
    duration: "3 years",
    language: "English",
    format: "Full-time, bachelor",
    jobs: [
      "International Business Development Manager",
      "International Market Consultant",
      "Foreign Economic Activity Analyst",
      "Investment Analyst",
      "Export/Import Manager",
      "Business Consultant",
      "International Project Specialist",
    ],
    skills: [
      "International business and market entry strategies",
      "Cross-cultural communication and negotiation",
      "Financial analysis and international investment",
      "Global supply chain management",
      "Digital business transformation",
    ],
    faq: [
      { question: "What language is International Business taught in?", answer: "Entirely in English. IELTS from 5.5 or TOEFL is required for admission." },
      { question: "What UNT subjects are needed for International Business?", answer: "The required UNT subject combination is Math + Geography." },
      { question: "Where can I work after International Business?", answer: "Graduates work in international companies, consulting, audit, investment, banking and startups. Roles: trade manager, business analyst, consultant, investment analyst." },
      { question: "Are there international internships?", answer: "Yes, the program includes internships at Babson College (USA), Bangkok University (Thailand), EAE Business School (Spain) and Kazakh international companies." },
      { question: "How long is the program?", answer: "3 years of full-time study." },
      { question: "What tracks are available?", answer: "Tracks: International Business Financing and International Business Strategy & Management." },
      { question: "Is English required for admission?", answer: "Yes. IELTS from 5.5 or TOEFL is required. Instruction is entirely in English." },
      { question: "What is the salary for graduates?", answer: "Starting salary ranges from 300,000 to 600,000 tenge. With experience, significantly higher, especially in international corporations." },
    ],
  },
  "digital-commerce": {
    title: "Digital Commerce",
    description: "Digital Commerce bachelor at AlmaU in Almaty. E-commerce, marketplaces, digital marketing and data analytics. UNT subjects: Math + Geography.",
    slug: "digital-commerce",
    longDescription: "Digital Commerce is a modern program combining e-commerce, marketplaces, digital marketing, data analytics, AI in business, logistics and customer experience. Students learn to manage digital sales channels, analyze consumer behavior, optimize conversion and launch digital startups.",
    duration: "3 years",
    language: "Russian",
    format: "Full-time, bachelor",
    jobs: [
      "E-commerce Manager",
      "Marketplace Development Manager",
      "Digital Product Manager",
      "Digital Marketing Manager",
      "E-commerce Analyst",
      "CRM Manager",
      "CX Manager",
      "Digital Transformation Specialist",
      "E-commerce Director",
      "Digital Business Founder",
    ],
    skills: [
      "E-commerce and marketplace management",
      "Digital marketing and analytics",
      "Data-driven decision making",
      "CRM and customer experience (CX)",
      "Artificial intelligence in business",
      "Digital product management",
    ],
    faq: [
      { question: "What language is Digital Commerce taught in?", answer: "Instruction is in Russian." },
      { question: "What UNT subjects are needed?", answer: "The required UNT subject combination is Math + Geography." },
      { question: "What can I do after Digital Commerce?", answer: "Graduates work as e-commerce managers, product managers, digital marketers, CRM specialists, analysts and digital business founders." },
      { question: "What is studied in the program?", answer: "Students study e-commerce, marketplaces, digital marketing, data analytics, AI in business, logistics, customer experience and digital product management." },
      { question: "How long is the program?", answer: "3 years of full-time study." },
      { question: "What tracks are available?", answer: "Tracks: Digital Commerce & Retail Strategy and Platform Innovation & Digital Venture." },
      { question: "What is the salary for graduates?", answer: "Starting salary: 250,000–500,000 tenge. E-commerce specialists are in high demand with rapidly growing salaries." },
    ],
  },
  "bae": {
    title: "Business Administration in Entrepreneurship (BAE)",
    description: "BAE at AlmaU — business administration bachelor in Almaty with focus on entrepreneurship. UNT subjects: Math + Geography. Startups, project management, family business.",
    slug: "bae",
    longDescription: "BAE (Business Administration in Entrepreneurship) is a program that builds entrepreneurial thinking and a growth mindset. Students learn to launch startups, manage projects, grow family businesses and create market value. The program combines business administration, entrepreneurship, product management and project management.",
    duration: "3 years",
    language: "Russian and English",
    format: "Full-time, bachelor",
    jobs: [
      "Business Founder and CEO",
      "Family Business Owner",
      "Product Manager",
      "Project Manager",
      "Business Development Expert",
      "Financial Analyst",
      "Top Manager",
      "Innovation Entrepreneur",
    ],
    skills: [
      "Entrepreneurial thinking and startup launch",
      "Project and product management",
      "Business planning and strategy",
      "Family business management",
      "Financial literacy and analytics",
      "Leadership and team management",
    ],
    faq: [
      { question: "What is BAE at AlmaU?", answer: "BAE (Business Administration in Entrepreneurship) is a business administration bachelor with a focus on entrepreneurship. Students learn to launch and manage a business from year one." },
      { question: "What language is BAE taught in?", answer: "In Russian and English." },
      { question: "What UNT subjects are needed for BAE?", answer: "The required UNT subject combination is Math + Geography." },
      { question: "What can I do after BAE?", answer: "Graduates become business founders, product managers, project managers, family business owners, top managers and innovation entrepreneurs." },
      { question: "What tracks are available?", answer: "Tracks: Family Business and Product & Project Management." },
      { question: "Is BAE suitable for family business?", answer: "Yes, the program has a dedicated Family Business track that prepares students to manage and grow family companies." },
      { question: "Can I apply without business experience?", answer: "Yes, the program is designed for applicants without experience. Motivation and desire to develop entrepreneurial thinking are what matter most." },
    ],
  },
  "creative-industries": {
    title: "Creative Industries Management",
    description: "Master's program at AlmaU — Creative Industries Management in Almaty. For cultural project managers, producers and entrepreneurs in the creative economy. MA in Business and Management degree.",
    slug: "creative-industries",
    longDescription: "The master's program combines management competencies with expertise in creative industries. It prepares professionals with creative thinking, project skills and an entrepreneurial approach. Students study cultural business, creative entrepreneurship, cultural project management and producing.",
    duration: "2 years",
    language: "Russian",
    format: "Full-time, master",
    jobs: [
      "Creative Industries Project Manager",
      "Creative Business Founder",
      "Cultural Project Producer",
      "Cultural Institution Manager",
      "Business Strategist in Creative Economy",
      "Creative Cluster Development Expert",
      "Creative Industries Consultant",
    ],
    skills: [
      "Creative project and team management",
      "Cultural entrepreneurship",
      "Event and project producing",
      "Strategic development of creative clusters",
      "Arts and culture management",
    ],
    faq: [
      { question: "What degree do graduates receive?", answer: "Graduates receive an MA in Business and Management 'Creative Industries Management'." },
      { question: "How long is the program?", answer: "2 years of full-time study." },
      { question: "What language is it taught in?", answer: "In Russian." },
      { question: "What can I do after graduation?", answer: "Graduates work as project managers in creative industries, producers, cultural institution managers, creative business founders." },
      { question: "What are the program's advantages?", answer: "Modular system, internationally experienced faculty, real cases and projects, AlmaU partner network, international internship opportunities." },
      { question: "What tracks are available?", answer: "Tracks: Cultural Business & Cultural Entrepreneurship and Creative Industries." },
      { question: "Do I need a specialized bachelor degree?", answer: "No, the master's program is open to graduates of any field. Admission is by interview." },
    ],
  },
};

const slugs = Object.keys(PROGRAMS_EN);

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
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

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const prog = PROGRAMS_EN[slug];
  if (!prog) return {};
  return {
    title: prog.title + " | Institute for Entrepreneurship AlmaU",
    description: prog.description,
    alternates: {
      canonical: `/en/programs/${slug}`,
      languages: { ru: `/programs/${slug}`, kk: `/kk/programs/${slug}`, en: `/en/programs/${slug}` },
    },
    openGraph: { title: prog.title, description: prog.description, url: `${siteUrl}/en/programs/${slug}` },
  };
}

export default async function EnProgramPage({ params }: Props) {
  const { slug } = await params;
  const prog = PROGRAMS_EN[slug];
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
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl + "/en" },
          { "@type": "ListItem", position: 2, name: prog.title, item: `${siteUrl}/en/programs/${slug}` },
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
                <span>Duration: <strong className="text-textPrimary">{prog.duration}</strong></span>
                <span>Language: <strong className="text-textPrimary">{prog.language}</strong></span>
              </div>
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

      <section className="py-20 md:py-28 bg-darkCard/50 border-y border-darkBorder">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="font-display text-lg font-semibold text-textPrimary">Career paths</h2>
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
              <h2 className="font-display text-lg font-semibold text-textPrimary">Key skills</h2>
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
          <h2 className="font-display text-lg font-semibold text-textPrimary text-center">Frequently asked questions</h2>
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
