"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { Badge } from "@/registry/new-york/ui/badge"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        <Link
          href="/Team"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/docs" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Team
        </Link>
        <Link
          href="/Portfolio"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/Portfolio")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Portfolio
        </Link>
        <Link
          href="/Blog"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/Blog")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Blog
        </Link>
        <Link
          href="/Recruit"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/Recruit")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Recruit
        </Link>
        <Link
          href="/Contact"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/Contact")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Contact
        </Link>
      </nav>
    </div>
  )
}
