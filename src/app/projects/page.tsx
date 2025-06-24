"use client";

import { Card } from "@/components/ui/card";
import { Building2, Calendar, MapPin, ExternalLink } from "lucide-react";
import { RESUME_DATA, TECH_STACK_COLORS } from "@/lib/constants";
import { formatDuration } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Projects</h1>
      </div>

      <div className="flex flex-col gap-4">
        {RESUME_DATA.workExperience.map((exp, idx) => (
          <Card key={idx} className="w-full">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 w-full flex flex-col items-start p-6 md:pr-0 md:border-r md:border-neutral-light">
                <div className="text-lg font-semibold mb-1">{exp.title}</div>
                <div className="text-base mb-2 flex items-center gap-1">
                  <Building2 className="w-4 h-4 text-muted-foreground" />
                  {exp.company}
                </div>
                <div className="text-sm mb-1 flex items-center gap-1">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  {formatDuration(exp.duration)}
                </div>
                <div className="text-sm mb-3 flex items-center gap-1 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  {exp.location}
                </div>
              </div>
              <div className="md:w-2/3 w-full p-6 flex flex-col justify-center">
                <div className="text-base text-muted-foreground mb-2">
                  {exp.description}
                </div>
                {exp.projects && exp.projects.length > 0 && (
                  <div className="mt-4 space-y-6">
                    {exp.projects.map((proj, pidx) => (
                      <div
                        key={pidx}
                        className={
                          pidx > 0 ? "border-t border-neutral-light pt-4" : ""
                        }
                      >
                        <div className="font-semibold text-primary mb-1 flex items-center gap-2">
                          {proj.name}
                          {proj.url && (
                            <a
                              href={proj.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-primary transition-colors"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                        <div className="text-sm font-medium mb-1">
                          Role: {proj.role}
                        </div>
                        <div className="mb-2 text-sm">{proj.summary}</div>

                        <div className="flex flex-wrap gap-1">
                          {proj.techStack?.map((tech, i) => (
                            <Badge
                              key={i}
                              variant="outline"
                              style={{
                                backgroundColor:
                                  TECH_STACK_COLORS[tech]?.bg || "#E5E7EB",
                                color: "#FFFFFF",
                                borderColor:
                                  TECH_STACK_COLORS[tech]?.bg || "#E5E7EB",
                              }}
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
