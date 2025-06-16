import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
  // Use client-side cookie detection
  const locale = await getLocale();

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});

// Use client-side cookie detection
export async function getLocale() {
  if (typeof window === "undefined") {
    return "en"; // Default for static build
  }

  const cookies = document.cookie.split(";");
  const localeCookie = cookies.find((cookie) =>
    cookie.trim().startsWith("locale=")
  );
  return localeCookie?.split("=")[1] || "en";
}
