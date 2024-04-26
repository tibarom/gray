import "@/styles/globals.css"
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

import VideoComponent from "@/components/VideoComponent"
import AniComponent from "@/components/AniComponent"

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
          <div vaul-drawer-wrapper="">
              <div className="relative flex min-h-screen flex-col bg-background">
            <AniComponent>
              <SiteHeader />
               {children}
              </AniComponent> 
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
