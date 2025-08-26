import type { Metadata } from "next";
import "./globals.css";



export const metadata:Metadata = {
  title: "NextJS First Steps",
  description: "Descripción para SEO y redes sociales.",
  keywords: ["Next.js", "React", "JEBC-DeV", "tutorial"],
  authors: [
    { name: "JEBC-DeV"}
  ],
  creator: "JEBC-DeV",
  openGraph: {
    title: "Título Open Graph",
    description: "Descripción Open Graph.",

    locale: "es_ES",
    type: "website"
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
