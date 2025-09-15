import type { ReactNode } from "react"
import Navbar from "./navbar"
import Footer from "./footer"

interface LayoutWrapperProps {
  children: ReactNode
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="w-full max-w-[715px] mx-auto px-4">{children}</div>
      </main>
      <Footer />
    </div>
  )
}
