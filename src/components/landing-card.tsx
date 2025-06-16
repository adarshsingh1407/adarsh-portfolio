"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardDescription,
  CardTitle,
  CardAction,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export function LandingCard() {
  const t = useTranslations("landingCard");

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>{t("title")}</CardTitle>
        <CardDescription>{t("description")}</CardDescription>
        <CardAction>
          <Button variant="link">{t("signUp")}</Button>
        </CardAction>
      </CardHeader>
      <CardContent>{t("content")}</CardContent>
      <CardFooter className="flex-col gap-2">{t("footer")}</CardFooter>
    </Card>
  );
}
