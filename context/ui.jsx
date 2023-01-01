"use client"

import { ThemeProvider } from "next-themes"

export default function UiContextProvider({ children }) {
  return (
    <ThemeProvider attribute="class" enableSystem={false}>
      {children}
    </ThemeProvider>
  )
}
