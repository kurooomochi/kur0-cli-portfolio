"use client";

import type {CommandResponse} from "@/lib/types";
import {getProjects} from "@/lib/data/projects";
import {getSkills} from "@/lib/data/skills";
import {getContacts} from "@/lib/data/contacts";
import {getBlogPosts} from "@/lib/data/blog-posts";
import {BlogPostView} from "@/components/blog-post";
import type {Dispatch, SetStateAction} from "react";

// Update the AVAILABLE_COMMANDS array to include blog commands
const AVAILABLE_COMMANDS = [
  "help",
  "about",
  "projects",
  "skills",
  "contact",
  "resume",
  "clear",
  // "theme",
  "sudo hire_me",
  "whoami",
  "date",
  "echo",
  "blog",
  "blog list",
  "blog read",
];

export function processCommand(
  command: string,
  theme: "dark" | "light",
  setTheme: Dispatch<SetStateAction<"dark" | "light">>
): CommandResponse {
  const lowerCommand = command.toLowerCase().trim();

  // Handle commands
  if (lowerCommand === "help") {
    return {
      command,
      output: (
        <div className="space-y-2">
          <p className="font-bold">Available commands:</p>
          <ul className="space-y-1 ml-4">
            <li>
              <span className="text-yellow-400">about</span> - Display information about me
            </li>
            <li>
              <span className="text-yellow-400">projects</span> - View my portfolio projects
            </li>
            <li>
              <span className="text-yellow-400">skills</span> - List my technical skills
            </li>
            <li>
              <span className="text-yellow-400">contact</span> - Show contact information
            </li>
            <li>
              <span className="text-yellow-400">resume</span> - Download my resume
            </li>
            <li>
              <span className="text-yellow-400">blog list</span> - View all blog posts
            </li>
            <li>
              <span className="text-yellow-400">blog read [id]</span> - Read a specific blog post
            </li>
            {/* <li>
              <span className="text-yellow-400">theme --dark|--light</span> - Toggle color theme
            </li> */}
            <li>
              <span className="text-yellow-400">clear</span> - Clear the terminal
            </li>
            <li>
              <span className="text-yellow-400">help</span> - Show this help message
            </li>
          </ul>
          <p className="text-sm text-gray-400 mt-2">Tip: Use Tab for autocomplete and ↑/↓ arrows for command history</p>
        </div>
      ),
    };
  }

  if (lowerCommand === "about") {
    return {
      command,
      output: (
        <div className="space-y-2">
          <p className="font-bold text-cyan-400">Hey, I'm kur0</p>
          <p>
            Born in the digital age in a world of networks.
          </p>
          <p>
            I envision software systems as living organisms constantly evolving.
          </p>
          <p>
            With a mission to build scalable and resilient technological ecosystems, <br/>I am crafting elegant solutions through code and product development.
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Type <span className="text-yellow-400">contact</span> to get in touch!
          </p>
        </div>
      ),
    };
  }

  if (lowerCommand === "projects") {
    const projects = getProjects();
    return {
      command,
      output: (
        <div className="space-y-4">
          <p className="font-bold text-cyan-400">My Projects</p>
          <div className="grid gap-4">
            {projects.map((project, index) => (
              <div key={index} className="border border-gray-700 rounded-md p-3 hover:bg-gray-900/50 transition-colors">
                <div className="font-bold">{project.name}</div>
                <p className="text-sm text-gray-400">{project.description}</p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-800 text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 text-sm mt-2 inline-block hover:underline"
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </div>
      ),
    };
  }

  if (lowerCommand === "skills") {
    const skills = getSkills();
    return {
      command,
      output: (
        <div className="space-y-4">
          <p className="font-bold text-cyan-400">Technical Skills</p>
          <div className="grid gap-4 md:grid-cols-2">
            {skills.map((category, index) => (
              <div key={index} className="border border-gray-700 rounded-md p-3">
                <div className="font-bold mb-2">{category.category}</div>
                <div className="flex flex-wrap gap-1">
                  {category.items.map((skill, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-800 text-xs rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    };
  }

  if (lowerCommand === "contact") {
    const contacts = getContacts();
    return {
      command,
      output: (
        <div className="space-y-4">
          <p className="font-bold text-cyan-400">Contact Information</p>
          <div className="space-y-2">
            {contacts.map((contact, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="font-bold">{contact.platform}:</span>
                <a href={contact.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                  {contact.username}
                </a>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-400 mt-2">Feel free to reach out for collaborations or opportunities!</p>
        </div>
      ),
    };
  }

  if (lowerCommand === "resume") {
    return {
      command,
      output: (
        <div className="space-y-2">
          <p>Downloading resume...</p>
          <p>
            <a
              href="#"
              className="text-blue-400 hover:underline"
              onClick={(e) => {
                e.preventDefault();
                alert("This would download the resume in a real implementation");
              }}
            >
              Click here if download doesn't start automatically
            </a>
          </p>
        </div>
      ),
    };
  }

  // if (lowerCommand.startsWith("theme")) {
  //   if (lowerCommand.includes("--dark")) {
  //     setTheme("dark");
  //     return {
  //       command,
  //       output: "Theme set to dark mode.",
  //     };
  //   } else if (lowerCommand.includes("--light")) {
  //     setTheme("light");
  //     return {
  //       command,
  //       output: "Theme set to light mode.",
  //     };
  //   } else {
  //     return {
  //       command,
  //       output: `Current theme: ${theme}. Use 'theme --dark' or 'theme --light' to change.`,
  //     };
  //   }
  // }

  if (lowerCommand === "sudo hire_me") {
    return {
      command,
      output: (
        <div className="space-y-2">
          <p className="text-yellow-400 font-bold text-xl animate-pulse">🎉 CONGRATULATIONS! 🎉</p>
          <p>You've discovered the secret command!</p>
          <p>I'm currently available for new opportunities and would love to discuss how I can contribute to your team.</p>
          <p>
            Use the <span className="text-yellow-400">contact</span> command to reach out!
          </p>
        </div>
      ),
    };
  }

  if (lowerCommand === "whoami") {
    return {
      command,
      output: window.navigator.userAgent,
    };
  }

  if (lowerCommand === "date") {
    return {
      command,
      output: new Date().toString(),
    };
  }

  if (lowerCommand.startsWith("echo ")) {
    const message = command.substring(5);
    return {
      command,
      output: message,
    };
  }

  // Add blog command handling to the processCommand function
  // Add this after the "echo" command handler and before the "Command not found" section:

  if (lowerCommand === "blog" || lowerCommand === "blog list") {
    const blogPosts = getBlogPosts();
    return {
      command,
      output: (
        <div className="space-y-4">
          <p className="font-bold text-cyan-400">Blog Posts</p>
          <div className="grid gap-3">
            {blogPosts.map((post: any) => (
              <div key={post.id} className="border border-gray-700 rounded-md p-3 hover:bg-gray-900/50 transition-colors">
                <div className="flex justify-between items-start">
                  <div className="font-bold">{post.title}</div>
                  <div className="text-xs text-gray-400">{post.date}</div>
                </div>
                <p className="text-sm text-gray-400 mt-1">{post.summary}</p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {post.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-0.5 bg-gray-800 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-2 text-sm">
                  <span className="text-blue-400">
                    Type <span className="text-yellow-400">blog read {post.id}</span> to read this post
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    };
  }

  if (lowerCommand.startsWith("blog read")) {
    const blogPosts = getBlogPosts();
    const postId = command.split(" ")[2];

    if (!postId) {
      return {
        command,
        output: (
          <div className="text-red-400">
            Please specify a blog post ID. Example: <span className="text-yellow-400">blog read 1</span>
          </div>
        ),
      };
    }

    const post = blogPosts.find((p) => p.id === postId);

    if (!post) {
      return {
        command,
        output: (
          <div className="text-red-400">
            Blog post with ID {postId} not found. Type <span className="text-yellow-400">blog list</span> to see all posts.
          </div>
        ),
      };
    }

    return {
      command,
      output: <BlogPostView post={post} theme={theme} />,
    };
  }

  // Command not found
  return {
    command,
    output: (
      <div className="text-red-400">
        404: Command not found. Type <span className="text-yellow-400">help</span> to see available commands.
      </div>
    ),
  };
}

export function getCommandSuggestions(input: string): string[] {
  const lowerInput = input.toLowerCase();
  return AVAILABLE_COMMANDS.filter((cmd) => cmd.startsWith(lowerInput));
}
