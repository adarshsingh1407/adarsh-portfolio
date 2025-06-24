"use client";

import { Moon, Sun } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useDarkMode } from "@/contexts/dark-mode-context";

interface DarkModeToggleProps {
  showLabel?: boolean;
}

export function DarkModeToggle({ showLabel = false }: DarkModeToggleProps) {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="flex items-center space-x-2">
      <Switch
        checked={isDarkMode}
        onCheckedChange={toggleDarkMode}
        className="data-[state=checked]:bg-gray-800"
      />
      {showLabel && (
        <span className="text-sm font-medium">
          {isDarkMode ? "Dark Mode" : "Light Mode"}
        </span>
      )}
      {isDarkMode ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
    </div>
  );
}
