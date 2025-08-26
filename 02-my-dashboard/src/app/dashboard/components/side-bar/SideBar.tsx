import Link from "next/link";
import { FaRegClock,FaAlignLeft  } from "react-icons/fa";
import Image from "next/image";

import type { SidebarMenuItem } from "@/app/dashboard/interfaces";
import { SideBarItem } from "../";

const menuItems: SidebarMenuItem[] = [
    {
        label: "Dashboard",
        description: "Overview of your activity",
        icon: <FaAlignLeft/>,
        href: "/dashboard",
    },
    {
        label: "Counter",
        description: "Simple counter page",
        icon: <FaRegClock/>,
        href: "/dashboard/counter",
    },
];
export const SideBar = () => {
    return (
        <>
            <div
                id="menu"
                className="bg-gray-900 min-h-screen z-10 text-slate-300 w-60 left-0 h-screen overflow-y-scroll"
            >
                <div id="logo" className="my-4 px-6">
                    <Link
                        href={"/dashboard"}
                        className="inline-block"
                    >
                        <h1 className="text-lg md:text-2xl font-bold text-white">
                            <span className="text-blue-500">My</span>{" "}
                            Dashboard
                        </h1>
                    </Link>
                </div>
                <div id="profile" className="px-6 py-10">
                    <p className="text-slate-500">Welcome back,</p>
                    <Link
                        href="/dashboard"
                        className="inline-flex space-x-2 items-center"
                    >
                        <span>
                            <Image src="/images/profile-avatar.jpg" alt="Avatar" width={80} 
                                height={80} className="w-10 h-10 md:w-16 md:h-16 rounded-full object-cover"
                            />
                        </span>
                        <span className="text-sm md:text-base font-bold">
                            JEBC-DeV
                        </span>
                    </Link>
                </div>
                <div id="nav" className="w-full px-6">
                    {menuItems.map((item) => (
                        <SideBarItem
                            key={item.href}
                            item={item}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};
