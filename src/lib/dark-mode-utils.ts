"use client";

export function getDarkModeFromCookie(): boolean {
  if (typeof document === "undefined") return false;

  const cookies = document.cookie.split(";");
  const darkModeCookie = cookies.find((cookie) =>
    cookie.trim().startsWith("darkMode=")
  );
  const darkMode = darkModeCookie?.split("=")[1];

  return darkMode === "true";
}

export function setDarkModeCookie(isDarkMode: boolean): void {
  if (typeof document === "undefined") return;

  // Set cookie for 1 year
  const expires = new Date();
  expires.setFullYear(expires.getFullYear() + 1);

  document.cookie = `darkMode=${isDarkMode}; expires=${expires.toUTCString()}; path=/; SameSite=Lax`;
}
