import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";
import { RESUME_DATA } from "@/lib/constants";
import Image from "next/image";
import { useDarkMode } from "@/contexts/dark-mode-context";
import { FadeIn } from "@/components/animations";

export function ProfileSection() {
  const { isDarkMode } = useDarkMode();

  return (
    <Card className="p-6">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Section - 60% width on desktop, full width on mobile */}
        <div className="w-full md:flex-[0.6] md:pr-0 md:border-r md:border-neutral-light">
          <FadeIn direction="up" delay={0.1} duration={0.9}>
            <CardTitle className="text-3xl md:text-4xl font-bold mb-2">
              {RESUME_DATA.personal.name}
            </CardTitle>
            <CardDescription className="text-lg mb-4">
              {RESUME_DATA.personal.title}
            </CardDescription>
          </FadeIn>

          <CardContent className="p-0">
            <FadeIn direction="up" delay={0.4} duration={0.9}>
              <p className="text-base max-w-2xl mb-8">
                {RESUME_DATA.personal.summary}
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={0.6} duration={0.9}>
              <div className="flex flex-col gap-2">
                <div className="text-sm text-muted-foreground">Top Skills</div>
                <div className="flex flex-wrap gap-2 max-w-2xl">
                  {RESUME_DATA.skills.map((skill, idx) => (
                    <Badge key={idx} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </FadeIn>
          </CardContent>
        </div>

        {/* Right Section - 40% width on desktop, full width on mobile */}
        <div className="w-full md:flex-[0.4] md:mt-10">
          <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col gap-6">
              <FadeIn direction="up" delay={0.8} duration={0.9}>
                <div id="contact-buttons" className="flex flex-wrap gap-2">
                  <Button asChild variant="outline" className="w-fit">
                    <a
                      href={`mailto:${RESUME_DATA.personal.contact.email.value}`}
                      title="Email"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <div className="relative w-8 h-8">
                        <Image src="/gmail.png" alt="Email" fill />
                      </div>
                      <span>{RESUME_DATA.personal.contact.email.label}</span>
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-fit">
                    <a
                      href={`tel:${RESUME_DATA.personal.contact.phone.value}`}
                      title="Phone"
                      className="flex items-center gap-2"
                    >
                      <Phone className="w-4 h-4" />
                      <span>{RESUME_DATA.personal.contact.phone.label}</span>
                    </a>
                  </Button>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.8} duration={0.9}>
                <div id="social-buttons" className="flex flex-wrap gap-2">
                  <Button asChild variant="outline" className="w-fit">
                    <a
                      href={RESUME_DATA.personal.social.linkedin.value}
                      title="LinkedIn"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <div className="relative w-20 h-5">
                        <Image src="/linkedin.png" alt="LinkedIn" fill />
                      </div>
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-fit">
                    <a
                      href={RESUME_DATA.personal.social.github.value}
                      title="GitHub"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <div className="relative w-16 h-6">
                        <Image
                          src={isDarkMode ? "/github-dark.png" : "/github.png"}
                          alt="Github"
                          fill
                        />
                      </div>
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-fit">
                    <a
                      href={RESUME_DATA.personal.social.stackoverflow.value}
                      title="Stack Overflow"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <div className="relative w-28 h-6">
                        <Image
                          src={
                            isDarkMode
                              ? "/stackoverflow-dark.svg"
                              : "/stackoverflow.svg"
                          }
                          alt="Stack Overflow"
                          fill
                        />
                      </div>
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-fit">
                    <a
                      href={RESUME_DATA.personal.social.medium.value}
                      title="Medium"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <div className="relative w-20 h-4">
                        <Image
                          src={
                            isDarkMode
                              ? "/medium-white.png"
                              : "/medium-black.png"
                          }
                          alt="Medium"
                          fill
                        />
                      </div>
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-fit">
                    <a
                      href={RESUME_DATA.personal.social.npm.value}
                      title="NPM"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <div className="relative w-12 h-4">
                        <Image src="/npm.png" alt="NPM" fill />
                      </div>
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-fit">
                    <a
                      href={RESUME_DATA.personal.social.leetcode.value}
                      title="LeetCode"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <div className="relative w-20 h-6">
                        <Image
                          src={isDarkMode ? "/leetcode-1.png" : "/leetcode.svg"}
                          alt="LeetCode"
                          fill
                        />
                      </div>
                    </a>
                  </Button>
                </div>
              </FadeIn>
            </div>

            <FadeIn direction="up" delay={0.9} duration={0.9}>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span className="text-sm text-muted-foreground">
                  {RESUME_DATA.personal.location}
                </span>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </Card>
  );
}
