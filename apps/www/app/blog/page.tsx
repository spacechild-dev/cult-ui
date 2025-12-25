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
          <Badge variant="outline" className="rounded-full px-2 py-0 h-6 border-black/10 text-[10px] bg-white dark:bg-zinc-900 shadow-sm">
            <Newspaper className="mr-1 size-3 fill-[#D2F583] stroke-1 text-neutral-800" /> Blog
          </Badge>
          <p className="text-muted-foreground mt-4 text-base md:text-lg px-1 font-medium">
            Sharing my thoughts, projects, and what I've learned
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 px-2">
          {posts.length === 0 ? (
            <p className="text-muted-foreground text-center py-12">No blog posts yet.</p>
          ) : (
            posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block no-underline">
                <Card className="group h-full overflow-hidden rounded-2xl border-none p-0 shadow-[0px_1px_1px_0px_rgba(0,_0,_0,_0.05),_0px_1px_1px_0px_rgba(255,_252,_240,_0.5)_inset,_0px_0px_0px_1px_hsla(0,_0%,_100%,_0.1)_inset,_0px_0px_1px_0px_rgba(28,_27,_26,_0.5)] transition-all brightness-100 hover:brightness-105 bg-white dark:bg-zinc-900/50">
                  <div className="flex h-full flex-col pt-5 pb-4">
                    <div className="flex-1 px-5 text-left">
                      <h3 className="text-lg font-bold tracking-tight group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <div className="mt-2 text-sm leading-relaxed tracking-tight text-muted-foreground line-clamp-3 font-normal">
                        {post.description}
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between gap-3 px-5 border-t border-zinc-100 dark:border-zinc-800/50 pt-3">
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] font-mono font-bold text-muted-foreground/60 uppercase tracking-widest">
                          {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                        </span>
                        <div className="flex gap-1.5">
                          {post.tags.slice(0, 3).map(tag => (
                            <span key={tag} className="text-[10px] text-primary/70 font-bold italic">#{tag}</span>
                          ))}
                        </div>
                      </div>
                      <div className="text-[10px] font-bold text-muted-foreground/40 group-hover:text-primary transition-colors duration-300 ease-out flex items-center gap-1 uppercase tracking-tighter">
                        Read More <ArrowUpRight className="size-3" />
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  )
}