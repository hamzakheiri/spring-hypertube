"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ThumbsUp, MessageCircle } from "lucide-react"

interface Comment {
  id: string
  author: string
  avatar?: string
  content: string
  likes: number
  timestamp: string
}

const mockComments: Comment[] = [
  {
    id: "1",
    author: "John Doe",
    content: "This movie is absolutely incredible! The cinematography and storytelling are top-notch.",
    likes: 24,
    timestamp: "2 hours ago",
  },
  {
    id: "2",
    author: "Jane Smith",
    content: "One of the best films I've seen this year. Highly recommend!",
    likes: 15,
    timestamp: "5 hours ago",
  },
  {
    id: "3",
    author: "Mike Johnson",
    content: "The plot twists kept me on the edge of my seat. Amazing performances by the cast.",
    likes: 8,
    timestamp: "1 day ago",
  },
]

export function CommentSection() {
  const [comments, setComments] = useState<Comment[]>(mockComments)
  const [newComment, setNewComment] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newComment.trim()) return

    const comment: Comment = {
      id: Date.now().toString(),
      author: "Current User",
      content: newComment,
      likes: 0,
      timestamp: "Just now",
    }

    setComments([comment, ...comments])
    setNewComment("")
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <MessageCircle className="h-5 w-5 text-primary" />
        <h2 className="text-2xl font-bold">Comments ({comments.length})</h2>
      </div>

      {/* Add Comment Form */}
      <form onSubmit={handleSubmit} className="space-y-3">
        <Textarea
          placeholder="Share your thoughts about this movie..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="min-h-24 bg-secondary/50 border-border/50 resize-none"
        />
        <div className="flex justify-end">
          <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Post Comment
          </Button>
        </div>
      </form>

      {/* Comments List */}
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="rounded-lg border border-border/50 bg-card/50 p-4">
            <div className="mb-3 flex items-start gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={comment.avatar || "/placeholder.svg"} />
                <AvatarFallback>{comment.author[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-semibold">{comment.author}</span>
                  <span className="text-xs text-muted-foreground">{comment.timestamp}</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-foreground">{comment.content}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 pl-13">
              <Button variant="ghost" size="sm" className="h-8 gap-2 text-muted-foreground hover:text-primary">
                <ThumbsUp className="h-4 w-4" />
                <span className="text-xs">{comment.likes}</span>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
