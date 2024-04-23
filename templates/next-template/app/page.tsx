import Link from "next/link"


import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10 my-36">
      <div className="flex w-full flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          GrayLab is Web3 Tech Team<br className="hidden sm:inline" />
          &nbsp;building new layers for next world.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          We focus on crypto and related technologies at the frontier. We build, and contribute to companies and protocols.
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href={siteConfig.links.docs}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Contact
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline" })}
        >
          GitHub
        </Link>
      </div>
    </section>
  )
}
