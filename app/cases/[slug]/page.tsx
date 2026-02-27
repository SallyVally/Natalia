import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Section } from "@/components/section"
import { CTASection } from "@/components/cta-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Quote, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { cases } from "@/data/cases"

interface CasePageProps {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return cases.map((caseItem) => ({
    slug: caseItem.slug,
  }))
}

export default function CasePage({ params }: CasePageProps) {
  const caseItem = cases.find((c) => c.slug === params.slug)

  if (!caseItem) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <Section className="pt-8">
        <div className="max-w-4xl mx-auto">
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/cases" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Назад к кейсам
            </Link>
          </Button>

          <div className="mb-6">
            <div className="flex flex-wrap gap-2 mb-4">
              {caseItem.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-accent/20 text-accent-foreground">
                  {tag}
                </Badge>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{caseItem.title}</h1>
            <p className="text-xl text-muted-foreground text-pretty">{caseItem.summary}</p>
          </div>

          <div className="grid gap-8">
            {/* Timeline */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    Запрос клиента
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-pretty">{caseItem.problem}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    Процесс работы
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-pretty">{caseItem.process}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    Результат
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-pretty">{caseItem.result}</p>
                </CardContent>
              </Card>
            </div>

            {/* Client Quote */}
            {caseItem.clientQuote && (
              <>
                <Separator />
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <Quote className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-lg italic text-pretty mb-2">"{caseItem.clientQuote}"</p>
                        <p className="text-sm text-muted-foreground">— Отзыв клиента</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </>
            )}
          </div>
        </div>
      </Section>

      <CTASection
        title="Похожая ситуация?"
        description="Запишитесь на консультацию, и мы найдем решение для вашего случая"
        buttonText="Записаться на консультацию"
        buttonHref="/contacts"
      />

      <SiteFooter />
    </div>
  )
}
