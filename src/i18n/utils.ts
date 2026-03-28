import { ui, defaultLang, locales, htmlLang, langLabels } from "./ui";
import type { Lang, UIKeys } from "./ui";

export type { Lang };
export { locales, htmlLang, langLabels };

/** Return the locale from a URL pathname, falling back to defaultLang. */
export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split("/");
  if ((locales as readonly string[]).includes(first) && first !== defaultLang) {
    return first as Lang;
  }
  return defaultLang;
}

/** Translation lookup with en fallback for missing keys. */
export function useTranslations(lang: Lang) {
  return function t(key: UIKeys): string {
    return (
      (ui[lang] as Record<string, string>)[key] ??
      (ui[defaultLang] as Record<string, string>)[key] ??
      key
    );
  };
}

/** Build a page path prefixed with the locale (default locale has no prefix). */
export function localePath(lang: Lang, path: string): string {
  if (lang === defaultLang) return path;
  // Ensure path starts with /
  const p = path.startsWith("/") ? path : `/${path}`;
  return `/${lang}${p === "/" ? "" : p}`;
}

/**
 * Given the current pathname and current lang, return the equivalent path
 * for a target language.
 */
export function alternateUrl(pathname: string, targetLang: Lang): string {
  // Strip existing locale prefix to get the canonical path
  let base = pathname;
  for (const locale of locales) {
    if (locale === defaultLang) continue;
    if (base === `/${locale}`) { base = "/"; break; }
    if (base.startsWith(`/${locale}/`)) { base = base.slice(locale.length + 1); break; }
  }
  return localePath(targetLang, base || "/");
}
