import type { BlogPost } from "@/lib/types"

interface BlogPostProps {
  post: BlogPost
  theme: "dark" | "light"
}

export function BlogPostView({ post, theme }: BlogPostProps) {
  const textColor = theme === "dark" ? "text-green-400" : "text-gray-800"
  const headingColor = theme === "dark" ? "text-cyan-400" : "text-blue-600"
  const dateColor = theme === "dark" ? "text-gray-400" : "text-gray-500"
  const tagColor = theme === "dark" ? "bg-gray-800 text-cyan-400" : "bg-gray-200 text-blue-600"

  // Simple markdown-like rendering for content
  const renderContent = () => {
    const lines = post.content.split("\n")

    return lines.map((line, index) => {
      // Headers
      if (line.startsWith("# ")) {
        return (
          <h1 key={index} className={`text-xl font-bold mb-4 ${headingColor}`}>
            {line.substring(2)}
          </h1>
        )
      }
      if (line.startsWith("## ")) {
        return (
          <h2 key={index} className={`text-lg font-bold mb-3 ${headingColor}`}>
            {line.substring(3)}
          </h2>
        )
      }
      if (line.startsWith("### ")) {
        return (
          <h3 key={index} className={`text-base font-bold mb-2 ${headingColor}`}>
            {line.substring(4)}
          </h3>
        )
      }

      // Code blocks
      if (line.startsWith("```") && line.endsWith("```")) {
        return (
          <pre key={index} className="bg-gray-900 p-2 rounded my-2 overflow-x-auto text-xs">
            {line.substring(3, line.length - 3)}
          </pre>
        )
      }

      // Handle code block start
      if (line.startsWith("```")) {
        return (
          <pre key={index} className="bg-gray-900 p-2 rounded-t my-2 overflow-x-auto text-xs">
            {line.substring(3)}
          </pre>
        )
      }

      // Handle code block end
      if (line.endsWith("```")) {
        return (
          <pre key={index} className="bg-gray-900 p-2 rounded-b my-2 overflow-x-auto text-xs">
            {line.substring(0, line.length - 3)}
          </pre>
        )
      }

      // Regular code line (inside a code block)
      if (line.startsWith("  ") && lines[index - 1]?.startsWith("```")) {
        return (
          <pre key={index} className="bg-gray-900 p-2 overflow-x-auto text-xs">
            {line}
          </pre>
        )
      }

      // Empty line
      if (line.trim() === "") {
        return <div key={index} className="h-4"></div>
      }

      // Regular paragraph
      return (
        <p key={index} className="mb-2">
          {line}
        </p>
      )
    })
  }

  return (
    <div className="space-y-4">
      <div>
        <h1 className={`text-xl font-bold ${headingColor}`}>{post.title}</h1>
        <div className={`text-sm ${dateColor}`}>{post.date}</div>
        <div className="flex flex-wrap gap-1 mt-2">
          {post.tags.map((tag, index) => (
            <span key={index} className={`px-2 py-0.5 text-xs rounded-full ${tagColor}`}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className={`mt-4 ${textColor} text-sm`}>{renderContent()}</div>

      <div className={`mt-6 pt-4 border-t border-gray-700 text-sm ${dateColor}`}>
        End of post. Type <span className="text-yellow-400">blog list</span> to see all posts.
      </div>
    </div>
  )
}

