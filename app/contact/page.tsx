import { getContacts } from "@/lib/data/contacts"

export const metadata = {
  title: "Contact | Terminal Portfolio",
  description: "Get in touch with me",
}

const asciiArt = String.raw`
          ██  ██████  ██████  ███    ██ ████████  █████   ██████ ████████ 
         ██  ██      ██    ██ ████   ██    ██    ██   ██ ██         ██    
█████   ██   ██      ██    ██ ██ ██  ██    ██    ███████ ██         ██    
       ██    ██      ██    ██ ██  ██ ██    ██    ██   ██ ██         ██    
      ██      ██████  ██████  ██   ████    ██    ██   ██  ██████    ██    
`;

export default function ContactPage() {
  const contacts = getContacts()

  return (
    <main className="min-h-screen bg-gray-900 text-gray-200 font-mono">
      <div className="max-w-4xl mx-auto p-4 md:p-8">
      <h1 className="text-cyan-400 lg:text-[8px] text-[6px] leading-tight mb-8 font-extrabold whitespace-pre-wrap">{asciiArt}</h1>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="border border-gray-700 rounded-md p-6">
            <h2 className="text-xl font-bold text-green-400 mb-4">Get In Touch</h2>

            <p className="mb-6">
              I'm always open to new opportunities and collaborations. Feel free to reach out through any of the
              channels below.
            </p>

            <div className="space-y-4">
              {contacts.map((contact, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="font-bold text-gray-300">{contact.platform}:</span>
                  <a
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300 hover:underline"
                  >
                    {contact.username}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-gray-700 rounded-md p-6">
            <h2 className="text-xl font-bold text-green-400 mb-4">Contact Form</h2>

            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-hidden focus:ring-1 focus:ring-green-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-hidden focus:ring-1 focus:ring-green-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-hidden focus:ring-1 focus:ring-green-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="px-4 py-2 bg-green-500/20 text-green-300 border border-green-500/30 rounded-md hover:bg-green-500/30 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

