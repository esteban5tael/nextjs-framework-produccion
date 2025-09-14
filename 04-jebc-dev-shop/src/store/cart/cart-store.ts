import type { CartProduct } from "@/interfaces";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface State {
    cart: CartProduct[];
    subTotal: number;
    tax: number;
    total: number;
    itemsInCart: number;
    addProductToCart: (product: CartProduct) => void;
    updateProductQuantity: (product: CartProduct, quantity: number) => void;
    removeProductFromCart: (product: CartProduct) => void;
}

function calculateSummary(cart: CartProduct[]) {
    const subTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const tax = subTotal * 0.15;
    const total = subTotal + tax;
    const itemsInCart = cart.reduce((total, item) => total + item.quantity, 0);
    return { subTotal, tax, total, itemsInCart };
}

export const useCartStore = create<State>()(
    persist(
        (set, get) => ({
            cart: [],
            subTotal: 0,
            tax: 0,
            total: 0,
            itemsInCart: 0,
            addProductToCart: (product: CartProduct) => {
                const { cart } = get();
                // ...lógica para agregar producto...
                const newCart = [...cart, product]; // simplificado
                const summary = calculateSummary(newCart);
                set({ cart: newCart, ...summary });
            },
            updateProductQuantity: (product: CartProduct, quantity: number) => {
                const { cart } = get();
                const updatedCart = cart.map((item) =>
                    item.id === product.id && item.size === product.size
                        ? { ...item, quantity }
                        : item
                );
                const summary = calculateSummary(updatedCart);
                set({ cart: updatedCart, ...summary });
            },
            removeProductFromCart: (product: CartProduct) => {
                const { cart } = get();
                const updatedCart = cart.filter(
                    (item) => !(item.id === product.id && item.size === product.size)
                );
                const summary = calculateSummary(updatedCart);
                set({ cart: updatedCart, ...summary });
            },
        }),
        { name: "shopping-cart" }
    )
);