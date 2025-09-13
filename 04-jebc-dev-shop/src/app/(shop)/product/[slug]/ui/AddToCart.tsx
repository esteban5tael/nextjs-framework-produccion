"use client";

import { QuantitySelector, SizeSelector } from "@/components";
import { Product, Size } from "@/interfaces";
import { useState } from "react";
interface Props {
    product: Product;
}

export const AddToCart = ({ product }: Props) => {
    const [size, setSize] = useState<Size | undefined>();
    const [quatity, setQuatity] = useState<number>(1);
    const [posted, setPosted] = useState<boolean>(false);
    const addToCart = () => {
        setPosted(true);
        if (!size) return;
    };

    return (
        <>
            {posted && !size && (
                <span className="text-red-500 font-bold text-sm mb-2 animate-pulse">
                    Debes seleccionar una talla*
                </span>
            )}
            {/* Selector de Tallas */}
            <SizeSelector
                selectedSize={size}
                availableSizes={product.sizes}
                onSizeChanged={(size) => setSize(size)}
            />

            {/* Selector de Cantidad */}
            <QuantitySelector
                quantity={quatity}
                onQuantityChanged={setQuatity}
            />

            {/* Agregar al carrito */}
            <button className="btn-primary my-5" onClick={addToCart}>
                Agregar al Carrito
            </button>
        </>
    );
};
