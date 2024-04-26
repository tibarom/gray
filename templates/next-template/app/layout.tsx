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

import VideoComponent from "@/components/VideoComponent"
import AniComponent from "@/components/AniComponent"
import {ScrollArea} from "@/registry/new-york/ui/scroll-area"

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
  // const [showOverlay, setShowOverlay] = useState(false);

  // useEffect(() => {
  //   // 클라이언트 사이드에서만 실행되므로 window 객체를 안전하게 사용할 수 있습니다.
  //   const path = window.location.pathname;
  //   const isOverlayPath = path === '/team' || path === '/portfolio';
  //   setShowOverlay(isOverlayPath);
  // }, []); // 컴포넌트가 마운트될 때 한 번만 실행

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
            <div className="relative min-h-screen flex-col">
              <AniComponent>
                  <SiteHeader />
                  <div className="flex flex-col">
                  <div style={{ height: 'calc(100vh - 100px)' }}>
                  {children}

                  <SiteFooter />
                  </div>
                  </div>
              </AniComponent> 
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
