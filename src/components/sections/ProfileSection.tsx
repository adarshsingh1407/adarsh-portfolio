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

export function ProfileSection() {
  const { isDarkMode } = useDarkMode();

  return (
    <Card className="p-6 flex flex-col md:flex-row items-center gap-6">
      <div className="flex-1">
        <CardTitle className="text-3xl md:text-4xl font-bold mb-2">
          <div className="flex items-center justify-between">
            <span>{RESUME_DATA.name}</span>
            <div className="text-sm text-muted-foreground flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {RESUME_DATA.location}
            </div>
          </div>
        </CardTitle>
        <CardDescription className="text-lg mb-4">
          {RESUME_DATA.title}
        </CardDescription>
        <CardContent className="p-0">
          <div className="flex flex-col gap-4">
            <div id="contact-buttons" className="flex gap-2">
              <Button asChild variant="outline">
                <a
                  href={`mailto:${RESUME_DATA.contact.email.value}`}
                  title="Email"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <div className="relative w-8 h-8">
                    <Image src="/gmail.png" alt="Email" fill />
                  </div>
                  <span>{RESUME_DATA.contact.email.label}</span>
                </a>
              </Button>
              <Button asChild variant="outline">
                <a
                  href={`tel:${RESUME_DATA.contact.phone.value}`}
                  title="Phone"
                  className="flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>{RESUME_DATA.contact.phone.label}</span>
                </a>
              </Button>
            </div>
            <div id="social-buttons" className="flex gap-2">
              <Button asChild variant="outline">
                <a
                  href={RESUME_DATA.contact.linkedin.value}
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
              <Button asChild variant="outline">
                <a
                  href={RESUME_DATA.contact.github.value}
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
              <Button asChild variant="outline">
                <a
                  href={RESUME_DATA.contact.stackoverflow.value}
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
              <Button asChild variant="outline">
                <a
                  href={RESUME_DATA.contact.medium.value}
                  title="Medium"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <div className="relative w-20 h-4">
                    <Image
                      src={
                        isDarkMode ? "/medium-white.png" : "/medium-black.png"
                      }
                      alt="Medium"
                      fill
                    />
                  </div>
                </a>
              </Button>
              <Button asChild variant="outline">
                <a
                  href={RESUME_DATA.contact.npm.value}
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
              <Button asChild variant="outline">
                <a
                  href={RESUME_DATA.contact.leetcode.value}
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
          </div>
          <p className="my-4 text-base">{RESUME_DATA.summary}</p>
          <div className="flex flex-col gap-2 mt-8">
            <div className="text-sm text-muted-foreground">Top Skills</div>
            <div className="flex flex-wrap gap-2">
              {RESUME_DATA.skills.map((skill, idx) => (
                <Badge key={idx} variant="outline">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
