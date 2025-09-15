import LayoutWrapper from "@/components/layout-wrapper"
import HeroSection from "@/components/hero-section"
import Image from "next/image"

export default function HomePage() {
  return (
    <LayoutWrapper>
      <HeroSection />
      <section className="py-16">
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-foreground font-bricolage">Experiences</h2>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="shrink-0">
                <Image src="/logo/excess.png" alt="EXCESS Nepal" width={56} height={56} className="size-14 rounded" />
              </div>
              <div className="space-y-1">
                <div className="flex flex-wrap items-baseline gap-2">
                  <h3 className="text-lg font-semibold text-foreground font-bricolage">Vice Secretary</h3>
                  <span className="text-sm text-muted-foreground">2024—Present</span>
                </div>
                <p className="text-sm text-muted-foreground">EXCESS, NEPAL</p>
                <p className="text-base text-foreground leading-relaxed">
                  Pivotal role supporting objectives and communication. Responsibilities included administrative support, coordination,
                  communication liaison, event management contribution, and strategic planning involvement.
                </p>
              </div>
            </div>

            {/* CS50x Nepal - Production Assistant */}
            <div className="flex items-start gap-4">
              <div className="shrink-0">
                <Image src="/logo/CS50x%20Nepal.png" alt="CS50x Nepal" width={56} height={56} className="size-14 rounded" />
              </div>
              <div className="space-y-1">
                <div className="flex flex-wrap items-baseline gap-2">
                  <h3 className="text-lg font-semibold text-foreground font-bricolage">Production Assistant</h3>
                  <span className="text-sm text-muted-foreground">2024—Present</span>
                </div>
                <p className="text-sm text-muted-foreground">CS50x Nepal</p>
                <p className="text-base text-foreground leading-relaxed">
                  Supported production team: content preparation, technical support during sessions, team/participant communication,
                  event coordination, and feedback collection.
                </p>
              </div>
            </div>

            {/* EXCESS Nepal - Executive Member */}
            <div className="flex items-start gap-4">
              <div className="shrink-0">
                <Image src="/logo/excess.png" alt="EXCESS Nepal" width={56} height={56} className="size-14 rounded" />
              </div>
              <div className="space-y-1">
                <div className="flex flex-wrap items-baseline gap-2">
                  <h3 className="text-lg font-semibold text-foreground font-bricolage">Executive Member</h3>
                  <span className="text-sm text-muted-foreground">2023—2024</span>
                </div>
                <p className="text-sm text-muted-foreground">EXCESS Nepal</p>
                <p className="text-base text-foreground leading-relaxed">
                  Contributed via program development, event management, networking for partnerships, new member support,
                  and strategic goal discussions.
                </p>
              </div>
            </div>

            {/* Robotics Club - General Member */}
            <div className="flex items-start gap-4">
              <div className="shrink-0">
                <Image src="/logo/robotics.webp" alt="Robotics Club" width={56} height={56} className="size-14 rounded" />
              </div>
              <div className="space-y-1">
                <div className="flex flex-wrap items-baseline gap-2">
                  <h3 className="text-lg font-semibold text-foreground font-bricolage">General Member</h3>
                  <span className="text-sm text-muted-foreground">2023—Present</span>
                </div>
                <p className="text-sm text-muted-foreground">Robotics Club, IOE Purwanchal Campus</p>
                <p className="text-base text-foreground leading-relaxed">
                  Participated in projects, attended workshops (programming, electronics), collaborated in teams, joined
                  events/competitions, and pursued continuous learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LayoutWrapper>
  )
}
