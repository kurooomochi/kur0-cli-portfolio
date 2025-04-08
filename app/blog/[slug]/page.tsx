import { getBlogPost, getBlogPosts } from "@/lib/data/blog"
import BlogContent from "@/components/blog/blog-content"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  const posts = getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  if (!post) {
    return {
      title: "Post Not Found | Terminal Portfolio",
      description: "The requested blog post could not be found",
    }
  }

  return {
    title: `${post.title} | Terminal Portfolio`,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-gray-900 text-gray-200 font-mono">
      <div className="max-w-3xl mx-auto p-4 md:p-8">
        <BlogContent post={post} />
      </div>
    </main>
  )
}

