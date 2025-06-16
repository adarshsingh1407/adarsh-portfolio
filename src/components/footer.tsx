"use client";

import { useTranslations } from "next-intl";
import { useDarkMode } from "@/contexts/dark-mode-context";

export function Footer() {
  const t = useTranslations("footer");
  const { isDarkMode } = useDarkMode();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`sticky bottom-0 z-50 w-full border-t backdrop-blur-sm transition-colors ${
        isDarkMode ? "bg-gray-900/90 border-gray-700" : "bg-background/80"
      }`}
    >
      <div className="container mx-auto flex h-12 items-center justify-center px-4">
        <p
          className={`text-sm transition-colors ${
            isDarkMode ? "text-gray-300" : "text-muted-foreground"
          }`}
        >
          {t("copyright", { year: currentYear })}
        </p>
      </div>
    </footer>
  );
}
