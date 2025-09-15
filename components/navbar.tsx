"use client"

import Link from "next/link"
import { createContext, useContext, useEffect, useMemo, useRef, useState } from "react"
import { MdLightMode } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import ToggleSound, { type ToggleSoundHandle } from "@/components/sound/ToggleSound"

type Theme = "light" | "dark"

const ThemeContext = createContext<{ theme: Theme; toggle: () => void }>({ theme: "light", toggle: () => { } })

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light")

  useEffect(() => {
    const stored = (typeof window !== "undefined" && (localStorage.getItem("theme") as Theme | null)) || null
    const prefersDark = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    const initial: Theme = stored ?? (prefersDark ? "dark" : "light")
    setTheme(initial)
  }, [])

  useEffect(() => {
    if (typeof document === "undefined") return
    const root = document.documentElement
    if (theme === "dark") {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
    try {
      localStorage.setItem("theme", theme)
    } catch { }
  }, [theme])

  const value = useMemo(() => ({ theme, toggle: () => setTheme((t) => (t === "dark" ? "light" : "dark")) }), [theme])
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

function useTheme() {
  return useContext(ThemeContext)
}

function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const soundRef = useRef<ToggleSoundHandle>(null)
  return (
    <button
      type="button"
      aria-label="Toggle theme"
      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground"
      onClick={() => {
        soundRef.current?.play()
        toggle()
      }}
      title={theme === "dark" ? "Switch to light" : "Switch to dark"}
    >
      <ToggleSound ref={soundRef} />
      {theme === "dark" ? (
        // Sun icon
        <FaMoon />
      ) : (
        // Moon icon
        <MdLightMode />
      )}
    </button>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <ThemeProvider>
      <nav className="sticky font-bricolage top-0 z-10 w-full max-w-[920px] mx-auto px-4 py-6 backdrop-blur-md">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-lg font-medium text-foreground hover:text-muted-foreground transition-colors">
            Aman Sah
          </Link>

          {/* Desktop links */}
          <div className="hidden sm:flex items-center gap-5">
            <Link href="/" className="text-sm text-foreground hover:text-muted-foreground transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-sm text-foreground hover:text-muted-foreground transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm text-foreground hover:text-muted-foreground transition-colors">
              Contact
            </Link>
            <ThemeToggle />
          </div>

          {/* Mobile toggle */}
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="sm:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground hover:bg-muted"
            onClick={() => setOpen((v) => !v)}
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile panel */}
        <div
          id="mobile-menu"
          className={`sm:hidden ${open ? "mt-4 grid gap-3" : "hidden"}`}
          onClick={() => setOpen(false)}
        >
          <Link href="/" className="block rounded-md px-3 py-2 text-foreground hover:bg-muted">
            Home
          </Link>
          <Link href="/about" className="block rounded-md px-3 py-2 text-foreground hover:bg-muted">
            About
          </Link>
          <Link href="/contact" className="block rounded-md px-3 py-2 text-foreground hover:bg-muted">
            Contact
          </Link>
          <div className="px-3 py-2">
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </ThemeProvider>
  )
}
