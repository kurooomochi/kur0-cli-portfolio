interface AboutContent {
  name: string
  bio: string
  longBio: string
  experience: {
    position: string
    company: string
    period: string
    description: string
  }[]
  education: {
    degree: string
    institution: string
    period: string
    description: string
  }[]
}

export function getAboutContent(): AboutContent {
  return {
    name: "John Doe",
    bio: "Software Engineer with 5+ years of experience in full-stack development",
    longBio:
      "I'm a passionate software engineer with a focus on creating elegant, efficient, and user-friendly web applications. I enjoy solving complex problems and continuously learning new technologies to improve my craft. When I'm not coding, you can find me hiking, reading sci-fi novels, or experimenting with new tech projects.",
    experience: [
      {
        position: "Senior Software Engineer",
        company: "Tech Innovations Inc.",
        period: "2021 - Present",
        description:
          "Lead development of a cloud-based SaaS platform, managing a team of 5 engineers. Implemented CI/CD pipelines and microservices architecture, resulting in 40% faster deployment cycles.",
      },
      {
        position: "Full Stack Developer",
        company: "Digital Solutions LLC",
        period: "2018 - 2021",
        description:
          "Developed and maintained multiple web applications using React, Node.js, and MongoDB. Collaborated with UX designers to implement responsive, accessible interfaces.",
      },
      {
        position: "Junior Web Developer",
        company: "WebCraft Studios",
        period: "2016 - 2018",
        description:
          "Built and maintained client websites using HTML, CSS, JavaScript, and WordPress. Participated in code reviews and implemented best practices for web performance.",
      },
    ],
    education: [
      {
        degree: "M.S. in Computer Science",
        institution: "Tech University",
        period: "2014 - 2016",
        description:
          "Specialized in software engineering and distributed systems. Thesis on scalable microservices architecture.",
      },
      {
        degree: "B.S. in Computer Science",
        institution: "State University",
        period: "2010 - 2014",
        description:
          "Graduated with honors. Coursework included data structures, algorithms, database systems, and web development.",
      },
    ],
  }
}

