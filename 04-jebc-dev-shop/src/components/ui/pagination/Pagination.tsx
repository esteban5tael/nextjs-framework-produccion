"use client";

import Link from "next/link";
import { redirect, usePathname, useSearchParams } from "next/navigation";
import {
    IoChevronBackOutline,
    IoChevronForwardOutline,
} from "react-icons/io5";
import { generatePaginationNumbers } from "@/utils";
import clsx from "clsx";

interface Props {
    totalPages: number;
}

export const Pagination = ({ totalPages }: Props) => {
    const pathName = usePathname();
    const searchParams = useSearchParams();
    const currentPage = Number(
        searchParams.get("page") ? searchParams.get("page") : 1

    ) ?? 1;

    if (currentPage < 1 || currentPage > totalPages) return redirect(pathName);

    const allPages = generatePaginationNumbers(
        currentPage,
        totalPages
    );


    const createPageUrl = (pageNumber: number | string) => {
        try {
            const params = new URLSearchParams(searchParams);

            if (pageNumber === "...") {
                return `${pathName}?${params.toString()}`;
            }

            if (Number(pageNumber) <= 0) {
                return `${pathName}`;
            }

            if (Number(pageNumber) > totalPages) {
                return `${pathName}?${params.toString()}`;
            }

            params.set("page", String(pageNumber));
            return `${pathName}?${params.toString()}`;
        } catch (error) {
            console.log("Error en la paginación", error);
            throw new Error("Error en la paginación");
        }
    };

    return (
        <>
            <div className="flex justify-center text-center items-center mt-10 mb-32 rounded-md border-2 border-gray-300 p-2 shadow-black/10 shadow-2xl">
                <nav aria-label="Page navigation example">
                    <ul className="flex list-style-none">
                        <li className="page-item">
                            <Link
                                className="page-link relative flex items-center justify-center w-12 h-12 rounded border-0 bg-transparent outline-none transition-all duration-300 text-gray-600 hover:text-gray-600 hover:bg-gray-200 focus:shadow-none"
                                href={createPageUrl(currentPage - 1)}
                                aria-disabled="true"
                            >
                                <IoChevronBackOutline
                                    size={30}
                                    className="cursor-pointer"
                                />
                            </Link>
                        </li>
                        {allPages.map((page, index) => (
                            <li key={page + '-' + index} className="page-item">
                                <Link
                                    className={
                                        clsx(
                                            "page-link relative flex items-center justify-center w-12 h-12 rounded border-0 bg-transparent outline-none transition-all duration-300 text-gray-600 hover:text-gray-600 hover:bg-gray-200 focus:shadow-none",
                                            {
                                                "bg-blue-800 shadow-md text-white font-bold hover:bg-blue-400 hover:text-white": Number(page) === currentPage,
                                            }
                                        )
                                    }
                                    href={createPageUrl(page)}
                                >
                                    {page}
                                </Link>
                            </li>
                        ))}

                        <li className="page-item">
                            <Link
                                className="page-link relative flex items-center justify-center w-12 h-12 rounded border-0 bg-transparent outline-none transition-all duration-300 text-gray-600 hover:text-gray-600 hover:bg-gray-200 focus:shadow-none"
                                href={createPageUrl(currentPage + 1)}
                            >
                                <IoChevronForwardOutline
                                    size={30}
                                    className="cursor-pointer"
                                />
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
};
