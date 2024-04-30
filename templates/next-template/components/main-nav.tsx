"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { Badge } from "@/registry/new-york/ui/badge"
import { ModeToggle } from "@/components/mode-toggle"
import Image from "next/image"
export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="hidden md:flex w-full wrapper flex h-full items-center justify-between gap-x-gutter">
      <a className="z-50 -mt-[20px] flex h-nav items-center laptop:-mt-[1px]" href="/">
      </a>
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <div className="border-t laptop:flex-1">  
        <ul className="flex overflow-hidden">
          <li className="tick group relative flex h-nav text-xs uppercase hover:before:h-[12px]">
            <Link className="-ml-px flex items-center pr-lg" href="/about">
              <span>About</span>
            </Link>
          </li>
        <li className="tick group relative flex h-nav text-xs uppercase hover:before:h-[12px]">
          <Link className="-ml-px flex items-center pr-lg" href="/writing">
            <span>Writing</span>
            </Link>
        </li>
        <li className="tick group relative flex h-nav text-xs uppercase hover:before:h-[12px]">
          <Link className="-ml-px flex items-center pr-lg" href="/portfolio">
            <span>Portfolio</span>
            </Link>
        </li>
        <li className="tick group relative flex h-nav text-xs uppercase hover:before:h-[12px]">
          <Link className="-ml-px flex items-center pr-lg" href="/contact">
            <span>Contact</span>
            </Link>
        </li>
        </ul>
      </div>
      <div className="flex items-center">
        <ModeToggle/>
      </div>
    </div>

  
)
}
