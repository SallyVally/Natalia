import type React from "react"
import { cn } from "@/lib/utils"

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  style?: React.CSSProperties
}

export function Section({ children, className, id, style }: SectionProps) {
  return (
    <section id={id} style={style} className={cn("py-16 md:py-24", className)}>
      <div className="container mx-auto max-w-screen-xl px-4">{children}</div>
    </section>
  )
}
