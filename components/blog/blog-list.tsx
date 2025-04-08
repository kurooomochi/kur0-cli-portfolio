import Link from "next/link"
import { getBlogPosts } from "@/lib/data/blog"
import { formatDate } from "@/lib/utils"

export default function BlogList() {
  const posts = getBlogPosts()

  return (
    <div className="space-y-8">
      {posts.map((post) => (
        <article
          key={post.slug}
          className="border border-gray-700 rounded-md p-6 hover:border-green-500/50 transition-colors"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-xl font-bold text-cyan-400 hover:underline">{post.title}</h2>
            </Link>
            <time className="text-sm text-gray-400">{formatDate(post.date)}</time>
          </div>

          <p className="text-gray-300 mb-4">{post.excerpt}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span key={tag} className="px-2 py-1 bg-gray-800 text-gray-200 dark:text-gray-200 text-xs rounded-full">
                #{tag}
              </span>
            ))}
          </div>

          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center text-sm text-green-400 hover:text-green-300"
          >
            Read more <span className="ml-1">→</span>
          </Link>
        </article>
      ))}
    </div>
  )
}

