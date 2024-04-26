export const metadata = {
  title: "Contact",
}

export default function IndexPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10 h-screen bg-background/80">
      <div className="my-8" />
      {/* <div className="flex max-w-[980px] flex-col items-start gap-2"> */}
        <div>
          <div className="space-y-4">
            <div className="space-y-2">
              <a href="mailto:info@graylab.team" className="text-gray-muted hover:text-gray-muted-foreground">info@graylab.team</a>
            </div>
            <div className="space-y-2 gap-2">
              <h2 className="text-xl font-semibold">Location</h2>
              <div><a href="mailto:info@graylab.team" className="text-gray-muted hover:text-gray-muted-foreground">Yangjae-daero 64-gil, Songpa-gu, Seoul, Republic of Korea</a></div>
            </div>
          </div>
      </div>
    </div>
  )
}