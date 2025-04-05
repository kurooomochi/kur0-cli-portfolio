import type { Contact } from "@/lib/types"

export function getContacts(): Contact[] {
  return [
    {
      platform: "Email",
      link: "mailto:santiagozapatabohorquez@hotmail.com",
      username: "santiagozapatabohorquez@hotmail.com",
    },
    {
      platform: "GitHub",
      link: "https://github.com/kur0byte",
      username: "kur0byte",
    },
    {
      platform: "LinkedIn",
      link: "https://www.linkedin.com/in/zapata-santiago",
      username: "zapata-santiago",
    },
    {
      platform: "X",
      link: "https://x.com/_kur000",
      username: "@_kur000",
    },
  ]
}

