import Nav from "@/components/Nav";
import "./globals.css";

export const metadata = {
  title: "Joaquin Bianchi",
  description: "This is a Joaquin Bianchi Personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="container  min-h-screen mx-auto flex flex-col items-center 
       bg-no-repeat bg-gradient-to-r from-white-100 to-white ,"
      >
        <Nav></Nav>
        {children}
      </body>
    </html>
  );
}
// naranja y rosa bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-white via-rose-500 to-orange-400
// naranja bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-white via-amber-500 to-orange-500
