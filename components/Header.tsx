import React from 'react'
import { Button } from './ui/button'
import DarkModeToggle from './DarkModeToggel'

function Header() {
  return (
    
    <header className="sticky top-0 z-10 
       bg-background/80 backdrop-blur-sm border-b border-border">
      <DarkModeToggle />
    </header>
  )
}

export default Header