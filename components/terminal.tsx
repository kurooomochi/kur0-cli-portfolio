"use client"

import { useEffect, useRef, useState } from "react"
import { CommandLine } from "@/components/command-line"
import { CommandHistory } from "@/components/command-history"
import { processCommand } from "@/lib/command-processor"
import type { CommandResponse } from "@/lib/types"
import { AsciiHeader } from "@/components/ascii-header"

export default function Terminal() {
  const [history, setHistory] = useState<CommandResponse[]>([])
  const [theme, setTheme] = useState<"dark" | "light">("dark")
  const terminalRef = useRef<HTMLDivElement>(null)
  const [isInitializing, setIsInitializing] = useState(true)
  const [initializationStep, setInitializationStep] = useState(0)

  const initializationSteps = [
    { text: "Initializing system...", delay: 500 },
    { text: "Loading portfolio data...", delay: 700 },
    { text: "Establishing connection...", delay: 600 },
    { text: "Access granted. Welcome to my portfolio terminal.", delay: 800 },
  ]

  // Create a function to get the default header and help message
  const getDefaultOutput = () => [
    {
      command: "",
      output: <AsciiHeader />,
      isSystem: true,
    },
    {
      command: "",
      output: "Type 'help' to see available commands.",
      isSystem: true,
    },
  ]

  useEffect(() => {
    if (isInitializing && initializationStep < initializationSteps.length) {
      const timer = setTimeout(() => {
        setHistory((prev) => [
          ...prev,
          {
            command: "",
            output: initializationSteps[initializationStep].text,
            isSystem: true,
          },
        ])
        setInitializationStep((prev) => prev + 1)
      }, initializationSteps[initializationStep].delay)

      return () => clearTimeout(timer)
    } else if (isInitializing && initializationStep === initializationSteps.length) {
      const timer = setTimeout(() => {
        setHistory((prev) => [...prev, ...getDefaultOutput()])
        setIsInitializing(false)
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [isInitializing, initializationStep])

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  const handleCommand = (command: string) => {
    const response = processCommand(command, theme, setTheme)
    setHistory((prev) => [...prev, response])
  }

  const handleClearCommand = () => {
    // Instead of clearing everything, reset to just the header and help message
    setHistory(getDefaultOutput())
  }

  const bgColor = theme === "dark" ? "bg-black" : "bg-gray-100"
  const textColor = theme === "dark" ? "text-green-400" : "text-gray-800"
  const borderColor = theme === "dark" ? "border-green-500" : "border-gray-400"

  return (
    <div
      className={`w-full max-w-4xl h-[70vh] ${bgColor} ${textColor} border ${borderColor} rounded-md overflow-hidden flex flex-col shadow-lg font-mono`}
    >
      <div className="flex items-center px-4 py-2 border-b border-gray-700 bg-gray-900">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex-1 text-center text-sm text-gray-400">portfolio.terminal</div>
      </div>

      <div ref={terminalRef} className="flex-1 overflow-y-auto p-4 space-y-2">
        <CommandHistory history={history} theme={theme} />
      </div>

      {!isInitializing && (
        <div className="p-4 border-t border-gray-700">
          <CommandLine onCommand={handleCommand} onClear={handleClearCommand} theme={theme} />
        </div>
      )}
    </div>
  )
}

