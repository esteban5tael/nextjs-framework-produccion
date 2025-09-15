import { auth } from "@/auth.config";
import { Metadata } from "next";
import Link from "next/link";
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
    const session = await auth();

    // Si el usuario ya está autenticado, redirigir a la página principal
    if (session?.user) redirect("/");

    return (
        <>
            <nav className="bg-slate-900 flex px-5 py-2 justify-between items-center w-full">
                {/* Logo */}
                <div>
                    <Link
                        href={"/"}
                        className={
                            "m-1 p-1 rounded-md transition-all hover:bg-gray-700"
                        }
                    >
                        <span className="font-extrabold">JB</span> |{" "}
                        <span>Shop</span>
                    </Link>
                </div>
            </nav>
            <main className="bg-slate-800 h-[800px] text-gray-300 flex justify-center items-center">
                <div className="w-full max-w-md bg-gray-900 p-6 rounded-lg shadow-lg">
                    {children}
                </div>
            </main>
        </>
    );
}
