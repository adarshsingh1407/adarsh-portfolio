"use client";

import { useDarkMode } from "@/contexts/dark-mode-context";
import { EducationSection } from "@/components/sections/EducationSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";

export default function EducationPage() {
  const { isDarkMode } = useDarkMode();

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <EducationSection />
        <div className="flex flex-col gap-4 md:gap-4">
          <CertificationsSection />
          <AchievementsSection />
        </div>
      </div>
      <div className="flex justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={
            isDarkMode
              ? "https://leetcard.jacoblin.cool/adarshsingh1407?theme=dark&font=roboto"
              : "https://leetcard.jacoblin.cool/adarshsingh1407?theme=light&font=roboto"
          }
          alt="LeetCode Stats"
          className="shadow-md w-1/2"
        />
      </div>
    </div>
  );
}
