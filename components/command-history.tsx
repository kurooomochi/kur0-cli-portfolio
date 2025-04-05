"use client"
import type { CommandResponse } from "@/lib/types"

interface CommandHistoryProps {
  history: CommandResponse[]
  theme: "dark" | "light"
}

export function CommandHistory({ history, theme }: CommandHistoryProps) {
  const textColor = theme === "dark" ? "text-green-400" : "text-gray-800"
  const systemColor = theme === "dark" ? "text-cyan-400" : "text-blue-600"

  return (
    <div className="space-y-4">
      {history.map((item, index) => (
        <div key={index} className="space-y-1 animate-fadeIn">
          {item.command && (
            <div className="flex">
              <span className={`mr-2 ${textColor}`}>$</span>
              <span className={textColor}>{item.command}</span>
            </div>
          )}
          <div className={`ml-4 ${item.isSystem ? systemColor : textColor}`}>{item.output}</div>
        </div>
      ))}
    </div>
  )
}

