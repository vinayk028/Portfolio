"use client"

import { useState, useCallback } from "react"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Experience } from "@/components/sections/Experience"
import { Projects } from "@/components/sections/Projects"
import { Skills } from "@/components/sections/Skills"
import { Contact } from "@/components/sections/Contact"

export default function Page() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeFilter, setActiveFilter] = useState("all")

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query)
  }, [])

  const handleFilterChange = useCallback((filter: string) => {
    setActiveFilter(filter)
  }, [])

  return (
    <main>
      <Hero />
      <About onSearch={handleSearch} onFilterChange={handleFilterChange} />
      <Experience searchQuery={searchQuery} activeFilter={activeFilter} />
      <Projects searchQuery={searchQuery} activeFilter={activeFilter} />
      <Skills />
      <Contact />
    </main>
  )
}
