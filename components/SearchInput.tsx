'use client'

import { Search } from "lucide-react";
import { useRouter } from "next/navigation"
import { useState } from "react";

function SearchInput() {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState("")
  return (
    
    <form>
        <input type="text" />
        <Search />
    </form>
  )
}

export default SearchInput