"use client"

import * as React from "react"
import Link, { LinkProps } from "next/link"
import { useRouter } from "next/navigation"
import { ViewVerticalIcon } from "@radix-ui/react-icons"

import { docsConfig } from "@/config/abouts"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { ModeToggle } from "@/components/mode-toggle"

// import { Button } from "@/registry/default/ui/button"
// import { ScrollArea } from "@/registry/default/ui/scroll-area"
// import { Sheet, SheetContent, SheetTrigger } from "@/registry/default/ui/sheet"
import { Button } from "@/registry/new-york/ui/button"
import { ScrollArea } from "@/registry/new-york/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/registry/new-york/ui/sheet"

export function MobileNav() {
  const [open, setOpen] = React.useState(false)

  return (
    <div>

    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <div className="flex items-end top-0">
        <Button
          variant="ghost"
          className="text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <svg
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
          >
          <path
            d="M3 5H11"
            stroke="currentColor"
            strokeWidth="1.5"
            // strokeLinecap="round"
            // strokeLinejoin="round"
          ></path>
          <path
            d="M3 12H16"
            stroke="currentColor"
            strokeWidth="1.5"
            // strokeLinecap="round"
            // strokeLinejoin="round"
          ></path>
          <path
            d="M3 19H21"
            stroke="currentColor"
            strokeWidth="1.5"
            // strokeLinecap="round"
            // strokeLinejoin="round"
          ></path>
          </svg>
        </Button>
        </div>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        {/* <MobileLink
          href="/"
          className="flex items-center"
          onOpenChange={setOpen}
        >
          <Icons.logo className="mr-2 h-4 w-4" />
          <span className="font-bold">{siteConfig.name}</span>
        </MobileLink> */}
        <ScrollArea className="my-12 h-[calc(100vh-8rem)] pb-10 pl-6">
          <div className="flex flex-col space-y-3 font-gt-america-mono font-bold text-2xl">
            {siteConfig.mainNav?.map(
              (item) =>
                item.href && (
                  <MobileLink
                    key={item.href}
                    href={item.href}
                    onOpenChange={setOpen}
                  >
                    {item.title}
                  </MobileLink>
                )
            )}
          </div>

        </ScrollArea>
        <div className="fixed bottom-5 w-full">
            <ModeToggle />
          </div>
      </SheetContent>
    </Sheet>
    </div>
  )
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  className?: string
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter()
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString())
        onOpenChange?.(false)
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  )
}
