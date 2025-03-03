import React from 'react'
import { Button } from './ui/button'
import DarkModeToggle from './DarkModeToggel'
import Link from 'next/link'
import { BookOpen } from 'lucide-react'
import { SignedIn } from '@clerk/nextjs'

function Header() {
  return (
    
    <header className="sticky top-0 z-10 
       bg-background/80 backdrop-blur-sm border-b border-border">
        <div className='container mx-auto px-4'>
          <div className='flex h-16 items-center justify-between gap-4'>
            
            {/* left */}
            <div className='flex  items-center gap-4'>
              <Link 
                href='/'
                prefetch={false}
                className='flex items-center space-x-2 hover:opacity-90 transition-opacity'
                >
              <BookOpen className='h-6 w-6 text-primary' />
              <span className='text-xl font-bold bg-gradient-to-r from-primary/90 to-primary bg-clip-text text-transparent'>
              Bookshelf
              </span>
              </Link>
              {/* <SearchInput />    */}
            </div>
            {/* right */}
            <div className='flex h-16 items-center md-space-x-2'>
              <nav>
                <SignedIn>
                  <Link href='/myCourses'>
                  </Link>
                  </SignedIn>
              </nav>
            </div>
          </div>
        <DarkModeToggle />
        </div>
    </header>
  )
}

export default Header