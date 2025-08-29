"use client";
import { useUIStore } from "@/store";
import clsx from "clsx";
import Link from "next/link";
import {
    IoCloseOutline,
    IoLogInOutline,
    IoLogOutOutline,
    IoPeopleOutline,
    IoPersonOutline,
    IoSearchOutline,
    IoShirtOutline,
    IoTicketOutline,
} from "react-icons/io5";
const optionMenuItemClasses: string =
    "flex items-center  p-2 rounded transition-all hover:text-blue-400 hover:bg-gray-800 mb-2";
export const SideMenu = () => {
    const isSideMenuOpen = useUIStore(
        (state) => state.isSideMenuOpen
    );
    
    const closeSideMenu = useUIStore((state) => state.closeSideMenu);
    return (
        <div>
            {/* Background Black */}
            {isSideMenuOpen && (
                <div className="fixed top-0 left-0 w-screen h-screen bg-black opacity-50 z-10"></div>
            )}

            {isSideMenuOpen && (
                <div className="fade-in fixed top-0 left-0 w-screen h-screen backdrop-filter backdrop-blur-sm z-10"
                onClick={() => closeSideMenu()}
                ></div>
            )}
            {/* Background Blur */}

            {/* Menu */}
            <nav
                //todo: efecto slide
                className={
                    clsx("fixed p-5 right-0 top-0 w-[300] h-screen bg-gradient-to-b from-blue-900/80 via-blue-900/60 to-gray-900/90 backdrop-filter backdrop-blur-sm shadow-2xl transform transition-all duration-300 ease-in-out z-20",
                        {
                            "translate-x-full": !isSideMenuOpen,
                            "translate-x-0": isSideMenuOpen,
                        }
                    )
                }
            >
                <IoCloseOutline
                    className="absolute top-5 right-5 text-white hover:text-blue-300 cursor-pointer"
                    size={50}
                    onClick={() => closeSideMenu()}
                />

                <div className="relative mt-14">
                    <IoSearchOutline
                        className="absolute top-2 left-2 text-gray-200"
                        size={20}
                    />
                    <input
                        className="w-full p-2 pl-8 rounded bg-gray-800 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="text"
                        placeholder="Buscar..."
                    />
                </div>

                {/* Opciones del menu */}
                <div className="mt-10"></div>

                <Link className={`${optionMenuItemClasses}`} href="/">
                    <IoPersonOutline size={30} />
                    <span className="ml-3 text-xl">Perfíl</span>
                </Link>

                <Link className={`${optionMenuItemClasses}`} href="/">
                    <IoTicketOutline size={30} />
                    <span className="ml-3 text-xl">Ordenes</span>
                </Link>

                <Link className={`${optionMenuItemClasses}`} href="/">
                    <IoLogInOutline size={30} />
                    <span className="ml-3 text-xl">Ingresar</span>
                </Link>

                <Link className={`${optionMenuItemClasses}`} href="/">
                    <IoLogOutOutline size={30} />
                    <span className="ml-3 text-xl">Salir</span>
                </Link>

                <div className="w-full h-px my-10 bg-gray-950"></div>

                <Link className={`${optionMenuItemClasses}`} href="/">
                    <IoShirtOutline size={30} />
                    <span className="ml-3 text-xl">Products</span>
                </Link>

                <Link className={`${optionMenuItemClasses}`} href="/">
                    <IoTicketOutline size={30} />
                    <span className="ml-3 text-xl">Ordenes</span>
                </Link>

                <Link className={`${optionMenuItemClasses}`} href="/">
                    <IoPeopleOutline size={30} />
                    <span className="ml-3 text-xl">Usuarios</span>
                </Link>
            </nav>
        </div>
    );
};
