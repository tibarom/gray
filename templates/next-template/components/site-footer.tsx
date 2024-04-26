import { siteConfig } from "@/config/site"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle"

export function SiteFooter() {
  return (
    <footer className="py-6 md:py-0 z-2">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-left text-sm leading-loose text-muted-foreground">
          Built by{" "}
          <a
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GrayLab
          </a>
          .
        </p>
      </div>
      <div className="bg-invert-0">
      <nav className="flex items-center justify-center">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-9 px-0"
                )}
              >
                <Icons.gitHub className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-9 px-0"
                )}
              >
                <Icons.twitter className="h-3 w-3 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
            <ModeToggle />
          </nav>
      <div className="mt-28 pb-28 bg-muted" aria-hidden="true">
        <div className="-mt-6">
            <div className="bg-background h-6"></div>
            <div className="bg-background h-5 mt-1"></div>
            <div className="bg-background h-4 mt-2"></div>
            <div className="bg-background h-4 mt-3"></div>
            <div className="bg-background h-5 mt-4"></div>
            <div className="bg-background h-4 mt-5"></div>
            <div className="bg-background h-4 mt-6"></div>
            <div className="bg-background h-4 mt-7"></div>
            <div className="bg-background h-4 mt-8"></div>
            <div className="bg-background h-4 mt-9"></div>
            <div className="bg-background h-3 mt-10"></div>
            <div className="bg-background h-3 mt-11"></div>
            <div className="bg-background h-3 mt-12"></div>
            <div className="bg-background h-3 mt-13"></div>
            <div className="bg-background h-3 mt-14"></div>
            <div className="bg-background h-2 mt-15"></div>
            <div className="bg-background h-2 mt-16"></div>
            <div className="bg-background h-2 mt-17"></div>
            <div className="bg-background h-2 mt-18"></div>
            <div className="bg-background h-2 mt-19"></div>
            <div className="bg-background h-1 mt-20"></div>
            <div className="bg-background h-1 mt-21"></div>
            <div className="bg-background h-1 mt-22"></div>
        </div>

</div>
</div>

    </footer>
  )
}
