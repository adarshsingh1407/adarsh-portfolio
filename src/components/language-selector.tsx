"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLocale } from "next-intl";
import { LANGUAGES, Language } from "@/lib/language-utils";
import { setLanguage } from "@/lib/preferences-utils";
import { useRouter } from "next/navigation";

export function LanguageSelector() {
  const currentLocale = useLocale() as Language;
  const router = useRouter();

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    router.refresh();
  };

  const currentLanguage = LANGUAGES.find((lang) => lang.code === currentLocale);

  return (
    <Select value={currentLocale} onValueChange={handleLanguageChange}>
      <SelectTrigger className="w-[140px]">
        <SelectValue>
          <div className="flex items-center gap-2">
            <span>{currentLanguage?.flag}</span>
            <span className="text-sm">{currentLanguage?.name}</span>
          </div>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {LANGUAGES.map((lang) => (
          <SelectItem key={lang.code} value={lang.code}>
            <div className="flex items-center gap-2">
              <span>{lang.flag}</span>
              <span>{lang.name}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
