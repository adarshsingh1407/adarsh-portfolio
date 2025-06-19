"use client";

import { useTranslations } from "next-intl";
import { useDarkMode } from "@/contexts/dark-mode-context";
import { RESUME_DATA } from "@/lib/constants";
import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

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
      <div className="container mx-auto flex h-12 items-center justify-between px-4">
        {/* Copyright text on the left */}
        <p
          className={`text-sm transition-colors ${
            isDarkMode ? "text-gray-300" : "text-muted-foreground"
          }`}
        >
          {t("copyright", { year: currentYear })}
        </p>

        {/* Contact information on the right */}
        <div className="flex items-center gap-4">
          {/* Email - hidden on mobile, shown with icon on desktop */}
          <a
            href={`mailto:${RESUME_DATA.personal.contact.email.value}`}
            className={`hidden md:flex items-center gap-2 text-sm transition-colors hover:underline ${
              isDarkMode
                ? "text-gray-300 hover:text-white"
                : "text-muted-foreground hover:text-foreground"
            }`}
            title="Email"
          >
            <Mail className="w-4 h-4" />
            <span className="hidden lg:inline">
              {RESUME_DATA.personal.contact.email.label}
            </span>
          </a>

          {/* Phone - hidden on mobile, shown with icon on desktop */}
          <a
            href={`tel:${RESUME_DATA.personal.contact.phone.value}`}
            className={`hidden md:flex items-center gap-2 text-sm transition-colors hover:underline ${
              isDarkMode
                ? "text-gray-300 hover:text-white"
                : "text-muted-foreground hover:text-foreground"
            }`}
            title="Phone"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden lg:inline">
              {RESUME_DATA.personal.contact.phone.label}
            </span>
          </a>

          {/* Mobile contact buttons - shown only on mobile */}
          <div className="flex items-center gap-2 md:hidden">
            <Button
              asChild
              variant="outline"
              size="icon"
              className="rounded-full"
              title="Email"
            >
              <a href={`mailto:${RESUME_DATA.personal.contact.email.value}`}>
                <Mail className="w-4 h-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="icon"
              className="rounded-full"
              title="Phone"
            >
              <a href={`tel:${RESUME_DATA.personal.contact.phone.value}`}>
                <Phone className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
