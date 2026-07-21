export const locales = ["ru", "kk", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "ru";

export function getLocaleFromPath(pathname: string): Locale {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length > 0 && (locales as readonly string[]).includes(segments[0])) {
    return segments[0] as Locale;
  }
  return defaultLocale;
}

export function stripLocale(pathname: string): string {
  const locale = getLocaleFromPath(pathname);
  if (locale === defaultLocale) return pathname;
  return pathname.replace(`/${locale}`, "") || "/";
}

export function getLocalizedPath(pathname: string, targetLocale: Locale): string {
  const base = stripLocale(pathname);
  if (targetLocale === defaultLocale) return base;
  return `/${targetLocale}${base}`;
}
