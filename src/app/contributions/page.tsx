"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";
import {
  Github,
  ExternalLink,
  Package,
  MessageSquare,
  AlertCircle,
} from "lucide-react";

interface Contribution {
  type: "pull_request" | "npm_package" | "issue" | "stackoverflow";
  title: string;
  repository?: string;
  description: string;
  url: string;
  stats: Record<string, string | number>;
  status: string;
  date: string;
}

const getContributionIcon = (type: string) => {
  switch (type) {
    case "pull_request":
      return <Github className="h-5 w-5" />;
    case "npm_package":
      return <Package className="h-5 w-5" />;
    case "issue":
      return <AlertCircle className="h-5 w-5" />;
    case "stackoverflow":
      return <MessageSquare className="h-5 w-5" />;
    default:
      return <ExternalLink className="h-5 w-5" />;
  }
};

const getContributionColor = (type: string) => {
  switch (type) {
    case "pull_request":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
    case "npm_package":
      return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
    case "issue":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
    case "stackoverflow":
      return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "merged":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
    case "published":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
    case "accepted":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
  }
};

const getButtonText = (type: string, t: (key: string) => string) => {
  switch (type) {
    case "pull_request":
      return t("contributions.viewPR");
    case "npm_package":
      return t("contributions.viewPackage");
    case "stackoverflow":
      return t("contributions.viewAnswer");
    default:
      return t("contributions.viewContribution");
  }
};

export default function ContributionsPage() {
  const t = useTranslations();

  // Get contributions from translations
  const contributions = t.raw("contributions.items") as Contribution[];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">
          {t("pages.contributions.title")}
        </h1>
        <p className="text-muted-foreground">
          {t("pages.contributions.subtitle")}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {Array.isArray(contributions) &&
          contributions.map((contribution: Contribution, index: number) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg ${getContributionColor(
                        contribution.type
                      )}`}
                    >
                      {getContributionIcon(contribution.type)}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="line-clamp-2 text-lg">
                        {contribution.title}
                      </CardTitle>
                      {contribution.repository && (
                        <p className="text-sm text-muted-foreground mt-1">
                          {contribution.repository}
                        </p>
                      )}
                    </div>
                  </div>
                  <Badge className={getStatusColor(contribution.status)}>
                    {t(`contributions.${contribution.status}`)}
                  </Badge>
                </div>
                <CardDescription className="line-clamp-3 mt-3">
                  {contribution.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                {/* Stats */}
                <div className="mb-4">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                    {Object.entries(contribution.stats).map(([key, value]) => (
                      <div
                        key={key}
                        className="text-center p-2 bg-muted rounded-lg"
                      >
                        <div className="font-semibold text-lg">{value}</div>
                        <div className="text-muted-foreground capitalize">
                          {key.replace(/([A-Z])/g, " $1").toLowerCase()}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Date and Action */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {contribution.date}
                  </span>
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={contribution.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary dark:text-primary-light hover:underline underline-offset-4"
                    >
                      <ExternalLink className="h-4 w-4" />
                      {getButtonText(contribution.type, t)}
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
      </div>
    </div>
  );
}
