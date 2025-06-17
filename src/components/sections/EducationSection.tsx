import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { RESUME_DATA } from "@/lib/constants";
import { University } from "lucide-react";

export function EducationSection() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Education</h2>
      <Card>
        <CardContent>
          <div className="flex flex-col gap-6">
            {RESUME_DATA.education.map((edu, idx) => (
              <div
                key={idx}
                className={
                  idx !== RESUME_DATA.education.length - 1
                    ? "pb-6 border-b border-muted"
                    : ""
                }
              >
                <div className="flex flex-col md:flex-row md:items-center md:gap-4">
                  {/* Left: Degree/Level and Years */}
                  <div className="flex-1">
                    <CardTitle className="text-lg">{edu.degree}</CardTitle>
                    <CardDescription className="mb-2">
                      {edu.years && (
                        <span className="text-xs text-muted-foreground">
                          {edu.years}
                        </span>
                      )}
                    </CardDescription>
                  </div>
                  {/* Right: Score and Progress */}
                  <div className="flex-1 flex flex-col items-start md:items-end mt-2 md:mt-0">
                    {edu.score && (
                      <div className="w-full md:w-3/4 flex items-center gap-2">
                        <Progress
                          value={edu.score}
                          className="flex-1 [&>div]:bg-green-700 [&>div]:rounded-full bg-transparent"
                        />
                        <span className="text-xs text-muted-foreground min-w-[2.5rem] text-right">
                          {edu.score}%
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  {edu.institution && (
                    <span className="flex items-center gap-2 text-xs text-muted-foreground mt-1 w-full md:w-auto">
                      <University className="size-4" aria-label="Institution" />
                      {edu.institution}
                    </span>
                  )}
                  {edu.subjects && (
                    <span className="text-xs text-muted-foreground mt-2 block w-full md:w-auto">
                      Subjects: {edu.subjects.join(", ")}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
