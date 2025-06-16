import { Card, CardContent } from "@/components/ui/card";
import { RESUME_DATA } from "@/lib/constants";
import Image from "next/image";

export function AchievementsSection() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Achievements</h2>
      <Card className="w-full">
        <CardContent>
          <ul className="space-y-4">
            {RESUME_DATA.achievements.map((ach, idx) => (
              <li key={idx} className="flex items-start justify-between">
                <div className="flex gap-4">
                  <Image
                    src={ach.image}
                    alt={ach.title}
                    width={64}
                    height={64}
                  />
                  <div>
                    <div className="font-medium">{ach.title}</div>
                    <div className="text-sm text-muted-foreground">
                      {ach.organization}
                    </div>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground whitespace-nowrap ml-4">
                  {ach.year}
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}
