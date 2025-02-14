"use client";
import NavbarDesktop from "@/components/NavbarDesktop";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import NavbarMobile from "@/components/NavbarMobile";
import { ThemeColorProvider as ThemeProvider } from "@/providers/ThemeProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>Joaquin Bianchi | Portfolio</title>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className="">
        <div className="dark:hidden fixed inset-0 -z-50 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
        <div className="hidden dark:flex  dark:fixed top-0 -z-50  h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <ThemeProvider install next-themes>
          <Toaster position="bottom-center" reverseOrder={false} />
          <NavbarDesktop></NavbarDesktop>
          <NavbarMobile></NavbarMobile>

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
// naranja y rosa bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-white via-rose-500 to-orange-400
// naranja bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-white via-amber-500 to-orange-500
