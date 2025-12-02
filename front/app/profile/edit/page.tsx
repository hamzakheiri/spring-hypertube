"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowLeft, Upload } from "lucide-react"
import Link from "next/link"

export default function EditProfilePage() {
  const [formData, setFormData] = useState({
    name: "Alex Johnson",
    username: "alexj",
    email: "alex.johnson@example.com",
    bio: "Film enthusiast and cinephile. Love exploring different genres and discovering hidden gems.",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Profile updated:", formData)
    // TODO: Implement profile update logic
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-16">
        <div className="mx-auto max-w-3xl px-6 py-8">
          {/* Header */}
          <div className="mb-8">
            <Link
              href="/profile"
              className="mb-4 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Profile
            </Link>
            <h1 className="text-3xl font-bold tracking-tight">Edit Profile</h1>
            <p className="mt-2 text-muted-foreground">Update your profile information and preferences</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Avatar Upload */}
            <div className="rounded-lg border border-border/50 bg-card/50 p-6">
              <Label className="mb-4 block text-base font-semibold">Profile Picture</Label>
              <div className="flex items-center gap-6">
                <Avatar className="h-24 w-24 border-2 border-border/50">
                  <AvatarImage src="/placeholder.svg?height=120&width=120" />
                  <AvatarFallback className="text-2xl">AJ</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <Button type="button" variant="outline" className="border-border/50 bg-transparent">
                    <Upload className="mr-2 h-4 w-4" />
                    Upload New Picture
                  </Button>
                  <p className="mt-2 text-xs text-muted-foreground">
                    JPG, PNG or GIF. Max size 2MB. Recommended 400x400px.
                  </p>
                </div>
              </div>
            </div>

            {/* Personal Information */}
            <div className="rounded-lg border border-border/50 bg-card/50 p-6">
              <h2 className="mb-4 text-base font-semibold">Personal Information</h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-secondary/50 border-border/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    type="text"
                    value={formData.username}
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                    className="bg-secondary/50 border-border/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-secondary/50 border-border/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    value={formData.bio}
                    onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                    className="min-h-24 bg-secondary/50 border-border/50 resize-none"
                    placeholder="Tell us about yourself..."
                  />
                  <p className="text-xs text-muted-foreground">
                    Brief description for your profile. Max 200 characters.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Save Changes
              </Button>
              <Link href="/profile">
                <Button type="button" variant="outline" className="border-border/50 bg-transparent">
                  Cancel
                </Button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
