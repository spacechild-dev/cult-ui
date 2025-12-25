import Link from "next/link"
import Image from "next/image"
import { StickerIcon, ShieldCheck, Flame } from "lucide-react"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { Badge } from "@/components/ui/badge"
import {
  MinimalCard,
  MinimalCardDescription,
  MinimalCardTitle,
} from "@/registry/default/ui/minimal-card"
import { getAllProjects } from "@/lib/projects"

export const metadata = {
  title: "Projects",
  description: "A collection of my web apps, tools, and experiments.",
}

export default function ProjectsPage() {
  const projects = getAllProjects()

  return (
    <div className="container max-w-3xl py-12">
      <div className="flex flex-col gap-12">
        <div className="px-2 flex items-center gap-3">
          <h1 className="text-3xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200">Projects</h1>
          <Badge variant="outline" className="rounded-full px-3 py-1 border-black/10 text-xs bg-white dark:bg-zinc-900 shadow-sm">
            <StickerIcon className="mr-2 size-3.5 fill-[#A3C0E0] stroke-1 text-neutral-800" />
            <span className="font-bold tracking-tight text-neutral-800 dark:text-neutral-200">Project Manifest</span>
          </Badge>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 px-2">
          {projects.map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`} className="block no-underline group h-full">
              <MinimalCard className="relative p-2 no-underline shadow-sm transition-colors bg-card hover:bg-muted/50 text-left h-full flex flex-col min-h-[320px]">
                <div
                  className={cn(
                    "relative aspect-[16/10] w-full overflow-hidden rounded-[18px] shrink-0",
                    "shadow-[0px_1px_1px_0px_rgba(0,0,0,0.05),0px_1px_1px_0px_rgba(255,252,240,0.5)_inset,0px_0px_0px_1px_hsla(0,0%,100%,0.1)_inset,0px_0px_1px_0px_rgba(28,27,26,0.5)]"
                  )}
                >
                  {project.img ? (
                    <Image 
                      src={project.img} 
                      alt={project.title} 
                      fill 
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-950 flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
                        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                          <pattern id="grid-projects-listing" width="10" height="10" patternUnits="userSpaceOnUse">
                            <circle cx="1" cy="1" r="1" fill="currentColor" />
                          </pattern>
                          <rect width="100" height="100" fill="url(#grid-projects-listing)" />
                        </svg>
                      </div>
                      {project.slug === 'flow-otp' ? (
                        <div className="relative flex flex-col items-center gap-4 py-8 scale-75 text-center">
                          <div className="relative">
                            <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-2xl animate-pulse" />
                            <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl bg-white dark:bg-zinc-900 shadow-2xl border border-zinc-200 dark:border-zinc-800 rotate-12 group-hover:rotate-0 transition-transform duration-500">
                              <ShieldCheck className="h-10 w-10 text-blue-500" />
                            </div>
                          </div>
                          <span className="text-[10px] font-mono font-bold text-zinc-500 tracking-widest uppercase text-center leading-tight">Secure Token Manager</span>
                        </div>
                      ) : (
                        <Flame className="h-12 w-12 text-zinc-300 dark:text-zinc-700" />
                      )}
                    </div>
                  )}
                  <div className="absolute inset-0 rounded-[16px] pointer-events-none shadow-[0px_0px_0px_1px_rgba(0,0,0,.07),0px_0px_0px_3px_#fff,0px_0px_0px_4px_rgba(0,0,0,.08)] dark:shadow-[0px_0px_0px_1px_rgba(0,0,0,.07),0px_0px_0px_3px_rgba(100,100,100,0.3),0px_0px_0px_4px_rgba(0,0,0,.08)]" />
                </div>

                <div className="px-2 pt-6 pb-6 flex-grow flex flex-col gap-3">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-muted/50 border border-zinc-200/50 dark:border-zinc-800/50 shadow-sm">
                      {project.slug === 'spotify-mixtapekit' ? <Icons.spotify className="h-4 w-4 text-green-500" /> : <ShieldCheck className="h-4 w-4 text-blue-500" />}
                    </div>
                    <MinimalCardTitle className="text-lg font-bold leading-tight group-hover:text-primary transition-colors text-left">
                      {project.title}
                    </MinimalCardTitle>
                  </div>
                  <MinimalCardDescription className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-4 text-left">
                    {project.description}
                  </MinimalCardDescription>
                  <div className="flex flex-wrap gap-2 mt-auto pt-4">
                    {project.tags.slice(0, 3).map((tag) => (
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
          ))}
        </div>
      </div>
    </div>
  )
}