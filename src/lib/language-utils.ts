"use client";

export type Language = "en" | "es" | "ja";

export const LANGUAGES = [
  { code: "en" as const, name: "English", flag: "🇺🇸" },
  { code: "es" as const, name: "Español", flag: "🇪🇸" },
  { code: "ja" as const, name: "日本語", flag: "🇯🇵" },
];

// These functions are kept for backward compatibility
// but they now use the new preferences system internally
export function getLanguageFromCookie(): Language {
  if (typeof document === "undefined") return "en";

  const locale = localStorage.getItem("locale") as Language;
  if (locale && ["en", "es", "ja"].includes(locale)) {
    return locale;
  }

  const cookies = document.cookie.split(";");
  const localeCookie = cookies.find((cookie) =>
    cookie.trim().startsWith("locale=")
  );
  const cookieLocale = localeCookie?.split("=")[1] as Language;

  return cookieLocale && ["en", "es", "ja"].includes(cookieLocale)
    ? cookieLocale
    : "en";
}

export function setLanguageCookie(language: Language): void {
  if (typeof document === "undefined") return;

  // Set in localStorage
  localStorage.setItem("locale", language);

  // Set cookie for 1 year
  const expires = new Date();
  expires.setFullYear(expires.getFullYear() + 1);
  document.cookie = `locale=${language}; expires=${expires.toUTCString()}; path=/; SameSite=Lax`;
}
