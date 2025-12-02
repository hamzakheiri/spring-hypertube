import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Film, Search } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-primary/20 glass backdrop-blur-xl shadow-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 group">
          <Film className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
          <span className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors">hypertube</span>
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium text-foreground transition-all hover:text-primary hover:text-glow-orange"
          >
            Home
          </Link>
          <Link
            href="/dashboard"
            className="text-sm font-medium text-muted-foreground transition-all hover:text-foreground hover:text-glow-orange"
          >
            Discover
          </Link>
          <Link
            href="/library"
            className="text-sm font-medium text-muted-foreground transition-all hover:text-foreground hover:text-glow-orange"
          >
            My Library
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-primary/10 hover:text-primary transition-all duration-300"
          >
            <Search className="h-5 w-5" />
          </Button>

          <ThemeToggle />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:ring-2 hover:ring-primary/50 transition-all duration-300"
              >
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>AJ</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 glass-strong border-primary/20 shadow-depth">
              <div className="px-2 py-1.5">
                <p className="text-sm font-semibold">Alex Johnson</p>
                <p className="text-xs text-muted-foreground">alex.johnson@example.com</p>
              </div>
              <DropdownMenuSeparator className="bg-border/50" />
              <DropdownMenuItem asChild>
                <Link href="/profile" className="cursor-pointer hover:text-primary transition-colors">
                  Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/library" className="cursor-pointer hover:text-primary transition-colors">
                  My Library
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/profile/settings" className="cursor-pointer hover:text-primary transition-colors">
                  Settings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-border/50" />
              <DropdownMenuItem className="cursor-pointer text-destructive hover:bg-destructive/10">
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  )
}
