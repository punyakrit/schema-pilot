import React from 'react'
import { 
  Layout, 
  Database, 
  FileJson, 
  ArrowRightLeft, 
  ShieldCheck, 
  Zap 
} from 'lucide-react'

function Features() {
  const features = [
    {
      icon: Layout,
      title: "Visual Schema Builder",
      description: "Design your database schema on an infinite canvas. Drag, drop, and connect tables intuitively."
    },
    {
      icon: ArrowRightLeft,
      title: "Relation Management",
      description: "Define 1:1, 1:n, and m:n relationships visually. We handle the foreign keys and join tables automatically."
    },
    {
      icon: Database,
      title: "SQL & Prisma Export",
      description: "Generate production-ready PostgreSQL, MySQL, or SQLite code. Export Prisma schema files instantly."
    },
    {
      icon: FileJson,
      title: "Import Existing Schema",
      description: "Already have a Prisma file? Import it to visualize your structure and continue editing visually."
    },
    {
      icon: ShieldCheck,
      title: "Error Prevention",
      description: "Catch missing fields, invalid types, and broken relations before you ever write a migration."
    },
    {
      icon: Zap,
      title: "Developer Speed",
      description: "Skip the boilerplate. Prototype faster and communicate database changes to your team visually."
    }
  ]

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-muted/30 border-y border-border/40">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight mb-4">
          Everything you need to design better databases
        </h2>
        <p className="text-muted-foreground text-lg">
          Built for full-stack developers who want to move fast without breaking things.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="p-6 rounded-xl bg-card border border-border hover:border-primary/20 transition-colors shadow-sm"
          >
            <div className="size-12 rounded-lg bg-primary/5 flex items-center justify-center mb-4 text-primary">
              <feature.icon className="size-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
