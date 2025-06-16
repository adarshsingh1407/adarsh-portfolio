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
      className="h-9 w-9"
    >
      {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      <span className="sr-only">Toggle dark mode</span>
    </Button>
  );
}
