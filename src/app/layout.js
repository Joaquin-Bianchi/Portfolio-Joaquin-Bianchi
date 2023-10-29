"use client";
import Nav from "@/components/Nav";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <head>
        <title>Joaquin Bianchi | Portfolio</title>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className="lg:mx-[20px] mx-[10px] bg-bg  dark:bg-[#0f0e17 dark:bg-zinc-950 ">
        <Toaster position="bottom-center" reverseOrder={false} />
        <Nav></Nav>
        {children}
      </body>
    </html>
  );
}
// naranja y rosa bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-white via-rose-500 to-orange-400
// naranja bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-white via-amber-500 to-orange-500
