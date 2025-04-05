import type { Project } from "@/lib/types"

export function getProjects(): Project[] {
  return [
    {
      name: "E-commerce Platform",
      description:
        "A full-stack e-commerce solution with product management, cart functionality, and payment processing.",
      techStack: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      link: "https://github.com/johndoe/ecommerce-platform",
    },
    {
      name: "Task Management App",
      description: "A Kanban-style task management application with real-time updates and team collaboration features.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Vercel"],
      link: "https://github.com/johndoe/task-management",
    },
    {
      name: "Weather Dashboard",
      description: "A responsive weather application that displays current conditions and forecasts based on location.",
      techStack: ["React", "Redux", "OpenWeather API", "Chart.js", "Netlify"],
      link: "https://github.com/johndoe/weather-dashboard",
    },
    {
      name: "Portfolio Terminal",
      description: "A terminal-style portfolio website (the one you're using right now!) with interactive commands.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
      link: "https://github.com/johndoe/terminal-portfolio",
    },
  ]
}

