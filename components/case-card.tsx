import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Case } from "@/data/cases"

interface CaseCardProps {
  case: Case
}

export function CaseCard({ case: caseItem }: CaseCardProps) {
  return (
    <Card className="glass-card h-full flex flex-col hover:border-[var(--color-lilac-bright)]/30 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
      <CardHeader>
        <div className="flex flex-wrap gap-2 mb-2">
          {caseItem.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="glass-lilac text-white border-transparent">
              {tag}
            </Badge>
          ))}
        </div>
        <CardTitle className="text-xl text-balance">{caseItem.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <p className="text-muted-foreground mb-4 text-pretty flex-1">{caseItem.summary}</p>
        <div className="space-y-3">
          <div>
            <h4 className="font-semibold text-sm mb-1">Запрос:</h4>
            <p className="text-sm text-muted-foreground line-clamp-2">{caseItem.problem}</p>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-1">Результат:</h4>
            <p className="text-sm text-muted-foreground line-clamp-2">{caseItem.result}</p>
          </div>
        </div>
        <Button asChild className="mt-4 w-full bg-transparent" variant="outline">
          <Link href={`/cases/${caseItem.slug}`} className="flex items-center justify-center gap-2">
            Подробнее
            <span className="text-lg">→</span>
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
