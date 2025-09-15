import LayoutWrapper from "@/components/layout-wrapper"
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer, SiVercel, SiGooglefonts } from "react-icons/si"
import { BiSolidColor } from "react-icons/bi"

export default function ColophonPage() {
  return (
    <LayoutWrapper>
      <section className="py-16">
        <div className="space-y-10">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-foreground font-bricolage">Colophon</h1>
            <p className="text-muted-foreground">How this site is built and what powers it.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground">Stack</h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><SiNextdotjs className="text-foreground" /> Next.js App Router</li>
                <li className="flex items-center gap-2"><SiTypescript className="text-blue-600" /> TypeScript</li>
                <li className="flex items-center gap-2"><SiTailwindcss className="text-sky-500" /> Tailwind CSS</li>
                <li className="flex items-center gap-2"><BiSolidColor className="text-rose-500" /> CSS variables (OKLCH)</li>
                <li className="flex items-center gap-2"><SiFramer className="text-foreground" /> Motion (Framer Motion React)</li>
                <li className="flex items-center gap-2"><SiVercel className="text-foreground" /> Vercel (hosting & analytics)</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground">Fonts</h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><SiGooglefonts className="text-violet-500" /> Instrument Sans via <code>next/font/google</code> (primary)</li>
                <li className="flex items-center gap-2"><SiGooglefonts className="text-amber-500" /> Bricolage Grotesque for headings</li>
              </ul>
              <div className="mt-4 space-y-3">
                <div>
                  <p className="text-xs text-muted-foreground">Heading (Bricolage Grotesque)</p>
                  <div className="font-bricolage text-2xl text-foreground">Sphinx of black quartz, judge my vow.</div>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Body (Instrument Sans)</p>
                  <div className="text-foreground">The quick brown fox jumps over the lazy dog 1234567890.</div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground">Components & UI</h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Custom Navbar with mobile menu</li>
                <li>Polaroid draggable photo interaction</li>
                <li>Animated aura gradient background</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground">Contact</h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Form powered by Web3Forms</li>
                <li>Deployed on Vercel</li>
              </ul>
            </div>
          </div>

          <div className="pt-2 text-sm text-muted-foreground">
            Special thanks to {" "}
            <a href="https://www.manishtamang.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 text-foreground hover:text-muted-foreground">
              Manish Tamang
            </a>{" "}
            for helping me build this site.
          </div>
        </div>
      </section>
    </LayoutWrapper>
  )
}
