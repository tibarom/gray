import { siteConfig } from "@/config/site"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle"

export function SiteFooter() {
  return (
    <footer className="py-6 md:py-0 z-30">
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
      {/* <div className="bg-invert-0">
        <div className="mt-28 pb-28" aria-hidden="true">
            <div className="-mt-6">
            <div className="bg-background h-6 opacity-5"></div>
            <div className="bg-muted h-1 opacity-10"></div>
            <div className="bg-background h-5 opacity-10"></div>
            <div className="bg-muted h-1 opacity-10"></div>
            <div className="bg-background h-5 opacity-10"></div>
            <div className="bg-muted h-2 opacity-15"></div>
            <div className="bg-background h-4 opacity-15"></div>
            <div className="bg-muted h-3 opacity-20"></div>
            <div className="bg-background h-4 opacity-20"></div>
            <div className="bg-muted h-4 opacity-25"></div>
            <div className="bg-background h-5 opacity-25"></div>
            <div className="bg-muted h-5 opacity-30"></div>
            <div className="bg-background h-4 opacity-30"></div>
            <div className="bg-muted h-6 opacity-35"></div>
            <div className="bg-background h-4 opacity-35"></div>
            <div className="bg-muted h-7 opacity-40"></div>
            <div className="bg-background h-4 opacity-40"></div>
            <div className="bg-muted h-8 opacity-45"></div>
            <div className="bg-background h-4 opacity-45"></div>
            <div className="bg-muted h-9 opacity-50"></div>
            <div className="bg-background h-4 opacity-50"></div>
            <div className="bg-muted h-10 opacity-55"></div>
            <div className="bg-background h-3 opacity-55"></div>
            <div className="bg-muted h-11 opacity-60"></div>
            <div className="bg-background h-3 opacity-60"></div>
            <div className="bg-muted h-12 opacity-65"></div>
            <div className="bg-background h-3 opacity-65"></div>
            <div className="bg-muted h-13 opacity-70"></div>
            <div className="bg-background h-3 opacity-70"></div>
            <div className="bg-muted h-14 opacity-75"></div>
            <div className="bg-background h-3 opacity-75"></div>
            <div className="bg-muted h-15 opacity-80"></div>
            <div className="bg-background h-2 opacity-80"></div>
            <div className="bg-muted h-16 opacity-85"></div>
            <div className="bg-background h-2 opacity-85"></div>
            <div className="bg-muted h-17 opacity-90"></div>
            <div className="bg-background h-2 opacity-90"></div>
            <div className="bg-muted h-18 opacity-95"></div>
            <div className="bg-background h-2 opacity-95"></div>
            <div className="bg-muted h-19 opacity-100"></div>
            <div className="bg-background h-2 opacity-100"></div>
            <div className="bg-muted h-20 opacity-100"></div>
            <div className="bg-background h-1 opacity-100"></div>
            <div className="bg-muted h-21 opacity-100"></div>
            <div className="bg-background h-1 opacity-100"></div>
            <div className="bg-muted h-22 opacity-100"></div>
            <div className="bg-background h-1 opacity-100"></div>
            </div>
        </div>
      </div> */}



    </footer>
  )
}
