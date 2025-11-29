'use client'
import { Button } from '@/components/ui/button'
import { ArrowRightIcon, Database, Github, TwitterIcon } from 'lucide-react'
import Link from 'next/link'

function Navbar() {
  return (
    <nav className='fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between'>
        <Link href='/' className='flex items-center gap-2 hover:opacity-80 transition-opacity'>
          <div className="size-8 bg-primary text-primary-foreground flex items-center justify-center rounded-lg">
            <Database className='size-5' />
          </div>
          <span className="font-bold text-lg tracking-tight">Schema Pilot</span>
        </Link>
        
        <div className='flex items-center gap-4'>
          <div className=' items-center gap-2 hidden sm:flex'>
            <Link 
              href='https://github.com/punyakrit/schema-pilot'
              target='_blank'
              rel='noopener noreferrer'
              className='p-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors'
              aria-label='GitHub'
            >
              <Github className='size-5' />
            </Link>
            <Link 
              href='https://x.com/punyakrit_22'
              target='_blank'
              rel='noopener noreferrer'
              className='p-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors'
              aria-label='Twitter'
            >
              <TwitterIcon className='size-5' />
            </Link>
          </div>
          
          <Link href='/main'>
            <Button 
              size="sm"
              className='rounded-md gap-2 font-medium'
            >
              Start Designing
              <ArrowRightIcon className='size-4' />
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
