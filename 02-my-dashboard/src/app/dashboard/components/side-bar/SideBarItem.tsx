"use client";

import Link from "next/link";
import { SidebarMenuItem } from "../../interfaces/sidebar-menu-item";
import { usePathname } from "next/navigation";

export const SideBarItem = ({ item }: { item: SidebarMenuItem }) => {
    const pathname = usePathname();
    return (
        <>
            <Link
                href={item.href}
                className={`w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150 rounded-lg mb-2 `+
                    (pathname === item.href ? 'bg-blue-800' : '')

                }
            >
                <div>
                    {item.icon}
                </div>
                <div className="flex flex-col">
                    <span className="text-lg font-bold leading-5 text-white">
                        {item.label}
                    </span>
                    <span className="text-sm text-white/50 hidden md:block">
                        {item.description}
                    </span>
                </div>
            </Link>
        </>
    );
};
