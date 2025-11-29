"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

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
      "The visual designer emits fresh DDL and Prisma schema. For existing databases, we recommend using Prisma Migrate or an automated backend step to generate safe migration scripts.",
  },
  {
    id: "privacy",
    title: "Where are my credentials stored?",
    body:
      "Never store raw DB credentials in the frontend. Exports will use `env(\"DATABASE_URL\")` placeholders. If you enable server-side generation, credentials must be stored securely on your backend.",
  },
]

export default function CompactAccordion() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Common questions about Schema Pilot and how it works.
          </p>
        </div>

        <div className="w-full">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {ACCORDION_ITEMS.map((item) => (
              <AccordionItem 
                key={item.id} 
                value={item.id} 
                className="border border-border rounded-lg px-4 bg-card"
              >
                <AccordionTrigger className="hover:no-underline py-4 text-base font-medium">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                  {item.body}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
