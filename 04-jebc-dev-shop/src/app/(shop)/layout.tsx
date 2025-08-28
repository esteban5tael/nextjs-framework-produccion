import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Next.js Shop",
  description: "My Next.js Shop",
};
export default function ShopLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <main className="bg-blue-950 min-h-screen text-white p-4">
        {children   }
    </main>
  );
}