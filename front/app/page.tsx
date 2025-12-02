import { Navigation } from "@/components/navigation"
import { MovieCard } from "@/components/movie-card"
import { Button } from "@/components/ui/button"
import { Play, TrendingUp, Film } from "lucide-react"

const trendingMovies = [
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
]

const recentMovies = [
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

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[90vh] overflow-hidden perspective-2000">
        <div className="absolute inset-0">
          <img
            src="/cinematic-movie-scene-dark-moody.jpg"
            alt="Featured movie"
            className="h-full w-full object-cover parallax"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        {/* Floating 3D film reel icon */}
        <div className="absolute right-[10%] top-[20%] animate-float opacity-20">
          <Film className="h-64 w-64 text-primary" style={{ transform: "rotateY(30deg) rotateX(20deg)" }} />
        </div>

        <div className="relative mx-auto flex h-full max-w-7xl items-center px-6">
          <div className="max-w-2xl">
            <h1 className="mb-4 text-7xl font-bold leading-tight tracking-tight text-balance animate-in fade-in slide-in-from-left duration-700">
              Discover Your Next
              <span className="block text-primary text-glow-orange">Favorite Movie</span>
            </h1>
            <p className="mb-8 text-xl text-muted-foreground text-pretty animate-in fade-in slide-in-from-left duration-700 delay-150">
              Stream thousands of movies instantly. From timeless classics to the latest releases, find your perfect
              watch tonight.
            </p>
            <div className="flex gap-4 animate-in fade-in slide-in-from-left duration-700 delay-300">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 hover:glow-orange-strong hover:scale-105 transition-all duration-300"
              >
                <Play className="mr-2 h-5 w-5" />
                Start Watching
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="glass border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 bg-transparent"
              >
                Browse Library
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="mx-auto max-w-7xl px-6 py-16 animate-in fade-in duration-700">
        <div className="mb-8 flex items-center gap-3">
          <TrendingUp className="h-6 w-6 text-primary animate-pulse" />
          <h2 className="text-4xl font-bold tracking-tight">Trending Now</h2>
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {trendingMovies.map((movie, index) => (
            <div
              key={movie.title}
              className="animate-in fade-in slide-in-from-bottom duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <MovieCard {...movie} />
            </div>
          ))}
        </div>
      </section>

      {/* Recent Releases Section */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8">
          <h2 className="text-4xl font-bold tracking-tight">Recent Releases</h2>
          <p className="mt-2 text-lg text-muted-foreground">The latest movies added to our collection</p>
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {recentMovies.map((movie, index) => (
            <div
              key={movie.title}
              className="animate-in fade-in slide-in-from-bottom duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <MovieCard {...movie} />
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 glass-strong">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 font-semibold">Hypertube</h3>
              <p className="text-sm text-muted-foreground">Your destination for streaming movies online.</p>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold">Browse</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="transition-colors hover:text-foreground">
                    Trending
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-foreground">
                    New Releases
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-foreground">
                    Top Rated
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold">Account</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="transition-colors hover:text-foreground">
                    Sign In
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-foreground">
                    Sign Up
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-foreground">
                    My Library
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="transition-colors hover:text-foreground">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-foreground">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-foreground">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Hypertube. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
