import { CheckoutItem, Title } from "@/components";
import { initialData } from "@/seed/seed";
import clsx from "clsx";
import Link from "next/link";
import { IoCardOutline } from "react-icons/io5";

interface Props {
    params: { id: string };
}

const productsInCart = [
    initialData.products[0],
    initialData.products[1],
    initialData.products[2],
    initialData.products[3],
];
export default function OrderByIdPage({ params }: Props) {
    const { id } = params;
    // TODO: Verificar que la orden exista
    return (
        <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
            <div className="flex flex-col w-[1000px]">
                <Title
                    title={`
                    Orden #: ${id}
                  `}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    {/* Carrito */}
                    <div className="flex flex-col mt-5">
                        <div
                            className={clsx(
                                "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                                {
                                    "bg-gray-500": false,
                                    "bg-slate-500": true,
                                }
                            )}
                        >
                            <IoCardOutline className="text-2xl mr-2" />
                            {/* <span className="mx-2">Pendiente de Pago</span> */}
                            <span className="mx-2">Orden Pagada</span>
                        </div>

                        {/* Items */}
                        {productsInCart.map((product) => (
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
                        <div className="grid grid-cols-2 gap-2 mb-10">
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
             
                        <div
                            className={clsx(
                                "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                                {
                                    "bg-gray-500": false,
                                    "bg-slate-500": true,
                                }
                            )}
                        >
                            <IoCardOutline className="text-2xl mr-2" />
                            {/* <span className="mx-2">Pendiente de Pago</span> */}
                            <span className="mx-2">Orden Pagada</span>
                        </div>

                      
                        {/*  */}
                    </div>
                </div>
            </div>
        </div>
    );
}
