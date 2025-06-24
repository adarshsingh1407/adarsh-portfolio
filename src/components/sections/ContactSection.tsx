import { Button } from "@/components/ui/button";
import { MapPin, Mail } from "lucide-react";
import { RESUME_DATA } from "@/lib/constants";
import Image from "next/image";
import { useDarkMode } from "@/contexts/dark-mode-context";
import { FadeIn } from "@/components/animations";

export function ContactSection() {
  const { isDarkMode } = useDarkMode();

  return (
    <div className="w-full max-w-6xl mx-auto">
      <FadeIn direction="up" delay={0.1} duration={0.9}>
        <div className="grid lg:grid-cols-3 gap-0">
          {/* Left Section - Profile & Location */}
          <div className="lg:border-r border-border p-6 flex flex-col items-center justify-center text-center">
            <div className="relative mb-4">
              <div className="relative w-20 h-20 lg:w-52 lg:h-52">
                <Image
                  src="/adarsh-dp.png"
                  alt="Adarsh Singh"
                  fill
                  className="rounded-full object-cover border-2 border-primary/20 shadow-md"
                />
              </div>
            </div>
            <h1 className="text-xl font-bold mb-2 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Let&apos;s Connect!
            </h1>
            <p className="text-sm leading-relaxed">
              Open to discussing opportunities, collaborations, and tech
              conversations.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-4 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <a href={`mailto:${RESUME_DATA.personal.contact.email.value}`}>
                <Mail className="w-3 h-3 mr-1" />
                Send a message
              </a>
            </Button>
          </div>

          {/* Center Section - Contact Methods */}
          <div className="lg:border-r border-border p-6">
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-4 text-center lg:text-left">
              Contact Information
            </h3>
            <div className="space-y-3">
              {/* Email */}
              <Button
                asChild
                variant="outline"
                className="w-full justify-start h-auto p-3 hover:bg-primary/5 transition-all duration-200 group"
              >
                <a
                  href={`mailto:${RESUME_DATA.personal.contact.email.value}`}
                  title="Email"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <div className="relative w-8 h-8 rounded-lg p-1 group-hover:scale-110 transition-transform duration-200 flex items-center justify-center">
                    <Image
                      src="/gmail.svg"
                      alt="Email"
                      fill
                      className="p-0.5"
                    />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="font-medium text-sm">Email</div>
                    <div className="text-xs text-muted-foreground">
                      {RESUME_DATA.personal.contact.email.value}
                    </div>
                  </div>
                </a>
              </Button>

              {/* Phone */}
              <Button
                asChild
                variant="outline"
                className="w-full justify-start h-auto p-3 hover:bg-primary/5 transition-all duration-200 group"
              >
                <a
                  href={`tel:${RESUME_DATA.personal.contact.phone.value}`}
                  title="Phone"
                  className="flex items-center gap-3"
                >
                  <div className="relative w-8 h-8 rounded-lg p-1 group-hover:scale-110 transition-transform duration-200">
                    <Image src="/apple-phone.svg" alt="Phone" fill />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="font-medium text-sm">Phone</div>
                    <div className="text-xs text-muted-foreground">
                      {RESUME_DATA.personal.contact.phone.value}
                    </div>
                  </div>
                </a>
              </Button>

              {/* WhatsApp */}
              <Button
                asChild
                variant="outline"
                className="w-full justify-start h-auto p-3 hover:bg-primary/5 transition-all duration-200 group"
              >
                <a
                  href={RESUME_DATA.personal.contact.whatsapp.value}
                  title="WhatsApp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <div className="relative w-8 h-8 p-1 group-hover:scale-110 transition-transform duration-200">
                    <Image src="/whatsapp.svg" alt="WhatsApp" fill />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="font-medium text-sm">WhatsApp</div>
                    <div className="text-xs text-muted-foreground">
                      {RESUME_DATA.personal.contact.phone.value}
                    </div>
                  </div>
                </a>
              </Button>

              {/* Meetup Invitation */}
              <Button
                asChild
                variant="outline"
                className="w-full justify-start h-auto p-3 hover:bg-primary/5 transition-all duration-200 group"
              >
                <a
                  href={RESUME_DATA.personal.meetup.link}
                  title="Meetup Location"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 p-1.5 group-hover:scale-110 transition-transform duration-200 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="font-medium text-sm">
                      {RESUME_DATA.personal.meetup.label}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {RESUME_DATA.personal.meetup.value}
                    </div>
                  </div>
                </a>
              </Button>
            </div>
          </div>

          {/* Right Section - Social Networks & CTA */}
          <div className="p-6">
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-4 text-center lg:text-left">
              You can also find me on:
            </h3>
            <div className="grid grid-cols-2 gap-2 mb-6">
              {/* LinkedIn */}
              <Button
                asChild
                variant="outline"
                className="h-auto p-2 hover:bg-primary/5 transition-all duration-200 group"
              >
                <a
                  href={RESUME_DATA.personal.social.linkedin.value}
                  title="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-1"
                >
                  <div className="relative w-5 h-3 group-hover:scale-110 transition-transform duration-200">
                    <Image src="/linkedin.png" alt="LinkedIn" fill />
                  </div>
                  <span className="text-xs font-medium">LinkedIn</span>
                </a>
              </Button>

              {/* GitHub */}
              <Button
                asChild
                variant="outline"
                className="h-auto p-2 hover:bg-primary/5 transition-all duration-200 group"
              >
                <a
                  href={RESUME_DATA.personal.social.github.value}
                  title="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-1"
                >
                  <div className="relative w-5 h-3 group-hover:scale-110 transition-transform duration-200">
                    <Image
                      src={isDarkMode ? "/github-dark.png" : "/github.png"}
                      alt="Github"
                      fill
                    />
                  </div>
                  <span className="text-xs font-medium">GitHub</span>
                </a>
              </Button>

              {/* Stack Overflow */}
              <Button
                asChild
                variant="outline"
                className="h-auto p-2 hover:bg-primary/5 transition-all duration-200 group"
              >
                <a
                  href={RESUME_DATA.personal.social.stackoverflow.value}
                  title="Stack Overflow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-1"
                >
                  <div className="relative w-5 h-3 group-hover:scale-110 transition-transform duration-200">
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
                  <span className="text-xs font-medium">Stack Overflow</span>
                </a>
              </Button>

              {/* Medium */}
              <Button
                asChild
                variant="outline"
                className="h-auto p-2 hover:bg-primary/5 transition-all duration-200 group"
              >
                <a
                  href={RESUME_DATA.personal.social.medium.value}
                  title="Medium"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-1"
                >
                  <div className="relative w-5 h-2.5 group-hover:scale-110 transition-transform duration-200">
                    <Image
                      src={
                        isDarkMode ? "/medium-white.png" : "/medium-black.png"
                      }
                      alt="Medium"
                      fill
                    />
                  </div>
                  <span className="text-xs font-medium">Medium</span>
                </a>
              </Button>

              {/* NPM */}
              <Button
                asChild
                variant="outline"
                className="h-auto p-2 hover:bg-primary/5 transition-all duration-200 group"
              >
                <a
                  href={RESUME_DATA.personal.social.npm.value}
                  title="NPM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-1"
                >
                  <div className="relative w-5 h-2.5 group-hover:scale-110 transition-transform duration-200">
                    <Image src="/npm.png" alt="NPM" fill />
                  </div>
                  <span className="text-xs font-medium">NPM</span>
                </a>
              </Button>

              {/* LeetCode */}
              <Button
                asChild
                variant="outline"
                className="h-auto p-2 hover:bg-primary/5 transition-all duration-200 group"
              >
                <a
                  href={RESUME_DATA.personal.social.leetcode.value}
                  title="LeetCode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-1"
                >
                  <div className="relative w-5 h-3 group-hover:scale-110 transition-transform duration-200">
                    <Image
                      src={isDarkMode ? "/leetcode-1.png" : "/leetcode.svg"}
                      alt="LeetCode"
                      fill
                    />
                  </div>
                  <span className="text-xs font-medium">LeetCode</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
