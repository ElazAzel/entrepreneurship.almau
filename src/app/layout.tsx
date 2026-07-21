import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/lib/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsAppButton } from "@/components/FloatingWhatsAppButton";
import { CustomCursor } from "@/components/CustomCursor";

const siteTitle = "Институт предпринимательства AlmaU — бакалавриат и магистратура для будущих предпринимателей";
const siteDescription =
  "Программы International Business, Digital Commerce, Business Administration in Entrepreneurship и Управление в креативных индустриях. Практическое обучение, стартапы, бизнес-кейсы и предпринимательское сообщество AlmaU.";
const siteUrl = "https://entrepreneurship-almau.vercel.app";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  keywords:
    "AlmaU, Институт предпринимательства, предпринимательство Алматы, бакалавриат AlmaU, магистратура AlmaU, International Business, Digital Commerce, Business Administration in Entrepreneurship, креативные индустрии, стартапы, бизнес образование Казахстан",
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    url: siteUrl,
    siteName: "Institute for Entrepreneurship AlmaU",
    locale: "ru_KZ",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": `${siteUrl}/#organization`,
      name: "Institute for Entrepreneurship AlmaU",
      description: siteDescription,
      url: siteUrl,
      telephone: "+77067066521",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Алматы",
        addressRegion: "Алматы",
        addressCountry: "KZ",
        streetAddress: "ул. Розыбакиева, 227",
      },
      sameAs: [
        "https://www.instagram.com/entrepreneurship.almau/",
        "https://www.facebook.com/entrepreneurship.almau/",
        "https://www.tiktok.com/@entrepreneurship.almau",
        "https://www.youtube.com/@entrepreneurshipinnovation2846",
        "https://www.linkedin.com/company/institute-entrepreneurship-innovation/",
      ],
      offers: [
        { "@type": "Offer", name: "International Business (Бакалавриат)" },
        { "@type": "Offer", name: "Digital Commerce (Бакалавриат)" },
        { "@type": "Offer", name: "Business Administration in Entrepreneurship (Бакалавриат)" },
        { "@type": "Offer", name: "Управление в креативных индустриях (Магистратура)" },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Institute for Entrepreneurship AlmaU",
      description: siteDescription,
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "ru",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${siteUrl}/#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Главная", item: siteUrl },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="antialiased" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <script dangerouslySetInnerHTML={{
          __html: `(function(){var t;try{t=localStorage.getItem("theme")}catch(e){}var s=t==="light"||(!t&&matchMedia("(prefers-color-scheme:light)").matches);if(s)document.documentElement.classList.add("light")})()`
        }} />
      </head>
      <body className="min-h-dvh flex flex-col bg-darkBg text-textPrimary font-sans overflow-x-hidden">
        <div
          id="preloader"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#0f1117",
            transition: "opacity 0.4s ease, transform 0.4s ease",
          }}
        >
          <svg width="64" height="64" viewBox="0 0 2000 2000" fill="none" style={{ animation: "preloaderPulse 1.5s ease-in-out infinite" }}>
            <path fill="#eb601b" d="M959.95,730.55l728.77-283.58-99.29,138.56c-60.35,84.22-143.89,149.06-240.45,186.63l-567.6,220.86,43.3-122.8c22.58-64.04,71.98-115.05,135.26-139.67Z"/>
            <path fill="#eb601b" d="M621.04,813.43h0s-88.45,34.42-88.45,34.42c-99.22,38.61-211.89,1.57-268.86-88.37h0s215.16-83.72,215.16-83.72c86.76-33.76,173.11,49.88,142.15,137.67Z"/>
            <path fill="#eb601b" d="M1814.26,639.73l-99.29,138.55c-60.35,84.21-143.89,149.05-240.44,186.62l-144.15,56.09-176.56,68.7-471.18,183.32-252.81,98.37c-104.28,40.58-208.09-59.96-170.88-165.49l82.8-234.8,259.25-100.87-98.75,280.01,259.25-100.87,647.75-252.04,405-157.58Z"/>
            <polygon fill="#eb601b" points="1153.82 1089.69 682.63 1273.03 682.64 1273.01 1153.82 1089.69"/>
            <path fill="#eb601b" d="M1208.56,1116.98l-99.29,138.56c-60.35,84.21-143.89,149.06-240.45,186.63l-284.93,110.87,78.88-223.68,545.79-212.38Z"/>
          </svg>
          <p style={{ marginTop: 16, fontSize: 14, color: "rgba(255,255,255,0.5)", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Institute for Entrepreneurship
          </p>
        </div>
        <script dangerouslySetInnerHTML={{
          __html: `!function(){var p=document.getElementById("preloader");if(p){var h=function(){if(p){p.style.opacity="0";p.style.transform="scale(0.95)";setTimeout(function(){if(p)p.style.display="none"},400)}};var t=setTimeout(h,500);document.addEventListener("DOMContentLoaded",function(){clearTimeout(t);t=setTimeout(h,300)})}}()`
        }} />
        <CustomCursor />
        <ThemeProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-brandOrange focus:text-white focus:rounded-lg"
          >
            Перейти к содержимому
          </a>
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
          <FloatingWhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
