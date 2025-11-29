"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"

const ACCORDION_ITEMS = [
  {
    id: "support",
    title: "Which databases are supported?",
    body:
      "We generate Prisma + SQL compatible with PostgreSQL, MySQL, and SQLite. Prisma-native types are output; DB-native types are selected based on your datasource choice.",
  },
  {
    id: "relations",
    title: "How are relationships handled?",
    body:
      "Create edges visually. The UI auto-creates foreign-key columns, enforces type compatibility, and offers multiplicity (1:1, 1:N, N:M). You can override FK names and cascade rules in the relation modal.",
  },
  {
    id: "export",
    title: "What export options are available?",
    body:
      "Export a ready-to-use `schema.prisma` file, SQL DDL for fresh DBs, and a JSON model snapshot for re-importing. Download or copy to clipboard with one click.",
  },
  {
    id: "migrations",
    title: "Does it handle migrations for existing DBs?",
    body:
      "The visual designer emits fresh DDL and Prisma schema. For existing databases, we recommend using Prisma Migrate or an automated backend step to generate safe migration scripts — the UI will show changed lines so you can review before applying.",
  },
  {
    id: "privacy",
    title: "Where are my credentials stored?",
    body:
      "Never store raw DB credentials in the frontend. Exports will use `env(\"DATABASE_URL\")` placeholders. If you enable server-side generation, credentials must be stored securely on your backend (not the browser).",
  },
]

export default function CompactAccordion({ className = "" }: { className?: string }) {
  return (
    <section
      aria-label="FAQ"
      className={`container mx-auto px-4 sm:px-6 lg:px-10 pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20 lg:pb-24 ${className}`}
    >
      <div className="max-w-3xl mx-auto">
        <div className="space-y-3 mb-10 sm:mb-12 text-center px-4">
          <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold">Frequently Asked Questions
          </p>
        </div>

        <div className="bg-white/5 rounded-lg backdrop-blur-sm border border-green-500/20">
          <Accordion type="single" collapsible className="w-full">
            {ACCORDION_ITEMS.map((item, index) => (
              <div key={item.id}>
                <AccordionItem value={item.id} className="border-none">
                  <AccordionTrigger className="px-5 sm:px-6 lg:px-8 py-5 sm:py-6 hover:no-underline hover:bg-green-500/10 focus-visible:ring-green-500/50 focus-visible:ring-2 [&[data-state=open]]:bg-green-500/10 transition-colors [&>svg]:text-green-500">
                    <span className="font-medium text-white/90 text-sm sm:text-base pr-4 text-left">
                      {item.title}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-5 sm:px-6 lg:px-8 pb-5 sm:pb-6 text-sm sm:text-base text-white/70 leading-relaxed">
                    {item.body}
                  </AccordionContent>
                </AccordionItem>
                {index < ACCORDION_ITEMS.length - 1 && (
                  <Separator className="bg-green-500/20" />
                )}
              </div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

