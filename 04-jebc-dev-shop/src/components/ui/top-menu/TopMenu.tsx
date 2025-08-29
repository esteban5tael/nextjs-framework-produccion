"use client";

import { useUIStore } from "@/store";
import Link from "next/link";
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";
export const TopMenu = () => {

    const openSideMenu = useUIStore((state) => state.openSideMenu);
    return (
        <nav className="flex px-5 justify-between items-center w-full">
            {/* Logo */}
            <div>
                <Link href={"/"}className={
                        "m-1 p-1 rounded-md transition-all hover:bg-gray-700"
                    }>
                   <span className="font-extrabold">JB</span> | <span>Shop</span>
                </Link>
            </div>

            {/* Center Menu */}
            <div className="hidden sm:block">
                <Link
                    className={
                        "m-1 p-1 rounded-md transition-all hover:bg-gray-700"
                    }
                    href={"/category/men"}
                >
                    Hombres
                </Link>
                <Link
                    className={
                        "m-1 p-1 rounded-md transition-all hover:bg-gray-700"
                    }
                    href={"/category/women"}
                >
                    Mujeres
                </Link>
                <Link
                    className={
                        "m-1 p-1 rounded-md transition-all hover:bg-gray-700"
                    }
                    href={"/category/kid"}
                >
                    Niños
                </Link>
            </div>

            {/* Search, Cart, Menu */}
            <div className="flex items-center gap-2">
                <Link
                    className="hover:bg-gray-700 p-1 rounded-md transition-all"
                    href={"/search"}
                >
                    <IoSearchOutline className={"w-5 h-5"} />
                </Link>

                <Link
                    className="hover:bg-gray-700 p-1 rounded-md transition-all"
                    href={"/cart"}
                >
                    <div className="relative">
                        <span className="absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-blue-700">
                            3
                        </span>
                        <IoCartOutline className={"w-5 h-5"} />
                    </div>
                </Link>
                <button className="m-1 p-1 rounded-md transition-all hover:bg-gray-700"
                onClick={() => openSideMenu()}
                >
                    Menú
                </button>
            </div>
        </nav>
    );
};
