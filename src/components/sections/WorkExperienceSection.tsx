import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin } from "lucide-react";
import { RESUME_DATA, TECH_STACK_COLORS } from "@/lib/constants";
import { formatDuration } from "@/lib/utils";

export function WorkExperienceSection() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
      <div className="space-y-6">
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
                        <div className="font-semibold text-primary mb-1">
                          {proj.name}
                        </div>
                        <div className="text-sm font-medium mb-1">
                          Role: {proj.role}
                        </div>
                        <div className="mb-2 text-sm">{proj.summary}</div>
                        {Array.isArray(proj.responsibilities) && (
                          <ul className="list-disc list-inside mb-2 text-sm text-muted-foreground">
                            {proj.responsibilities.map((resp, ridx) => (
                              <li key={ridx}>{resp}</li>
                            ))}
                          </ul>
                        )}

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
    </section>
  );
}
