import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <section className="container grid items-start gap-6 pb-8 pt-6 md:py-10 w-4/6">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Blog <br className="hidden sm:inline" />
        </h1>
      </div>
    </section>
  )
}

//