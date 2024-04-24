// import { JetBrains_Mono as FontMono, Inter as FontSans } from "next/font/google"
import { JetBrains_Mono as FontMono } from "next/font/google"
// import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"
import { NextFontWithVariable } from "next/dist/compiled/@next/font";
// export const fontSans = FontSans({
//   subsets: ["latin"],
//   variable: "--font-sans",
// })
export const fontSans: NextFontWithVariable = GeistSans;

// export const fontSans = GeistSans

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})
