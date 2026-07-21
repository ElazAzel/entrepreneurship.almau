import type { Metadata } from "next";
import "./globals.css";
import { FloatingWhatsAppButton } from "@/components/FloatingWhatsAppButton";

const siteTitle = "Институт предпринимательства AlmaU — бакалавриат и магистратура для будущих предпринимателей";
const siteDescription =
  "Программы International Business, Digital Commerce, Business Administration in Entrepreneurship и Управление в креативных индустриях. Практическое обучение, стартапы, бизнес-кейсы и предпринимательское сообщество AlmaU.";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  keywords:
    "AlmaU, Институт предпринимательства, предпринимательство Алматы, бакалавриат AlmaU, магистратура AlmaU, International Business, Digital Commerce, Business Administration in Entrepreneurship, креативные индустрии, стартапы, бизнес образование Казахстан",
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Institute for Entrepreneurship AlmaU",
  description: siteDescription,
  url: "https://entrepreneurship-almau.vercel.app",
  telephone: "+77067066521",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Алматы",
    addressRegion: "Алматы",
    addressCountry: "KZ",
    streetAddress: "ул. Розыбакиева, 227",
  },
  offers: [
    { "@type": "Offer", name: "International Business (Бакалавриат)" },
    { "@type": "Offer", name: "Digital Commerce (Бакалавриат)" },
    { "@type": "Offer", name: "Business Administration in Entrepreneurship (Бакалавриат)" },
    { "@type": "Offer", name: "Управление в креативных индустриях (Магистратура)" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      </head>
      <body className="min-h-dvh flex flex-col bg-darkBg text-textPrimary font-sans overflow-x-hidden">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-brandOrange focus:text-white focus:rounded-lg"
        >
          Перейти к содержимому
        </a>
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
