"use client"

import type React from "react"

import { useState, useEffect, useRef, type KeyboardEvent } from "react"
import { getCommandSuggestions } from "@/lib/command-processor"

interface CommandLineProps {
  onCommand: (command: string) => void
  onClear: () => void
  theme: "dark" | "light"
}

export function CommandLine({ onCommand, onClear, theme }: CommandLineProps) {
  const [input, setInput] = useState("")
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [cursorVisible, setCursorVisible] = useState(true)
  const inputRef = useRef<HTMLInputElement>(null)

  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 500)

    return () => clearInterval(interval)
  }, [])

  // Focus input on mount and when clicked outside
  useEffect(() => {
    inputRef.current?.focus()

    const handleClick = () => {
      inputRef.current?.focus()
    }

    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [])

  // Update suggestions when input changes
  useEffect(() => {
    if (input.trim()) {
      setSuggestions(getCommandSuggestions(input))
    } else {
      setSuggestions([])
    }
  }, [input])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const trimmedInput = input.trim()
    if (!trimmedInput) return

    // Add to command history
    setCommandHistory((prev) => [trimmedInput, ...prev])
    setHistoryIndex(-1)
    setInput("")

    if (trimmedInput.toLowerCase() === "clear") {
      onClear()
    } else {
      onCommand(trimmedInput)
    }
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    // Handle up/down arrows for command history
    if (e.key === "ArrowUp") {
      e.preventDefault()
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1
        setHistoryIndex(newIndex)
        setInput(commandHistory[newIndex])
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        setInput(commandHistory[newIndex])
      } else if (historyIndex === 0) {
        setHistoryIndex(-1)
        setInput("")
      }
    } else if (e.key === "Tab") {
      e.preventDefault()
      if (suggestions.length > 0) {
        setInput(suggestions[0])
      }
    }
  }

  const textColor = theme === "dark" ? "text-green-400" : "text-gray-800"
  const placeholderColor = theme === "dark" ? "placeholder-green-700" : "placeholder-gray-500"
  const cursorColor = theme === "dark" ? "text-green-400" : "text-gray-800"

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="flex items-center">
        <span className={`mr-2 ${textColor}`}>$</span>
        <div className="flex-1 relative">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className={`w-full bg-transparent outline-hidden ${textColor} ${placeholderColor}`}
            placeholder="Type a command..."
            autoComplete="off"
            spellCheck="false"
          />
          {cursorVisible && input.length === 0 && (
            <span className={`absolute left-0 top-0 ${cursorColor} animate-pulse`}>|</span>
          )}
        </div>
      </form>

      {suggestions.length > 0 && (
        <div className="absolute left-0 mt-1 bg-gray-800 rounded-xs p-2 z-10">
          <div className="text-xs text-gray-400 mb-1">Suggestions:</div>
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              className="text-sm cursor-pointer hover:bg-gray-700 px-2 py-1 rounded-xs"
              onClick={() => {
                setInput(suggestion)
                inputRef.current?.focus()
              }}
            >
              {suggestion}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

