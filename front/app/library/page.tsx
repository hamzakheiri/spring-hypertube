"use client"

import { Navigation } from "@/components/navigation"
import { MovieCard } from "@/components/movie-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, Heart, Bookmark } from "lucide-react"

const watchHistory = [
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
]

const favorites = [
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
]

const watchlist = [
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
]

export default function LibraryPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-16">
        <div className="mx-auto max-w-7xl px-6 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="mb-2 text-4xl font-bold tracking-tight">My Library</h1>
            <p className="text-muted-foreground">Your personal collection of movies</p>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="history" className="w-full">
            <TabsList className="mb-8 bg-secondary/50">
              <TabsTrigger value="history" className="gap-2">
                <Clock className="h-4 w-4" />
                Watch History
              </TabsTrigger>
              <TabsTrigger value="favorites" className="gap-2">
                <Heart className="h-4 w-4" />
                Favorites
              </TabsTrigger>
              <TabsTrigger value="watchlist" className="gap-2">
                <Bookmark className="h-4 w-4" />
                Watchlist
              </TabsTrigger>
            </TabsList>

            <TabsContent value="history" className="space-y-6">
              <div>
                <h2 className="mb-4 text-xl font-semibold">Recently Watched</h2>
                <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                  {watchHistory.map((movie) => (
                    <MovieCard key={movie.title} {...movie} />
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="favorites" className="space-y-6">
              <div>
                <h2 className="mb-4 text-xl font-semibold">Your Favorite Movies</h2>
                <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                  {favorites.map((movie) => (
                    <MovieCard key={movie.title} {...movie} />
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="watchlist" className="space-y-6">
              <div>
                <h2 className="mb-4 text-xl font-semibold">Movies to Watch</h2>
                <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                  {watchlist.map((movie) => (
                    <MovieCard key={movie.title} {...movie} />
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
