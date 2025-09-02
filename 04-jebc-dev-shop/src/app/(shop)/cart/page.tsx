import { CartItem, Title } from "@/components";
import { initialData } from "@/seed/seed";
import Link from "next/link";
const productsInCart=[
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
  initialData.products[3],
]
export default function CartPage() {
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
                    </div>

                    {/* Items */}
                    {
                      productsInCart.map(product=>(
                        <CartItem key={product.slug} product={product}/>
                      ))
                    }

                    {/* Checkout */}
                </div>
            </div>
        </div>
    );
}
