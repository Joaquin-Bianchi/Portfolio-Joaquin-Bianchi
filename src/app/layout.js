import "./globals.css";

export const metadata = {
  title: "Joaquin Bianchi",
  description: "This is a Joaquin Bianchi Personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="container mx-auto bg-stone-700">{children}</body>
    </html>
  );
}
