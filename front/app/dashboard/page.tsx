"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { SearchBar } from "@/components/search-bar"
import { FilterPanel } from "@/components/filter-panel"
import { MovieCard } from "@/components/movie-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const allMovies = [
  {
    title: "Inception",
    year: "2010",
    rating: "8.8",
    imageUrl: "/inception-movie-poster.png",
  },
  {
    title: "The Dark Knight",
    year: "2008",
    rating: "9.0",
    imageUrl: "/dark-knight-poster.png",
  },
  {
    title: "Interstellar",
    year: "2014",
    rating: "8.7",
    imageUrl: "/interstellar-movie-poster.jpg",
  },
  {
    title: "Pulp Fiction",
    year: "1994",
    rating: "8.9",
    imageUrl: "/pulp-fiction-poster.png",
  },
  {
    title: "The Matrix",
    year: "1999",
    rating: "8.7",
    imageUrl: "/matrix-movie-poster.png",
  },
  {
    title: "Goodfellas",
    year: "1990",
    rating: "8.7",
    imageUrl: "/goodfellas-poster.png",
  },
  {
    title: "Dune: Part Two",
    year: "2024",
    rating: "8.6",
    imageUrl: "/dune-part-two-poster.png",
  },
  {
    title: "Oppenheimer",
    year: "2023",
    rating: "8.5",
    imageUrl: "/images/posters/oppenheimer-poster.png",
  },
  {
    title: "The Batman",
    year: "2022",
    rating: "7.9",
    imageUrl: "/images/posters/the-batman-poster.png",
  },
  {
    title: "Everything Everywhere",
    year: "2022",
    rating: "8.0",
    imageUrl: "/eeaao-poster.png",
  },
  {
    title: "Top Gun: Maverick",
    year: "2022",
    rating: "8.3",
    imageUrl: "/top-gun-maverick-inspired-poster.png",
  },
  {
    title: "Spider-Man: No Way Home",
    year: "2021",
    rating: "8.2",
    imageUrl: "/spiderman-no-way-home-poster.jpg",
  },
]

export default function DashboardPage() {
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    console.log("[v0] Searching for:", query)
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-16">
        <div className="mx-auto max-w-7xl px-6 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="mb-2 text-4xl font-bold tracking-tight">Discover Movies</h1>
            <p className="text-muted-foreground">Search and filter through thousands of movies</p>
          </div>

          {/* Search Bar */}
          <div className="mb-8">
            <SearchBar onSearch={handleSearch} onToggleFilters={() => setFiltersOpen(!filtersOpen)} />
          </div>

          {/* Content with Filters */}
          <div className="flex gap-6">
            {/* Main Content */}
            <div className="flex-1">
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="mb-6 bg-secondary/50">
                  <TabsTrigger value="all">All Movies</TabsTrigger>
                  <TabsTrigger value="trending">Trending</TabsTrigger>
                  <TabsTrigger value="new">New Releases</TabsTrigger>
                  <TabsTrigger value="top">Top Rated</TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="space-y-6">
                  <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {allMovies.map((movie) => (
                      <MovieCard key={movie.title} {...movie} />
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="trending" className="space-y-6">
                  <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {allMovies.slice(0, 6).map((movie) => (
                      <MovieCard key={movie.title} {...movie} />
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="new" className="space-y-6">
                  <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {allMovies.slice(6).map((movie) => (
                      <MovieCard key={movie.title} {...movie} />
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="top" className="space-y-6">
                  <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {allMovies
                      .sort((a, b) => Number.parseFloat(b.rating) - Number.parseFloat(a.rating))
                      .map((movie) => (
                        <MovieCard key={movie.title} {...movie} />
                      ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Filter Panel */}
            <FilterPanel isOpen={filtersOpen} onClose={() => setFiltersOpen(false)} />
          </div>
        </div>
      </div>
    </div>
  )
}
