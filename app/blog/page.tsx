"use client"

import { useMemo, useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Section } from "@/components/section"
import { CTASection } from "@/components/cta-section"
import { PostCard } from "@/components/post-card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search } from "lucide-react"
import { posts } from "@/data/posts"

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  // теги без дубликатов
  const allTags = useMemo(
    () => Array.from(new Set(posts.flatMap((p) => p.tags || []))),
    []
  )

  // сортируем по дате (новые первыми)
  const sorted = useMemo(
    () =>
      [...posts].sort(
        (a, b) => +new Date(b.date) - +new Date(a.date)
      ),
    []
  )

  // фильтрация по поиску и тегам
  const filteredPosts = sorted.filter((post) => {
    const q = searchQuery.trim().toLowerCase()
    const matchesSearch =
      q === "" ||
      post.title.toLowerCase().includes(q) ||
      (post.excerpt || "").toLowerCase().includes(q)

    const matchesTag =
      selectedTag === null || (post.tags || []).includes(selectedTag)

    return matchesSearch && matchesTag
  })

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <Section className="pt-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Статьи</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Полезные материалы о выборе профессии, развитии карьеры и самоопределении
          </p>
        </div>

        {/* Поиск и теги */}
        <div className="max-w-2xl mx-auto mb-12 space-y-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Поиск по статьям..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
              aria-label="Поиск по статьям"
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            <Badge
              variant={selectedTag === null ? "default" : "secondary"}
              className="cursor-pointer"
              onClick={() => setSelectedTag(null)}
            >
              Все темы
            </Badge>
            {allTags.map((tag) => (
              <Badge
                key={tag}
                variant={selectedTag === tag ? "default" : "secondary"}
                className="cursor-pointer"
                onClick={() => setSelectedTag(tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Сетка статей */}
        {filteredPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              По вашему запросу ничего не найдено. Попробуйте изменить критерии поиска.
            </p>
          </div>
        )}
      </Section>

      <CTASection
        title="Нужна персональная консультация?"
        description="Статьи — это хорошо, но индивидуальный подход еще лучше"
        buttonText="Записаться на консультацию"
        buttonHref="/contacts"
      />

      <SiteFooter />
    </div>
  )
}
