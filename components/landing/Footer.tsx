import React from 'react'
import { Separator } from '@/components/ui/separator'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-16 sm:mt-20 lg:mt-24">
      <Separator className="bg-white/10" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-12 lg:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <p className="text-white/60 text-xs sm:text-sm">
              © {currentYear} Schema Pilot. Built for developers who love clean code.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

