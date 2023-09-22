"use client";
import Nav from "@/components/Nav";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="lg:mx-[250px] mx-[10px] 
       bg-no-repeat , bg-gris"
      >
        <NextUIProvider>
          <Nav></Nav>
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}
// naranja y rosa bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-white via-rose-500 to-orange-400
// naranja bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-white via-amber-500 to-orange-500
