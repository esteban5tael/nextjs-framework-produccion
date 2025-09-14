
import { ProductsInCart, Title } from "@/components";


import Link from "next/link";

export default function CartPage() {

    // redirect("/empty");
    return (
        <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
            <div className="flex flex-col w-[1000px]">
                <Title title="Carrito de Compras" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    {/* Carrito */}
                    <div className="flex flex-col mt-5">
                        <span className="text-xl">
                            Agregar Más Items
                        </span>
                        <Link className="underline mb-5" href={"/"}>
                            Continúa Comprando
                        </Link>

                        {/* Items */}
                        <ProductsInCart />
                        
                    </div>

                    {/* Checkout */}
                    <div
                        className="bg-gray-800 rounded-xl shadow-2xl p-7"
                        style={{
                            boxShadow:
                                "0px 10px 20px rgba(0, 0, 0, 0.5)",
                        }}
                    >
                        <h2 className="text-2xl mb-2">
                            Resumen de la Orden
                        </h2>
                        <div className="grid grid-cols-2 gap-2">
                            <span>No. Productos</span>
                            <span className="text-right">
                                4 Artículos
                            </span>
                            
                            {/*  */}
                            <span>Subtotal</span>
                            <span className="text-right">
                                $ 100
                            </span>
                            

                            {/*  */}
                            <span>Impuestos (15%) </span>
                            <span className="text-right">
                                $ 100
                            </span>
                            
                            {/*  */}
                            <span className="text-2xl mt-10">Total: </span>
                            <span className="text-right text-2xl mt-10 font-bold">
                                $ 100
                            </span>
                        </div>
                        {/*  */}
                        <div className="mt-10 mb-5 w-full">
                            <Link
                            className="flex btn-primary w-full justify-center   "
                            href={"/checkout/address"}
                            > CheckOut</Link>
                        </div>
                        {/*  */}
                    </div>
                </div>
            </div>
        </div>
    );
}
