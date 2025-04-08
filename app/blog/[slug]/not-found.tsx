import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-mono flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold text-red-400 mb-4">404: Post Not Found</h1>
      <p className="mb-8">The blog post you're looking for doesn't exist or has been moved.</p>
      <div className="flex gap-4">
        <Link
          href="/blog"
          className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-md hover:bg-gray-700 transition-colors"
        >
          Back to Blog
        </Link>
        <Link
          href="/"
          className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-md hover:bg-gray-700 transition-colors"
        >
          Back to Terminal
        </Link>
      </div>
    </div>
  )
}

