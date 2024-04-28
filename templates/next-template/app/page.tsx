import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <section className="container w-full h-screen gap-6 flex flex-col space-y-4">
      <div className="w-full grid gap-3 my-44">
        <h1 className="text-3xl leading-tight tracking-tighter md:text-4xl font-gt-america-mono font-bold">
          GrayLab is Web3 Tech Team<br className="hidden sm:inline" />
          &nbsp;building new layers for next world.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground font-bold">
          We focus on blockchain technologies at the frontier. <br className="hidden sm:inline" />
          We build, and contribute to protocols for next world.
        </p>
      <div className="flex gap-4">
        <Link
          href="/contact"
          className={buttonVariants()}
        >
          Contact
        </Link>
        <Link
          href="/contact"
          target="_blank"
          rel="noreferrer"
          className={buttonVariants({ variant: "outline" })}
        >
          GitHub
        </Link>
        </div>
      </div>
    </section>
  )
}
