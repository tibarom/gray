"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
import { usePathname } from 'next/navigation';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const router = usePathname();
  const isRoot = router === '/';

  return <NextThemesProvider {...props}>

    {/* <div className={isRoot? "" : "bg-black opacity-30 z-0"}> */}
    {children}
    {/* </div> */}

</NextThemesProvider>
}
