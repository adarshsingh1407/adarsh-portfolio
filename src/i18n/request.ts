import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async () => {
  // Use server-side cookie detection
  const locale = await getLocale();

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});

// Use server-side cookie detection
export async function getLocale() {
  // Server-side cookie reading
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get("locale");
  const locale = localeCookie?.value;

  // Validate that the locale is one of our supported languages
  return locale && ["en", "es", "ja"].includes(locale) ? locale : "en";
}
