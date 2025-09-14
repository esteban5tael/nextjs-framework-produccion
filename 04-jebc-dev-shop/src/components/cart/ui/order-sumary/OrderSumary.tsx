"use client";

import { useCartStore } from "@/store";
import { useEffect, useState } from "react";
import { currencyFormat } from "@/utils";
export const OrderSumary = () => {
    const [loaded, setloaded] = useState<boolean>(false);
    const itemsInCart = useCartStore((state) => state.itemsInCart);
    const subTotal = useCartStore((state) => state.subTotal);
    const tax = useCartStore((state) => state.tax);
    const total = useCartStore((state) => state.total);

    useEffect(() => {
        setloaded(true);
    }, []);

    if (!loaded) {
        return (
            <div className="animate-pulse bg-gray-500 rounded-sm h-20 w-full transition-all duration-300 ease-in-out">
                &nbsp;
            </div>
        );
    }

    return (
        <div className="grid grid-cols-2 gap-2">
            <span>No. Productos</span>
            <span className="text-right">
                {itemsInCart}{" "}
                {itemsInCart > 1 ? "productos" : "producto"}
            </span>

            {/*  */}
            <span>Subtotal</span>
            <span className="text-right">{`${currencyFormat(subTotal)}`}</span>

            {/*  */}
            <span>Impuestos (15%) </span>
            <span className="text-right">{` ${currencyFormat(tax)}`}</span>

            {/*  */}
            <span className="text-2xl mt-10">Total: </span>
            <span className="text-right text-2xl mt-10 font-bold">
                {`${currencyFormat(total)}`}
            </span>
        </div>
    );
};
