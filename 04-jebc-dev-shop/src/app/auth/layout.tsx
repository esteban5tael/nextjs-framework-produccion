import { auth } from "@/auth.config";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Auth - My Next.js Shop",
  description: "Authentication pages for My Next.js Shop",
};

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const session=await auth();
  
  if (session?.user) redirect("/");

  
  return (


    <main className="bg-slate-800 h-[800px] text-gray-300 flex justify-center items-center">
      <div className="w-full max-w-md bg-gray-900 p-6 rounded-lg shadow-lg">
        {children}
      </div>
    </main>
  );
}