"use client";
import { FOOTER_LINKS, FOOTER_CONTACTS, INSTAGRAM_LINK, WHATSAPP_LINK } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-darkBorder bg-darkCard/50">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <img
              src="/logos/logotype-white.svg"
              alt="Institute for Entrepreneurship"
              className="h-8 w-auto mb-4"
            />
            <p className="text-sm text-textSecondary leading-relaxed max-w-xs">
              Institute for Entrepreneurship AlmaU — сообщество предпринимателей, студентов и экспертов.
            </p>
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
              <li className="pt-2">
                <a
                  href={INSTAGRAM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-textSecondary hover:text-textPrimary transition-colors"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  Instagram
                </a>
              </li>
            </ul>
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
