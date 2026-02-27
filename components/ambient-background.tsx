import type React from "react"

export function AmbientBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      {/* мягкий фон */}
      <div className="absolute inset-0 bg-ambient" />

      {/* еле заметная фактура */}
      <div className="absolute inset-0 noise-overlay opacity-[0.045]" />
    </div>
  )
}
