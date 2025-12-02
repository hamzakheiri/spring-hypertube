"use client"

import Link from "next/link"
import { AuthForm } from "@/components/auth-form"
import { Film } from "lucide-react"

export default function LoginPage() {
  const handleLogin = (data: { email: string; password?: string }) => {
    console.log("[v0] Login data:", data)
    // TODO: Implement login logic
  }

  return (
    <div className="flex min-h-screen">
      {/* Left side - Form */}
      <div className="flex w-full flex-col justify-center px-6 py-12 lg:w-1/2 lg:px-12">
        <div className="mx-auto w-full max-w-md glass-strong rounded-2xl p-8 shadow-depth-strong animate-in fade-in slide-in-from-left duration-700">
          <Link href="/" className="mb-8 flex items-center gap-2 group">
            <Film className="h-6 w-6 text-primary group-hover:glow-orange transition-all duration-300" />
            <span className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors">
              hypertube
            </span>
          </Link>

          <div className="mb-8">
            <h1 className="text-4xl font-bold tracking-tight text-glow-orange">Welcome back</h1>
            <p className="mt-2 text-muted-foreground">Sign in to continue watching</p>
          </div>

          <AuthForm type="login" onSubmit={handleLogin} />

          <div className="mt-4 text-center">
            <Link
              href="/auth/reset-password"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Forgot your password?
            </Link>
          </div>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            {"Don't have an account? "}
            <Link
              href="/auth/signup"
              className="font-medium text-primary hover:underline hover:text-glow-orange transition-all"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="relative hidden lg:block lg:w-1/2 overflow-hidden">
        <img
          src="/dark-cinema-interior-with-movie-projector-and-purp.jpg"
          alt="Cinema"
          className="h-full w-full object-cover scale-110 animate-in zoom-in duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
      </div>
    </div>
  )
}
