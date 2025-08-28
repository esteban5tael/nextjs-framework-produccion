import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auth - My Next.js Shop",
  description: "Authentication pages for My Next.js Shop",
};

export default function AuthLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <main className="bg-slate-950 min-h-screen text-white p-4">
        {children   }
    </main>
  );
}