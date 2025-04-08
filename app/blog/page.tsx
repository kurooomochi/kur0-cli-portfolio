import BlogList from "@/components/blog/blog-list"

export const metadata = {
  title: "Blog | Terminal Portfolio",
  description: "Read my latest thoughts and tutorials on software development",
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-200 font-mono">
      <div className="max-w-4xl mx-auto p-4 md:p-8">
        <h1 className="text-3xl font-bold text-cyan-400 mb-8">~/blog</h1>
        <BlogList />
      </div>
    </main>
  )
}

