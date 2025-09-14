"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { useCartStore } from "@/store";
import { QuantitySelector } from "@/components";
import Link from "next/link";

export const ProductsInCart = () => {
    const [loaded, setLoaded] = useState<boolean>(false);

    const productsInCart = useCartStore((state) => state.cart);
    const updateProductQuantity = useCartStore((state) => state.updateProductQuantity);
    const removeProductFromCart = useCartStore((state) => state.removeProductFromCart);

    useEffect(() => {
        setLoaded(true);
    }, []);

    if (!loaded) return <div>Loading...</div>;

    return (
        <>
            {productsInCart.map((product) => (
                <div
                    key={`${product.slug}-${product.size}`}
                    className="flex mb-2"
                >
                    <Image
                        className="mr-5 rounded"
                        src={`/products/${product.image}`}
                        alt={product.title}
                        width={100}
                        height={100}
                        style={{
                            width: "100px",
                            height: "100px",
                            objectFit: "cover",
                        }}
                    />
                    <div>
                        <Link
                            className="font-bold text-sm hover:underline cursor-pointer"
                            href={`/product/${product.slug}`}
                        >
                            {product.size} - {product.title}
                        </Link>
                        <p>$ {product.price}</p>
                        <QuantitySelector
                            quantity={product.quantity}
                            onQuantityChanged={(quantity) =>
                                updateProductQuantity(product, quantity)
                            }
                        />

                        <button className="underline mt-3"
                        
                            onClick={() => removeProductFromCart(product)}
                        >
                            Remover
                        </button>
                    </div>
                </div>
            ))}
        </>
    );
};
