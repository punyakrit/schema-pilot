import React from 'react'
import { CheckCircle2 } from 'lucide-react'

function DesignedForDevelopers() {
  const features = [
    'Faster schema planning',
    'Zero mistakes in relations',
    'Clean, production-ready Prisma output',
    'A visual workflow instead of text-heavy schema editing'
  ]

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-10 pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20 lg:pb-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 sm:mb-8 px-4">
            Designed for <span className="text-green-500">developers</span>
          </h2>
          <p className="text-white/70 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed px-4">
            Built for full-stack devs, indie hackers, and teams who want a faster, cleaner way to design their database schema visually.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 max-w-3xl mx-auto px-4 sm:px-0">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-lg hover:bg-white/5 transition-colors duration-200 group"
            >
              <CheckCircle2 className="size-5 text-green-500 mt-0.5 shrink-0 group-hover:scale-110 transition-transform duration-200" />
              <span className="text-white/90 text-sm sm:text-base leading-relaxed">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DesignedForDevelopers

