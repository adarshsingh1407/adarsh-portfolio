"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  name: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
}

export default function ProjectsPage() {
  const t = useTranslations();

  // Get projects from translations
  const projects = t.raw("projects.items") as Project[];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{t("pages.projects.title")}</h1>
        <p className="text-muted-foreground">{t("pages.projects.subtitle")}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.isArray(projects) &&
          projects.map((project: Project, index: number) => (
            <Card
              key={index}
              className="flex flex-col hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <CardTitle className="line-clamp-1">{project.name}</CardTitle>
                <CardDescription className="line-clamp-3 min-h-[4.5rem]">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-1">
                {/* Tech Stack */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-2 text-muted-foreground">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex gap-2 pt-4">
                {/* GitHub Link */}
                <Button variant="outline" size="sm" className="flex-1" asChild>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="h-4 w-4" />
                    {t("projects.viewOnGitHub")}
                  </a>
                </Button>

                {/* Live Demo Link (only if available) */}
                {project.liveUrl && (
                  <Button
                    variant="default"
                    size="sm"
                    className="flex-1"
                    asChild
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      {t("projects.liveDemo")}
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
      </div>
    </div>
  );
}
