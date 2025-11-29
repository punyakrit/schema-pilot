import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

function CallToAction() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="rounded-3xl bg-primary text-primary-foreground px-6 py-16 md:px-16 md:py-20 text-center relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
            <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" />
            </svg>
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Ready to design your database?
          </h2>
          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto">
            Start visualizing your schema today. Free and open source.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/main">
              <Button 
                size="lg" 
                variant="secondary" 
                className="h-12 px-8 text-base font-semibold gap-2 w-full sm:w-auto"
              >
                Start Building Now <ArrowRight className="size-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction

