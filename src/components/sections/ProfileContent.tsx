import { CardTitle, CardDescription } from "@/components/ui/card";
import { RESUME_DATA } from "@/lib/constants";
import { FadeIn } from "@/components/animations";

export function ProfileContent() {
  return (
    <div id="profile-section" className="w-full mt-12 md:flex-[0.5]">
      <FadeIn direction="up" delay={0.1} duration={0.9}>
        <CardTitle className="text-3xl md:text-4xl font-bold mb-4">
          {RESUME_DATA.personal.name}
        </CardTitle>
        <CardDescription className="text-xl md:text-2xl ">
          {RESUME_DATA.personal.title}
        </CardDescription>
      </FadeIn>

      <FadeIn direction="up" delay={0.4} duration={0.9}>
        <div className="mb-4">
          <p className="text-base sm:text-xl text-muted-foreground leading-relaxed mt-6">
            Looking for a reliable developer to bring your idea to life?
            <br />
            You&apos;re in the right place.
          </p>
          <p className="text-base sm:text-xl text-muted-foreground leading-relaxed mt-4">
            With over
            <span className="font-semibold text-foreground pl-1">
              10 years of experience
            </span>
            , I&apos;ve helped build everything from
            <span className="font-semibold text-foreground px-1">
              SaaS platforms
            </span>
            and
            <span className="font-semibold text-foreground px-1">
              healthcare portals
            </span>
            to
            <span className="font-semibold text-foreground px-1">
              smart TV apps
            </span>
            — always with a focus on clean code, smooth user experiences, and
            business impact.
          </p>
          <p className="text-base sm:text-xl text-muted-foreground leading-relaxed mt-6">
            If you need a hands-on engineer, a frontend expert, or a
            product-minded tech partner — let&apos;s connect.
          </p>
        </div>
      </FadeIn>
    </div>
  );
}
