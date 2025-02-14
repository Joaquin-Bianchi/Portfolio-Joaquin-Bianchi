"use client";

import { ThemeProvider } from "next-themes";

export function ThemeColorProvider({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      {children}
    </ThemeProvider>
  );
}
