'use client'

import { useRouter } from "next/navigation"
import { useState } from "react";

function SearchInput() {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState("")
  return (
    
    <div>SearchInput</div>
  )
}

export default SearchInput