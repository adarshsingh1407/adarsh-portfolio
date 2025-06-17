import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Package2 } from "lucide-react";
import * as React from "react";

export interface ContributionMetric {
  value: string | number;
  label?: string;
}

export interface ContributionLinks {
  github?: string;
  npm?: string;
}

export interface Contribution {
  type: string;
  title: string;
  published: string;
  description: string;
  metrics?: ContributionMetric[];
  techStack?: string[];
  links: ContributionLinks;
}

export function ContributionHighlightCard(props: {
  contribution: Contribution;
}) {
  const { contribution } = props;

  return (
    <Card className="flex flex-col h-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-sm p-0 transition-colors">
      <CardHeader className="flex flex-row items-start gap-2 px-6 pt-6 border-0 bg-transparent">
        <div className="flex flex-col flex-1 min-w-0">
          <div className="flex w-full justify-between items-center">
            <CardTitle
              className="text-lg font-bold text-neutral-900 dark:text-white flex items-start gap-2"
              id="contribution-title"
            >
              {contribution.type === "Github Repository" ? (
                <div className="p-2 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 rounded-lg">
                  <Github className="w-5 h-5" />
                </div>
              ) : (
                <div className="p-2 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 rounded-lg">
                  <Package2 className="w-5 h-5" />
                </div>
              )}
              <span>{contribution.title}</span>
            </CardTitle>
            <div
              id="contribution-published"
              className="flex flex-col items-start"
            >
              <Badge
                className="bg-green-100 hover:bg-green-100 text-green-700 border-0 px-3 py-1 text-xs font-semibold"
                variant="secondary"
              >
                Published
              </Badge>
              <span className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 w-full text-center">
                {contribution.published}
              </span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-3 px-6 pb-2 pt-0">
        <div className="text-sm text-neutral-700 dark:text-neutral-300 mb-2 line-clamp-2">
          {contribution.description}
        </div>
        <div className="grid grid-cols-2 gap-3 mb-2">
          {contribution.metrics?.map(
            (metric: ContributionMetric, i: number) => (
              <div
                key={i}
                className={`flex flex-col items-center justify-center px-2 py-1 rounded-lg bg-neutral-50 dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700 ${
                  metric.label === "" ? "opacity-80" : ""
                }`}
              >
                <span className="font-bold text-base text-neutral-900 dark:text-white">
                  {metric.value}
                </span>
                {metric.label && (
                  <span className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                    {metric.label}
                  </span>
                )}
              </div>
            )
          )}
        </div>
        {contribution.techStack && contribution.techStack.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {contribution.techStack.map((tech: string, i: number) => (
              <Badge
                key={i}
                className="bg-blue-100 text-blue-700 border-0 px-2 py-1 text-xs font-semibold"
              >
                {tech}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="flex px-6 pb-4 pt-0 mt-auto bg-transparent border-0">
        <div className="flex w-full gap-2">
          {contribution.links.github && (
            <a
              href={contribution.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className={
                contribution.links.github && contribution.links.npm
                  ? "w-1/2"
                  : "w-full"
              }
            >
              <Button
                variant="outline"
                className="w-full text-sm font-medium px-4 py-2"
              >
                <ExternalLink className="w-4 h-4 mr-1" /> View Github Repository
              </Button>
            </a>
          )}
          {contribution.links.npm && (
            <a
              href={contribution.links.npm}
              target="_blank"
              rel="noopener noreferrer"
              className={
                contribution.links.github && contribution.links.npm
                  ? "w-1/2"
                  : "w-full"
              }
            >
              <Button
                variant="outline"
                className="w-full text-sm font-medium px-4 py-2"
              >
                <ExternalLink className="w-4 h-4 mr-1" /> View NPM Package
              </Button>
            </a>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
