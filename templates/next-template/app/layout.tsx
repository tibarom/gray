import "@/styles/globals.css"
import "@/styles/fonts.css"

import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { TailwindIndicator } from "@/components/tailwind-indicator"

import { Toaster as DefaultToaster } from "@/registry/default/ui/toaster"
import { Toaster as NewYorkSonner } from "@/registry/new-york/ui/sonner"
import { Toaster as NewYorkToaster } from "@/registry/new-york/ui/toaster"

import { ThemeProvider } from "@/components/theme-provider"

import AniComponent from "@/components/AniComponent"
// import VideoComponent from "@/components/VideoComponent"

// import WidgetBotCrate from "@/components/discord/widgetbot";
// import AudioButton from "@/components/AudioButton"
import AudioVisualizer from "@/components/AudioBtn"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
          >
            <div id="__next" vaul-drawer-wrapper="">
            {/* <div className="relative min-h-screen flex-col"> */}
              <AniComponent/>
              <div className="pointer-events-none fixed top-0 left-0 -z-10 h-screen w-full bg-black/75 backdrop-blur transition-opacity duration-1000 opacity-0"></div>
              <div id="__layout" className="relative flex-col">
              <SiteHeader />
                <div className="flex flex-col">
                  <div className="md:mb-0 mb-28">
                  <div className="content">
                    {children}
                  </div>
                    <div className="absolute bottom-40">
                      <AudioVisualizer/>
                    </div>
                  </div>
                </div>
              <SiteFooter />
              </div>
            </div>
            <TailwindIndicator />
            <NewYorkToaster />
            <DefaultToaster />
            <NewYorkSonner />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
