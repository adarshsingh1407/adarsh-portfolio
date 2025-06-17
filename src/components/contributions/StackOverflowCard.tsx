import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { useDarkMode } from "@/contexts/dark-mode-context";
import stackoverflowData from "@/lib/data/stackoverflow.json";
import { Button } from "../ui/button";

export function StackOverflowCard() {
  const { isDarkMode } = useDarkMode();
  const data = stackoverflowData;

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-col items-center gap-2 py-1">
        <div className="flex justify-between items-center w-full">
          <div>
            <Image
              src={
                isDarkMode ? "/stackoverflow-dark.svg" : "/stackoverflow.svg"
              }
              alt="Stack Overflow"
              width={64}
              height={64}
              className="rounded mb-2 drop-shadow-md bg-primary-light"
            />
            <CardTitle className="text-2xl font-extrabold text-primary flex items-center gap-2">
              StackOverflow Stats
            </CardTitle>
          </div>
          <div className="flex justify-end">
            <Button
              variant="outline"
              className="flex items-center gap-2"
              asChild
            >
              <a
                href={data.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-4 h-4" />
                <span>View on StackOverflow</span>
              </a>
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-8 pb-8">
        <div className="grid grid-cols-4 gap-4">
          {data.metrics.map((metric) => (
            <div
              key={metric.title}
              className="flex flex-col gap-2 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-4"
            >
              <span className="text-sm">{metric.title}</span>
              <span className="text-2xl font-bold">{metric.value}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
