"use client";

import { Moon, Sun } from "lucide-react";
import { useDarkMode } from "@/contexts/dark-mode-context";
import { Button } from "@/components/ui/button";

export function ElegantDarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleDarkMode}
      className="h-9 w-9 cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-md dark:hover:shadow-gray-700/50 hover:border-primary/50 dark:hover:border-primary-light/50"
      title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? (
        <Sun className="h-4 w-4 transition-transform duration-200 hover:rotate-12" />
      ) : (
        <Moon className="h-4 w-4 transition-transform duration-200 hover:rotate-12" />
      )}
      <span className="sr-only">Toggle dark mode</span>
    </Button>
  );
}
