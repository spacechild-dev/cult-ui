"use client"

import * as React from "react"
import { useLayoutEffect, useRef, useState } from "react"
import { Check, Copy } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"
import { cn } from "@/lib/utils"

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
  const preRef = useRef<HTMLPreElement>(null)
  const [code, setCode] = useState("")
  const [copied, setCopied] = useState(false)

  React.useEffect(() => {
    if (preRef.current) {
      // Extract clean text content for copying
      setCode(preRef.current.innerText)
    }
  }, [children])

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative group my-8 not-prose">
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl border",
          "border-zinc-300 dark:border-zinc-800",
          "bg-[#fdfbf7]/90 dark:bg-zinc-950/90 backdrop-blur-sm shadow-sm",
          className
        )}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-300/50 dark:border-zinc-800/50 bg-zinc-100/50 dark:bg-zinc-900/50">
          <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400 font-bold">
            {language || "code"}
          </div>
          
          <motion.button
            onClick={handleCopy}
            whileTap={{ scale: 0.9 }}
            className={cn(
              "flex items-center gap-1.5 px-2 py-1 text-[10px] font-medium rounded-md",
              "text-zinc-500 dark:text-zinc-400",
              "bg-white/50 dark:bg-zinc-800/50 border border-zinc-200/50 dark:border-zinc-700/50",
              "hover:bg-white dark:hover:bg-zinc-800 transition-colors"
            )}
          >
            <AnimatePresence mode="wait">
              {copied ? (
                <motion.div
                  key="check"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  className="flex items-center gap-1"
                >
                  <Check className="size-3" />
                  <span>Copied</span>
                </motion.div>
              ) : (
                <motion.div
                  key="copy"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  className="flex items-center gap-1"
                >
                  <Copy className="size-3" />
                  <span>Copy</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Code area - Force transparent background to show the container's background */}
        <pre
          ref={preRef}
          className={cn(
            "p-4 text-sm leading-relaxed m-0 overflow-x-auto !bg-transparent",
            "scrollbar-thin scrollbar-thumb-rounded",
            "scrollbar-thumb-zinc-300 dark:scrollbar-thumb-zinc-700",
            className
          )}
          {...props}
        >
          {children}
        </pre>
      </div>
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
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        className
      )}
      {...props}
    />
  ),
}