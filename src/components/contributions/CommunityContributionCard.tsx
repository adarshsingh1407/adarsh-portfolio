import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

export interface CommunityContributionData {
  title: string;
  type: string;
  description: string;
  role: string;
  techStack: string[];
  metrics?: Record<string, number>;
  links: Record<string, string>;
}

export function CommunityContributionCard({
  data,
}: {
  data: CommunityContributionData;
}) {
  return (
    <Card className="flex flex-col h-full shadow-md border-2 border-slate-200 bg-gradient-to-br from-slate-50/80 to-white">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-semibold flex items-center gap-2">
          {data.title}
          <span className="text-xs font-normal px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200 ml-2">
            {data.type}
          </span>
        </CardTitle>
        <CardDescription className="mt-1 text-base line-clamp-2">
          {data.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col flex-1 gap-4 justify-between">
        <div className="flex flex-wrap gap-2 mb-2">
          <Badge className="bg-blue-100 text-blue-700 border border-blue-200">
            {data.role}
          </Badge>
          {data.techStack.map((tech) => (
            <Badge
              key={tech}
              className="bg-slate-200 text-slate-700 border border-slate-300"
            >
              {tech}
            </Badge>
          ))}
        </div>
        {data.metrics && (
          <div className="flex flex-wrap gap-4 mb-2">
            {Object.entries(data.metrics).map(([key, value]) => (
              <div
                key={key}
                className="flex flex-col items-center min-w-[70px]"
              >
                <span className="font-bold text-lg text-slate-700">
                  {value}
                </span>
                <span className="text-xs text-muted-foreground capitalize">
                  {key.replace(/([A-Z])/g, " $1").toLowerCase()}
                </span>
              </div>
            ))}
          </div>
        )}
        <div className="flex gap-3 mt-auto">
          {Object.entries(data.links).map(([key, url]) => (
            <a
              key={key}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-600 hover:underline text-sm"
            >
              <ExternalLink className="h-4 w-4" />
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </a>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
