import Link from "next/link"
import * as React from "react"
import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"


import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/default/ui/avatar"
import { Badge } from "@/registry/default/ui/badge"
import { Button } from "@/registry/default/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu"
import { Input } from "@/registry/default/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/registry/default/ui/sheet"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/default/ui/table"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border bg-card text-card-foreground shadow",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight", className)}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-start p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"


export default function IndexPage() {
  return (
    <section className="container grid items-start gap-6 pb-8 pt-6 md:py-10">
      <div className="flex flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Team <br className="hidden sm:inline" />
        </h1>
      </div>
      <CardContent className="grid grid-cols-2 gap-8">
              <div className="flex items-start gap-4 w-4/6">
                <Avatar className="hidden h-28 w-28 sm:flex">
                  <AvatarImage src="/avatars/01.jpg" alt="Avatar" className="rounded-full" />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none ">
                    Olivia Martin
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Co-Founder & General Partner
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 w-4/6">
                <Avatar className="hidden h-28 w-28 sm:flex">
                  <AvatarImage src="/avatars/02.jpeg" alt="Avatar" className="rounded-full" />
                  <AvatarFallback>JL</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    Jackson Lee
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Co-Founder & General Partner
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 w-4/6">
                <Avatar className="hidden h-28 w-28 sm:flex">
                  <AvatarImage src="/avatars/03.jpg" alt="Avatar" className="rounded-full" />
                  <AvatarFallback>IN</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    Isabella Nguyen
                  </p>
                  <p className="text-sm text-muted-foreground">
                    General Partner & Head of Research
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 w-4/6">
                <Avatar className="hidden h-28 w-28 sm:flex">
                  <AvatarImage src="/avatars/04.jpg" alt="Avatar" className="rounded-full" />
                  <AvatarFallback>WK</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    William Kim
                  </p>
                  <p className="text-sm text-muted-foreground">
                    COO & Managing Partner
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 w-4/6">
                <Avatar className="hidden h-28 w-28 sm:flex">
                  <AvatarImage src="/avatars/05.jpg" alt="Avatar" className="rounded-full" />
                  <AvatarFallback>SD</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    Sofia Davis
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Research Partner & CTO
                  </p>
                </div>
              </div>
            </CardContent>

    </section>
  )
}


//