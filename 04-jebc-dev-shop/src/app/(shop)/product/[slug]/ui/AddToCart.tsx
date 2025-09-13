"use client";

import { QuantitySelector, SizeSelector } from "@/components";
import type { CartProduct, Product, Size } from "@/interfaces";
import { useCartStore } from "@/store";
import { useState } from "react";
interface Props {
    product: Product;
}

export const AddToCart = ({ product }: Props) => {
    const addProductToCard = useCartStore(
        (state) => state.addProductToCart
    );

    const [size, setSize] = useState<Size | undefined>();
    const [quatity, setQuatity] = useState<number>(1);
    const [posted, setPosted] = useState<boolean>(false);

    const resetItemData = () => {
        setSize(undefined);
        setQuatity(1);
        setPosted(false);
    }

    const addToCart = () => {
        setPosted(true);
        if (!size) return;
        const cartProduct: CartProduct = {
            id: product.id,
            slug: product.slug,
            title: product.title,
            price: product.price,
            quantity: quatity,
            size: size,
            image: product.images[0],
        };
        addProductToCard(cartProduct);
        resetItemData();
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
