import type { Project } from "@/lib/types"

export function getProjects(): Project[] {
  return [
    {
      name: "File Scanner",
      description:
        "A high-performance Go utility for concurrent pattern matching across multiple repositories. ",
      techStack: ["Go", "CLI"],
      link: "https://github.com/kur0byte/file-scanner",
    },
    {
      name: "Node Correlation ID Middleware",
      description:
        "Node.js middleware for correlation ID management in microservices, enabling distributed request tracing with AsyncLocalStorage. ",
      techStack: ["Node.js", "Express", "Javascript"],
      link: "https://github.com/kur0byte/node-correlation-id-mw",
    },
    {
      name: "Postgres Database Anonymization CLI Tool",
      description:
        "A tool for anonymizing sensitive data in PostgreSQL databases, ensuring compliance with data protection regulations.",
      techStack: ["Node.js", "PostgreSQL", "Javascript", "CLI"],
      link: "https://github.com/kur0byte/js-db-anonymizer",
    },
    {
      name: "TS Gitflow CLI",
      description:
        "A TypeScript CLI tool for managing Git branches and pull requests, streamlining the Git workflow.",
      techStack: ["Node.js", "Typescript", "CLI", "Git"],
      link: "https://github.com/kur0byte/gitflow-ts",
    },
    {
      name: "Kur0 CLI Portfolio",
      description:
        "Custom portfolio with an elegant CLI-like interface to interact with.",
      techStack: ["Next.js", "Typescript", "Tailwind CSS", "shadcn/ui"],
      link: "https://github.com/kur0byte/kur0-cli-portfolio",
    },

  ]
}

