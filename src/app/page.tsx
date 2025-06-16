"use client";

import { ProfileSection } from "@/components/sections/ProfileSection";
import { WorkExperienceSection } from "@/components/sections/WorkExperienceSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-10">
      <ProfileSection />
      <CertificationsSection />
      <WorkExperienceSection />
      <EducationSection />
      <AchievementsSection />
    </div>
  );
}
