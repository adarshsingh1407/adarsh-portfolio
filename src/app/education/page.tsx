"use client";

import { EducationSection } from "@/components/sections/EducationSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";

export default function EducationPage() {
  return (
    <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      <EducationSection />
      <div className="flex flex-col gap-4 md:gap-4">
        <CertificationsSection />
        <AchievementsSection />
      </div>
    </div>
  );
}
