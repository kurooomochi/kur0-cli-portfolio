import type { BlogPost } from "@/lib/types"

export function getBlogPosts(): BlogPost[] {
  return [
    {
      id: "1",
      title: "Building a Terminal Portfolio with Next.js",
      date: "2023-11-15",
      summary: "How I created this terminal-style portfolio using Next.js and Tailwind CSS.",
      content: `
# Building a Terminal Portfolio with Next.js

When I decided to redesign my portfolio, I wanted something unique that would showcase my skills as a developer while being interactive and fun to use.

## The Concept

I've always been fascinated by terminal interfaces. There's something elegant about the simplicity of a command-line interface, and as a developer, I spend a lot of time in the terminal. So why not create a portfolio that mimics this experience?

## Technologies Used

- **Next.js**: For the framework and routing
- **TypeScript**: For type safety
- **Tailwind CSS**: For styling
- **React Hooks**: For state management

## Key Features

1. **Command Processing**: I built a command processor that interprets user input and returns appropriate responses.
2. **Command History**: Just like a real terminal, you can navigate through your command history using the up and down arrow keys.
3. **Autocomplete**: Press Tab to autocomplete commands.
4. **Responsive Design**: The terminal works well on both desktop and mobile devices.

## Challenges

The biggest challenge was creating a realistic terminal experience while keeping the interface intuitive for users who might not be familiar with command-line interfaces.

## Conclusion

This project was a fun way to showcase my skills while creating something unique. Feel free to explore the commands and let me know what you think!
      `,
      tags: ["Next.js", "React", "Portfolio", "UI/UX"],
    },
    {
      id: "2",
      title: "The Power of Server Components in Next.js",
      date: "2023-10-22",
      summary: "Exploring the benefits and use cases of React Server Components in Next.js applications.",
      content: `
# The Power of Server Components in Next.js

React Server Components represent a paradigm shift in how we build React applications. With Next.js adopting this technology, it's worth exploring how they can improve our applications.

## What Are Server Components?

Server Components are React components that run only on the server. They can access server-side resources directly, like databases or file systems, and they don't increase the JavaScript bundle sent to the client.

## Benefits

1. **Reduced Bundle Size**: Server Components don't send any JavaScript to the client, reducing the bundle size.
2. **Direct Access to Backend Resources**: No need for API routes for data fetching.
3. **Improved Performance**: Initial page load can be faster since less JavaScript is sent to the client.
4. **Better SEO**: Content is rendered on the server, making it more accessible to search engines.

## Use Cases

- Data-heavy pages that don't require much interactivity
- Pages that need to access backend resources directly
- Components that render large amounts of static content

## Example

\`\`\`tsx
// A simple Server Component
export default async function BlogPosts() {
  // This runs on the server only
  const posts = await database.query('SELECT * FROM posts');
  
  return (
    <div>
      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.summary}</p>
        </article>
      ))}
    </div>
  );
}
\`\`\`

## Conclusion

Server Components are a powerful addition to the React ecosystem, and Next.js makes them easy to use. By understanding when and how to use them, we can build more efficient and performant applications.
      `,
      tags: ["Next.js", "React", "Server Components", "Performance"],
    },
    {
      id: "3",
      title: "Mastering TypeScript: Tips and Tricks",
      date: "2023-09-05",
      summary: "Advanced TypeScript techniques that have improved my code quality and developer experience.",
      content: `
# Mastering TypeScript: Tips and Tricks

After using TypeScript for several years, I've collected some tips and tricks that have significantly improved my development experience.

## Utility Types

TypeScript comes with several utility types that can save you time and make your code more maintainable:

### Partial<T>

Makes all properties of an interface optional:

\`\`\`typescript
interface User {
  name: string;
  age: number;
  email: string;
}

// All properties are optional
const partialUser: Partial<User> = { name: "John" };
\`\`\`

### Pick<T, K>

Creates a new type by picking specific properties from an existing type:

\`\`\`typescript
// Only includes name and email
type ContactInfo = Pick<User, "name" | "email">;
\`\`\`

### Omit<T, K>

Creates a new type by omitting specific properties:

\`\`\`typescript
// Excludes the age property
type UserWithoutAge = Omit<User, "age">;
\`\`\`

## Discriminated Unions

A powerful pattern for handling different types of objects:

\`\`\`typescript
type Success = {
  status: "success";
  data: any;
};

type Error = {
  status: "error";
  error: string;
};

type Response = Success | Error;

function handleResponse(response: Response) {
  if (response.status === "success") {
    // TypeScript knows this is a Success type
    console.log(response.data);
  } else {
    // TypeScript knows this is an Error type
    console.log(response.error);
  }
}
\`\`\`

## Type Guards

Custom functions that help TypeScript narrow down types:

\`\`\`typescript
function isString(value: any): value is string {
  return typeof value === "string";
}

function processValue(value: number | string) {
  if (isString(value)) {
    // TypeScript knows value is a string here
    return value.toUpperCase();
  }
  // TypeScript knows value is a number here
  return value * 2;
}
\`\`\`

## Conclusion

These TypeScript features have helped me write more robust code with fewer bugs. The investment in learning these patterns has paid off in improved code quality and developer experience.
      `,
      tags: ["TypeScript", "JavaScript", "Web Development", "Programming"],
    },
  ]
}

