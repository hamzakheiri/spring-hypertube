import Link from "next/link"
import { Play, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MovieCardProps {
  title: string
  year: string
  rating: string
  imageUrl: string
}

export function MovieCard({ title, year, rating, imageUrl }: MovieCardProps) {
  return (
    <Link href="/movie/1">
      <div className="group perspective-1000">
        <div className="preserve-3d card-3d relative overflow-hidden rounded-lg border border-border/50 bg-card shadow-depth transition-all duration-500 hover:border-primary hover:shadow-depth-strong hover:glow-orange">
          <div className="aspect-[2/3] overflow-hidden">
            <img
              src={imageUrl || "/placeholder.svg"}
              alt={title}
              className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
            />
          </div>

          <div className="absolute inset-0 glass opacity-0 transition-all duration-500 group-hover:opacity-100">
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="mb-1 font-semibold text-foreground text-balance">{title}</h3>
              <div className="mb-3 flex items-center gap-2 text-xs text-muted-foreground">
                <span>{year}</span>
                <span>•</span>
                <span className="text-primary">★ {rating}</span>
              </div>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 hover:glow-orange transition-all duration-300"
                >
                  <Play className="mr-1 h-4 w-4" />
                  Watch
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-primary/50 bg-transparent hover:bg-primary/10 hover:border-primary transition-all duration-300"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
