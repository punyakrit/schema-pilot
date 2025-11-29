import React from 'react'
import Link from 'next/link'
import { Github, Twitter } from 'lucide-react'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/40 bg-muted/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-bold text-lg">Schema Pilot</span>
            <p className="text-sm text-muted-foreground">
              Visual database design for modern developers.
            </p>
          </div>
          
          <div className="flex items-center gap-6">
             <Link 
              href="https://github.com/punyakrit/schema-pilot" 
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="size-5" />
            </Link>
            <Link 
              href="https://x.com/punyakrit_22" 
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Twitter className="size-5" />
            </Link>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border/40 text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Schema Pilot. Open source under MIT License.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
