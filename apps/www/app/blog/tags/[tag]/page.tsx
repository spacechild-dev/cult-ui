import Link from "next/link"
import { getBlogPostsByTag, getAllBlogTags } from "@/lib/blog"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  const tags = getAllBlogTags()
  return tags.map((tag) => ({
    tag: encodeURIComponent(tag),
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tag: string }>
}) {
  const { tag } = await params
  const decodedTag = decodeURIComponent(tag)

  return {
    title: `Blog posts tagged with "${decodedTag}"`,
    description: `All blog posts categorized under the tag: ${decodedTag}`,
  }
}

export default async function BlogTagPage({
  params,
}: {
  params: Promise<{ tag: string }>
}) {
  const { tag } = await params
  const decodedTag = decodeURIComponent(tag)
  const posts = getBlogPostsByTag(decodedTag)

  if (posts.length === 0) {
    notFound()
  }

  return (
    <div className="container max-w-3xl py-12">
      <div className="flex flex-col gap-12">
        <div className="px-2 flex flex-col gap-4">
          <Link
            href="/blog"
            className="text-sm font-medium text-muted-foreground hover:text-foreground mb-4 inline-block transition-colors"
          >
            ← Back to all posts
          </Link>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Tagged with <span className="text-primary italic">#{decodedTag}</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 px-2">
          {posts.map((post) => (
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
                    {post.tags.map((t) => (
                      <span
                        key={t}
                        className={`inline-flex items-center rounded-md px-2 py-0.5 text-[10px] font-medium ring-1 ring-inset transition-colors ${
                          t.toLowerCase() === decodedTag.toLowerCase()
                            ? "bg-primary/10 text-primary ring-primary/20"
                            : "bg-muted/50 text-muted-foreground ring-zinc-200/50"
                        }`}
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              </MinimalCard>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
