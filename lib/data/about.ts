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
  // education: {
  //   degree: string
  //   institution: string
  //   period: string
  //   description: string
  // }[]
}

export function getAboutContent(): AboutContent {
  return {
    name: "kur0",
    bio: "Visionary Software Architect and Software Engineer dedicated to crafting scalable, resilient technological ecosystems through innovative code and product development.",
    longBio:
      "Born in the digital age, I view software systems as dynamic, evolving organisms. With over six years of experience in software architecture and full-stack development, I focus on designing high-performance systems, leading teams, and enhancing user experiences through innovative platforms. My mission is to build elegant, scalable solutions that drive business success, staying at the forefront of technological advancements.",
    experience: [
      {
        "position": "LATAM Regional Software Architect",
        "company": "Holafly",
        "period": "May 2024 – Present",
        "description": "- Designed scalable, high-performance architectural solutions, ensuring alignment with business goals.\n- Developed system architecture documentation, including diagrams and workflows, for clear stakeholder communication.\n- Collaborated with product management to define roadmaps and prioritize features based on feasibility and impact.\n- Integrated systems for seamless data flow and evaluated emerging technologies to maintain a competitive edge."
      },
      {
        "position": "Lead Software Engineer",
        "company": "Holafly",
        "period": "Jun 2023 – May 2024",
        "description": "- Led two full-stack teams of 5 engineers, driving innovation and continuous improvement.\n- Spearheaded a B2C post-sales platform, enhancing iOS, Android, and web features, boosting user engagement by over 60%.\n- Architected loyalty programs and invoicing systems, improving platform stability through refactoring and modernization."
      },
      {
        "position": "Full Stack Software Engineer",
        "company": "Holafly",
        "period": "Jan 2022 – Jun 2023",
        "description": "- Built a post-sales backend API and frontend dashboard, increasing customer satisfaction by over 80%.\n- Implemented a fully automated CI/CD pipeline for e-commerce sites and integrated platforms to enhance functionality.\n- Developed plugins and integrations to expand service offerings and system capabilities."
      },
      {
        "position": "CRM/ERP Software Engineer",
        "company": "LogixCare SB",
        "period": "Feb 2021 – Jan 2022",
        "description": "- Developed extensions for Microsoft ERP solutions, enhancing Navision and Business Central platforms.\n- Integrated Microsoft Dynamics with WooCommerce, Shopify, and Power Platform for unified operations.\n- Built APIs, reports, and managed servers/databases, modernizing legacy code for improved efficiency."
      },
      {
        "position": "Full Stack Software Engineer",
        "company": "Trisquelab",
        "period": "Apr 2019 – Nov 2020",
        "description": "- Designed responsive, user-centric websites, including e-commerce, LMS, and booking platforms.\n- Developed back-end systems, custom themes, and plugins to meet client needs.\n- Trained clients to manage their websites, ensuring long-term usability."
      },
      {
        "position": "Food Service Worker",
        "company": "McDonald’s",
        "period": "Jan 2017 – Sep 2018",
        "description": "- Delivered excellent customer service in a fast-paced environment, honing teamwork and adaptability skills."
      }
    ]
  }
}

