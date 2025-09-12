import { getPaginatedProductsWithImages } from "@/actions";
import { CheckoutItem, Title } from "@/components";

import Link from "next/link";
const { products } = await getPaginatedProductsWithImages({
    page: 1,
    take: 3,
});
export default function CheckoutPage() {
    
    return (
        <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
            <div className="flex flex-col w-[1000px]">
                <Title title="Verificar Orden" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    {/* Carrito */}
                    <div className="flex flex-col mt-5">
                        <span className="text-xl">
                            Ajustar Elementos
                        </span>
                        <Link
                            className="underline mb-5"
                            href={"/cart"}
                        >
                            Editar Items del Carrito
                        </Link>

                        {/* Items */}
                        {products.map((product) => (
                            <CheckoutItem
                                key={product.slug}
                                product={product}
                            />
                        ))}
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
                            Dirección de Entrega
                        </h2>
                        <div className="mb-10">
                            <p className="text-xl font-bold">
                                Nombre
                            </p>
                            <p className="text-xl font-bold">
                                Direccion{" "}
                            </p>
                            <p>Ciudad</p>
                            <p>Estado</p>
                            <p>Código Postal</p>
                            <p>País</p>
                            <p>Teléfono</p>
                        </div>

                        {/* divider */}
                        <div className="w-full h-0.5 rounded bg-gray-400 mb-10" />
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
                            <span className="text-right">$ 100</span>

                            {/*  */}
                            <span>Impuestos (15%) </span>
                            <span className="text-right">$ 100</span>

                            {/*  */}
                            <span className="text-2xl mt-10">
                                Total:{" "}
                            </span>
                            <span className="text-right text-2xl mt-10 font-bold">
                                $ 100
                            </span>
                        </div>
                        {/*  */}
                        <div className="mt-10 mb-5 w-full">
                            {/* Disclaimer */}
                            <p className="text-sm mb-5">
                                <span className="text-xs">
                                    Al dar click en &quot;Colocar
                                    Orden&quot;, estás aceptando los
                                    términos y condiciones de uso.
                                </span>
                            </p>
                            <Link
                                className="flex btn-primary w-full justify-center   "
                                href={"/orders/123"}
                            >
                                {" "}
                                Colocar Orden
                            </Link>
                        </div>
                        {/*  */}
                    </div>
                </div>
            </div>
        </div>
    );
}
