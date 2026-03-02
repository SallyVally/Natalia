import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Cormorant_Garamond } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-inter",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-cormorant",
  weight: ["400", "600", "700"],
})

export const metadata: Metadata = {
  title: "Наталья Балышканова - Профориентолог",
  description:
    "Профессиональная помощь в выборе карьеры и профессиональной ориентации. Индивидуальные консультации, тестирование и сопровождение.",
  generator: "v0.app",
  keywords: "профориентация, карьера, консультации, профессия, выбор специальности",
  openGraph: {
    title: "Наталья Балышканова - Профориентолог",
    description: "Профессиональная помощь в выборе карьеры и профессиональной ориентации",
    type: "website",
    locale: "ru_RU",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="font-sans antialiased">
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}
