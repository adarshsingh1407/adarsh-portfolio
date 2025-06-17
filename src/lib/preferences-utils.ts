import { Language } from "./language-utils";

// Helper to check if we're in browser environment
const isBrowser = typeof window !== "undefined";

// Get value from both localStorage and cookies
export function getPreference(key: string): string | null {
  if (!isBrowser) return null;

  // For locale, only use cookies
  if (key === "locale") {
    const cookies = document.cookie.split(";");
    const cookie = cookies.find((c) => c.trim().startsWith(`${key}=`));
    return cookie ? cookie.split("=")[1] : null;
  }

  // For other preferences, try localStorage first
  const localValue = localStorage.getItem(key);
  if (localValue) return localValue;

  // Fallback to cookies
  const cookies = document.cookie.split(";");
  const cookie = cookies.find((c) => c.trim().startsWith(`${key}=`));
  if (cookie) {
    const value = cookie.split("=")[1];
    // Update localStorage for future use
    localStorage.setItem(key, value);
    return value;
  }

  return null;
}

// Set value in both localStorage and cookies
export function setPreference(key: string, value: string): void {
  if (!isBrowser) return;

  // For locale, only use cookies
  if (key === "locale") {
    const expires = new Date();
    expires.setFullYear(expires.getFullYear() + 1);
    document.cookie = `${key}=${value}; expires=${expires.toUTCString()}; path=/; SameSite=Lax`;
    return;
  }

  // For other preferences, set in both localStorage and cookies
  localStorage.setItem(key, value);
  const expires = new Date();
  expires.setFullYear(expires.getFullYear() + 1);
  document.cookie = `${key}=${value}; expires=${expires.toUTCString()}; path=/; SameSite=Lax`;
}

// Language specific functions
export function getLanguage(): Language {
  return (getPreference("locale") as Language) || "en";
}

export function setLanguage(language: Language): void {
  setPreference("locale", language);
}

// Dark mode specific functions
export function getDarkMode(): boolean {
  const value = getPreference("darkMode");
  return value === "true";
}

export function setDarkMode(isDarkMode: boolean): void {
  setPreference("darkMode", isDarkMode.toString());
}
