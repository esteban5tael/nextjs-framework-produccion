import { Metadata } from "next";
import { SideBar } from "./components";

export const metadata: Metadata = {
    title: "My Dashboard",
    description:
        "A modern dashboard layout built with Next.js and Tailwind CSS.",
    keywords: ["Next.js", "React", "JavaScript"],
};

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
            <div className="flex h-full">
                {/* Sidebar con ancho fijo */}
                <div className="flex-shrink-0">
                    <SideBar />
                </div>
                {/* Contenido principal con scroll independiente */}
                <div className="flex-1 min-w-0 overflow-hidden">
                    <div className="h-full m-1 p-1 overflow-y-auto">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}