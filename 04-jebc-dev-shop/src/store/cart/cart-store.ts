import type { CartProduct } from "@/interfaces";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface State {
    cart: CartProduct[];
    getTotalItems: () => number;
    addProductToCart: (product: CartProduct) => void;
    updateProductQuantity: (product: CartProduct, quantity: number) => void;
    removeProductFromCart: (product: CartProduct) => void;
}

export const useCartStore = create<State>()(
    persist(
        (set, get) => ({
            cart: [],
            addProductToCart: (product: CartProduct) => {
                const { cart } = get();
                // Revisar si el producto ya existe en el carrito con la misma talla
                const productInCart = cart.some(
                    (item) =>
                        item.id === product.id && item.size === product.size
                );

                if (!productInCart) {
                    set({
                        cart: [...cart, product],
                    });
                    return;
                }

                // Si el producto ya existe, actualizar la cantidad
                const updatedCartProducts = cart.map((item) => {
                    if (
                        item.id === product.id &&
                        item.size === product.size
                    ) {
                        return {
                            ...item,
                            quantity: item.quantity + product.quantity,
                        };
                    }
                    return item;
                });

                set({ cart: updatedCartProducts });
            },

            getTotalItems: () => {
                const { cart } = get();
                return cart.reduce(
                    (total,item)=> total+item.quantity,0
                );
            },

            updateProductQuantity: (product: CartProduct, quantity: number) => {
                const { cart } = get();
                const updatedCart = cart.map((item) => {
                    if (item.id === product.id && item.size === product.size) {
                        return {
                            ...item,
                            quantity,
                        };
                    }
                    return item;
                }
                );
                set({ cart: updatedCart });
            },

            removeProductFromCart: (product: CartProduct) => {
                const { cart } = get();
                const updatedCart = cart.filter(
                    (item) =>
                        !(item.id === product.id && item.size === product.size)
                );
                set({ cart: updatedCart });
            }
        }),
        { 
            name: "shopping-cart"
        }
    )
);