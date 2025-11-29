'use client'
import { Button } from '@/components/ui/button'
import { ArrowRightIcon, Database, Github, XIcon } from 'lucide-react'
import Link from 'next/link'

function Navbar() {
  return (
    <nav className='fixed top-3 sm:top-5 left-0 right-0 z-50 container mx-auto px-4'>
      <div className='border rounded-full h-14 sm:h-16 border-green-500/80 bg-background/80 backdrop-blur-sm shadow-lg'>
        <div className='flex items-center justify-between h-full px-4 sm:px-6 lg:px-8'>
          <Link href='/' className='flex items-center hover:opacity-80 transition-opacity'>
            <Database className='size-6 sm:size-8 text-green-500' />
          </Link>
          
          <div className='flex items-center gap-2 sm:gap-4'>
            <div className='flex items-center gap-2 sm:gap-3'>
              <Link 
                href='https://github.com/punyakrit/schema-pilot'
                target='_blank'
                rel='noopener noreferrer'
                className='p-1.5 sm:p-2 rounded-full hover:bg-muted transition-colors'
                aria-label='GitHub'
              >
                <Github className='size-4 sm:size-5 text-muted-foreground hover:text-foreground transition-colors' />
              </Link>
              <Link 
                href='https://x.com/punyakrit_22'
                target='_blank'
                rel='noopener noreferrer'
                className='p-1.5 sm:p-2 rounded-full hover:bg-muted transition-colors'
                aria-label='Twitter'
              >
                <XIcon className='size-4 sm:size-5 text-muted-foreground hover:text-foreground transition-colors' />
              </Link>
            </div>
            
            <Link href='/main'>
              <Button 
                variant='default' 
                className='rounded-full gap-1.5 sm:gap-2 bg-green-500 hover:bg-green-600 text-white text-xs sm:text-sm px-3 sm:px-4 h-8 sm:h-9'
              >
                <span className="hidden sm:inline">Get started</span>
                <span className="sm:hidden">Start</span>
                <ArrowRightIcon className='size-3 sm:size-4' />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar