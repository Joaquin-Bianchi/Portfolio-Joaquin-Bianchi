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
        className="lg:mx-[200px] 
       bg-no-repeat , bg-gris"
      >
        <Nav></Nav>
        {children}
      </body>
    </html>
  );
}
// naranja y rosa bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-white via-rose-500 to-orange-400
// naranja bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-white via-amber-500 to-orange-500
