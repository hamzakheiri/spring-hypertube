import { Navigation } from "@/components/navigation"
import { MovieCard } from "@/components/movie-card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Settings, Calendar, Film, Heart, Clock } from "lucide-react"
import Link from "next/link"

const userData = {
  name: "Alex Johnson",
  username: "@alexj",
  email: "alex.johnson@example.com",
  bio: "Film enthusiast and cinephile. Love exploring different genres and discovering hidden gems.",
  avatar: "/placeholder.svg?height=120&width=120",
  joinDate: "January 2024",
  stats: {
    moviesWatched: 247,
    favorites: 42,
    watchlist: 18,
    hoursWatched: 523,
  },
}

const recentlyWatched = [
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
]

const favoriteMovies = [
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
]

export default function ProfilePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-16">
        <div className="mx-auto max-w-7xl px-6 py-8">
          {/* Profile Header */}
          <div className="mb-8 rounded-lg border border-border/50 bg-card/50 p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                <Avatar className="h-24 w-24 border-2 border-primary/50">
                  <AvatarImage src={userData.avatar || "/placeholder.svg"} />
                  <AvatarFallback className="text-2xl">AJ</AvatarFallback>
                </Avatar>

                <div className="flex-1">
                  <h1 className="mb-1 text-3xl font-bold tracking-tight">{userData.name}</h1>
                  <p className="mb-2 text-muted-foreground">{userData.username}</p>
                  <p className="mb-3 max-w-2xl leading-relaxed text-muted-foreground text-pretty">{userData.bio}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Joined {userData.joinDate}</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <Link href="/profile/edit">
                  <Button variant="outline" className="border-border/50 bg-transparent">
                    Edit Profile
                  </Button>
                </Link>
                <Link href="/profile/settings">
                  <Button variant="outline" size="icon" className="border-border/50 bg-transparent">
                    <Settings className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-6 grid grid-cols-2 gap-4 border-t border-border/50 pt-6 sm:grid-cols-4">
              <div className="text-center">
                <div className="mb-1 flex items-center justify-center gap-2">
                  <Film className="h-5 w-5 text-primary" />
                  <span className="text-2xl font-bold">{userData.stats.moviesWatched}</span>
                </div>
                <p className="text-sm text-muted-foreground">Movies Watched</p>
              </div>
              <div className="text-center">
                <div className="mb-1 flex items-center justify-center gap-2">
                  <Heart className="h-5 w-5 text-primary" />
                  <span className="text-2xl font-bold">{userData.stats.favorites}</span>
                </div>
                <p className="text-sm text-muted-foreground">Favorites</p>
              </div>
              <div className="text-center">
                <div className="mb-1 flex items-center justify-center gap-2">
                  <Film className="h-5 w-5 text-primary" />
                  <span className="text-2xl font-bold">{userData.stats.watchlist}</span>
                </div>
                <p className="text-sm text-muted-foreground">Watchlist</p>
              </div>
              <div className="text-center">
                <div className="mb-1 flex items-center justify-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-2xl font-bold">{userData.stats.hoursWatched}</span>
                </div>
                <p className="text-sm text-muted-foreground">Hours Watched</p>
              </div>
            </div>
          </div>

          {/* Content Tabs */}
          <Tabs defaultValue="recent" className="w-full">
            <TabsList className="mb-6 bg-secondary/50">
              <TabsTrigger value="recent">Recently Watched</TabsTrigger>
              <TabsTrigger value="favorites">Favorites</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>

            <TabsContent value="recent">
              <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                {recentlyWatched.map((movie) => (
                  <MovieCard key={movie.title} {...movie} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="favorites">
              <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                {favoriteMovies.map((movie) => (
                  <MovieCard key={movie.title} {...movie} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="reviews">
              <div className="rounded-lg border border-border/50 bg-card/50 p-8 text-center">
                <p className="text-muted-foreground">No reviews yet. Start watching and reviewing movies!</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
