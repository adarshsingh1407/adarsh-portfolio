"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { LanguageSelector } from "@/components/language-selector";

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("header");

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  return (
    <>
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 w-9 h-9 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors text-gray-700 dark:text-gray-300"
        aria-label="Toggle navigation menu"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {isOpen && (
        <>
          <div className="fixed top-16 left-0 right-0 bg-white dark:bg-gray-900 border-b dark:border-gray-800 shadow-lg z-50 md:hidden">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <div className="space-y-2 border-b dark:border-gray-800 pb-4">
                <Link
                  href="/"
                  className="block py-2 px-3 text-primary dark:text-primary-light text-sm font-medium hover:underline underline-offset-4 rounded-lg transition-colors"
                  onClick={closeMenu}
                >
                  {t("nav.home")}
                </Link>
                <Link
                  href="/blogs"
                  className="block py-2 px-3 text-primary dark:text-primary-light text-sm font-medium hover:underline underline-offset-4 rounded-lg transition-colors"
                  onClick={closeMenu}
                >
                  {t("nav.blogs")}
                </Link>
                <Link
                  href="/projects"
                  className="block py-2 px-3 text-primary dark:text-primary-light text-sm font-medium hover:underline underline-offset-4 rounded-lg transition-colors"
                  onClick={closeMenu}
                >
                  {t("nav.projects")}
                </Link>
                <Link
                  href="/contributions"
                  className="block py-2 px-3 text-primary dark:text-primary-light text-sm font-medium hover:underline underline-offset-4 rounded-lg transition-colors"
                  onClick={closeMenu}
                >
                  {t("nav.contributions")}
                </Link>
                <Link
                  href="/contact"
                  className="block py-2 px-3 text-primary dark:text-primary-light text-sm font-medium hover:underline underline-offset-4 rounded-lg transition-colors"
                  onClick={closeMenu}
                >
                  {t("nav.contact")}
                </Link>
              </div>

              <div>
                <label className="sr-only">Language</label>
                <LanguageSelector />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
