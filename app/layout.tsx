import type React from "react"
import type { Metadata } from "next"
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import clsx from "clsx"
import { ThemeProvider } from "@/components/theme-provider"
import styles from "./aura.module.css"
import "./globals.css"

export const metadata: Metadata = {
  title: "Aman Sah - Web Developer & Designer",
  description: "Independent software/web developer building modern, fast and high-quality websites & interfaces.",
}

const Bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
})

const Instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${Instrument.variable} ${Bricolage.variable} ${Instrument.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="pointer-events-none absolute top-0 h-72 w-full overflow-hidden md:h-80 lg:h-96">
            <div className="relative h-full">
              <div
                className={clsx(
                  styles.auraMask,
                  "absolute left-[-100%] h-full w-[300%] md:left-[-150%] md:w-[400%] overflow-hidden opacity-50 dark:opacity-30 [--aura-rainbow-offset:-20%] sm:[--aura-rainbow-offset:-15%] md:[--aura-offset:-10%]"
                )}
              >
                <div className={clsx(styles.auraRaysMask, "absolute inset-0 flex items-center")}>
                  <div className={clsx(styles.auraRainbowGradient, "absolute left-[-10%] aspect-square w-[120%]")} />
                </div>
              </div>
            </div>
          </div>
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
