import { getSkills } from "@/lib/data/skills"

export const metadata = {
  title: "Skills | Terminal Portfolio",
  description: "Explore my technical skills and expertise",
}

export default function SkillsPage() {
  const skills = getSkills()

  return (
    <main className="min-h-screen bg-gray-900 text-gray-200 font-mono">
      <div className="max-w-4xl mx-auto p-4 md:p-8">
      <h1 className="text-cyan-400 text-[2rem] mb-6 font-mono font-extrabold">
          ~/skills
        </h1>
        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((category, index) => (
            <div key={index} className="border border-gray-700 rounded-md p-6">
              <h2 className="text-xl font-bold text-green-400 mb-4">{category.category}</h2>

              <div className="flex flex-wrap gap-2">
                {category.items.map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-800 text-gray-200 dark:text-gray-200 text-sm rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

