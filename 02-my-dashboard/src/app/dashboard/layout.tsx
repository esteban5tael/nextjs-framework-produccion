import { Metadata } from "next";
import { SideBar } from "./components";


export const metadata: Metadata = {
  title: "My Dashboard",
  description: "A modern dashboard layout built with Next.js and Tailwind CSS.",
  keywords: ["Next.js", "React", "JavaScript"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<>

<div className="overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
    <div className="flex">
        <SideBar />
        
      
    <div className="m-1 p-1">
      {children}
    </div>
    </div>
</div>
</>
  );
}