export const metadata = {
  title: "Contact",
}

export default function IndexPage() {
  return (
    <section className="container grid items-start gap-6 pb-8 pt-6 md:py-10 w-4/6">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Contact <br className="hidden sm:inline" />
        </h1>
        <div className="py-6">
        <div>
          <div className="space-y-4">
            <div className="space-y-2">
              <div><a href="mailto:info@graylab.team" className="text-gray-muted hover:text-gray-muted-foreground">info@graylab.team</a></div>
            </div>
            <div className="space-y-2 gap-2">
              <h2 className="text-xl font-semibold">Location</h2>
              <div><a href="mailto:info@graylab.team" className="text-gray-muted hover:text-gray-muted-foreground">Yangjae-daero 64-gil, Songpa-gu, Seoul, Republic of Korea</a></div>
            </div>
          </div>
        </div>
</div>

      </div>
      <div className="flex gap-4">
      </div>
    </section>
  )
}

//