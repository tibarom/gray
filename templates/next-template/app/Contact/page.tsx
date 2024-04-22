import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Contact <br className="hidden sm:inline" />
        </h1>
        <div className="py-6">
        <div>
          <p className="space-y-4">
            <p className="space-y-2">
              <p><a href="mailto:info@paradigm.xyz" className="text-gray-muted hover:text-gray-muted-foreground">info@graylab.team</a></p>
            </p>
            <p className="space-y-2 gap-2">
              <h2 className="text-xl font-semibold">Location</h2>
              <p><a href="mailto:info@paradigm.xyz" className="text-gray-muted hover:text-gray-muted-foreground">Yangjae-daero 64-gil, Songpa-gu, Seoul, Republic of Korea</a></p>
            </p>
          </p>
        </div>
</div>

      </div>
      <div className="flex gap-4">
      </div>
    </section>
  )
}
