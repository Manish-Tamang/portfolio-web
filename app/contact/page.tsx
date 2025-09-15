"use client"

import LayoutWrapper from "@/components/layout-wrapper"
import { Button } from "@/components/ui/button"
import useWeb3Forms from "@web3forms/react"
import { useMemo } from "react"
import Instagram from "@/components/logo/Instagram"
import LinkedIn from "@/components/logo/LinkedIn"
import GitHub from "@/components/logo/Github"
import Facebook from "@/components/logo/Facebook"



export default function ContactPage() {
  const accessKey = useMemo(() => process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "", [])
  const { submit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "Portfolio",
      subject: "New Contact Message from your Website",
    },
    onSuccess: (message) => {
      console.log(message)
    },
    onError: (message) => {
      console.log(message)
    },
  })
  return (
    <LayoutWrapper>
      <section className="py-16">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-foreground font-bricolage">Get in touch</h1>
            <p className="text-muted-foreground leading-relaxed">
              I'm always interested in hearing about new projects and opportunities. Whether you're a startup looking to
              build your first product or an established company wanting to improve your web presence, I'd love to help.
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground font-bricolage">Let's work together</h2>
              <p className="text-muted-foreground">
                Drop me a line and let's discuss how we can bring your ideas to life.
              </p>
            </div>

            <form onSubmit={submit} className="grid gap-4 sm:max-w-xl">
              <div className="grid gap-2">
                <label htmlFor="name" className="text-sm text-foreground">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Your name"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm text-foreground">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="you@example.com"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="message" className="text-sm text-foreground">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Tell me a little about your project..."
                />
              </div>
              <div>
                <Button type="submit" className="bg-foreground text-background hover:bg-foreground/90">Send message</Button>
              </div>
            </form>

            <div className="pt-8 space-y-2">
              <p className="text-sm text-muted-foreground">You can also find me on:</p>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/amanksah07/"
                >
                  <Facebook width={30} height={30} />
                </a>
                <a
                  href="https://github.com/amansah77"
                >
                  <GitHub width={30} height={30} />
                </a>
                <a
                  href="https://www.linkedin.com/in/aman-kumar-sah-20204128b/"
                >
                  <LinkedIn width={30} height={30} />
                </a>
                <a
                  href="https://www.instagram.com/aman_sah77/"
                >
                  <Instagram width={30} height={30} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LayoutWrapper>
  )
}
