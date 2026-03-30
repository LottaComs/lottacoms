import en from "./en";
import type { UIKeys } from "./en";
import ja from "./ja";
import vn from "./vn";

export const defaultLang = "en";
export const locales = ["en", "ja", "vn"] as const;
export type Lang = (typeof locales)[number];

export const langLabels: Record<Lang, string> = {
  en: "EN",
  ja: "日本語",
  vn: "Tiếng Việt",
};

// HTML lang attribute per locale (vn uses BCP 47 "vi")
export const htmlLang: Record<Lang, string> = {
  en: "en",
  ja: "ja",
  vn: "vi",
};

export const ui: Record<Lang, Partial<Record<UIKeys, string>>> = { en, ja, vn };
export type { UIKeys };
