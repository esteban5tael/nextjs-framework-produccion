import { TopMenu } from "@/components";
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
    <main className="bg-gray-750 min-h-screen text-white">
      <TopMenu/>
        {children   }
    </main>
  );
}