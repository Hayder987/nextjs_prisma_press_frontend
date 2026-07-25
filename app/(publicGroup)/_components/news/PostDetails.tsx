"use client";

import Image from "next/image";
import {
  Calendar,
  Eye,
  MessageCircle,
  Clock,
  User,
  Crown,
  Sparkles,
  MoveLeft,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { PostDetailsProps } from "@/lib/types";
import Link from "next/link";

export default function PostDetails({ mode, post }: PostDetailsProps) {
  const readingTime = Math.max(
    1,
    Math.ceil(post.content.split(" ").length / 200),
  );

  return (
    <div className="mx-auto max-w-5xl space-y-8 py-10">
      {/* Thumbnail */}

      <div className="relative h-62.5 overflow-hidden rounded-2xl md:h-112.5">
        <Image
          src={post.thumbnail}
          alt={post.title}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

        <div className="absolute bottom-6 left-6 flex flex-wrap gap-2">
          {post.isPremium && (
            <Badge className="bg-yellow-500 text-black hover:bg-yellow-500">
              <Crown className="mr-1 h-4 w-4" />
              Premium
            </Badge>
          )}

          {post.isFeatured && (
            <Badge>
              <Sparkles className="mr-1 h-4 w-4" />
              Featured
            </Badge>
          )}

          <Badge variant="secondary">{post.status}</Badge>
        </div>
      </div>

      {/* Content */}

      <Card className="space-y-8 rounded-2xl p-8 shadow-sm">
        {/* Title */}

        <div className="space-y-4">
          <h1 className="text-4xl font-bold leading-tight tracking-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <User size={16} />
              <span>Admin</span>
            </div>

            <div className="flex items-center gap-2">
              <Calendar size={16} />
              {new Date(post.createdAt).toLocaleDateString()}
            </div>

            <div className="flex items-center gap-2">
              <Eye size={16} />
              {post.views} Views
            </div>

            <div className="flex items-center gap-2">
              <Clock size={16} />
              {readingTime} min read
            </div>

            <div className="flex items-center gap-2">
              <MessageCircle size={16} />
              {post._count.comments} Comments
            </div>
          </div>
        </div>

        <Separator />

        {/* Tags */}

        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              #{tag}
            </Badge>
          ))}
        </div>

        {/* Article */}

        <article className="prose prose-zinc dark:prose-invert max-w-none leading-8">
          <p>{post.content}</p>
        </article>

        <Separator />

        {/* Footer */}

        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>
            Published •{" "}
            {new Date(post.createdAt).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>

          <span>
            Updated •{" "}
            {new Date(post.updatedAt).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>
        </div>
        {/* back to previous */}
        <Link href={`${mode==="news" ? "/news" : "/premium"}`}>
          <div className="flex justify-end items-center cursor-pointer">
            <div className="flex justify-center items-center underline text-blue-700 font-semibold">
              <MoveLeft />
              Back To {mode==="news" ? "News" : "Premium"}
            </div>
          </div>
        </Link>
      </Card>
    </div>
  );
}
