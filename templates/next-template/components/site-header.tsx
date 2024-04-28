import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import ModeToggle from "@/registry/default/example/mode-toggle";
import { Icons } from "./icons";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-opacity">
      <div className="container flex h-16 items-center justify-between">
        <MainNav/>
        <div className="flex">
          <Link href="/" className="mr-6 flex items-center space-x-2 sm:hidden">
            <Icons.logo className="h-6 w-6" />
            <span className="font-bold sm:inline-block">
              {siteConfig.name}
              </span>
          </Link>           
        <div className="md:hidden"></div></div>
          <nav className="flex items-end justify-end md:hidden">
            <MobileNav />
          </nav>
          
      </div>
    </header>
  )
}
