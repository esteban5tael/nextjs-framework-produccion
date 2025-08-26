import { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "My Dashboard",
  description: "{ JEBC-Dev } - Dashboard App",
  keywords: ["Next.js", "React", "JavaScript"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}
