"use client";
import NavbarDesktop from "@/components/NavbarDesktop";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import NavbarMobile from "@/components/NavbarMobile";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>Joaquin Bianchi | Portfolio</title>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className=" bg-bg dark:bg-zinc-950">
        <Toaster position="bottom-center" reverseOrder={false} />
        <NavbarDesktop></NavbarDesktop>
        <NavbarMobile></NavbarMobile>
        {children}
      </body>
    </html>
  );
}
// naranja y rosa bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-white via-rose-500 to-orange-400
// naranja bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-white via-amber-500 to-orange-500
