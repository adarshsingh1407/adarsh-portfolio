import { DarkModeProvider } from "@/contexts/dark-mode-context";

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  // Get preferences from localStorage or cookies
                  const getPreference = (key) => {
                    const localValue = localStorage.getItem(key);
                    if (localValue) return localValue;
                    
                    const cookies = document.cookie.split(';');
                    const cookie = cookies.find(c => c.trim().startsWith(key + '='));
                    if (cookie) {
                      const value = cookie.split('=')[1];
                      localStorage.setItem(key, value);
                      return value;
                    }
                    return null;
                  };

                  // Apply dark mode
                  const darkMode = getPreference('darkMode') === 'true';
                  if (darkMode) {
                    document.documentElement.classList.add('dark');
                  }

                  // Apply language
                  const savedLocale = getPreference('locale');
                  if (savedLocale && savedLocale !== '${locale}') {
                    window.location.href = '/' + savedLocale + window.location.pathname.substring(3);
                  }
                } catch (e) {
                  console.error('Error applying preferences:', e);
                }
              })();
            `,
          }}
        />
      </head>
      <body>
        <DarkModeProvider>{children}</DarkModeProvider>
      </body>
    </html>
  );
}
