import { Navigation } from "@/components/navigation"
import { VideoPlayer } from "@/components/video-player"
import { CommentSection } from "@/components/comment-section"
import { MovieCard } from "@/components/movie-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Plus, Heart, Share2, Clock, Star, Calendar } from "lucide-react"

// Mock movie data
const movieData = {
  id: "1",
  title: "Inception",
  year: "2010",
  rating: "8.8",
  duration: "2h 28min",
  genres: ["Action", "Sci-Fi", "Thriller"],
  director: "Christopher Nolan",
  cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page", "Tom Hardy"],
  description:
    "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
  posterUrl: "/inception-movie-poster.png",
}

const relatedMovies = [
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
    title: "The Matrix",
    year: "1999",
    rating: "8.7",
    imageUrl: "/matrix-movie-poster.png",
  },
  {
    title: "Dune: Part Two",
    year: "2024",
    rating: "8.6",
    imageUrl: "/dune-part-two-poster.png",
  },
]

export default function MovieDetailsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-16">
        {/* Video Player Section */}
        <div className="bg-black">
          <div className="mx-auto max-w-7xl px-6 py-8">
            <VideoPlayer title={movieData.title} />
          </div>
        </div>

        {/* Movie Info Section */}
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Title and Actions */}
              <div className="mb-6">
                <h1 className="mb-3 text-4xl font-bold tracking-tight">{movieData.title}</h1>

                <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{movieData.year}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{movieData.duration}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="font-semibold text-foreground">{movieData.rating}</span>
                  </div>
                </div>

                <div className="mb-6 flex flex-wrap gap-2">
                  {movieData.genres.map((genre) => (
                    <Badge key={genre} variant="secondary" className="bg-secondary/50">
                      {genre}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <Play className="mr-2 h-5 w-5" />
                    Watch Now
                  </Button>
                  <Button size="lg" variant="outline" className="border-border/50 bg-transparent">
                    <Plus className="mr-2 h-5 w-5" />
                    Watchlist
                  </Button>
                  <Button size="lg" variant="outline" className="border-border/50 bg-transparent">
                    <Heart className="h-5 w-5" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-border/50 bg-transparent">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="mb-3 text-xl font-semibold">Overview</h2>
                <p className="leading-relaxed text-muted-foreground text-pretty">{movieData.description}</p>
              </div>

              {/* Cast and Crew */}
              <div className="mb-8 grid gap-6 sm:grid-cols-2">
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">Director</h3>
                  <p className="text-muted-foreground">{movieData.director}</p>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">Cast</h3>
                  <p className="text-muted-foreground">{movieData.cast.join(", ")}</p>
                </div>
              </div>

              {/* Comments */}
              <CommentSection />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-20">
                <img
                  src={movieData.posterUrl || "/placeholder.svg"}
                  alt={movieData.title}
                  className="mb-6 w-full rounded-lg border border-border/50"
                />

                <div className="rounded-lg border border-border/50 bg-card/50 p-4">
                  <h3 className="mb-3 font-semibold">Movie Details</h3>
                  <dl className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Release Year</dt>
                      <dd className="font-medium">{movieData.year}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Duration</dt>
                      <dd className="font-medium">{movieData.duration}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Rating</dt>
                      <dd className="font-medium">{movieData.rating}/10</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Director</dt>
                      <dd className="font-medium">{movieData.director}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          {/* Related Movies */}
          <div className="mt-12">
            <h2 className="mb-6 text-2xl font-bold">More Like This</h2>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
              {relatedMovies.map((movie) => (
                <MovieCard key={movie.title} {...movie} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
