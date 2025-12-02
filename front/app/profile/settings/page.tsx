"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { ArrowLeft, Shield, Bell, Eye } from "lucide-react"
import Link from "next/link"

export default function SettingsPage() {
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    newReleases: true,
    recommendations: true,
  })

  const [privacy, setPrivacy] = useState({
    publicProfile: true,
    showWatchHistory: true,
    showFavorites: true,
  })

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Password change requested")
    // TODO: Implement password change logic
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
            <h1 className="text-3xl font-bold tracking-tight">Account Settings</h1>
            <p className="mt-2 text-muted-foreground">Manage your account preferences and security</p>
          </div>

          <div className="space-y-6">
            {/* Security Settings */}
            <div className="rounded-lg border border-border/50 bg-card/50 p-6">
              <div className="mb-4 flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <h2 className="text-base font-semibold">Security</h2>
              </div>

              <form onSubmit={handlePasswordChange} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">Current Password</Label>
                  <Input
                    id="currentPassword"
                    type="password"
                    className="bg-secondary/50 border-border/50"
                    placeholder="Enter current password"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="newPassword">New Password</Label>
                  <Input
                    id="newPassword"
                    type="password"
                    className="bg-secondary/50 border-border/50"
                    placeholder="Enter new password"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm New Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    className="bg-secondary/50 border-border/50"
                    placeholder="Confirm new password"
                  />
                </div>

                <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Update Password
                </Button>
              </form>
            </div>

            {/* Notification Settings */}
            <div className="rounded-lg border border-border/50 bg-card/50 p-6">
              <div className="mb-4 flex items-center gap-2">
                <Bell className="h-5 w-5 text-primary" />
                <h2 className="text-base font-semibold">Notifications</h2>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="email-notifications">Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                  </div>
                  <Switch
                    id="email-notifications"
                    checked={notifications.email}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, email: checked })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="push-notifications">Push Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive push notifications</p>
                  </div>
                  <Switch
                    id="push-notifications"
                    checked={notifications.push}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, push: checked })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="new-releases">New Releases</Label>
                    <p className="text-sm text-muted-foreground">Get notified about new movie releases</p>
                  </div>
                  <Switch
                    id="new-releases"
                    checked={notifications.newReleases}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, newReleases: checked })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="recommendations">Recommendations</Label>
                    <p className="text-sm text-muted-foreground">Receive personalized movie recommendations</p>
                  </div>
                  <Switch
                    id="recommendations"
                    checked={notifications.recommendations}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, recommendations: checked })}
                  />
                </div>
              </div>
            </div>

            {/* Privacy Settings */}
            <div className="rounded-lg border border-border/50 bg-card/50 p-6">
              <div className="mb-4 flex items-center gap-2">
                <Eye className="h-5 w-5 text-primary" />
                <h2 className="text-base font-semibold">Privacy</h2>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="public-profile">Public Profile</Label>
                    <p className="text-sm text-muted-foreground">Make your profile visible to other users</p>
                  </div>
                  <Switch
                    id="public-profile"
                    checked={privacy.publicProfile}
                    onCheckedChange={(checked) => setPrivacy({ ...privacy, publicProfile: checked })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="show-history">Show Watch History</Label>
                    <p className="text-sm text-muted-foreground">Display your watch history on your profile</p>
                  </div>
                  <Switch
                    id="show-history"
                    checked={privacy.showWatchHistory}
                    onCheckedChange={(checked) => setPrivacy({ ...privacy, showWatchHistory: checked })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="show-favorites">Show Favorites</Label>
                    <p className="text-sm text-muted-foreground">Display your favorite movies on your profile</p>
                  </div>
                  <Switch
                    id="show-favorites"
                    checked={privacy.showFavorites}
                    onCheckedChange={(checked) => setPrivacy({ ...privacy, showFavorites: checked })}
                  />
                </div>
              </div>
            </div>

            {/* Danger Zone */}
            <div className="rounded-lg border border-destructive/50 bg-destructive/5 p-6">
              <h2 className="mb-2 text-base font-semibold text-destructive">Danger Zone</h2>
              <p className="mb-4 text-sm text-muted-foreground">
                Once you delete your account, there is no going back. Please be certain.
              </p>
              <Button variant="destructive">Delete Account</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
