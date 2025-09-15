import { Button } from "@/components/ui/button"
import { Polaroid } from "@/components/polaroid/Polaroid"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="py-16">
      <div className="space-y-8">
        <div className="space-y-4 font-bricolage">
          <h1 className="text-4xl font-bold text-foreground">Hello there!</h1>
          <div className="flex items-center gap-3 text-4xl font-bold">
            <span className="text-foreground">My name is</span>
            <div className="inline-flex items-center -ml-30 mr-43">
              <Polaroid className="w-[300px] h-[300px]" />
            </div>
            <span className="text-foreground">Aman Kumar Sah</span>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-xl text-foreground">
            I’m an <span className="text-pink-500 font-medium">Electronics, Communication & Information Engineering</span> student at
            <span className="font-medium"> IOE Purwanchal Campus</span>, driven by curiosity and hands‑on learning.
          </p>
          <p className="text-xl text-foreground font-medium">
            Robotics & tech enthusiast · Vice President at EXCESS Nepal
          </p>
        </div>

        <p className="text-base text-muted-foreground leading-relaxed max-w-[600px]">
          I coordinate events, mentor hackathons, and help build welcoming tech communities where people grow together.
          I love turning ideas into working prototypes and sharing what I learn along the way.
        </p>

        <div className="pt-2">
          <p className="text-sm text-muted-foreground">
            Tech stack: <span className="text-foreground">HTML</span> · <span className="text-foreground">CSS</span> · <span className="text-foreground">JavaScript</span> · <span className="text-foreground">Python</span> · <span className="text-foreground">C</span> · <span className="text-foreground">C++</span> · <span className="text-foreground">Arduino</span>
          </p>
        </div>

        <div className="flex items-center gap-4 pt-4">
          <Button asChild className="bg-foreground text-background hover:bg-foreground/90">
            <Link href="/contact">Book a free call</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/about">About me</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
