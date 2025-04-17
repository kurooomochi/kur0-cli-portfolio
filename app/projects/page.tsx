import {getProjects} from "@/lib/data/projects";
import Link from "next/link";

export const metadata = {
  title: "Projects | Terminal Portfolio",
  description: "Explore my portfolio of software development projects",
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <main className="min-h-screen bg-gray-900 text-gray-200 font-mono">
      <div className="max-w-4xl mx-auto p-4 md:p-8">
        <h1 className="text-cyan-400 text-[2rem] mb-6 font-mono font-extrabold">
          ~/projects
        </h1>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <div key={index} className="border border-gray-700 rounded-md p-6 hover:border-green-500/50 transition-colors flex flex-col h-full">
            {/* Content container */}
            <div className="flex-grow">
              <h2 className="text-xl font-bold text-green-400 mb-2">{project.name}</h2>
              <p className="text-gray-300 mb-4">{project.description}</p>
          
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="px-2 py-1 bg-gray-800 text-gray-200 dark:text-gray-200 text-xs rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          
            {/* Link that sticks to the bottom */}
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex text-sm text-green-400 hover:text-green-300 mt-auto pt-4"
            >
              View Project <span className="ml-1">→</span>
            </Link>
          </div>
          ))}
        </div>
      </div>
    </main>
  );
}
