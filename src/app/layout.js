"use client";
import Nav from "@/components/Nav";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { Toaster } from "react-hot-toast";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="fondo">
      <head>
        <title>Joaquin Bianchi | Portfolio</title>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className="lg:mx-[250px] mx-[10px] bg-no-repeat fondo dark">
        <NextUIProvider>
          <Toaster position="bottom-center" reverseOrder={false} />
          <Nav></Nav>
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}
// naranja y rosa bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-white via-rose-500 to-orange-400
// naranja bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-white via-amber-500 to-orange-500
