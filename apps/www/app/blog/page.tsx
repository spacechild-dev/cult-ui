import Link from "next/link"
import { getAllBlogPosts } from "@/lib/blog"
import { StickerIcon, Newspaper, ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import {
  MinimalCard,
  MinimalCardDescription,
  MinimalCardTitle,
} from "@/registry/default/ui/minimal-card"
import { Card } from "@/components/ui/card"

export const metadata = {
  title: "Blog",
  description: "Sharing my thoughts, projects, and what I've learned",
}

export default function BlogPage() {
  const posts = getAllBlogPosts()

  return (
    <div className="container max-w-3xl py-12">
      <div className="flex flex-col gap-12">
        <div className="px-2">
          <h1 className="text-3xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200">Blog</h1>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 px-2">
          {posts.length === 0 ? (
            <p className="text-muted-foreground text-center py-12">No blog posts yet.</p>
          ) : (
            posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="block no-underline group h-full">
                <MinimalCard className="relative p-2 no-underline shadow-sm transition-colors bg-card hover:bg-muted/50 text-left h-full flex flex-col min-h-[280px]">
                  <div className="px-4 pt-6 pb-6 flex-grow flex flex-col gap-3">
                    <time className="text-[10px] font-mono font-bold text-muted-foreground/60 uppercase tracking-widest" dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                    </time>
                    <MinimalCardTitle className="text-lg font-bold leading-tight group-hover:text-primary transition-colors text-left px-0 mt-0">
                      {post.title}
                    </MinimalCardTitle>
                    <MinimalCardDescription className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-normal line-clamp-4 text-left px-0">
                      {post.description}
                    </MinimalCardDescription>
                    <div className="flex flex-wrap gap-2 mt-auto pt-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-md bg-muted/50 px-2 py-0.5 text-[10px] font-medium text-muted-foreground ring-1 ring-inset ring-zinc-200/50"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </MinimalCard>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
