import { TopSkillsSection } from "./TopSkillsSection";
import { ConnectSection } from "./ConnectSection";
import { ProfileContent } from "./ProfileContent";
import { TechIconsContainer } from "./TechIconsContainer";

export function ProfileSection() {
  return (
    <div className="flex-1">
      <div className="flex flex-col md:flex-row gap-8">
        <ProfileContent />
        <TechIconsContainer />
      </div>
      <div className="flex">
        <TopSkillsSection />
      </div>
      <div className="flex relative">
        <ConnectSection />
      </div>
    </div>
  );
}
