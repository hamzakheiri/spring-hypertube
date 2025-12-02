"use client"

import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface FilterPanelProps {
  isOpen: boolean
  onClose: () => void
}

const genres = [
  "Action",
  "Adventure",
  "Comedy",
  "Drama",
  "Horror",
  "Sci-Fi",
  "Thriller",
  "Romance",
  "Animation",
  "Documentary",
]

export function FilterPanel({ isOpen, onClose }: FilterPanelProps) {
  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden" onClick={onClose} />

      {/* Panel */}
      <div className="fixed right-0 top-0 z-50 h-full w-80 border-l border-border/50 bg-card p-6 shadow-xl lg:sticky lg:top-20 lg:h-[calc(100vh-5rem)]">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Filters</h2>
          <Button variant="ghost" size="icon" onClick={onClose} className="lg:hidden">
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="space-y-6 overflow-y-auto">
          {/* Genre Filter */}
          <div className="space-y-3">
            <Label className="text-sm font-semibold">Genre</Label>
            <div className="space-y-2">
              {genres.map((genre) => (
                <div key={genre} className="flex items-center space-x-2">
                  <Checkbox id={genre} />
                  <label
                    htmlFor={genre}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {genre}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Year Range */}
          <div className="space-y-3">
            <Label className="text-sm font-semibold">Year Range</Label>
            <div className="space-y-2">
              <Slider defaultValue={[1990, 2024]} max={2024} min={1950} step={1} className="w-full" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>1990</span>
                <span>2024</span>
              </div>
            </div>
          </div>

          {/* Rating */}
          <div className="space-y-3">
            <Label className="text-sm font-semibold">Minimum Rating</Label>
            <div className="space-y-2">
              <Slider defaultValue={[7]} max={10} min={0} step={0.1} className="w-full" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>0</span>
                <span>10</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2 pt-4">
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Apply Filters</Button>
            <Button variant="outline" className="w-full border-border/50 bg-transparent">
              Reset
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
