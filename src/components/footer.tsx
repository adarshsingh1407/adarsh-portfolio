"use client";

import { useDarkMode } from "@/contexts/dark-mode-context";
import { RESUME_DATA } from "@/lib/constants";
import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
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
          © {currentYear} Adarsh Singh. All rights reserved.
        </p>

        {/* Contact information on the right */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            className="h-8 px-2 text-xs"
            asChild
          >
            <a
              href={`mailto:${RESUME_DATA.personal.contact.email.value}`}
              className="flex items-center gap-1"
            >
              <Mail className="h-3 w-3" />
              <span className="hidden sm:inline">Email</span>
            </a>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-8 px-2 text-xs"
            asChild
          >
            <a
              href={`tel:${RESUME_DATA.personal.contact.phone.value}`}
              className="flex items-center gap-1"
            >
              <Phone className="h-3 w-3" />
              <span className="hidden sm:inline">Phone</span>
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
