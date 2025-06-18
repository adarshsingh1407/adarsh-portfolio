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
              <li
                key={idx}
                className={
                  idx !== RESUME_DATA.achievements.length - 1
                    ? "flex items-start justify-between pb-4 border-b border-muted"
                    : "flex items-start justify-between"
                }
              >
                <div className="flex gap-4">
                  <div className="relative w-16 h-16 border border-gray-200 rounded-md overflow-hidden">
                    <Image
                      src={ach.image}
                      alt={ach.title}
                      fill
                      className="object-contain bg-white"
                    />
                  </div>
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
