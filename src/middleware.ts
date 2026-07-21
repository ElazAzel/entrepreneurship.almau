import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales, defaultLocale } from "@/lib/i18n";

const LOCALE_COOKIE = "NEXT_LOCALE";

function getNegotiatedLocale(acceptLanguage: string | null): string | null {
  if (!acceptLanguage) return null;
  const weights: { locale: string; weight: number }[] = acceptLanguage
    .split(",")
    .map((s) => {
      const parts = s.trim().split(";q=");
      const locale = parts[0].split("-")[0].toLowerCase();
      const weight = parts[1] ? parseFloat(parts[1]) : 1;
      return { locale, weight };
    })
    .sort((a, b) => b.weight - a.weight);
  for (const w of weights) {
    if ((locales as readonly string[]).includes(w.locale)) {
      return w.locale;
    }
  }
  return null;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathLocale = pathname.split("/").filter(Boolean)[0]?.toLowerCase();
  if ((locales as readonly string[]).includes(pathLocale)) {
    return NextResponse.next();
  }

  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  if (cookieLocale && (locales as readonly string[]).includes(cookieLocale)) {
    if (cookieLocale !== defaultLocale) {
      return NextResponse.redirect(new URL(`/${cookieLocale}${pathname}`, request.url));
    }
    return NextResponse.next();
  }

  const negotiated = getNegotiatedLocale(request.headers.get("Accept-Language"));
  if (negotiated && negotiated !== defaultLocale) {
    const response = NextResponse.redirect(new URL(`/${negotiated}${pathname}`, request.url));
    response.cookies.set(LOCALE_COOKIE, negotiated, { path: "/", maxAge: 60 * 60 * 24 * 30 });
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next|images|fonts|favicon|og-image|sitemap|robots).*)"],
};
