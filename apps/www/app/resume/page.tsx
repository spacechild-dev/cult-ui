import Link from "next/link"
import { siteConfig } from "@/config/site"

export const metadata = {
  title: "Career",
  description: "Professional experience and skills in digital performance marketing and media management.",
}

export default function ResumePage() {
  return (
    <div className="container max-w-4xl py-12">
      <div className="flex flex-col gap-12">
        {/* Header */}
        <header className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold tracking-tight">Career</h1>
          <p className="text-xl text-muted-foreground">
            Digital Performance and Media Account Manager
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <a href="mailto:hello@dagkanbayramoglu.com" className="hover:text-foreground transition-colors">
              hello@dagkanbayramoglu.com
            </a>
            <span>·</span>
            <Link
              href="https://github.com/spacechild-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              GitHub
            </Link>
            <span>·</span>
            <Link
              href="https://www.linkedin.com/in/dagkanbayramoglu/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              LinkedIn
            </Link>
          </div>
        </header>

        {/* Professional Summary */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Professional Summary</h2>
          <p className="text-muted-foreground leading-relaxed">
            Highly accomplished and results-driven Digital Marketing professional with extensive experience in performance marketing, team leadership, and strategic campaign management. Proven ability to drive ROI, optimize media budgets, and coordinate cross-functional teams to achieve operational alignment and business growth. Expertise spans multi-platform campaign execution, analytics, automation, and CRM insights, with a strong focus on mentorship, development, and process improvement.
          </p>
        </section>

        {/* Experience */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Experience</h2>
          <div className="flex flex-col gap-10">
            {/* Current Role */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                <div>
                  <h3 className="text-lg font-semibold">Digital Performance and Media Account Manager</h3>
                  <p className="text-primary font-medium">Digital Performance Agency</p>
                </div>
                <span className="text-sm text-muted-foreground bg-muted px-2 py-0.5 rounded-md">Oct 2025 – Present</span>
              </div>
              <ul className="list-disc list-outside ml-4 text-muted-foreground space-y-1.5 mt-2 text-sm">
                <li>Managing performance and media operations across multiple clients and verticals.</li>
                <li>Coordinating strategy, reporting, and execution for performance marketing workflows.</li>
                <li>Collaborating with creative, analytics, and technical teams to ensure operational alignment.</li>
              </ul>
            </div>

            {/* Previous Role: Team Lead */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                <div>
                  <h3 className="text-lg font-semibold">Performance Marketing Team Lead</h3>
                  <p className="text-primary font-medium">ROI-Driven Digital Marketing Agency</p>
                </div>
                <span className="text-sm text-muted-foreground bg-muted px-2 py-0.5 rounded-md">Nov 2024 – Oct 2025</span>
              </div>
              <ul className="list-disc list-outside ml-4 text-muted-foreground space-y-1.5 mt-2 text-sm">
                <li>Led a team of six with focus on mentorship, coordination, and performance marketing execution.</li>
                <li>Provided hands-on leadership to support, unblock, and upskill the team without micromanaging.</li>
                <li>Managed multi-platform campaigns (Google Ads, Meta, Criteo, TikTok, LinkedIn) and optimized media budgets.</li>
                <li>Built dashboards via Looker Studio and delivered CRM insights through automated reporting pipelines.</li>
                <li>Audited and improved tracking and attribution setups; supported CRM and offline conversion integrations.</li>
              </ul>
            </div>

            {/* Sr. Executive */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                <div>
                  <h3 className="text-lg font-semibold">Sr. Performance Marketing Executive</h3>
                  <p className="text-primary font-medium">ROI-Driven Digital Marketing Agency</p>
                </div>
                <span className="text-sm text-muted-foreground bg-muted px-2 py-0.5 rounded-md">Feb 2024 – Oct 2024</span>
              </div>
              <ul className="list-disc list-outside ml-4 text-muted-foreground space-y-1.5 mt-2 text-sm">
                <li>Owned end-to-end campaign execution and reporting across performance platforms.</li>
                <li>Provided mentorship and hands-on guidance to junior team members.</li>
                <li>Supported analytics, automation, and technical teams in measurement workflows.</li>
              </ul>
            </div>

            {/* Previous Role: Team Lead 2 */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                <div>
                  <h3 className="text-lg font-semibold">Digital Marketing Team Lead</h3>
                  <p className="text-primary font-medium">Digital Marketing and Advertising Agency</p>
                </div>
                <span className="text-sm text-muted-foreground bg-muted px-2 py-0.5 rounded-md">Apr 2023 – Feb 2024</span>
              </div>
              <ul className="list-disc list-outside ml-4 text-muted-foreground space-y-1.5 mt-2 text-sm">
                <li>Provided strategic direction for a five-person marketing team.</li>
                <li>Facilitated 1:1s focused on performance, growth, and operational support.</li>
                <li>Managed workload distribution, performance tracking, and operational efficiency.</li>
              </ul>
            </div>

            {/* Specialist */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                <div>
                  <h3 className="text-lg font-semibold">Digital Marketing Specialist</h3>
                  <p className="text-primary font-medium">Digital Marketing and Advertising Agency</p>
                </div>
                <span className="text-sm text-muted-foreground bg-muted px-2 py-0.5 rounded-md">Apr 2023 – Apr 2024</span>
              </div>
              <ul className="list-disc list-outside ml-4 text-muted-foreground space-y-1.5 mt-2 text-sm">
                <li>Managed full-funnel campaigns across Google Ads, Meta Ads, Criteo, and LinkedIn.</li>
                <li>Built automated dashboards in Looker Studio and designed funnel-based campaign structures.</li>
                <li>Optimized tracking setups such as pixels, tags, and conversion events.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Certifications</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ul className="list-disc list-outside ml-4 text-muted-foreground space-y-1 text-sm font-medium">
              <li>Criteo Programmatic Campaign Manager</li>
              <li>Criteo Programmatic Advertising Professional</li>
              <li>Meta Certified Digital Marketing Associate</li>
              <li>Google Ads Search / Display / Video</li>
            </ul>
            <ul className="list-disc list-outside ml-4 text-muted-foreground space-y-1 text-sm font-medium">
              <li>Google Ads Shopping / App</li>
              <li>Apple Search Ads</li>
            </ul>
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Skills & Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-3">Performance Marketing</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-muted px-2.5 py-1 rounded-md text-xs font-medium border border-border">Google Ads</span>
                <span className="bg-muted px-2.5 py-1 rounded-md text-xs font-medium border border-border">Meta Ads</span>
                <span className="bg-muted px-2.5 py-1 rounded-md text-xs font-medium border border-border">Criteo</span>
                <span className="bg-muted px-2.5 py-1 rounded-md text-xs font-medium border border-border">TikTok Ads</span>
                <span className="bg-muted px-2.5 py-1 rounded-md text-xs font-medium border border-border">LinkedIn Ads</span>
                <span className="bg-muted px-2.5 py-1 rounded-md text-xs font-medium border border-border">Apple Search Ads</span>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Analytics & Automation</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-muted px-2.5 py-1 rounded-md text-xs font-medium border border-border">GA4</span>
                <span className="bg-muted px-2.5 py-1 rounded-md text-xs font-medium border border-border">GTM</span>
                <span className="bg-muted px-2.5 py-1 rounded-md text-xs font-medium border border-border">Looker Studio</span>
                <span className="bg-muted px-2.5 py-1 rounded-md text-xs font-medium border border-border">Python</span>
                <span className="bg-muted px-2.5 py-1 rounded-md text-xs font-medium border border-border">JavaScript</span>
                <span className="bg-muted px-2.5 py-1 rounded-md text-xs font-medium border border-border">Make / Zapier</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}