"use client";

import { IoCloseOutline, IoSearchOutline } from "react-icons/io5";

export const SideMenu = () => {
    return (
        <div>
            {/* Background Black */}
            <div className="fixed top-0 left-0 w-screen h-screen bg-black opacity-50 z-10"></div>

            {/* Background Blur */}
            <div className="fade-in fixed top-0 left-0 w-screen h-screen backdrop-filter backdrop-blur-sm z-10"></div>

            {/* Menu */}
            <nav
                //todo: efecto slide
                className="fixed p-5 right-0 top-0 w-[500px] h-screen bg-gradient-to-b from-blue-900/80 via-blue-900/60 to-gray-900/90 backdrop-filter backdrop-blur-sm shadow-2xl transform transition-all duration-300 ease-in-out z-20"
            >
                <IoCloseOutline
                    className="absolute top-5 right-5 text-white hover:text-blue-300 cursor-pointer"
                    size={50}
                    onClick={() => console.log("Cerrar menu")}
                />

                <div className="relative mt-14">
                    <IoSearchOutline
                    className="absolute top-2 left-2 text-gray-200"
                    size={20}/>
                    <input
                    className="w-full p-2 pl-8 rounded bg-gray-800 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text" 
                    placeholder="Buscar..."
                    />
                </div>
            </nav>
        </div>
    );
};
