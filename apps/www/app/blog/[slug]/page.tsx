import { notFound } from "next/navigation"
import { getAllBlogPosts, getBlogPost } from "@/lib/blog"
import { MDXRemote } from "next-mdx-remote/rsc"
import Link from "next/link"
import { components } from "@/components/blog-mdx-components"
import rehypePrettyCode from "rehype-pretty-code"
import { Badge } from "@/components/ui/badge"
import { Newspaper } from "lucide-react"

export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.description,
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="container max-w-3xl py-12">
      <Link
        href="/blog"
        className="text-sm text-muted-foreground hover:text-foreground mb-8 inline-block transition-colors"
      >
        ← Back to Blog
      </Link>

      <article className="prose prose-neutral dark:prose-invert max-w-none">
        <header className="mb-12 not-prose px-1">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200">
                {post.title}
              </h1>
              <Badge variant="outline" className="rounded-full px-3 py-1 border-black/10 bg-white dark:bg-zinc-900 shadow-sm shrink-0">
                <Newspaper className="mr-2 size-3.5 fill-[#D2F583] stroke-1 text-neutral-800" />
                <span className="font-bold tracking-tight text-neutral-800 dark:text-neutral-200">Post</span>
              </Badge>
            </div>
            
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed border-l-2 border-zinc-200 dark:border-zinc-800 pl-4 py-1 italic">{post.description}</p>
            
            <div className="flex items-center justify-between mt-4 text-sm text-muted-foreground border-t border-b py-4">
              <div className="flex items-center gap-4">
                <time dateTime={post.date} className="font-mono font-bold uppercase tracking-widest text-[10px]">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                {post.author && <span className="font-mono font-bold uppercase tracking-widest text-[10px]">· {post.author}</span>}
              </div>
              
              {post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] text-primary/70 font-bold italic"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </header>

        <div className="mdx-content">
          <MDXRemote 
            source={post.content} 
            components={components}
            options={{
              mdxOptions: {
                rehypePlugins: [
                  [
                    rehypePrettyCode,
                    {
                      theme: "github-light-default",
                    },
                  ],
                ],
              },
            }}
          />
        </div>
      </article>
    </div>
  )
}