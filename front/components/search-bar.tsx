"use client"

import type React from "react"

import { useState } from "react"
import { Search, SlidersHorizontal } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface SearchBarProps {
  onSearch: (query: string) => void
  onToggleFilters: () => void
}

export function SearchBar({ onSearch, onToggleFilters }: SearchBarProps) {
  const [query, setQuery] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(query)
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search for movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="bg-secondary/50 border-border/50 pl-10 h-12"
        />
      </div>
      <Button
        type="button"
        variant="outline"
        size="icon"
        className="h-12 w-12 border-border/50 bg-transparent"
        onClick={onToggleFilters}
      >
        <SlidersHorizontal className="h-5 w-5" />
      </Button>
      <Button type="submit" className="h-12 bg-primary text-primary-foreground hover:bg-primary/90">
        Search
      </Button>
    </form>
  )
}
