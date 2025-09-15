import Image from "next/image"

export default function AboutHero() {
  return (
    <section className="py-16">
      <div className="space-y-12">
        {/* Photo collage */}
        <div className="relative">
          <Image
            src="/1739685334901.jpg"
            alt="Ferhat working in different environments"
            width={715}
            height={200}
            className="w-full h-48 object-cover rounded-lg"
            priority
          />
        </div>
        <div className="space-y-6">
          <h1 className="text-3xl font-bold font-bricolage text-foreground">About Me</h1>

          <div className="space-y-4 text-base leading-relaxed">
            <p className="text-foreground">
              Hi, I'm <a className="text-blue-600 font-medium" href="https://www.linkedin.com/in/aman-kumar-sah-20204128b/">Aman</a> — a passionate technophile with a love for
              <span className="text-blue-600 font-medium"> Python</span>, <span className="text-blue-600 font-medium">AI</span>, and
              <span className="text-blue-600 font-medium"> robotics</span>. I'm driven by curiosity and enjoy solving real‑world
              challenges through technology.
            </p>

            <p className="text-foreground">
              I’m <span className="font-medium">21</span> years old and based in <span className="font-medium">Nepal</span>.
              When I’m not coding, you’ll probably find me exploring
              <span className="font-medium"> graphic design</span>, tinkering with <span className="font-medium">robotics</span>, or out
              <span className="font-medium"> hiking</span>.
            </p>

            <p className="text-foreground">
              My interests include <span className="font-medium">AI & ML</span>, <span className="font-medium">open source</span>, and
              <span className="font-medium"> community engagement</span> — I love building, sharing, and learning with others.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
