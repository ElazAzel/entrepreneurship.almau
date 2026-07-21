import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { FloatingWhatsAppButton } from "@/components/FloatingWhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["cyrillic", "latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const siteTitle =
  "Институт предпринимательства AlmaU — бакалавриат и магистратура для будущих предпринимателей";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
    >
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-dvh flex flex-col bg-bgLight text-deepBlue font-sans overflow-x-hidden">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-orange focus:text-white focus:rounded-lg"
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
