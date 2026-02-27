"use client"

import { Button } from "@/components/ui/button"
import { Section } from "@/components/section"

interface CTASectionProps {
  title: string
  description: string
  buttonText: string
  buttonHref?: string
  onClick?: () => void
}

export function CTASection({ title, description, buttonText, buttonHref, onClick }: CTASectionProps) {
  return (
    <Section className="relative overflow-hidden bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-1/4 w-20 h-20 bg-primary/20 rounded-full blur-xl floating-animation"></div>
        <div
          className="absolute bottom-10 right-1/4 w-16 h-16 bg-accent/20 rounded-full blur-lg floating-animation"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute top-1/2 left-10 w-12 h-12 bg-primary/15 rounded-full blur-md floating-animation"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="text-center max-w-2xl mx-auto relative z-10">
        <div className="glass-card p-8 rounded-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance gradient-text">{title}</h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty">{description}</p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground glow-accent hover:scale-105 transition-all duration-300 shimmer"
            asChild={!!buttonHref}
            onClick={onClick}
          >
            {buttonHref ? <a href={buttonHref}>{buttonText}</a> : buttonText}
          </Button>
        </div>
      </div>
    </Section>
  )
}
