import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Section } from "@/components/section"
import { CTASection } from "@/components/cta-section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Calendar, ArrowLeft } from "lucide-react"
import { posts } from "@/data/posts"
import { mdToHtml } from "@/lib/md"         // ← добавили

interface BlogPostPageProps { params: { slug: string } }

export function generateStaticParams() {
  return posts.map(p => ({ slug: p.slug }))
}

export function generateMetadata({ params }: BlogPostPageProps) {
  const post = posts.find(p => p.slug === params.slug)
  if (!post) return {}
  return {
    title: `${post.title} | Статьи`,
    description: post.excerpt,
       openGraph: {
     title: post.title,
     description: post.excerpt,
     images: post.cover ? [{ url: post.cover }] : [],
   },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = posts.find(p => p.slug === params.slug)
  if (!post) notFound()

  const formattedDate = new Date(post.date).toLocaleDateString("ru-RU", { year: "numeric", month: "long", day: "numeric" })
   const words = (post.content ?? "")
   .replace(/\s+/g, " ")
   .trim()
   .split(" ")
   .filter(Boolean).length
  const readingMins = Math.max(1, Math.round(words / 190))

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <Section className="pt-8">
        <div className="max-w-4xl mx-auto">
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/blog" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" /> Назад к статьям
            </Link>
          </Button>

          <article>
            <header className="mb-8">
              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-4">
                <span className="inline-flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <time dateTime={post.date}>{formattedDate}</time>
                </span>
                <span aria-hidden>•</span>
                <span>{readingMins}&nbsp;мин чтения</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{post.title}</h1>
              {post.excerpt && <p className="text-xl text-muted-foreground mb-6 text-pretty">{post.excerpt}</p>}

              {!!post.tags?.length && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary">{tag}</Badge>
                  ))}
                </div>
              )}

              {post.cover && (
                <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden mb-8">
                  <Image src={post.cover} alt={post.title} fill className="object-cover" priority />
                </div>
              )}
            </header>

            <Separator className="mb-8" />
{/* навигация по статьям */}
<Separator className="my-8" />
{(() => {
  const i = posts.findIndex(p => p.slug === params.slug)
  const prev = i > 0 ? posts[i - 1] : null
  const next = i < posts.length - 1 ? posts[i + 1] : null

  return (
    <div className="flex justify-between gap-4">
      {prev ? (
        <Link
          href={`/blog/${prev.slug}`}
          className="text-[var(--color-lilac-bright)] hover:underline"
        >
          ← {prev.title}
        </Link>
      ) : <span />}
      {next ? (
        <Link
          href={`/blog/${next.slug}`}
          className="text-[var(--color-lilac-bright)] hover:underline"
        >
          {next.title} →
        </Link>
      ) : <span />}
    </div>
  )
})()}

            {/* Рендер Markdown */}
            <div
              className="prose prose-slate prose-lg max-w-none prose-a:text-[var(--color-lilac-bright)]"
              dangerouslySetInnerHTML={{ __html: mdToHtml(post.content) }}
            />
          </article>
        </div>
      </Section>

      <CTASection
        title="Была ли статья полезной?"
        description="Запишитесь на консультацию для получения персональных рекомендаций"
        buttonText="Записаться на консультацию"
        buttonHref="/contacts"
      />

      <SiteFooter />
    </div>
  )
}
