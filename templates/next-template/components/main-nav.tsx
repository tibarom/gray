"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { Badge } from "@/registry/new-york/ui/badge"
import { ModeToggle } from "@/components/mode-toggle"
export function MainNav() {
  const pathname = usePathname()

  return (
    // <div className="mr-4 hidden md:flex flex h-16 items-center space-x-4 justify-between space-x-0">
      <div className="mr-4 hidden md:flex h-16 space-x-0 w-full">
      <div className="container flex justify-between w-full">
      <div className="flex items-center gap-4 text-sm lg:gap-6">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
        <Link
          href="/about"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/about")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          ABOUT
        </Link>
        <Link
          href="/writing"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/writing")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          WRITING
        </Link>
        <Link
          href="/portfolio"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/portfolio")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          PORTFOLIO
        </Link>
        <Link
          href="/contact"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/contact")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          CONTACT
        </Link>
      </div>
      <div className="flex items-center">
      <ModeToggle/>
      </div>
      </div>
      </div>
  )
}
