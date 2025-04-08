import type { BlogPost } from "@/lib/types"
import { formatDate } from "@/lib/utils"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

interface BlogContentProps {
  post: BlogPost
}

export default function BlogContent({ post }: BlogContentProps) {
  return (
    <article className="prose prose-invert prose-green max-w-none">
      <Link
        href="/blog"
        className="text-sm text-green-400 hover:text-green-300 no-underline flex items-center gap-1 mb-8"
      >
        <ChevronLeft size={16} />
        Back to all posts
      </Link>

      <h1 className="text-3xl font-bold text-cyan-400 mb-2">{post.title}</h1>

      <div className="flex items-center gap-4 mb-8 text-gray-400">
        <time>{formatDate(post.date)}</time>
        <div className="flex gap-2">
          {post.tags.map((tag) => (
            <span key={tag} className="text-sm">
              #{tag}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-4 text-gray-200">
        {post.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </article>
  )
}

