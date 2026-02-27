"use client"

import type React from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

type RevealProps = {
  children: React.ReactNode
  className?: string
  delay?: number
}

/**
 * Лёгкая анимация появления при скролле.
 * Ненавязчиво «оживляет» страницы без ощущения "цирка".
 */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 14 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
      transition={{ duration: 0.55, ease: [0.21, 0.61, 0.35, 1], delay }}
    >
      {children}
    </motion.div>
  )
}
