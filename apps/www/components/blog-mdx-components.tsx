"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { CopyButton } from "@/components/copy-button"

interface PreProps extends React.HTMLAttributes<HTMLPreElement> {
  "data-language"?: string
  "data-theme"?: string
}

export function Pre({
  children,
  className,
  "data-language": language,
  "data-theme": theme,
  ...props
}: PreProps) {
  const preRef = React.useRef<HTMLPreElement>(null)
  const [code, setCode] = React.useState("")

  React.useEffect(() => {
    if (preRef.current) {
      setCode(preRef.current.innerText)
    }
  }, [children])

  return (
    <div className="relative group my-6 not-prose">
      {/* Header bar with language and copy button */}
      <div className="flex items-center justify-between px-4 py-1.5 border border-zinc-300/50 rounded-t-xl bg-[#f5f2e9]/80 backdrop-blur-sm">
        <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-bold">
          {language || "code"}
        </div>
        <CopyButton value={code} className="size-6 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200/50 transition-colors" />
      </div>
      {/* Code area */}
      <pre
        ref={preRef}
        className={cn(
          "mb-4 max-h-[650px] overflow-x-auto rounded-b-xl border border-t-0 border-zinc-300/50 bg-[#fdfbf7]/80 backdrop-blur-sm p-4 text-sm sm:text-base",
          className
        )}
        {...props}
      >
        {children}
      </pre>
    </div>
  )
}

export const components = {
  pre: Pre,
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn(
        "mt-2 scroll-m-20 text-4xl font-bold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        "mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0",
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn(
        "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li className={cn("mt-2", className)} {...props} />
  ),
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-zinc-800",
        className
      )}
      {...props}
    />
  ),
}
