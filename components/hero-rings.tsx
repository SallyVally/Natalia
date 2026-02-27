'use client'

import { useEffect, useRef } from 'react'

export default function HeroRings() {
  const layerRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = layerRef.current?.parentElement as HTMLElement | null
    const target = document.querySelector<HTMLElement>('[data-hero-img]')
    const ring = ringRef.current
    if (!section || !target || !ring) return

    const readPx = (name: string, fallback = 0) => {
      const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim()
      const n = parseFloat(v || `${fallback}`)
      return Number.isFinite(n) ? n : fallback
    }

    const place = () => {
      const sec = section.getBoundingClientRect()
      const t = target.getBoundingClientRect()
      const cx = t.left + t.width / 2 - sec.left
      const cy = t.top + t.height / 2 - sec.top
      const ox = readPx('--ring-ofs-x', 0)  // ← сдвиг вправо/влево (px)
      const oy = readPx('--ring-ofs-y', 0)  // ← сдвиг вниз/вверх  (px)

      ring.style.left = `${cx + ox}px`
      ring.style.top  = `${cy + oy}px`
      ring.style.transform = 'translate(-50%, -50%)' // базовое центрирование
    }

    place()
    const ro = new ResizeObserver(place)
    ro.observe(target)
    window.addEventListener('resize', place)

    // мягкий параллакс (по желанию можно убрать)
    let raf = 0
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        const y = window.scrollY
        ring.style.transform = `translate(-50%, -50%) translate3d(0, ${y * 0.10}px, 0)`
        raf = 0
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => {
      ro.disconnect()
      window.removeEventListener('resize', place)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  // z-[15] — между фото (z-10) и стеклом (z-20)
return (
   <div ref={layerRef} className="pointer-events-none absolute inset-0 z-[11] hidden lg:block">
      <div ref={ringRef} className="golden-circle-main" />
    </div>
  )
}
