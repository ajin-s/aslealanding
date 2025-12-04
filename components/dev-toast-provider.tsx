"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"
import { X } from "lucide-react"

interface ToastContextType {
  showDevToast: () => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export function useDevToast() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error("useDevToast must be used within a DevToastProvider")
  }
  return context
}

export function DevToastProvider({ children }: { children: ReactNode }) {
  const [isVisible, setIsVisible] = useState(false)

  const showDevToast = useCallback(() => {
    setIsVisible(true)
    setTimeout(() => setIsVisible(false), 3000)
  }, [])

  return (
    <ToastContext.Provider value={{ showDevToast }}>
      {children}
      {isVisible && (
        <div className="fixed bottom-4 right-4 z-50 animate-in slide-in-from-bottom-4 fade-in duration-300">
          <div className="bg-[#0f172a] text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-4 max-w-md">
            <div className="flex-1">
              <p className="font-medium">Sorry, we are only in development state</p>
              <p className="text-sm text-slate-400 mt-1">This feature will be available soon.</p>
            </div>
            <button onClick={() => setIsVisible(false)} className="text-slate-400 hover:text-white transition-colors">
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </ToastContext.Provider>
  )
}
