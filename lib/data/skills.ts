import type { Skill } from "@/lib/types"

export function getSkills(): Skill[] {
  return [
    {
      category: "Languages",
      items: ["JavaScript", "TypeScript", "Go", "Python", "Shell Scripting", "PHP"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "NestJS", "Django", "RESTful APIs", "GraphQL", "gRPC", "Socket.IO", "MQTT", "Soap"],
    },
    {
      category: "Frontend",
      items: ["React", "Next.js", "Tanstack", "Vite", "HTML/CSS", "Tailwind CSS"],
    },
    {
      category: "Database",
      items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Supabase"],
    },
    {
      category: "DevOps & Cloud",
      items: ["Google Cloud", "Digital Ocean", "Vercel", "Docker", "Kubernetes", "CI/CD", "GitHub Actions"],
    },
    {
      category: "eCommerce and CMS",
      items: ["Shopify", "WooCommerce", "WordPress", "Contentful", "Strapi"],
    }
  ]
}

