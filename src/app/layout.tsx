import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { DarkModeProvider } from "@/contexts/dark-mode-context";
import { SITE_CONFIG } from "@/lib/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default:
      "Adarsh Singh - Senior Software Engineer & Open Source Contributor",
    template: "%s | Adarsh Singh",
  },
  description:
    "10+ years of experience in web development, open source contributions, and technical leadership.",
  keywords: [
    "Adarsh Singh",
    "Software Engineer",
    "Web Development",
    "React",
    "Next.js",
    "Open Source",
    "Portfolio",
    "Full Stack Developer",
  ],
  authors: [{ name: "Adarsh Singh" }],
  creator: "Adarsh Singh",
  publisher: "Adarsh Singh",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: "Adarsh Singh - Senior Software Engineer & Open Source Contributor",
    description:
      "10+ years of experience in web development, open source contributions, and technical leadership.",
    images: [
      {
        url: `${SITE_CONFIG.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Adarsh Singh Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adarsh Singh - Senior Software Engineer & Open Source Contributor",
    description:
      "Personal portfolio of Adarsh Singh - Senior Software Engineer with 10+ years of experience in web development, open source contributions, and technical leadership.",
    images: [`${SITE_CONFIG.url}/og-image.png`],
    creator: "@adarshsingh1407",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_CONFIG.url,
    languages: {
      "en-US": "/en",
      "es-ES": "/es",
      "ja-JP": "/ja",
    },
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <NextIntlClientProvider messages={messages}>
          <DarkModeProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <ScrollToTop />
          </DarkModeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
