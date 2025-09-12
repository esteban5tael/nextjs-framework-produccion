import { TopMenu ,SideMenu, Footer} from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jebc Dev Shop",
  description: "A simple e-commerce application built with Next.js",
};
export default function ShopLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="bg-gray-750 min-h-screen text-white">
            <TopMenu />
            <SideMenu />
            <div className="p-0 sm:px-10">{children}</div>
            <Footer/>
        </main>
    );
}
