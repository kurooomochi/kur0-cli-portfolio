import { getAboutContent } from "@/lib/data/about"

export const metadata = {
  title: "About | Terminal Portfolio",
  description: "Learn more about me and my background",
}

export default function AboutPage() {
  const aboutContent = getAboutContent()

  return (
    <main className="min-h-screen bg-gray-900 text-gray-200 font-mono">
      <div className="max-w-4xl mx-auto p-4 md:p-8">
        <h1 className="text-3xl font-bold text-cyan-400 mb-8">~/about</h1>

        <div className="space-y-6">
          <section className="border border-gray-700 rounded-md p-6">
            <h2 className="text-xl font-bold text-green-400 mb-4">{aboutContent.name}</h2>
            <p className="mb-4">{aboutContent.bio}</p>
            <p>{aboutContent.longBio}</p>
          </section>

          <section className="border border-gray-700 rounded-md p-6">
            <h2 className="text-xl font-bold text-green-400 mb-4">Experience</h2>
            <div className="space-y-4">
              {aboutContent.experience.map((exp, index) => (
                <div key={index} className="border-l-2 border-green-500/30 pl-4">
                  <h3 className="font-bold">
                    {exp.position} @ {exp.company}
                  </h3>
                  <p className="text-sm text-gray-400">{exp.period}</p>
                  <p className="mt-2">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="border border-gray-700 rounded-md p-6">
            <h2 className="text-xl font-bold text-green-400 mb-4">Education</h2>
            <div className="space-y-4">
              {aboutContent.education.map((edu, index) => (
                <div key={index} className="border-l-2 border-green-500/30 pl-4">
                  <h3 className="font-bold">{edu.degree}</h3>
                  <p className="text-sm text-gray-400">
                    {edu.institution} • {edu.period}
                  </p>
                  <p className="mt-2">{edu.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

