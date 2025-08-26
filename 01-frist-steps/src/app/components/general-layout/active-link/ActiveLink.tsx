"use client";
import { usePathname } from "next/navigation";
import { NavBarItem } from "@/app/interfaces/navbar-item";
import Link from "next/link";

export const ActiveLink = (item: NavBarItem) => {
    const pathname = usePathname();
    
    return (
        <Link href={item.href} className={`ml-2 flex items-center gap-2 `
            + (pathname === item.href
                ? "text-slate-600 underline"
                : "text-white hover:text-slate-500 transition-colors"
            )

        } prefetch={true}>
            {item.icon}
            {item.label}
        </Link>
    );
};
