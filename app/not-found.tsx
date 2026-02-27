"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Section } from "@/components/section"

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <Section className="text-center">
        <div className="max-w-md mx-auto">
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Страница не найдена</h2>
          <p className="text-muted-foreground mb-8 text-pretty">
            К сожалению, запрашиваемая страница не существует или была перемещена.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/" className="flex items-center gap-2">
                <span className="text-lg">🏠</span>
                На главную
              </Link>
            </Button>
            <Button variant="outline" onClick={() => window.history.back()}>
              <span className="text-lg mr-2">←</span>
              Назад
            </Button>
          </div>
        </div>
      </Section>

      <SiteFooter />
    </div>
  )
}
