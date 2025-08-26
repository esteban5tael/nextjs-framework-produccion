import Link from "next/link";
import { FaRegClock } from "react-icons/fa";

import type { SidebarMenuItem } from "@/app/dashboard/interfaces";
import { SideBarItem } from "../";

const menuItems: SidebarMenuItem[] = [
    {
        label: "Counter",
        description: "Simple counter page",
        icon: <FaRegClock className="w-6 h-6 text-white" />,
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
                    <a
                        href="#"
                        className="inline-flex space-x-2 items-center"
                    >
                        <span>
                            {/* <Image className="rounded-full w-8 h-8" src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80" alt=""/> */}
                        </span>
                        <span className="text-sm md:text-base font-bold">
                            JEBC-DeV
                        </span>
                    </a>
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
