"use client";

import Link from "next/link";
import Image from "next/image";
import { ElegantDarkModeToggle } from "@/components/elegant-dark-mode-toggle";
import { MobileNavigation } from "@/components/mobile-navigation";
import { SITE_CONFIG } from "@/lib/constants";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background dark:border-gray-800 dark:bg-gray-900 h-16 shadow-md">
        <div className="container mx-auto flex items-center justify-between px-4 h-full">
          <div className="flex items-center bg-[#0e2a4c] rounded-full">
            <Link href="/" className="hover:opacity-80">
              <Image
                src={SITE_CONFIG.logo}
                alt={SITE_CONFIG.name}
                width={48}
                height={48}
                className="rounded-full"
              />
            </Link>
          </div>

          <div className="hidden md:block flex-1 mx-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild active={pathname === "/"}>
                    <Link
                      href="/"
                      className="text-primary dark:text-primary-light text-sm font-medium transition-colors"
                      data-active={pathname === "/"}
                    >
                      Home
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    active={pathname.startsWith("/projects")}
                  >
                    <Link
                      href="/projects"
                      className="text-primary dark:text-primary-light text-sm font-medium transition-colors"
                      data-active={pathname.startsWith("/projects")}
                    >
                      Work Experience
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    active={pathname.startsWith("/education")}
                  >
                    <Link
                      href="/education"
                      className="text-primary dark:text-primary-light text-sm font-medium transition-colors"
                      data-active={pathname.startsWith("/education")}
                    >
                      Education
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    active={pathname.startsWith("/blogs")}
                  >
                    <Link
                      href="/blogs"
                      className="text-primary dark:text-primary-light text-sm font-medium transition-colors"
                      data-active={pathname.startsWith("/blogs")}
                    >
                      Blogs
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    active={pathname.startsWith("/contributions")}
                  >
                    <Link
                      href="/contributions"
                      className="text-primary dark:text-primary-light text-sm font-medium transition-colors"
                      data-active={pathname.startsWith("/contributions")}
                    >
                      Community Contributions
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    active={pathname.startsWith("/contact")}
                  >
                    <Link
                      href="/contact"
                      className="text-primary dark:text-primary-light text-sm font-medium transition-colors"
                      data-active={pathname.startsWith("/contact")}
                    >
                      Contact Me
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center space-x-4">
              <ElegantDarkModeToggle />
            </div>

            <div className="md:hidden flex items-center gap-2">
              <ElegantDarkModeToggle />
              <MobileNavigation />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
