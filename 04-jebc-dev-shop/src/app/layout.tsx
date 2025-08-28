import {Metadata} from "next";
import { inter } from "@/config";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Next.js Shop",
  description: "A simple e-commerce application built with Next.js",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className+' dark'}>
        {children}
      </body>
    </html>
  );
}
