import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Post } from "@/data/posts"

interface PostCardProps {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString("ru-RU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <Link
      href={`/blog/${post.slug}`}
      aria-label={`Открыть статью: ${post.title}`}
      className="block group h-full"
    >
      <Card className="h-full flex flex-col overflow-hidden glass-card hover:glass-strong transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:border-[var(--color-lilac-bright)]/30">
        {post.cover && (
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={post.cover || "/placeholder.svg"}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        )}

        <CardHeader className="pb-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <span aria-hidden className="text-lg">📅</span>
            <time dateTime={post.date}>{formattedDate}</time>
          </div>
          <h3 className="font-serif text-xl font-semibold text-balance">
            {post.title}
          </h3>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col">
          {post.excerpt && (
            <p className="text-muted-foreground mb-4 text-pretty flex-1">
              {post.excerpt}
            </p>
          )}

          {!!post.tags?.length && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="glass bg-primary/20 text-primary hover:glow-accent transition-all duration-300"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  )
}
