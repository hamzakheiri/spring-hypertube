"use client"

import Link from "next/link"
import { AuthForm } from "@/components/auth-form"
import { Film } from "lucide-react"

export default function SignUpPage() {
  const handleSignUp = (data: { email: string; password?: string; username?: string }) => {
    console.log("[v0] Sign up data:", data)
    // TODO: Implement sign up logic
  }

  return (
    <div className="flex min-h-screen">
      {/* Left side - Form */}
      <div className="flex w-full flex-col justify-center px-6 py-12 lg:w-1/2 lg:px-12">
        <div className="mx-auto w-full max-w-md">
          <Link href="/" className="mb-8 flex items-center gap-2">
            <Film className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold tracking-tight">hypertube</span>
          </Link>

          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight">Create your account</h1>
            <p className="mt-2 text-muted-foreground">Start streaming your favorite movies today</p>
          </div>

          <AuthForm type="signup" onSubmit={handleSignUp} />

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/auth/login" className="font-medium text-primary hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="relative hidden lg:block lg:w-1/2">
        <img src="/cinematic-movie-theater-with-purple-and-blue-neon-.jpg" alt="Cinema" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent" />
      </div>
    </div>
  )
}
