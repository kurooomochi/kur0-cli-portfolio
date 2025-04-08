import type { BlogPost } from "@/lib/types"

const blogPosts: BlogPost[] = [
  {
    slug: "building-a-terminal-portfolio",
    title: "Building a Terminal-Style Portfolio with Next.js",
    date: "2023-11-15",
    excerpt: "Learn how I created this terminal-style portfolio using Next.js, TypeScript, and Tailwind CSS.",
    tags: ["nextjs", "react", "typescript", "portfolio"],
    content: [
      "When I decided to rebuild my portfolio, I wanted something unique that would showcase my skills and personality as a developer. As someone who spends a lot of time in the terminal, I thought it would be fun to create a terminal-style interface for my portfolio website.",
      "In this post, I'll walk through how I built this terminal portfolio using Next.js, TypeScript, and Tailwind CSS. I'll cover the command system, styling, animations, and more.",
      "The first step was to create the terminal UI. I used a dark background with a monospace font to mimic the look of a real terminal. I added a header with the classic macOS-style traffic light buttons and a blinking cursor for that authentic terminal feel.",
      "Next, I implemented the command system. I created a command processor that takes user input and returns the appropriate response. Each command is a function that returns JSX, which allows for rich formatting of the output.",
      "For the animations, I used CSS keyframes to create the blinking cursor and typing effects. I also added a subtle fade-in animation for each command response to make the interface feel more dynamic.",
      "One of the challenges was making the terminal responsive. I used Tailwind's responsive utilities to ensure the terminal looks good on all screen sizes, from mobile to desktop.",
      "Finally, I added some fun easter eggs, like the 'sudo hire_me' command, to make the experience more interactive and playful.",
      "Overall, this project was a fun way to showcase my skills and create a unique portfolio that stands out from the crowd. If you're interested in building something similar, feel free to check out the source code on GitHub!",
    ],
  },
  {
    slug: "mastering-react-hooks",
    title: "Mastering React Hooks: A Comprehensive Guide",
    date: "2023-10-22",
    excerpt: "Dive deep into React Hooks and learn how to use them effectively in your projects.",
    tags: ["react", "hooks", "javascript", "frontend"],
    content: [
      "React Hooks have revolutionized the way we write React components since their introduction in React 16.8. They allow you to use state and other React features without writing a class component.",
      "In this comprehensive guide, we'll explore the most commonly used hooks and how to use them effectively in your projects.",
      "useState is probably the most used hook. It allows you to add state to your functional components. The useState hook takes an initial state value and returns an array with the current state value and a function to update it.",
      "useEffect is another essential hook that lets you perform side effects in your components. It's similar to lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount combined.",
      "useContext provides a way to pass data through the component tree without having to pass props down manually at every level. This is particularly useful for themes, user authentication, and other global state.",
      "useReducer is an alternative to useState that's better for managing complex state logic. It's similar to how Redux works, with actions being dispatched to update the state.",
      "useCallback and useMemo are performance optimization hooks. useCallback returns a memoized callback function, while useMemo returns a memoized value. Both help prevent unnecessary re-renders.",
      "Custom hooks are a powerful feature that allows you to extract component logic into reusable functions. They follow the use prefix convention and can use other hooks inside them.",
      "By mastering these hooks, you'll be able to write more concise, readable, and maintainable React code. Happy coding!",
    ],
  },
  {
    slug: "deploying-nextjs-on-vercel",
    title: "Deploying Next.js Applications on Vercel: A Step-by-Step Guide",
    date: "2023-09-10",
    excerpt: "Learn how to deploy your Next.js applications on Vercel with ease.",
    tags: ["nextjs", "vercel", "deployment", "devops"],
    content: [
      "Deploying a Next.js application can be a breeze with Vercel, the platform created by the same team behind Next.js. In this guide, I'll walk you through the process step by step.",
      "First, you'll need to create an account on Vercel if you don't already have one. You can sign up using your GitHub, GitLab, or Bitbucket account, which makes the deployment process even smoother.",
      "Once you have an account, you can install the Vercel CLI globally on your machine using npm: npm install -g vercel. This will allow you to deploy your application from the command line.",
      "Before deploying, make sure your Next.js application is ready for production. Run npm run build to create an optimized production build and check for any errors.",
      "To deploy your application, you can simply run vercel in the root directory of your project. The CLI will guide you through the setup process, asking for your project name, environment variables, and other configuration options.",
      "Alternatively, you can connect your Git repository to Vercel and enable automatic deployments. This way, every time you push to your main branch, Vercel will automatically deploy your application.",
      "Vercel also provides preview deployments for pull requests, allowing you to test changes before merging them into your main branch. This is a great feature for collaborative development.",
      "Once your application is deployed, Vercel provides a dashboard where you can monitor your application's performance, view logs, and manage environment variables and domains.",
      "With Vercel, deploying Next.js applications is a seamless experience that allows you to focus on building your application rather than worrying about infrastructure. Give it a try for your next project!",
    ],
  },
]

export function getBlogPosts(): BlogPost[] {
  return blogPosts
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

