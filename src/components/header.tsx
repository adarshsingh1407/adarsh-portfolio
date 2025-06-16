"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { LanguageSelector } from "@/components/language-selector";
import { ElegantDarkModeToggle } from "@/components/elegant-dark-mode-toggle";
import { MobileNavigation } from "@/components/mobile-navigation";
import { SITE_CONFIG } from "@/lib/constants";

export function Header() {
  const t = useTranslations("header");

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/80 h-16">
        <div className="container mx-auto flex items-center justify-between px-4 h-full">
          <div className="flex items-center bg-[#0e2a4c] rounded-lg">
            <Link href="/" className="hover:opacity-80">
              <Image
                src={SITE_CONFIG.logo}
                alt={SITE_CONFIG.name}
                width={48}
                height={48}
              />
            </Link>
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2">
            <h1 className="text-lg md:text-xl font-bold leading-tight text-gray-900 dark:text-white whitespace-nowrap">
              {t("portfolioTitle")}
            </h1>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center space-x-4">
              <LanguageSelector />
              <ElegantDarkModeToggle />
            </div>

            <div className="md:hidden flex items-center gap-2">
              <ElegantDarkModeToggle />
              <MobileNavigation />
            </div>
          </div>
        </div>
      </header>

      <div className="hidden md:block sticky top-16 z-40 w-full bg-background/95 backdrop-blur-sm dark:bg-gray-900/95 border-b dark:border-gray-800">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center justify-center space-x-8">
            <Link
              href="/blogs"
              className="text-primary dark:text-primary-light text-sm font-medium hover:underline underline-offset-4 transition-colors"
            >
              {t("nav.blogs")}
            </Link>
            <Link
              href="/projects"
              className="text-primary dark:text-primary-light text-sm font-medium hover:underline underline-offset-4 transition-colors"
            >
              {t("nav.projects")}
            </Link>
            <Link
              href="/contributions"
              className="text-primary dark:text-primary-light text-sm font-medium hover:underline underline-offset-4 transition-colors"
            >
              {t("nav.contributions")}
            </Link>
            <Link
              href="/contact"
              className="text-primary dark:text-primary-light text-sm font-medium hover:underline underline-offset-4 transition-colors"
            >
              {t("nav.contact")}
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
