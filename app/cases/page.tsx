import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Section } from "@/components/section"
import { CTASection } from "@/components/cta-section"
import { CaseCard } from "@/components/case-card"
import { cases } from "@/data/cases"

export default function CasesPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <Section className="pt-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Кейсы</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Реальные истории клиентов, которые нашли свой путь с моей помощью
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {cases.map((caseItem) => (
            <CaseCard key={caseItem.slug} case={caseItem} />
          ))}
        </div>
      </Section>

      <CTASection
        title="Хотите стать героем следующего кейса?"
        description="Запишитесь на консультацию и начните свой путь к реализации профессионального призвания"
        buttonText="Записаться на консультацию"
        buttonHref="/contacts"
      />

      <SiteFooter />
    </div>
  )
}
