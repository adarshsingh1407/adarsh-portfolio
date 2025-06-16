import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateStr: string): string {
  // If the string is not in MM/YYYY format or is a special value like "Present", return as is
  if (!/^\d{2}\/\d{4}$/.test(dateStr)) {
    return dateStr;
  }

  const [month, year] = dateStr.split("/");
  const date = new Date(parseInt(year), parseInt(month) - 1);

  return date.toLocaleString("default", { month: "long", year: "numeric" });
}

export function formatDuration(duration: string): string {
  // Split the duration string by hyphen and trim whitespace
  const [start, end] = duration.split("-").map((d) => d.trim());

  // Format each date part
  const formattedStart = formatDate(start);
  const formattedEnd = formatDate(end);

  return `${formattedStart} - ${formattedEnd}`;
}
