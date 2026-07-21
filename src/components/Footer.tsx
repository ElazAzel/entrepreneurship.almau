"use client";
import { FOOTER_LINKS, FOOTER_CONTACTS, SOCIAL_LINKS, ALMAU_LINK } from "@/lib/constants";
import { useTheme } from "@/lib/ThemeProvider";

const socials = [
  { href: SOCIAL_LINKS.instagram, label: "Instagram", icon: <InstagramIcon /> },
  { href: SOCIAL_LINKS.facebook, label: "Facebook", icon: <FacebookIcon /> },
  { href: SOCIAL_LINKS.tiktok, label: "TikTok", icon: <TikTokIcon /> },
  { href: SOCIAL_LINKS.youtube, label: "YouTube", icon: <YouTubeIcon /> },
  { href: SOCIAL_LINKS.linkedin, label: "LinkedIn", icon: <LinkedInIcon /> },
  { href: SOCIAL_LINKS.linkm, label: "Linkm", icon: <LinkIcon /> },
];

export function Footer() {
  const { theme } = useTheme();
  const logoSrc = theme === "dark" ? "/logos/logotype-white.svg" : "/logos/logotype-blue.svg";

  return (
    <footer className="border-t border-darkBorder bg-darkCard/50">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <img src={logoSrc} alt="Institute for Entrepreneurship" className="h-8 w-auto mb-4" />
            <p className="text-sm text-textSecondary leading-relaxed max-w-xs break-words">
              Institute for Entrepreneurship AlmaU — сообщество предпринимателей, студентов и экспертов.
            </p>
            <a
              href={ALMAU_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-sm text-brandOrange hover:underline"
            >
              Основной сайт AlmaU
              <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
            </a>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-textPrimary mb-4">Навигация</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-textSecondary hover:text-textPrimary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-textPrimary mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm text-textSecondary">
              <li>{FOOTER_CONTACTS.address}</li>
              <li>
                <a href={`tel:${FOOTER_CONTACTS.phone}`} className="hover:text-textPrimary transition-colors">
                  {FOOTER_CONTACTS.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${FOOTER_CONTACTS.email}`} className="hover:text-textPrimary transition-colors">
                  {FOOTER_CONTACTS.email}
                </a>
              </li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-darkBorder text-textMuted hover:text-textPrimary hover:border-textMuted transition-all duration-200"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-darkBorder py-6">
        <div className="mx-auto max-w-7xl px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-textMuted">
            &copy; {new Date().getFullYear()} Institute for Entrepreneurship AlmaU. Все права защищены.
          </p>
          <p className="text-xs text-textMuted">
            Сайт разработан{" "}
            <a
              href="https://www.instagram.com/elazart/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brandOrange hover:underline"
            >
              ElazArt&trade;
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function InstagramIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect width="4" height="12" x="2" y="9"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
    </svg>
  );
}
