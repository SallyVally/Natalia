"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

type Props = {
  images: string[]              
  ratioW?: number                  
  ratioH?: number                   
  altBase?: string                  
  autoplayMs?: number | null        
}

export default function MobileGallery({
  images,
  ratioW = 3,
  ratioH = 4,
  altBase = "Фото Натальи",
  autoplayMs = null,
}: Props) {
  const [i, setI] = useState(0)
  const n = images.length
  const wrapperRef = useRef<HTMLDivElement>(null)
  const touch = useRef<{x: number; y: number} | null>(null)


  useEffect(() => {
    if (!autoplayMs) return
    const id = setInterval(() => setI((p) => (p + 1) % n), autoplayMs)
    return () => clearInterval(id)
  }, [autoplayMs, n])

  const go = (next: number) => setI((next + n) % n)

 
  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0]
    touch.current = { x: t.clientX, y: t.clientY }
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    if (!touch.current) return
    const t = e.changedTouches[0]
    const dx = t.clientX - touch.current.x
    const dy = t.clientY - touch.current.y
  
    if (Math.abs(dx) > 36 && Math.abs(dx) > Math.abs(dy) * 1.2) {
      go(i + (dx < 0 ? 1 : -1))
    }
    touch.current = null
  }

  const pb = `${(ratioH / ratioW) * 100}%` 

  return (
    <div className="relative rounded-3xl overflow-hidden shadow-lg select-none">
      
      <div
        className="relative w-full"
        style={{ paddingBottom: pb }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          ref={wrapperRef}
          className="absolute inset-0 flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${i * 100}%)` }}
        >
          {images.map((src, idx) => (
            <div key={src} className="relative min-w-full">
              <Image
                src={src}
                alt={`${altBase} ${idx + 1}`}
                fill
                priority={idx === 0}
                sizes="100vw"
                className="object-cover"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

     
      <button
        aria-label="Предыдущая фотография"
        onClick={() => go(i - 1)}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full backdrop-blur bg-white/60 hover:bg-white/80 w-10 h-10 flex items-center justify-center text-slate-800"
      >
        ‹
      </button>
      <button
        aria-label="Следующая фотография"
        onClick={() => go(i + 1)}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full backdrop-blur bg-white/60 hover:bg-white/80 w-10 h-10 flex items-center justify-center text-slate-800"
      >
        ›
      </button>

     
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Перейти к фото ${idx + 1}`}
            onClick={() => go(idx)}
            className={`h-2.5 w-2.5 rounded-full transition-all ${
              i === idx ? "bg-slate-800/80 w-6" : "bg-slate-800/30"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
