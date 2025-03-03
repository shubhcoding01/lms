import React from 'react'
import { Button } from './ui/button'
import DarkModeToggle from './DarkModeToggel'

function Header() {
  return (
    
    <header className="sticky top-0 z-10 
       bg-background/80 backdrop-blur-sm border-b border-border">
        <div className='container mx-auto px-4'>
      <DarkModeToggle />
      </div>
    </header>
  )
}

export default Header