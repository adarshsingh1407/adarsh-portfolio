"use client";

import { Moon, Sun } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useTranslations } from "next-intl";
import { useDarkMode } from "@/contexts/dark-mode-context";

interface DarkModeToggleProps {
  showLabel?: boolean;
}

export function DarkModeToggle({ showLabel = true }: DarkModeToggleProps) {
  const t = useTranslations("header");
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="flex items-center">
      {showLabel && (
        <span className="text-sm font-medium hidden md:block mr-2">
          {t("darkMode")}
        </span>
      )}
      <div className="flex items-center space-x-1">
        {!showLabel && (
          <div className="p-1">
            {isDarkMode ? (
              <Moon className="h-4 w-4" />
            ) : (
              <Sun className="h-4 w-4" />
            )}
          </div>
        )}
        <Switch checked={isDarkMode} onCheckedChange={toggleDarkMode} />
      </div>
    </div>
  );
}
