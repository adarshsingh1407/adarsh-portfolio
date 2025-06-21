import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PRIMARY_TECHNOLOGIES, RESUME_DATA } from "@/lib/constants";
import Image from "next/image";
import { FadeIn } from "@/components/animations";

export function ProfileSection() {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      {/* Left Section - 60% width on desktop, full width on mobile */}
      <div className="w-full md:flex-[0.6]">
        <Card className="px-8 pt-6 pb-0 gap-2">
          <FadeIn direction="up" delay={0.1} duration={0.9}>
            <CardTitle className="text-3xl md:text-4xl font-bold mb-4">
              {RESUME_DATA.personal.name}
            </CardTitle>
            <CardDescription className="text-lg">
              {RESUME_DATA.personal.title}
            </CardDescription>
          </FadeIn>

          <CardContent className="p-0">
            <FadeIn direction="up" delay={0.4} duration={0.9}>
              <div className="mb-4">
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mt-6">
                  Looking for a reliable developer to bring your idea to life?
                  You&apos;re in the right place.
                </p>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mt-4">
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
                  — always with a focus on clean code, smooth user experiences,
                  and business impact.
                </p>
                <div className="mt-6">
                  <div className="flex items-center gap-3">
                    <div className="text-base sm:text-lg text-muted-foreground whitespace-nowrap">
                      My top skills are:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {PRIMARY_TECHNOLOGIES.map((tech) => (
                        <Badge
                          key={tech.name}
                          variant="outline"
                          className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-md"
                        >
                          <Image
                            src={tech.icon}
                            alt={`${tech.name} icon`}
                            width={20}
                            height={20}
                            className="w-5 h-5"
                          />
                          {tech.name}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mt-6">
                  If you need a hands-on engineer, a frontend expert, or a
                  product-minded tech partner — let&apos;s connect.
                </p>
                <p className="text-base sm:text-lg font-semibold text-primary mt-6">
                  Let&apos;s build something meaningful together. 🚀
                </p>
              </div>
            </FadeIn>
            <div id="contact-info" className="flex items-center gap-3 mb-6">
              <FadeIn direction="up" delay={0.9} duration={0.9}>
                <a
                  href={`mailto:${RESUME_DATA.personal.contact.email.value}`}
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/gmail.svg"
                    alt="Gmail"
                    width={48}
                    height={48}
                    className="w-12 h-12"
                  />
                </a>
              </FadeIn>
              <FadeIn direction="up" delay={1.2} duration={0.9}>
                <a
                  href={`tel:${RESUME_DATA.personal.contact.phone.value}`}
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Image
                    src="/apple-phone.svg"
                    alt="Phone"
                    width={64}
                    height={64}
                    className="w-10 h-10"
                  />
                </a>
              </FadeIn>
              <FadeIn direction="up" delay={1.5} duration={0.9}>
                <a
                  href={RESUME_DATA.personal.social.linkedin.value}
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                    alt="LinkedIn"
                    width={64}
                    height={64}
                    className="w-10 h-10"
                  />
                </a>
              </FadeIn>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="w-full md:flex-[0.4] md:mt-10">
        <div className="relative w-full h-[480px] rounded-lg overflow-hidden">
          <Image src="/bg-2.png" alt="Background" fill />
        </div>
      </div>
    </div>
  );
}
