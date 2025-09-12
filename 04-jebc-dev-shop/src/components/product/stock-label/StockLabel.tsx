"use client";

import { productStockBySlug } from "@/actions";
import { useEffect, useState } from "react";

interface Props {
    slug: string;
}
export const StockLabel = ({ slug }: Props) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [stock, setStock] = useState<number>(0);

    const getStock = async (slug: string) => {
        const stock = await productStockBySlug(slug);
        setStock(stock);
        setLoading(false);
    };

    useEffect(() => {
        getStock(slug);
    }, [slug]);
    return (
        <>
            {loading ? (
                <h1 className="antialiased font-bold text-xl animate-pulse bg-gray-500 rounded-sm transition-all duration-300 ease-in-out">
                    &nbsp;
                </h1>
            ) : (
                <h1 className="antialiased font-bold text-xl">
                    Stock: {stock === 0 ? "Agotado" : stock}{" "}
                </h1>
            )}
        </>
    );
};
