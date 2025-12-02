"use client"

import Link from "next/link"
import { AuthForm } from "@/components/auth-form"
import { Film, ArrowLeft } from "lucide-react"

export default function ResetPasswordPage() {
  const handleReset = (data: { email: string }) => {
    console.log("[v0] Reset password for:", data.email)
    // TODO: Implement password reset logic
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
            <h1 className="text-3xl font-bold tracking-tight">Reset your password</h1>
            <p className="mt-2 text-muted-foreground">
              {"Enter your email and we'll send you a link to reset your password"}
            </p>
          </div>

          <AuthForm type="reset" onSubmit={handleReset} />

          <Link
            href="/auth/login"
            className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to sign in
          </Link>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="relative hidden lg:block lg:w-1/2">
        <img src="/abstract-digital-security-lock-with-neon-blue-and-.jpg" alt="Security" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent" />
      </div>
    </div>
  )
}
